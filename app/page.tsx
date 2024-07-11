import Header from "@/app/components/Header";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import ProjectsSection from "@/app/components/ProjectsSection";
import Script from "next/script";

export default function Home() {
  const projects = [
    {
      title: "torecawv.com - ktech, Co.",
      description:
        "Web site where you can research trading card market prices.",
      url: "http://torecawv.com",
      languages: [{ name: "TypeScript (Next.js)", color: "#3178c6" }],
    },
    {
      title: "Sound Desert - CrossVision, Inc.",
      description: "Sound Desert is a music player for music NFT.",
      url: "https://sound-desert.com/",
      languages: [
        { name: "TypeScript (React)", color: "#3178c6" },
        { name: "Ruby (Ruby on Rails)", color: "#701516" },
      ],
    },
    {
      title: "PIZZA DAY - Spicelink, Inc.",
      description:
        "PIZZA DAY is a web3 native apparel brand that tries new ways of making clothes and delivering them to the world.",
      url: "https://www.pizzaday.world/",
      languages: [
        { name: "TypeScript (Next.js)", color: "#3178c6" },
        { name: "Solidity (Hardhat)", color: "#AA6746" },
      ],
    },
    {
      title: "Quwak - Quwak, Inc.",
      description: "Digital is moving into the age of physical and fusion.",
      url: "https://quwak.com/",
      languages: [{ name: "TypeScript (Next.js)", color: "#3178c6" }],
    },
    {
      title: "LINK - Transeeds, Inc.",
      description:
        "We connect NFT with various objects around us through our unique system developed by applying NFC and blockchain technologies.",
      url: "https://www.link-nft.com/",
      languages: [
        { name: "TypeScript (Next.js)", color: "#3178c6" },
        { name: "Solidity (Hardhat)", color: "#AA6746" },
      ],
    },
    {
      title: "saunping - NumberZ, Inc.",
      description: "Making sauna more familiar.",
      url: "https://www.saunping.jp/",
      languages: [{ name: "TypeScript (Next.js)", color: "#3178c6" }],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#0d1117] text-white">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="md:flex md:space-x-8">
            <ProfileSidebar
              name="HCl"
              location="Tokyo, Japan"
              languages="Japanese, English"
              x="@HCl"
              gitHub="5S"
              ens="0xHCl.dev"
              ethereumAddress="0x1b6CD9541B2821934F8BF946c073C022B3Ba968b"
            />
            <div className="md:w-3/4">
              <ProjectsSection projects={projects} />
              <a
                className="twitter-timeline"
                data-theme="dark"
                data-height="750"
                href="https://twitter.com/HCl?ref_src=twsrc%5Etfw"
              >
                Tweets by HCl
              </a>
              <Script
                async
                src="https://platform.twitter.com/widgets.js"
                strategy="beforeInteractive"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
