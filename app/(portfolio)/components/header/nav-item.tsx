import { type ReactElement, cloneElement } from "react";

type NavItemProps = {
  href: string;
  icon: ReactElement;
  text: string;
  active?: boolean;
};

export default function NavItem({ href, icon, text, active }: NavItemProps) {
  return (
    <li>
      <a href={href}>
        <p
          className={`flex items-center px-3 py-4 font-medium text-sm ${
            active
              ? "border-[#f78166] border-b-2 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {cloneElement(icon, { className: "mr-2", size: 16 })} {text}
        </p>
      </a>
    </li>
  );
}
