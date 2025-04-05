import PostList from "./PostList";

export default function PostListContainer({
  category,
  posts,
  searchQuery,
}: {
  category: string;
  posts: { id: string; title: string; createdAt: string; slug: string }[];
  searchQuery?: string;
}) {
  return (
    <PostList category={category} posts={posts} searchQuery={searchQuery} />
  );
}
