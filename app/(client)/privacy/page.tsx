import type { Metadata } from "next";
import { SITE_NAME, EMAIL } from "@/lib/siteConfig";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy policy for ${SITE_NAME}.`,
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: June 2026"
        img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-16">
        <div className="container-pad max-w-3xl prose prose-gray text-gray-700 space-y-6">
          <p>CaringCor Home Health Care (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and safeguard information when you visit our website or contact us.</p>
          <h2 className="font-heading font-bold text-xl text-gray-900">Information We Collect</h2>
          <p>We collect information you provide directly to us, including your name, email address, phone number, and any details shared through our contact, appointment, or careers forms. We do not collect payment information on this website.</p>
          <h2 className="font-heading font-bold text-xl text-gray-900">How We Use Your Information</h2>
          <p>We use the information collected to respond to inquiries, schedule appointments, process job applications, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 className="font-heading font-bold text-xl text-gray-900">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="font-heading font-bold text-xl text-gray-900">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at: <a href={`mailto:${EMAIL}`} className="text-primary-600 hover:underline">{EMAIL}</a></p>
        </div>
      </section>
    </div>
  );
}
