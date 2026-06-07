"use client";

import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, HOURS } from "@/lib/siteConfig";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopHeader() {
  return (
    <div className="bg-primary-900 text-white text-xs hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 gap-4">
          {/* Left: contact info */}
          <div className="flex items-center gap-5">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 text-primary-300 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 text-primary-300 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span>{EMAIL}</span>
            </a>
          </div>

          {/* Right: hours + area + contact + language */}
          <div className="flex items-center gap-5 divide-x divide-primary-700">
            <span className="flex items-center gap-1.5 text-primary-400">
              <Clock className="w-3 h-3" />
              {HOURS}
            </span>
            <span className="flex items-center gap-1.5 text-primary-400 pl-5">
              <MapPin className="w-3 h-3" />
              Aurora, CO
            </span>
            <div className="flex items-center gap-4 pl-5">
              <Link href="/contact" className="text-primary-300 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="pl-5">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
