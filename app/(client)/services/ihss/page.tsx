import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Users } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `In-Home Support Services (IHSS) | ${SITE_NAME}`,
  description: "IHSS in Aurora, Denver CO — family members can get paid to care for loved ones with disabilities. CaringCor provides training, support & resources.",
};

export default function IHSSPage() {
  return (
    <ServicePageTemplate
      title="In-Home Support Services (IHSS)"
      subtitle="Empowering families to care for their loved ones"
      heroImg="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80"
      iconNode={<Users className="w-8 h-8 text-purple-600" />}
      description={[
        "In-Home Support Services (IHSS) allows family members to get paid for providing care to loved ones with physical or mental disabilities. This program recognizes the vital role families play in home care.",
        "CaringCor Home Health Care provides the training and support that clients and families need to deliver high-quality care. We guide you through the process and ensure you have all the resources to succeed.",
      ]}
      items={["Medication Reminders", "Grocery Shopping", "Bathing", "Dressing", "Laundry", "Light Housekeeping", "Planning Daily Schedule", "Watering House Plants", "Meal Preparation", "Vacuuming", "Transportation Assistance", "Personal Hygiene Support"]}
      relatedServices={[
        { title: "Personal Care", href: "/services/personal-care" },
        { title: "Homemaker Services", href: "/services/homemaker" },
        { title: "Residential Support (IRSS)", href: "/services/irss" },
      ]}
    />
  );
}
