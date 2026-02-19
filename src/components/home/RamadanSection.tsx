"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const flyers = [
  { src: "./images/ramadan-dates.jpg", alt: "Ramadan Important Dates" },
  { src: "./images/ramadan-prayer-times.png", alt: "Ramadan Prayer Times" },
];

export function RamadanSection() {
  return (
    <section id="ramadan" className="bg-surface py-24 lg:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">
              &#1585;&#1605;&#1590;&#1575;&#1606; &#1605;&#1576;&#1575;&#1585;&#1603;
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
              Ramadan Mubarak
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Wishing you and your family a blessed Ramadan. May this holy month
              bring peace, reflection, and abundant blessings to our community.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {flyers.map((flyer) => (
              <div
                key={flyer.src}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={600}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
