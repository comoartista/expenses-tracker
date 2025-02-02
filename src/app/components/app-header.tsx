"use client";

import Image from "next/image";
import logo from "../image/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Acount",
    path: "/app/acount",
  },
];

export default function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-4">
      <Link href={"/app/dashboard"}>
        {" "}
        <Image src={logo} alt="Logo" width={25} />
      </Link>

      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`text-white/100 px-3 py-2 hover:text-white/60 transition  rounded-sm ${
                  route.path === pathname ? "bg-black/30" : ""
                }`}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
