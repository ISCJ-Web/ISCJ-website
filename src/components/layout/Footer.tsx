"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Prayer Times", href: "#prayer-times" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          {/* Branding */}
          <div>
            <Link href="/" onClick={scrollToTop} className="flex items-center gap-3">
              <Image
                src="/images/iscj-white-logo.png"
                alt="ISCJ Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="text-xs font-semibold uppercase leading-relaxed tracking-wider text-white/90">
                Islamic<br />
                Society of<br />
                Central Jersey
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              The Islamic Society of Central Jersey — serving the community
              through worship, education, and outreach.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={scrollToTop}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-white/70">
              <p>4145 Route 1 South</p>
              <p>Monmouth Junction, NJ 08852</p>
              <p className="pt-2">(732) 329-0003</p>
              <p>info@iscj.org</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Islamic Society of Central Jersey.
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
