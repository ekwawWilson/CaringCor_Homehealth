import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Home, Users, Shield, MapPin, Activity, BookOpen, UserCheck, ArrowRight } from "lucide-react";
import { SITE_NAME } from "@/lib/siteConfig";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: `Our Services | ${SITE_NAME}`,
  description: "CaringCor Home Health Care offers a full range of skilled and non-skilled home health care services including personal care, IHSS, skilled nursing, IRSS, community support, and mentorship in Aurora, Denver CO.",
};

const services = [
  { title: "Personal Care", href: "/services/personal-care", desc: "Feeding, bathing, mouth care, dressing, shaving, nail care, medication reminders, bowel/bladder care, hair care, transferring, positioning, and ambulation assistance.", icon: Heart, color: "bg-blue-50", iconColor: "text-blue-600" },
  { title: "Homemaker Services", href: "/services/homemaker", desc: "Light housekeeping, laundry, trash removal, bathroom & kitchen cleaning, sweeping, dish washing, shopping/errands, vacuuming, and bed making.", icon: Home, color: "bg-green-50", iconColor: "text-green-600" },
  { title: "In-Home Support Services (IHSS)", href: "/services/ihss", desc: "Allows family members to get paid for providing care to loved ones with physical or mental disabilities. Includes training and support.", icon: Users, color: "bg-purple-50", iconColor: "text-purple-600" },
  { title: "Residential Services & Support (IRSS)", href: "/services/irss", desc: "Plans for individuals needing residential support — Host Home, Independent Living, and Family Caregiver Model.", icon: Shield, color: "bg-orange-50", iconColor: "text-orange-600" },
  { title: "Community Connector", href: "/services/community-connector", desc: "Designed for individuals under 18 to help them access the community and its resources.", icon: MapPin, color: "bg-pink-50", iconColor: "text-pink-600" },
  { title: "Supported Community Connections", href: "/services/community-connections", desc: "Supports individuals with IDD to live and participate in the community safely and confidently.", icon: UserCheck, color: "bg-teal-50", iconColor: "text-teal-600" },
  { title: "Mentorship", href: "/services/mentorship", desc: "Guidance and consistent training to help individuals achieve their goals through mentoring and supervision.", icon: BookOpen, color: "bg-yellow-50", iconColor: "text-yellow-600" },
  { title: "Skilled Nursing", href: "/services/skilled-nursing", desc: "Licensed RN services including wound care, ostomy care, IV therapy, tube feeding, catheter care, medication management, and chronic condition monitoring.", icon: Activity, color: "bg-red-50", iconColor: "text-red-600" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Our Home Health Care Services"
        subtitle="Comprehensive skilled and non-skilled care services for the elderly and families across Aurora, Denver, and surrounding Colorado communities."
        img="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80"
        crumbs={[{ label: "Services" }]}
      />

      {/* Services Grid */}
      <section className="relative py-16">
        {/* Background image with overlay */}
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/92" />
        <div className="relative container-pad">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="flex gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${svc.color}`}>
                  <svc.icon className={`w-6 h-6 ${svc.iconColor}`} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-gray-900 mb-1.5 group-hover:text-primary-600 transition-colors">{svc.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Not sure which service is right for you?</p>
            <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
