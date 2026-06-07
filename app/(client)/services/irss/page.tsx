import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Shield } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Individual Residential Services & Support (IRSS) | ${SITE_NAME}`,
  description: "IRSS in Colorado — Host Home, Independent Living, and Family Caregiver Model. CaringCor provides residential support for individuals with unique care needs.",
};

export default function IRSSPage() {
  return (
    <ServicePageTemplate
      title="Individual Residential Services & Support (IRSS)"
      subtitle="Tailored residential care plans for individuals with unique support needs"
      heroImg="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80"
      iconNode={<Shield className="w-8 h-8 text-orange-600" />}
      description={[
        "CaringCor Home Health Care has a series of plans and arrangements designed to meet the unique needs of individuals interested in residential support. IRSS provides structured, person-centered residential care options.",
        "Our team works closely with individuals, families, and case managers to develop individualized support plans that promote independence, safety, and quality of life within a residential setting.",
      ]}
      items={["Host Home", "Independent Living Support", "Family Caregiver Model", "24/7 Residential Supervision", "Daily Living Skills Training", "Community Integration", "Health & Wellness Monitoring", "Crisis Prevention & Intervention", "Individualized Support Planning", "Transition Support", "Social Skill Development"]}
      relatedServices={[
        { title: "In-Home Support (IHSS)", href: "/services/ihss" },
        { title: "Community Connector", href: "/services/community-connector" },
        { title: "Supported Community Connections", href: "/services/community-connections" },
      ]}
    />
  );
}
