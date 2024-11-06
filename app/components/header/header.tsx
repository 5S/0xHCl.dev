"use client";

import NavItem from "@/app/components/header/nav-item";
import { BookMarked, BookOpen, Rss } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-gray-700 border-b bg-[#010409]">
      <div className="mx-auto max-w-7xl px-4">
        <nav>
          <ul className="flex overflow-x-auto">
            <NavItem
              href="/"
              icon={<BookOpen />}
              text="Overview"
              active={pathname === "/"}
            />
            <NavItem
              href="/services"
              icon={<BookMarked />}
              text="Services"
              active={pathname.includes("/services")}
            />
            <NavItem
              href="/blog"
              icon={<Rss />}
              text="Blog"
              active={pathname.includes("/blog")}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
