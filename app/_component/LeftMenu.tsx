import Link from "next/link";
import LeftNav from "./LeftNav";
import Image from "next/image";
import logo from "../../public/images/logo5.png";

export default function LeftMenu() {
  return (
    <>
      <div className="flex flex-col">
        <Link className="mr-4" href="/">
          <Image src={logo} width={158} height={20} alt="logo" />
        </Link>
        <LeftNav />
      </div>
    </>
  );
}
