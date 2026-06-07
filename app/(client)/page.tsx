import type { Metadata } from "next";
import HomepageClient from "@/components/homepage/HomepageClient";
import { BASE_URL, SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Home Health Care Services in Aurora, Denver & Colorado | ${SITE_NAME}`,
  description:
    "CaringCor Home Health Care provides skilled and non-skilled home health care services in Aurora, Denver, Jefferson, Douglas and surrounding Colorado communities. Personal care, IHSS, skilled nursing & more.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: `Home Health Care Services in Aurora, Denver CO | ${SITE_NAME}`,
    description: "Compassionate home health care in Aurora, Denver CO — personal care, IHSS, skilled nursing, and more. Call us for a free consultation.",
    url: BASE_URL,
  },
};

export default function HomePage() {
  return <HomepageClient />;
}
