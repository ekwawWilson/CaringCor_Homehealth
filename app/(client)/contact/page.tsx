import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: "Contact CaringCor Home Health Care in Aurora, CO — call us, send a message, or visit our office. We serve Denver, Jefferson, Douglas and surrounding Colorado counties.",
};

export default function ContactPage() {
  return <ContactClient />;
}
