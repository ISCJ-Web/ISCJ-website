"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

/*
  ──────────────────────────────────────────────
  UPDATE PRAYER TIMES HERE EACH MONTH
  ──────────────────────────────────────────────
*/

const month = "February";
const year = 2026;

const iqamaSchedule = [
  {
    range: "1st – 10th",
    note: "*Sundays Dhuhr is still 1:10 PM",
    times: [
      { name: "Fajr", time: "6:15 AM" },
      { name: "Dhuhr", time: "12:30 PM" },
      { name: "Asr", time: "3:45 PM" },
      { name: "Maghrib", time: "On Time" },
      { name: "Isha", time: "8:00 PM" },
    ],
  },
  {
    range: "11th – 17th",
    note: "*Sundays Dhuhr is still 1:10 PM",
    times: [
      { name: "Fajr", time: "6:00 AM" },
      { name: "Dhuhr", time: "12:30 PM" },
      { name: "Asr", time: "3:45 PM" },
      { name: "Maghrib", time: "On Time" },
      { name: "Isha", time: "8:00 PM" },
    ],
  },
];

const jummahTimes = "12:00 PM and 1:10 PM";

const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

export function PrayerTimesSection() {
  return (
    <section id="prayer-times" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          title={`${month} ${year} Iqama Times`}
          subtitle="Join us for daily congregational prayers. Times are updated each month."
        />

        <FadeIn>
          <div className="mx-auto max-w-4xl">
            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* Column headers */}
              <div className="grid bg-primary text-white" style={{ gridTemplateColumns: `1fr ${iqamaSchedule.map(() => "1fr").join(" ")}` }}>
                <div className="px-5 py-4 text-sm font-medium uppercase tracking-wider text-white/60">
                  Prayer
                </div>
                {iqamaSchedule.map((block) => (
                  <div key={block.range} className="px-5 py-4 text-center">
                    <span className="text-sm font-bold">
                      {block.range}
                    </span>
                  </div>
                ))}
              </div>

              {/* Prayer rows */}
              {prayers.map((name, i) => (
                <div
                  key={name}
                  className={`grid items-center ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
                  style={{ gridTemplateColumns: `1fr ${iqamaSchedule.map(() => "1fr").join(" ")}` }}
                >
                  <div className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                    {name}
                  </div>
                  {iqamaSchedule.map((block) => {
                    const prayer = block.times.find((t) => t.name === name);
                    return (
                      <div key={block.range} className="px-5 py-3.5 text-center text-[15px] font-bold text-text-primary">
                        {prayer?.time}
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Notes row */}
              {iqamaSchedule.some((b) => b.note) && (
                <div className="border-t border-border bg-surface/60 px-5 py-3">
                  <p className="text-center text-xs italic text-text-secondary">
                    {iqamaSchedule[0].note}
                  </p>
                </div>
              )}
            </div>

            {/* Jummah pill */}
            <div className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-primary/5 px-6 py-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Jummah
              </span>
              <span className="h-4 w-px bg-primary/20" />
              <span className="text-[15px] font-bold text-primary">
                {jummahTimes}
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
