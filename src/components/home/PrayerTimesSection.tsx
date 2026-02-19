"use client";

import { Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import type { PrayerTime } from "@/types";

const prayerTimes: PrayerTime[] = [
  { name: "Fajr", time: "5:45 AM" },
  { name: "Dhuhr", time: "1:00 PM" },
  { name: "Asr", time: "4:30 PM" },
  { name: "Maghrib", time: "6:15 PM" },
  { name: "Isha", time: "7:45 PM" },
  { name: "Jummah", time: "1:30 PM" },
];

export function PrayerTimesSection() {
  return (
    <section id="prayer-times" className="bg-primary py-24 lg:py-32">
      <Container>
        <SectionHeading
          title="Prayer Times"
          subtitle="Join us for daily congregational prayers. Times are updated regularly."
          light
        />

        <ScrollReveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {prayerTimes.map((prayer) => (
            <ScrollRevealItem key={prayer.name}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <Clock
                  className="mx-auto mb-3 h-5 w-5 text-white/40 transition-colors group-hover:text-white/70"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-medium uppercase tracking-wider text-white/60">
                  {prayer.name}
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {prayer.time}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        <p className="mt-10 text-center text-sm text-white/40">
          Times shown are approximate. Please verify before attending.
        </p>
      </Container>
    </section>
  );
}
