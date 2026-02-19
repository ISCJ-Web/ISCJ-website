"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const blocks = [
  {
    label: "About",
    title: "Who we are",
    paragraphs: [
      "We aspire to be the anchor of a model community of practicing Muslims of diverse backgrounds, democratically governed, efficiently served, relating to one another with inclusiveness and tolerance, and interacting with the neighbors and the community at large in an Islamic exemplary fashion.",
      "The fundamental objective of the Society will be to seek Glory to Allah Subhanahu Wa Ta'ala.",
      "The Quran, Sunnah and the Sharia shall always be the guiding light for the Society.",
    ],
    image: "./images/iscj2.jpg",
    imageAlt: "ISCJ community members",
    imagePosition: "right" as const,
  },
  {
    label: "",
    title: "What we do",
    paragraphs: [
      "ISCJ (Islamic Society of Central Jersey) is a community center that provides a range of services to meet the needs of its members.",
      "These services include a Food Pantry, offering essential food items to those in need, a Friday Halaqa, where attendees gather for enlightening discussions on Islamic teachings, a full time weekend school for K-10th grade students, and Qur'an classes as well as youth and young adult classes. ISCJ also conducts Friday Sermons to inspire and educate the community.",
      "Additionally, ISCJ provides funeral services, Eid services, and marriage service. With these services, we strive to foster a supportive and inclusive community environment.",
    ],
    image: "./images/iscj3.jpg",
    imageAlt: "ISCJ community activities",
    imagePosition: "left" as const,
    cta: { label: "Learn More", href: "/about" },
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-surface py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Welcome to Our Mosque"
            subtitle="The Islamic Society of Central Jersey has been serving the Muslim community with dedication, providing a space for worship, education, and fellowship."
          />
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16"
            >
              {/* Text */}
              <FadeIn
                direction={block.imagePosition === "right" ? "left" : "right"}
                className={block.imagePosition === "left" ? "lg:order-2" : ""}
              >
                <div>
                  {block.label && (
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">
                      {block.label}
                    </p>
                  )}
                  <h2 className="mt-2 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                    {block.title}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {block.paragraphs.map((p, i) => (
                      <p key={i} className="leading-relaxed text-text-secondary">
                        {p}
                      </p>
                    ))}
                  </div>
                  {block.cta && (
                    <Link
                      href={block.cta.href}
                      className="mt-8 inline-flex rounded bg-primary px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-light"
                    >
                      {block.cta.label}
                    </Link>
                  )}
                </div>
              </FadeIn>

              {/* Image */}
              <FadeIn
                direction={block.imagePosition === "right" ? "right" : "left"}
                className={block.imagePosition === "left" ? "lg:order-1" : ""}
              >
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[280px]">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
