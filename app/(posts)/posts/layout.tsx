export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-0 pb-0 md:p-4">
      {children}
    </div>
  );
}
