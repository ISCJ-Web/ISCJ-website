import { HeroSection } from "@/components/home/HeroSection";
import { RamadanSection } from "@/components/home/RamadanSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PrayerTimesSection } from "@/components/home/PrayerTimesSection";
import { EventsSection } from "@/components/home/EventsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RamadanSection />
      <PrayerTimesSection />
      <AboutSection />
      <EventsSection />
      <ContactSection />
    </>
  );
}
