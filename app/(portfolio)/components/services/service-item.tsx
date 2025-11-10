import { BadgeJapaneseYen } from "lucide-react";

type ServiceItemProps = {
  title: string;
  description: string;
  price?: string;
};

export default function ServiceItem({
  title,
  description,
  price,
}: ServiceItemProps) {
  return (
    <li className="flex flex-col gap-8 border-[#3d444d] border-b py-6 md:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-[#9198a1] text-xs">{description}</p>
      </div>
      {price && (
        <div className="flex w-[100px] flex-shrink-0 justify-start text-[#9198a1] text-xs md:justify-end">
          <p className="flex items-center gap-1">
            <BadgeJapaneseYen />
            <span>{price}</span>
          </p>
        </div>
      )}
    </li>
  );
}
