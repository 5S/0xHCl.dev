import NavItem from "@/app/components/NavItem";
import { BookMarked, BookOpen, Box, Star } from "lucide-react";

export default function Header() {
  return (
    <header className="border-gray-700 border-b bg-[#010409]">
      <div className="mx-auto max-w-7xl px-4">
        <nav>
          <ul className="flex overflow-x-auto">
            <NavItem icon={<BookOpen />} text="Overview" active />
            <NavItem icon={<BookMarked />} text="Repositories" count={28} />
            <NavItem icon={<Box />} text="Packages" />
            <NavItem icon={<Star />} text="Stars" count={9} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
