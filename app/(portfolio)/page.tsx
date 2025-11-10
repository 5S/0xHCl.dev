import ProjectsSection from "@/app/(portfolio)/components/projects/projects-section";
import { projects } from "@/app/(portfolio)/projects";
import Script from "next/script";

export default function Home() {
  return (
    <>
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
    </>
  );
}
