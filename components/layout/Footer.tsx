import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Heart, Share2, Globe, ExternalLink, Link2 } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, HOURS, SITE_NAME } from "@/lib/siteConfig";

const services = [
  { label: "Personal Care", href: "/services/personal-care" },
  { label: "Homemaker Services", href: "/services/homemaker" },
  { label: "In-Home Support (IHSS)", href: "/services/ihss" },
  { label: "Residential Support (IRSS)", href: "/services/irss" },
  { label: "Community Connector", href: "/services/community-connector" },
  { label: "Supported Community Connections", href: "/services/community-connections" },
  { label: "Mentorship", href: "/services/mentorship" },
  { label: "Skilled Nursing", href: "/services/skilled-nursing" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const areas = [
  "Denver, CO", "Jefferson, CO", "Douglas, CO", "Aurora, CO",
  "Centennial, CO", "Arapahoe, CO", "Adams, CO", "Broomfield, CO",
];

export default function Footer() {
  return (
    <footer className="relative bg-primary-900 text-white">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* primary-900 overlay to match existing background color */}
      <div className="absolute inset-0 bg-primary-900/92" />
      {/* All content sits above the image */}
      <div className="relative z-10">

      {/* CTA Banner */}
      <div className="bg-primary-600/90 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-xl text-white">Ready to Get the Care You Deserve?</p>
            <p className="text-primary-200 text-sm mt-0.5">Call us or reach out today — we serve Denver, Jefferson, Douglas &amp; more.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={PHONE_HREF} className="btn-white text-sm py-2.5 px-5">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base leading-tight">CaringCor</div>
                <div className="text-xs text-primary-300 font-medium leading-tight">Home Health Care</div>
              </div>
            </div>
            <p className="text-primary-300 text-sm mb-5 leading-relaxed">
              Compassionate skilled and non-skilled home health care services for the elderly and families across Aurora, CO and the greater Denver metro area.
            </p>
            <div className="space-y-2.5 text-sm text-primary-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-400" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-accent-400" />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent-400" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-accent-400" />
                <span>{HOURS}</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Globe, href: "#", label: "Facebook" },
                { Icon: Share2, href: "#", label: "Twitter" },
                { Icon: Link2, href: "#", label: "Instagram" },
                { Icon: ExternalLink, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-primary-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-primary-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-400 rounded-full shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a} className="text-sm text-primary-300 flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-accent-400 rounded-full shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-primary-300 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-400 rounded-full shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-primary-800 rounded-xl p-4 border border-primary-700">
              <p className="text-sm font-semibold text-white mb-1">Need Help Now?</p>
              <p className="text-xs text-primary-400 mb-3">Our team is available Mon–Fri 8am–5pm</p>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors w-full">
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. | Aurora, Colorado</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
      </div>{/* end relative z-10 */}
    </footer>
  );
}
