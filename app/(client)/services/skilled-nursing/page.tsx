import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Activity } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Skilled Nursing Services | ${SITE_NAME}`,
  description: "CaringCor Skilled Nursing in Aurora, Denver CO — wound care, IV therapy, ostomy care, medication management & 24/7 RN on-call support.",
};

export default function SkilledNursingPage() {
  return (
    <ServicePageTemplate
      title="Skilled Nursing"
      subtitle="Expert medical care from licensed Registered Nurses"
      heroImg="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&q=80"
      iconNode={<Activity className="w-8 h-8 text-red-600" />}
      description={[
        "Our team of licensed nurses provides expert care in the comfort of your home. CaringCor Home Health Care gives patients access to an on-call 24/7 Registered Nurse to handle medical needs as they arise.",
        "Our Skilled Nursing services ensure that individuals with complex medical needs receive professional, evidence-based care without the disruption of leaving their home environment. From post-surgical care to chronic condition management, we deliver clinical excellence with compassion.",
      ]}
      items={["Wound Care Management", "Ostomy/Stoma Care", "Pre & Post Surgery Care", "Monitoring of Chronic Conditions", "IV Therapy", "Tube Feeding", "Catheter Care", "Drainage Tube Care", "Pain Management", "Medication Management", "Vital Signs Monitoring", "Patient & Family Education"]}
      relatedServices={[
        { title: "Personal Care", href: "/services/personal-care" },
        { title: "In-Home Support (IHSS)", href: "/services/ihss" },
        { title: "Homemaker Services", href: "/services/homemaker" },
      ]}
    />
  );
}
