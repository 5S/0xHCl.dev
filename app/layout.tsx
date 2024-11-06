import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import type { Metadata } from "next";
import "./globals.css";

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
                <div className="md:w-3/4">{children}</div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
