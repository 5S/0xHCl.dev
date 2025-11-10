import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - 0xHCl.dev",
  twitter: {
    title: "Blog - 0xHCl.dev",
  },
  openGraph: {
    url: "https://0xhcl.dev/blog",
    title: "Blog - 0xHCl.dev",
    siteName: "Blog - 0xHCl.dev",
  },
};

export default function Home() {
  return (
    <>
      <h2 className="mb-8">Blog</h2>

      <section>
        <ul className="border-[#3d444d] border-t">
          <li className="flex flex-col gap-8 border-[#3d444d] border-b py-6 md:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <h3 className="font-semibold text-xl">No posts yet</h3>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
