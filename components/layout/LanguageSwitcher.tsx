"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "fr", label: "French", native: "Français" },
];

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function select(code: string) {
    setCurrent(code);
    setOpen(false);

    // Trigger Google Translate if available, otherwise inject the widget
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event("change"));
    } else {
      // Fallback: inject Google Translate script on first use
      if (!document.getElementById("google-translate-script")) {
        (window as unknown as Record<string, unknown>).__googleTranslateCode = code;
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        (window as Window & typeof globalThis & { googleTranslateElementInit?: () => void }).googleTranslateElementInit = () => {
          new (window as unknown as { google: { translate: { TranslateElement: new (opts: object, el: string) => void } } }).google.translate.TranslateElement(
            { pageLanguage: "en", includedLanguages: "en,es,fr", autoDisplay: false },
            "google_translate_element"
          );
          setTimeout(() => {
            const sel = document.querySelector<HTMLSelectElement>(".goog-te-combo");
            if (sel) {
              sel.value = code;
              sel.dispatchEvent(new Event("change"));
            }
          }, 800);
        };
      } else {
        setTimeout(() => {
          const sel = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (sel) {
            sel.value = code;
            sel.dispatchEvent(new Event("change"));
          }
        }, 800);
      }
    }
  }

  const active = languages.find((l) => l.code === current) ?? languages[0];

  return (
    <>
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" className="hidden" />

      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-1.5 text-primary-300 hover:text-white transition-colors text-xs font-medium"
          aria-label="Select language"
        >
          <Globe className="w-3 h-3" />
          <span>{active.native}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                  current === lang.code
                    ? "bg-primary-50 text-primary-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{lang.native}</span>
                {current === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
