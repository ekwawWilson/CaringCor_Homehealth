"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X, Phone, Heart, ArrowRight } from "lucide-react";
import { PHONE_HREF, PHONE, SITE_NAME } from "@/lib/siteConfig";

const serviceLinks = [
  { href: "/services/personal-care", label: "Personal Care" },
  { href: "/services/homemaker", label: "Homemaker Services" },
  { href: "/services/ihss", label: "In-Home Support (IHSS)" },
  { href: "/services/irss", label: "Residential Support (IRSS)" },
  { href: "/services/community-connector", label: "Community Connector" },
  { href: "/services/community-connections", label: "Supported Community Connections" },
  { href: "/services/mentorship", label: "Mentorship" },
  { href: "/services/skilled-nursing", label: "Skilled Nursing" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function ServicesDropdown({ isOpen, onToggle, onClose }: { isOpen: boolean; onToggle: () => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm py-1"
        aria-expanded={isOpen}
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
          <div className="bg-primary-50 px-5 py-3 border-b border-primary-100">
            <p className="text-xs font-bold text-primary-600 uppercase tracking-wider">Our Services</p>
          </div>
          <div className="py-2">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-300 group-hover:bg-primary-600 transition-colors shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 px-5 py-3 bg-gray-50">
            <Link
              href="/services"
              onClick={onClose}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              View All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeServices = useCallback(() => setServicesOpen(false), []);

  return (
    <nav className={`sticky top-0 z-40 bg-white transition-all duration-300 ${scrolled ? "shadow-lg" : "border-b border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20 py-3">

          {/* Logo — Braemar-style: icon + stacked text */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 bg-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-primary-700 transition-colors">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-gray-900 text-base">CaringCor</div>
              <div className="text-xs text-primary-500 font-semibold tracking-wide">Home Health Care</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
                {l.label}
              </Link>
            ))}
            <ServicesDropdown isOpen={servicesOpen} onToggle={() => setServicesOpen((p) => !p)} onClose={closeServices} />
            {navLinks.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors">
              <Phone className="w-4 h-4 text-primary-600" />
              {PHONE}
            </a>
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((p) => !p)}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 ml-4 space-y-0.5 bg-primary-50 rounded-xl p-2">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-primary-600 hover:bg-white rounded-lg transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-sm font-semibold text-primary-600 hover:bg-white rounded-lg">
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
              <a href={PHONE_HREF} className="flex items-center gap-2 py-3 px-4 text-gray-700 font-medium">
                <Phone className="w-4 h-4 text-primary-600" /> {PHONE}
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile floating call button */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-primary-700 transition-colors md:hidden font-semibold text-sm"
        aria-label={`Call ${SITE_NAME}`}
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
    </nav>
  );
}
