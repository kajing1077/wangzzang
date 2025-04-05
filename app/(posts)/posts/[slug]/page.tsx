import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo5.png";
import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/app/_component/CustomImage";
import SearchInput from "@/app/_component/SearchInput";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "app/posts");
  const folderNames = fs.readdirSync(postsDirectory).filter((folderName) => {
    const folderPath = path.join(postsDirectory, folderName);
    return fs.statSync(folderPath).isDirectory(); // 폴더만 필터링
  });

  return folderNames.map((folderName) => ({
    slug: folderName,
  }));
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "app/posts", slug, "index.mdx");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // const content = await fs.readFile(
  //   path.join(process.cwd(), "app/posts", `${id}.mdx`),
  //   "utf-8"
  // );
  interface Frontmatter {
    id: number;
    title: string;
    createdAt: string;
    category: string;
  }

  const { content: mdxContent, frontmatter } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Image: CustomImage,
    },
  });

  return (
    <>
      <div className="mx-5hidden max-w-screen-lg pt-4 pb-12 md:block lg:mx-auto">
        <Link href="/">
          <Image src={logo} width={192} height={28} alt="logo" />
        </Link>
      </div>
      <main className="mb-24 block w-full max-w-3xl scroll-mt-0 break-all leading-5 tracking-wider text-neutral-800 lg:mb-24">
        <div className="flex justify-between">
          <Breadcrumb className="mb-4 break-all text-sm font-semibold leading-5 tracking-wider text-stone-500">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">홈</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/categories/${frontmatter.category}`}>
                  {frontmatter.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{frontmatter.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SearchInput />
        </div>
        <article className="mt-6">
          <div className="prose prose-td:p-4 prose-th:p-4 max-w-none break-words">
            <h1 className="mb-8 text-2xl font-semibold tracking-wider text-neutral-800 lg:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="-mt-6 mb-6 text-neutral-800/75">
              Updated on {frontmatter.createdAt}
            </p>
            <div className="prose prose-td:p-4 prose-th:p-4 max-w-none break-words">
              {mdxContent}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
