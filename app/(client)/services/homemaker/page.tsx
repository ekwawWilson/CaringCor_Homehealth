import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Home } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Homemaker Services | ${SITE_NAME}`,
  description: "CaringCor Homemaker Services in Aurora, Denver CO — light housekeeping, laundry, meal prep, shopping & more.",
};

export default function HomemakerPage() {
  return (
    <ServicePageTemplate
      title="Homemaker Services"
      subtitle="Keeping your home clean, safe, and comfortable"
      heroImg="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
      iconNode={<Home className="w-8 h-8 text-green-600" />}
      description={[
        "CaringCor Home Health Care provides individuals with homemaker services to keep your home in order. A clean, organized living environment is essential for health, safety, and well-being.",
        "Our caregivers handle the household tasks that can become difficult or overwhelming, allowing you or your loved one to focus on what matters most — comfort, independence, and quality of life.",
      ]}
      items={["Light Housekeeping", "Laundry", "Trash Removal", "Bathroom Cleaning", "Kitchen Cleaning", "Sweeping", "Dish Washing", "Shopping/Errands", "Vacuuming", "Bed Making", "Meal Preparation", "Watering Plants"]}
      relatedServices={[
        { title: "Personal Care", href: "/services/personal-care" },
        { title: "In-Home Support (IHSS)", href: "/services/ihss" },
      ]}
    />
  );
}
