import PostListContainer from ".././_component/PostListContainer";
import { getPosts } from "@/lib/posts";

// type PageProps = {
//   searchParams: Promise<{ q?: string }>;
// };
export default async function Home() {
  const posts = await getPosts();

  // const { q } = await searchParams;
  // const query = q || "";

  // const filteredPosts = posts.filter((post) => {
  //   const contentString = post.content;
  //   return (
  //     post.title.toLowerCase().includes(query.toLowerCase()) ||
  //     contentString.toLowerCase().includes(query.toLowerCase())
  //   );
  // });

  return (
    <main className="flex-1 mb-24 w-full max-w-screen-lg scroll-mt-0 break-all leading-5 tracking-wider text-neutral-800 lg:mb-24">
      <PostListContainer category="최신글" posts={posts} />
    </main>
  );
}
