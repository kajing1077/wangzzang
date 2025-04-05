import LeftMenu from "../_component/LeftMenu";
import SearchInput from "../_component/SearchInput";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-0 pb-0 pt-6 md:flex md:pt-10">
      <LeftMenu />
      {children}
      <div className="my-6">
        <SearchInput />
      </div>
    </div>
  );
}
