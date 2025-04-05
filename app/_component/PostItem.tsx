import Link from "next/link";

type PostItemProps = {
  post: {
    id: string;
    title: string;
    createdAt: string;
    slug: string;
  };
};

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="block overflow-hidden break-words break-all rounded-lg border border-gray-200 bg-gray-50 leading-6 tracking-wider text-neutral-800 hover:bg-gray-100">
      <div className="p-4">
        <p className="break-words break-all text-xl font-semibold leading-7 tracking-wider text-neutral-800 lg:text-2xl">
          <Link href={`/posts/${post.slug}`} className="flex items-center">
            {post.title}
          </Link>
        </p>
        <p className="mt-1.5 text-right text-sm text-neutral-800/75">
          {post.createdAt}
        </p>
      </div>
    </div>
  );
}
