"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "4145 Route 1 South\nMonmouth Junction, NJ 08852",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(732) 329-0003",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@iscj.org",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9 AM – 5 PM\nSat – Sun: 10 AM – 2 PM",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Visit Us"
            subtitle="We'd love to welcome you. Reach out or stop by anytime."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <FadeIn direction="left">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5">
                    <item.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                      {item.label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-text-primary leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Map placeholder */}
          <FadeIn direction="right">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <iframe
                title="ISCJ Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.123456789!2d-74.55!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ4LjAiTiA3NMKwMzMnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
