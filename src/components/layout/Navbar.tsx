"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

const MotionLink = motion.create(Link);

function scrollToTop(e: React.MouseEvent) {
  if (window.location.pathname === "/" || window.location.pathname.endsWith("/ISCJ-website/") || window.location.pathname.endsWith("/ISCJ-website")) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Prayer Times", href: "#prayer-times" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Phone, href: "tel:+1234567890", label: "Phone" },
  { icon: Mail, href: "mailto:info@iscj.org", label: "Email" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top bar: social icons | logo + name | donate */}
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Social icons — desktop only */}
          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white/60 transition-colors hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Center: Logo + org name */}
          <Link href="/" onClick={scrollToTop} className="flex items-center gap-3 md:flex-col md:gap-1">
            <span className="hidden text-[11px] font-medium uppercase tracking-widest text-white/70 md:block">
              Islamic Society of Central Jersey
            </span>
            {!logoError ? (
              <Image
                src="./images/iscj-white-logo.png"
                alt="ISCJ Logo"
                width={56}
                height={56}
                className="h-10 w-10 object-contain md:h-14 md:w-14"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <Image
                src="/images/logo-placeholder.svg"
                alt="ISCJ Logo Placeholder"
                width={56}
                height={56}
                className="h-10 w-10 md:h-14 md:w-14"
                priority
              />
            )}
            <span className="text-[11px] font-semibold uppercase leading-tight tracking-wider text-white/90 md:hidden">
              Islamic<br />
              Society of<br />
              Central Jersey
            </span>
          </Link>

          {/* Right: Donate button + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#donate"
              className="hidden rounded border-2 border-white px-5 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary md:inline-flex"
            >
              Donate
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "relative z-50 cursor-pointer md:hidden",
                mobileOpen ? "text-primary" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Desktop navigation row */}
      <nav className="hidden border-t border-white/15 md:block">
        <Container>
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    className="inline-block py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={scrollToTop}
                    className="inline-block py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-[11px] font-medium uppercase tracking-widest text-text-secondary">
                  Islamic Society of Central Jersey
                </span>
                <Image
                  src={logoError ? "/images/logo-placeholder.svg" : "/images/iscj-white-logo.png"}
                  alt="ISCJ Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain brightness-0 opacity-80"
                />
              </motion.div>

              {navLinks.map((link, i) =>
                link.href.startsWith("#") ? (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-2xl font-semibold text-primary transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <MotionLink
                    key={link.href}
                    href={link.href}
                    onClick={(e: React.MouseEvent) => { setMobileOpen(false); scrollToTop(e); }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-2xl font-semibold text-primary transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </MotionLink>
                )
              )}

              <motion.a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                className="mt-4 rounded border-2 border-primary px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Donate
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex items-center gap-5"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-text-secondary transition-colors hover:text-primary"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
