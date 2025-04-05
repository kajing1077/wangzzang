import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "app/posts");
  const folderNames = fs.readdirSync(postsDirectory).filter((folderName) => {
    const folderPath = path.join(postsDirectory, folderName);
    return fs.statSync(folderPath).isDirectory(); // 폴더만 필터링
  });

  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const filePath = path.join(postsDirectory, folderName, "index.mdx");
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { frontmatter } = await compileMDX<{
        id: string;
        title: string;
        createdAt: string;
        category: string;
      }>({
        source: fileContent,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        id: frontmatter.id,
        title: frontmatter.title,
        createdAt: frontmatter.createdAt,
        category: frontmatter.category,
        slug: folderName,
        content: fileContent,
      };
    })
  );

  posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return posts;
}
