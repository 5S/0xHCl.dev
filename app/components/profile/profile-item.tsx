import { type ReactElement, cloneElement } from "react";

type ProfileItemProps = {
  icon: ReactElement;
  text: string;
  link?: string;
};

export default function ProfileItem({ icon, text, link }: ProfileItemProps) {
  return (
    <li className="flex items-center">
      {cloneElement(icon, { className: "mr-2 text-gray-4000", size: 16 })}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4493f8] hover:underline"
        >
          {text}
        </a>
      ) : (
        text
      )}
    </li>
  );
}
