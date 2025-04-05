import PostListContainer from "../../../_component/PostListContainer";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// 포스트 목록을 가져오는 공통 함수
async function getPosts() {
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
      };
    })
  );

  return posts;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  // 중복 제거 후 경로 생성
  const uniqueCategories = [...new Set(posts.map((post) => post.category))];

  const filteredCategories = uniqueCategories.filter(
    (category) => category !== undefined
  );

  const paths = filteredCategories.map((category) => ({
    category,
  }));

  return paths;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = await getPosts();
  const filteredPosts = posts.filter((post) => post.category === category);

  return (
    <main className="flex-1 mb-24 block scroll-mt-0 break-all leading-5 tracking-wider text-neutral-800 lg:mb-24">
      <PostListContainer category={category} posts={filteredPosts} />
    </main>
  );
}
