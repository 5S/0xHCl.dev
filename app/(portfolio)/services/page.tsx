import ServiceItem from "@/app/(portfolio)/components/services/service-item";
import { services } from "@/app/(portfolio)/components/services/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - 0xHCl.dev",
  twitter: {
    title: "Services - 0xHCl.dev",
  },
  openGraph: {
    url: "https://0xhcl.dev/services",
    title: "Services - 0xHCl.dev",
    siteName: "Services - 0xHCl.dev",
  },
};

export default function Home() {
  return (
    <>
      <h2 className="mb-8">Services</h2>

      <section>
        <ul className="border-[#3d444d] border-t">
          {services.map((service) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
