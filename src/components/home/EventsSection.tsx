"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import type { Event } from "@/types";

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Friday Night Halaqa",
    date: "Every Friday",
    description:
      "Join us for a weekly gathering of knowledge, reflection, and community discussion after Isha prayer.",
  },
  {
    id: "2",
    title: "Community Potluck Dinner",
    date: "March 15, 2026",
    description:
      "A family-friendly evening of food and fellowship. Bring a dish to share with the community.",
  },
  {
    id: "3",
    title: "Youth Quran Competition",
    date: "April 5, 2026",
    description:
      "Annual Quran recitation competition for youth ages 7-18. Registration open now.",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          title="Upcoming Events"
          subtitle="Stay connected with what's happening at our mosque. Join us for these upcoming programs and gatherings."
        />

        <ScrollReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <ScrollRevealItem key={event.id}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <Calendar className="h-4 w-4" strokeWidth={2} />
                  <span className="text-sm font-semibold">{event.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-text-primary">
                  {event.title}
                </h3>
                <p className="mb-6 flex-1 text-text-secondary leading-relaxed">
                  {event.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit gap-2 self-start"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
