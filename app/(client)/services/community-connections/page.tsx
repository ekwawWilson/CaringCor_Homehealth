import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { UserCheck } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Supported Community Connections | ${SITE_NAME}`,
  description: "Supported Community Connections in Colorado — helping individuals with IDD safely participate in their community. CaringCor Home Health Care.",
};

export default function CommunityConnectionsPage() {
  return (
    <ServicePageTemplate
      title="Supported Community Connections"
      subtitle="Empowering individuals with IDD to thrive in their community"
      heroImg="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
      iconNode={<UserCheck className="w-8 h-8 text-teal-600" />}
      description={[
        "CaringCor Home Health Care's Supported Community Connections program provides individuals with Intellectual and Developmental Disabilities (IDD) the support they need to live and participate in the community safely.",
        "Our dedicated support workers accompany individuals in the community, facilitating meaningful participation in activities, building relationships, and developing skills for greater independence and inclusion.",
      ]}
      items={["Community Access Support", "Social Relationship Building", "Recreational Activity Participation", "Public Transportation Training", "Employment Exploration", "Volunteer Opportunities", "Cultural & Civic Engagement", "Health & Wellness Activities", "Safety Skills Training", "Self-Advocacy Development", "Communication Skill Support"]}
      relatedServices={[
        { title: "Community Connector", href: "/services/community-connector" },
        { title: "Mentorship", href: "/services/mentorship" },
        { title: "Residential Support (IRSS)", href: "/services/irss" },
      ]}
    />
  );
}
