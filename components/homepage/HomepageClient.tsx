"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  Heart, Users, Home, Shield, Star, CheckCircle,
  ChevronDown, ArrowRight,
  Clock, Smile, Activity, BookOpen, UserCheck, MapPin,
} from "lucide-react";

/* ─────────── animation presets ─────────── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─────────── slider data ─────────── */
const slides = [
  {
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80",
    tag: "Serving Aurora, Denver & Colorado",
    headline: ["Skilled Hands.", "Caring Hearts."],
    sub: "Compassionate home health care for the elderly and families — delivered with dignity, professionalism, and heart across Colorado.",
    cta1: { label: "Get in Touch", href: "/contact" },
  },
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80",
    tag: "Personalized & Family-Centered",
    headline: ["Your Loved Ones", "Deserve the Best."],
    sub: "From personal care to skilled nursing — we build tailored care plans that treat every client with respect, dignity, and love.",
    cta1: { label: "Explore Services", href: "/services" },
  },
  {
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80",
    tag: "IDD & Community Support",
    headline: ["Helping Individuals", "Thrive & Connect."],
    sub: "Specialized programs for individuals with Intellectual and Developmental Disabilities to live safely and actively in their community.",
    cta1: { label: "IDD Services", href: "/services/ihss" },
  },
  {
    img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920&q=80",
    tag: "24/7 Skilled Nursing On-Call",
    headline: ["Professional Care,", "Always Available."],
    sub: "Licensed Registered Nurses on-call around the clock — bringing clinical excellence and compassionate support directly to your home.",
    cta1: { label: "Learn More", href: "/services/skilled-nursing" },
  },
];

/* ─────────── static data ─────────── */
const services = [
  { title: "Personal Care", href: "/services/personal-care", desc: "Bathing, dressing, grooming, feeding, medication reminders & daily living activities.", icon: Heart },
  { title: "Homemaker Services", href: "/services/homemaker", desc: "Light housekeeping, laundry, meal prep, shopping, and keeping your home in order.", icon: Home },
  { title: "In-Home Support (IHSS)", href: "/services/ihss", desc: "Family members get paid to care for loved ones with physical or mental disabilities.", icon: Users },
  { title: "Residential Support (IRSS)", href: "/services/irss", desc: "Host Home, Independent Living, and Family Caregiver model for individuals needing residential support.", icon: Shield },
  { title: "Community Connector", href: "/services/community-connector", desc: "Helping individuals under 18 access community resources and programs.", icon: MapPin },
  { title: "Skilled Nursing", href: "/services/skilled-nursing", desc: "Licensed RN services: wound care, IV therapy, ostomy care, chronic condition monitoring & more.", icon: Activity },
  { title: "Mentorship", href: "/services/mentorship", desc: "Guidance and consistent training to help individuals achieve their personal goals.", icon: BookOpen },
  { title: "Supported Community Connections", href: "/services/community-connections", desc: "Support for individuals with IDD to live and participate in the community safely.", icon: UserCheck },
];


const whyUs = [
  { title: "Personalized Care Plans", desc: "Every client receives a tailored plan developed with family and care team input to address unique needs." },
  { title: "Screened & Trained Staff", desc: "All caregivers are thoroughly background-checked and receive ongoing professional training." },
  { title: "24/7 Skilled Nursing On-Call", desc: "Access to a Registered Nurse around the clock for medical oversight and emergency support." },
  { title: "Family-Centered Approach", desc: "We keep families informed and involved with regular updates and open communication." },
  { title: "IDD Specialized Support", desc: "Expert care for individuals with Intellectual and Developmental Disabilities to thrive in their community." },
  { title: "Medicaid & Insurance Support", desc: "We work with multiple funding sources including Medicaid waiver programs to help access care." },
];


const faqs = [
  { q: "What areas does CaringCor Home Health Care serve?", a: "We serve Denver, Jefferson, Douglas, Arapahoe, Adams, and surrounding Colorado counties. Our primary service area includes Aurora, Centennial, Denver, and surrounding communities." },
  { q: "What types of home health care services do you offer?", a: "We offer a full range including Personal Care, Homemaker Services, In-Home Support Services (IHSS), Individual Residential Services and Support (IRSS), Community Connector, Supported Community Connections, Mentorship, and Skilled Nursing." },
  { q: "Are your caregivers licensed and trained?", a: "Yes. All caregivers are thoroughly screened, background-checked, and trained. Our Skilled Nursing team includes licensed Registered Nurses available on-call 24/7." },
  { q: "Can family members get paid to provide care through IHSS?", a: "Yes! In-Home Support Services (IHSS) allows family members to get paid for providing care to loved ones with physical or mental disabilities. We provide the training and support needed." },
  { q: "Do you accept Medicaid?", a: "We work with multiple insurance providers and funding sources including Medicaid waiver programs to help families access the care they need. Contact us to discuss your specific coverage." },
];

/* ─────────── FAQ accordion ─────────── */
function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-gray-200 last:border-0 ${open ? "bg-primary-50/40" : "bg-white"} transition-colors`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-primary-300 font-heading w-6 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
          <span className="font-semibold text-gray-900 text-sm sm:text-base">{q}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-primary-600 shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 pl-16 text-gray-600 leading-relaxed text-sm">{a}</div>}
    </div>
  );
}

/* ─────────── Hero Slider ─────────── */
const slideVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] overflow-hidden bg-primary-900 flex items-center pb-20">

      {/* Background images — crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden
          />
          {/* Gradient overlay: heavy left, lighter right */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/92 via-primary-900/65 to-primary-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Slide content */}
      <div className="relative z-10 container-pad w-full py-24">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Tag pill */}

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold text-white leading-[1.1] mb-6">
                {slide.headline[0]}<br />
                <span className="text-accent-400">{slide.headline[1]}</span>
              </h1>

              {/* Sub */}
              <p className="text-primary-200 text-lg leading-relaxed mb-8 max-w-xl">
                {slide.sub}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={slide.cta1.href} className="btn-primary text-base py-3.5 px-8">
                  {slide.cta1.label} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}

/* ─────────── Main Page ─────────── */
export default function HomepageClient() {
  return (
    <div className="bg-white">

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* ─── STATS RIBBON — photo cards overlapping slider & about ─── */}
      <section className="relative z-20 -mt-16 pb-0">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden shadow-2xl">

            {/* ── Card 0: Logo / brand panel — white + subtle dot pattern ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="relative h-48 md:h-52 overflow-hidden group bg-white"
            >
              {/* Subtle dot pattern via SVG background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  opacity: 0.55,
                }}
              />
              {/* Soft edge fade */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-primary-50/40" />
              {/* Divider */}
              <div className="absolute right-0 top-4 bottom-4 w-px bg-primary-100 z-10 hidden md:block" />
              {/* Logo placeholder — swap <img> for real logo once provided */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-2">
                <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg mb-1">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="font-heading font-bold text-primary-900 text-base leading-tight">CaringCor</div>
                <div className="text-xs text-primary-500 font-medium tracking-wide">Home Health Care</div>
              </div>
            </motion.div>

            {/* ── Cards 1-3: photo panels ── */}
            {[
              {
                value: "24/7",
                label: "RN On-Call Support",
                icon: Clock,
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
              },
              {
                value: "3+",
                label: "Counties Served",
                icon: MapPin,
                img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
              },
              {
                value: "5★",
                label: "Client Satisfaction",
                icon: Star,
                img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                className="relative h-48 md:h-52 overflow-hidden group"
              >
                {/* Background photo */}
                <img
                  src={s.img}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-primary-700/40" />
                {/* Divider line between cards */}
                {i < 2 && <div className="absolute right-0 top-4 bottom-4 w-px bg-white/20 z-10 hidden md:block" />}
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-white leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-primary-100 font-semibold tracking-wide uppercase">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="pt-24 pb-20 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image mosaic */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80" alt="Caregiver with senior" className="rounded-2xl w-full h-56 object-cover" />
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80" alt="Home health care" className="rounded-2xl w-full h-56 object-cover mt-6" />
                <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80" alt="Elderly care" className="rounded-2xl w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80" alt="Mentorship" className="rounded-2xl w-full h-48 object-cover -mt-6" />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-primary-600 text-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="font-heading font-bold text-2xl">Trusted</div>
                <div className="text-xs text-primary-200">Home Health Care</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="section-title mb-6">Aurora&apos;s Trusted Home Health Care Provider</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                CaringCor Home Health Care is a client-centered healthcare provider based in Aurora, Colorado. Our mission is to administer care, support, and resources to our clients in the comfort of their homes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We also assist persons with Intellectual and Developmental Disabilities (IDD) to be healthy, safe, and active members of their community through our comprehensive range of services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Serving Denver, Jefferson, Douglas, and surrounding Colorado counties, we bring professional, compassionate care directly to your home.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, label: "Trained Professionals" },
                  { icon: Heart, label: "Personalized Care" },
                  { icon: Home, label: "Home & Community" },
                  { icon: Smile, label: "Family-Centered" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                    <item.icon className="w-4 h-4 text-primary-600" /> {item.label}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">Learn About Us</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="relative py-20" id="services">
        <img
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1920&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-700/65" />
        <div className="relative z-10 container-pad">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">Our Home Health Care Services</h2>
            <p className="text-primary-200 text-lg max-w-3xl mx-auto leading-relaxed">Comprehensive skilled and non-skilled services tailored to the needs of the elderly and families across Colorado</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/25 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-sm mb-2">{svc.title}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <Link href={svc.href} className="inline-flex items-center gap-1.5 text-accent-400 font-semibold text-xs uppercase tracking-wide group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary text-base py-3.5 px-8">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="py-20 bg-white">
        <div className="container-pad">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="section-title mb-4">Who We Serve</h2>
            <p className="section-subtitle">Dedicated support for diverse needs across our community</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Elderly Individuals", desc: "Helping seniors age with dignity through Personal Care and Homemaker Services in the comfort of their own home.", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80", icon: Heart, tag: "Senior Care" },
              { title: "Persons with IDD", desc: "Assisting individuals with Intellectual and Developmental Disabilities to be healthy, safe, and active community members.", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80", icon: Users, tag: "IDD Support" },
              { title: "Families", desc: "Through IHSS, family members can get paid to care for loved ones. We provide all training and support needed.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80", icon: Home, tag: "Family Care" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group relative overflow-hidden shadow-lg"
                style={{ minHeight: "380px" }}
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="font-heading font-bold text-white text-xl mb-2">{item.title}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="relative py-20">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-700/65" />
        <div className="relative z-10 container-pad">
          <motion.div {...fadeUp} className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-xl">Why Families Trust CaringCor</h2>
              </div>
              <p className="text-primary-200 max-w-md leading-relaxed">We go beyond basic care to deliver truly personalized, compassionate service that puts your loved ones first.</p>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-7 border border-white/20 hover:bg-white/25 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-primary-200 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── FAQ ─── */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container-pad">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <motion.div {...fadeUp} className="lg:col-span-2">
              <h2 className="section-title mb-5">Frequently Asked Questions</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Answers to common questions about our home health care services. Can&apos;t find what you&apos;re looking for?
              </p>
              <Link href="/contact" className="btn-primary">Contact Us</Link>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm divide-y divide-gray-200">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} idx={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
