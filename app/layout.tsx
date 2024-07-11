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
      <body>{children}</body>
    </html>
  );
}
