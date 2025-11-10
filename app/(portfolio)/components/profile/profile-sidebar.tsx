import ProfileItem from "@/app/(portfolio)/components/profile/profile-item";
import { SiEthereum, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Globe, Mail, MapPin } from "lucide-react";

type ProfileSidebarProps = {
  name: string;
  location: string;
  languages: string;
  email: string;
  x: string;
  gitHub: string;
  ens: string;
  ethereumAddress: string;
};

export default function ProfileSidebar({
  name,
  location,
  languages,
  email,
  x,
  gitHub,
  ens,
  ethereumAddress,
}: ProfileSidebarProps) {
  return (
    <aside className="mb-8 md:w-[256px] md:flex-shrink-0">
      <img
        src="https://avatars.githubusercontent.com/u/7006470"
        alt="Profile"
        className="mx-auto aspect-square w-full max-w-[256px] rounded-full md:mx-0"
      />
      <div className="mt-4">
        <h1 className="mb-1 font-bold text-3xl">{name}</h1>
        <ul className="space-y-1">
          <ProfileItem icon={<MapPin />} text={location} />
          <ProfileItem icon={<Globe />} text={languages} />
          <ProfileItem icon={<Mail />} text={email} link={`mailto:${email}`} />
          <ProfileItem icon={<SiX />} text={x} link={`https://x.com/${x}`} />
          <ProfileItem
            icon={<SiGithub />}
            text={gitHub}
            link={`https://github.com/${gitHub}`}
          />
          <ProfileItem
            icon={<SiEthereum />}
            text={ens}
            link={`https://etherscan.io/address/${ethereumAddress}`}
          />
        </ul>
      </div>
    </aside>
  );
}
