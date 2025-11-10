import Footer from "@/app/(portfolio)/components/footer/footer";
import Header from "@/app/(portfolio)/components/header/header";
import ProfileSidebar from "@/app/(portfolio)/components/profile/profile-sidebar";
import type { Metadata } from "next";
import "@/app/(portfolio)/globals.css";

export const metadata: Metadata = {
  title: "HCl - 0xHCl.dev",
  description: "HCl's personal website",
  twitter: {
    title: "HCl - 0xHCl.dev",
    description: "HCl's personal website",
  },
  openGraph: {
    type: "website",
    url: "https://0xhcl.dev/",
    title: "HCl - 0xHCl.dev",
    description: "HCl's personal website",
    siteName: "HCl - 0xHCl.dev",
  },
  icons: {
    icon: ["/favicons/favicon.ico?v=4"],
    apple: ["/favicons/apple-touch-icon.png"],
    shortcut: ["/favicons/apple-touch-icon.png"],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-[#0d1117] text-white">
          <main className="flex-grow p-4 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
