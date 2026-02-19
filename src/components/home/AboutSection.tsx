"use client";

import { Heart, BookOpen, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const highlights = [
  {
    icon: Heart,
    title: "Faith & Devotion",
    description:
      "A welcoming space for daily prayers, Friday Jummah, and spiritual reflection.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Quran classes, Islamic studies, and youth programs for lifelong learning.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Events, gatherings, and services that bring families and neighbors together.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Welcome to Our Mosque"
            subtitle="The Islamic Society of Central Jersey has been serving the Muslim community with dedication, providing a space for worship, education, and fellowship."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} direction="up" delay={0.1 + i * 0.15}>
              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                  <item.icon
                    className="h-7 w-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
