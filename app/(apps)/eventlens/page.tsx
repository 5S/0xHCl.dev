import type { Metadata } from "next";
import EventLensRedirect from "./redirect-client";

export const metadata: Metadata = {
  title: "EventLens - 0xHCl.dev",
  openGraph: {
    url: "https://0xhcl.dev/eventlens",
    title: "EventLens - 0xHCl.dev",
    siteName: "EventLens - 0xHCl.dev",
  },
  twitter: {
    title: "EventLens - 0xHCl.dev",
  },
};

export default function EventLensPage() {
  return <EventLensRedirect />;
}
