import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { MapPin } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Community Connector | ${SITE_NAME}`,
  description: "Community Connector program in Colorado — helping individuals under 18 access community resources and programs. Provided by CaringCor Home Health Care.",
};

export default function CommunityConnectorPage() {
  return (
    <ServicePageTemplate
      title="Community Connector"
      subtitle="Connecting youth to their community and its resources"
      heroImg="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
      iconNode={<MapPin className="w-8 h-8 text-pink-600" />}
      description={[
        "CaringCor Home Health Care's Community Connector program is designed to help individuals under 18 access the community and its resources. This program promotes social inclusion, community participation, and personal development.",
        "Our Community Connectors work one-on-one with young individuals to identify their interests, strengths, and goals, then build bridges to the community activities, programs, and services that best support their growth.",
      ]}
      items={["Community Activity Participation", "Social Skills Development", "Resource Navigation", "Recreational Programs", "Educational Support", "Peer Interaction Facilitation", "Transportation to Community Events", "Goal Setting & Planning", "Family Education & Support", "Volunteer Opportunities"]}
      relatedServices={[
        { title: "Supported Community Connections", href: "/services/community-connections" },
        { title: "Mentorship", href: "/services/mentorship" },
        { title: "Residential Support (IRSS)", href: "/services/irss" },
      ]}
    />
  );
}
