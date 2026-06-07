import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { BookOpen } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Mentorship Program | ${SITE_NAME}`,
  description: "CaringCor Mentorship Program in Colorado — consistent training, teaching, and supervision helping individuals achieve personal goals.",
};

export default function MentorshipPage() {
  return (
    <ServicePageTemplate
      title="Mentorship"
      subtitle="Guiding individuals toward their goals through consistent support"
      heroImg="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80"
      iconNode={<BookOpen className="w-8 h-8 text-yellow-600" />}
      description={[
        "CaringCor Home Health Care's Mentorship program provides guidance to individuals interested in engaging and achieving a particular task through consistent training, teaching, mentoring, and supervision.",
        "Our mentors build meaningful relationships with individuals, serving as role models and guides who help them identify their strengths, set achievable goals, and develop the skills and confidence to reach their full potential.",
      ]}
      items={["Goal Setting & Achievement Planning", "Life Skills Training", "Consistent One-on-One Support", "Academic & Vocational Guidance", "Social Skills Development", "Self-Confidence Building", "Problem-Solving Skills", "Decision Making Support", "Recreational & Hobby Exploration", "Progress Monitoring", "Family & Support Network Engagement"]}
      relatedServices={[
        { title: "Community Connector", href: "/services/community-connector" },
        { title: "Supported Community Connections", href: "/services/community-connections" },
        { title: "Residential Support (IRSS)", href: "/services/irss" },
      ]}
    />
  );
}
