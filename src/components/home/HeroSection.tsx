"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[70vh] min-h-[480px] overflow-hidden"
    >
      {/* Background — replace with a real mosque photo */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image src="/images/iscj1.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </motion.div>

      {/* Left-aligned content */}
      <Container className="relative z-10 flex h-full items-end pb-16 sm:items-center sm:pb-0">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm"
          >
            Mosque &amp; Community Center
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Islamic Society of
            <br />
            Central Jersey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-base text-white/75 sm:text-lg"
          >
            Islam, Education, Community
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
