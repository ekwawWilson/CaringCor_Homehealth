"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, HOURS } from "@/lib/siteConfig";
import PageHero from "@/components/layout/PageHero";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\n\n${data.message}`
    );
    const subject = encodeURIComponent(data.subject);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Contact Us"
        subtitle="Reach out with questions or to learn more about our home health care services. We're here to help."
        img="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1600&q=80"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-16">
        <div className="container-pad">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">Our team is here to help. Whether you have questions about our services, need to schedule a care assessment, or want to learn about career opportunities — we want to hear from you.</p>
              </div>
              {[
                { icon: Phone, label: "Phone", value: PHONE, href: PHONE_HREF },
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MapPin, label: "Address", value: ADDRESS, href: undefined },
                { icon: Clock, label: "Hours", value: HOURS, href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="text-gray-800 font-medium hover:text-primary-600 transition-colors">{item.value}</a>
                      : <span className="text-gray-800 font-medium">{item.value}</span>
                    }
                  </div>
                </div>
              ))}
              <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100 mt-6">
                <p className="text-primary-800 text-sm font-medium mb-1">24/7 Skilled Nursing Available</p>
                <p className="text-primary-600 text-xs">Our Registered Nurses are on-call around the clock for existing clients with medical needs.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xl">Opening Your Email App...</h3>
                    <p className="text-gray-600 max-w-sm">Your message has been prepared. Complete sending it from your email app. You can also reach us directly at <a href={`mailto:${EMAIL}`} className="text-primary-600 underline">{EMAIL}</a>.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary mt-2">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input {...register("name")} placeholder="Your full name" className="input-field" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input {...register("email")} type="email" placeholder="your@email.com" className="input-field" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input {...register("phone")} type="tel" placeholder="(720) 000-0000" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                        <input {...register("subject")} placeholder="How can we help?" className="input-field" />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea {...register("message")} rows={5} placeholder="Tell us about your needs..." className="input-field resize-none" />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-gray-100 flex items-center justify-center border-t border-gray-200">
        <div className="text-center text-gray-500">
          <MapPin className="w-8 h-8 mx-auto mb-2 text-primary-400" />
          <p className="font-medium text-gray-700">10800 E Bethany Drive, Aurora, CO 80014</p>
          <a href="https://maps.google.com/?q=10800+E+Bethany+Drive+Aurora+CO+80014" target="_blank" rel="noopener noreferrer" className="text-primary-600 text-sm hover:underline mt-1 inline-block">
            View on Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
