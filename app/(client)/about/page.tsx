import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Shield, Users, Target, Eye, CheckCircle, Award } from "lucide-react";
import { SITE_NAME, PHONE_HREF, PHONE, ADDRESS, EMAIL, HOURS } from "@/lib/siteConfig";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: "Learn about CaringCor Home Health Care — our mission, vision, and commitment to compassionate home health care in Aurora, Denver and Colorado.",
};

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every client with kindness, empathy, and the respect they deserve." },
  { icon: Shield, title: "Integrity", desc: "We uphold the highest standards of honesty and professional conduct in everything we do." },
  { icon: Users, title: "Family-Centered", desc: "We recognize the vital role families play and actively partner with them in care planning." },
  { icon: Award, title: "Excellence", desc: "We are committed to continuous improvement and delivering the best outcomes for our clients." },
];

const team = [
  { name: "Management Team", role: "Care Coordination & Administration", desc: "Our administrative team ensures smooth operations, compliance, and exceptional care coordination." },
  { name: "Registered Nurses (RN)", role: "Skilled Nursing Services", desc: "Licensed RNs available 24/7 on-call providing expert medical oversight and skilled nursing care." },
  { name: "Personal Care Aides", role: "Daily Living Support", desc: "Trained, background-checked aides who assist with activities of daily living with professionalism and warmth." },
  { name: "Community Support Workers", role: "Community Programs", desc: "Dedicated workers facilitating community access, mentorship, and connection for individuals with IDD." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="About CaringCor Home Health Care"
        subtitle="Dedicated to delivering compassionate, professional home health care services to the elderly and families across Aurora, Denver, and Colorado."
        img="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                The mission of CaringCor Home Health Care is to administer care, support, and resources to our clients in the comfort of their homes and also to assist persons with Intellectual and Developmental Disabilities (IDD) to be healthy, safe, and active members of their community.
              </p>
            </div>
            <div className="bg-secondary-50 rounded-2xl p-8 border border-secondary-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-secondary-600" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-3">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred home health care provider in Colorado — recognized for our unwavering commitment to quality care, compassion, and positive outcomes that enrich the lives of our clients and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="container-pad max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6 text-center">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>CaringCor Home Health Care is a client-centered home health care agency based in Aurora, Colorado. We provide comprehensive skilled and non-skilled home health care services to elderly individuals, families, and persons with Intellectual and Developmental Disabilities (IDD).</p>
            <p>Our team of dedicated professionals — including licensed Registered Nurses, trained Personal Care Aides, and experienced Community Support Workers — delivers personalized, compassionate care that meets each client where they are and supports their unique goals.</p>
            <p>We serve families across Denver, Jefferson, Douglas, and surrounding Colorado counties, providing services in the home, community, and residential settings. Our 24/7 on-call Registered Nurse ensures that clients with complex medical needs always have access to professional support.</p>
            <p>At CaringCor, we believe that every person deserves to live with dignity, independence, and purpose — in the environment they call home.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-pad">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-pad">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 text-center mb-12">Our Care Team</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-primary-600 font-medium">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-pad text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Get in Touch with Our Team</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">We&apos;re here to answer your questions and help you get started with the right care plan for you or your loved one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">Contact Us</Link>
            <a href={PHONE_HREF} className="border-2 border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">{PHONE}</a>
          </div>
          <div className="mt-8 text-primary-300 text-sm space-y-1">
            <p>{ADDRESS}</p>
            <p>{EMAIL} &middot; {HOURS}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
