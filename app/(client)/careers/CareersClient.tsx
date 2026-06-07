"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Briefcase, Heart, CheckCircle } from "lucide-react";
import { EMAIL, SITE_NAME } from "@/lib/siteConfig";

const positions = [
  { title: "Personal Care Aide (PCA)", type: "Full-time / Part-time", desc: "Provide compassionate personal care assistance to clients in their homes." },
  { title: "Registered Nurse (RN)", type: "Full-time / On-Call", desc: "Deliver skilled nursing care and provide 24/7 on-call medical support." },
  { title: "Community Support Worker", type: "Full-time / Part-time", desc: "Support individuals with IDD to access community resources and activities." },
  { title: "Mentor / Support Specialist", type: "Part-time", desc: "Guide individuals toward personal goals through consistent mentorship and supervision." },
  { title: "Homemaker / Home Health Aide", type: "Full-time / Part-time", desc: "Provide homemaking and daily living support services to clients." },
];

const benefits = [
  "Competitive pay", "Flexible scheduling", "Paid training provided",
  "Supportive team environment", "Meaningful work with real impact",
  "Career growth opportunities", "Mileage reimbursement", "Background check assistance",
];

const schema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone required"),
  positionApplied: z.string().min(1, "Select a position"),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export default function CareersClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Job Application – ${data.positionApplied}`);
    const body = encodeURIComponent(
      `Full Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nPosition: ${data.positionApplied}\n\n${data.message || ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 md:py-24">
        <div className="container-pad text-white">
          <div className="flex items-center gap-2 text-primary-300 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Join Our Team</h1>
          <p className="text-primary-200 text-lg max-w-xl">Make a difference in the lives of others. CaringCor is always looking for compassionate, dedicated care professionals.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container-pad">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-8">Open Positions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {positions.map((p, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">{p.title}</h3>
                <span className="inline-block bg-secondary-100 text-secondary-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">{p.type}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h2 className="font-heading font-bold text-xl text-gray-900 mb-5 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary-600" /> Why Work at {SITE_NAME}?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-primary-600 shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 max-w-3xl">
            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">Apply Now</h2>
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-xl">Opening Your Email App...</h3>
                <p className="text-gray-600 max-w-sm">Your application has been prepared. Complete sending it from your email app. You can also email us directly at <a href={`mailto:${EMAIL}`} className="text-primary-600 underline">{EMAIL}</a>.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-2">Apply for Another Position</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input {...register("fullName")} placeholder="Your full name" className="input-field" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input {...register("email")} type="email" placeholder="your@email.com" className="input-field" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input {...register("phone")} type="tel" placeholder="(720) 000-0000" className="input-field" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Position Applying For *</label>
                    <select {...register("positionApplied")} className="input-field">
                      <option value="">Select a position...</option>
                      {positions.map((p) => <option key={p.title} value={p.title}>{p.title}</option>)}
                    </select>
                    {errors.positionApplied && <p className="text-red-500 text-xs mt-1">{errors.positionApplied.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Cover Letter / Additional Notes</label>
                  <textarea {...register("message")} rows={4} placeholder="Tell us about yourself and why you want to join our team..." className="input-field resize-none" />
                </div>
                <button type="submit" className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
