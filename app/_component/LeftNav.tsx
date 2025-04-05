"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = {
  main: [{ name: "홈", path: "/" }],
  dev: [{ name: "개발", path: "/categories/dev" }],
  life: [
    { name: "잡담", path: "/categories/chat" },
    { name: "정보", path: "/categories/info" },
  ],
};

export default function LeftNav() {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    return cn(
      "mb-1.5 font-semibold tracking-wider leading-7 text-left break-all",
      pathname === path ? "text-active-100" : "text-neutral-800 hover:underline"
    );
  };

  return (
    <>
      <div className="mt-10">
        <div className="mb-7">
          {navItems.main.map((item) => (
            <p key={item.path} className={getLinkClassName(item.path)}>
              <Link href={item.path}>{item.name}</Link>
            </p>
          ))}
        </div>
        <div className="mb-7">
          <p className="mb-3 font-medium text-sm tracking-wider leading-3 break-all text-zinc-500">
            개발보드
          </p>
          <ol>
            {navItems.dev.map((item) => (
              <li key={item.path} className={getLinkClassName(item.path)}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="mb-7">
          <p className="mb-3 font-medium text-sm tracking-wider leading-3 break-all text-zinc-500">
            생활보드
          </p>
          <ol>
            {navItems.life.map((item) => (
              <li key={item.path} className={getLinkClassName(item.path)}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
