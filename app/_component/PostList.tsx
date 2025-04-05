import PostItem from "./PostItem";

type PostListProps = {
  category?: string;
  posts: { id: string; title: string; createdAt: string; slug: string }[];
  searchQuery?: string;
};

function getCategoryString(category: string) {
  const decodedCategory = decodeURIComponent(category);
  switch (decodedCategory) {
    case "dev":
      return "개발";
    case "info":
      return "정보";
    case "chat":
      return "잡담";
    default:
      return decodedCategory;
  }
}

export default function PostList({
  category = "최신글",
  posts,
  searchQuery,
}: PostListProps) {
  return (
    <>
      <h2 className="my-6 text-base font-semibold tracking-wider leading-5 break-all text-stone-500">
        {searchQuery ? "검색 결과" : getCategoryString(category)}
      </h2>
      <div className="space-y-8">
        {posts.length === 0 ? ( // 글이 없는 경우
          <p className="text-center text-gray-500">
            {searchQuery
              ? "No results. Sorry, this doesn't appear to be something I’ve written about!" // 검색 결과가 없는 경우
              : `${getCategoryString(category)} 카테고리의 글이 없습니다.`}
          </p>
        ) : (
          posts.map((post) => <PostItem key={post.id} post={post} />)
        )}
      </div>
    </>
  );
}
