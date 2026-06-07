import type { Metadata } from "next";
import CareersClient from "./CareersClient";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Careers | ${SITE_NAME}`,
  description: "Join the CaringCor Home Health Care team in Aurora, CO. We're hiring compassionate caregivers, nurses, and community support workers across Denver metro.",
};

export default function CareersPage() {
  return <CareersClient />;
}
