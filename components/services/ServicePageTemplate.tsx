import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/siteConfig";
import { ReactNode } from "react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImg: string;
  description: string[];
  items: string[];
  iconNode: ReactNode;
  relatedServices?: { title: string; href: string }[];
}

export default function ServicePageTemplate({
  title, subtitle, heroImg, description, items, iconNode, relatedServices = [],
}: ServicePageProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700" />
        <img src={heroImg} alt={title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
        <div className="relative container-pad w-full pb-10">
          <div className="flex items-center gap-2 text-primary-300 text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white">{title}</h1>
          <p className="text-primary-200 mt-2">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-pad">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                {iconNode}
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-5">About This Service</h2>
              {description.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
              ))}
              <h3 className="font-heading font-bold text-xl text-gray-900 mt-8 mb-4">Services Include:</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-primary-50 rounded-lg px-4 py-2.5">
                    <CheckCircle className="w-4 h-4 text-primary-600 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">Get Started Today</h3>
                <p className="text-primary-200 text-sm mb-4 leading-relaxed">Contact us to learn how we can support you or your loved one.</p>
                <Link href="/contact" className="btn-white text-sm py-2.5 w-full justify-center mb-3 flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 border border-white/40 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" /> {PHONE}
                </a>
              </div>
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 text-gray-700 hover:text-primary-600 text-sm font-medium transition-colors py-1">
                          <ArrowRight className="w-3.5 h-3.5 text-primary-400" /> {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-sm text-gray-600">
                <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                <p>Monday – Friday: 8am – 5pm</p>
                <p className="mt-1 text-xs text-primary-600 font-medium">24/7 Skilled Nursing On-Call Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
