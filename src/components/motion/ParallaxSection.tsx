"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  overlay?: boolean;
  className?: string;
}

export function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.3,
  overlay = true,
  className,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 -top-20 -bottom-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y,
          }}
        />
      )}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-primary/70" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
