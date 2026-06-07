import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Heart } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Personal Care Services | ${SITE_NAME}`,
  description: "CaringCor provides compassionate personal care services in Aurora, Denver CO — bathing, dressing, medication reminders, grooming, feeding and more.",
};

export default function PersonalCarePage() {
  return (
    <ServicePageTemplate
      title="Personal Care"
      subtitle="Compassionate assistance with daily living activities"
      heroImg="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80"
      iconNode={<Heart className="w-8 h-8 text-primary-600" />}
      description={[
        "CaringCor Home Health Care provides individuals with the assistance they need to complete their activities of daily living. Our trained caregivers deliver respectful, compassionate personal care that preserves the dignity and independence of every client.",
        "Whether your loved one needs help with basic grooming, bathing, medication reminders, or mobility assistance, our team is here to support them in the comfort of their own home in Aurora, Denver, and surrounding Colorado communities.",
      ]}
      items={["Feeding", "Bathing", "Mouth Care", "Dressing", "Shaving", "Nail Care", "Medication Reminders", "Bowel/Bladder Care", "Hair Care", "Transferring", "Positioning", "Ambulation"]}
      relatedServices={[
        { title: "Homemaker Services", href: "/services/homemaker" },
        { title: "In-Home Support (IHSS)", href: "/services/ihss" },
        { title: "Skilled Nursing", href: "/services/skilled-nursing" },
      ]}
    />
  );
}
