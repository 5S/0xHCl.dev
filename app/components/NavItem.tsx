import { type ReactElement, cloneElement } from "react";

type NavItemProps = {
  icon: ReactElement;
  text: string;
  count?: number;
  active?: boolean;
};

export default function NavItem({ icon, text, count, active }: NavItemProps) {
  return (
    <li>
      <p
        className={`flex items-center px-3 py-4 font-medium text-sm ${
          active
            ? "border-[#f78166] border-b-2 text-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        {cloneElement(icon, { className: "mr-2", size: 16 })} {text}
        {count && (
          <span className="ml-1 rounded-full bg-gray-700 px-2 py-1 text-xs">
            {count}
          </span>
        )}
      </p>
    </li>
  );
}
