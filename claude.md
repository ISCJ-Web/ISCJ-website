# ISCJ Mosque Website

## Project Overview

Website for the Islamic Society of Central Jersey (ISCJ) mosque. A modern, animated, public-facing site with an admin dashboard for managing events and content.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (utility-first)
- **Animations:** Framer Motion (parallax, scroll-triggered reveals, transitions)
- **Backend:** Supabase (Postgres DB, Auth, Row-Level Security)
- **Icons:** Lucide React
- **Fonts:** Rethink Sans (headings) + Geist (body) via `next/font/google`

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx          # Root layout (font, metadata, navbar/footer)
│   ├── page.tsx            # Home page (assembles section components)
│   └── globals.css         # Tailwind directives + CSS custom properties
├── components/
│   ├── ui/                 # Reusable design-system primitives (Button, Card, etc.)
│   ├── layout/             # Structural components (Navbar, Footer)
│   ├── home/               # Home page section components (HeroSection, etc.)
│   └── motion/             # Reusable animation wrappers (FadeIn, ScrollReveal, etc.)
├── lib/                    # Utilities and client configs (supabase.ts)
└── types/                  # Shared TypeScript interfaces
```

## Design System

- **Primary:** `#012544` (dark navy blue)
- **Primary Light:** `#1a3a5c` (hover states)
- **Background:** `#ffffff` (white)
- **Surface:** `#f8fafc` (alternating light gray sections)
- **Text Primary:** `#0f172a`
- **Text Secondary:** `#64748b`

## Component Conventions

- All components are in PascalCase files (e.g., `Button.tsx`)
- UI primitives accept standard HTML props via `React.ComponentPropsWithoutRef`
- Section components are self-contained with their own data/layout
- Motion wrappers accept `children` and animation config props
- Use `"use client"` only on components that need browser APIs or interactivity

## Styling Conventions

- Tailwind utility classes for all styling; no CSS modules
- Custom colors defined in `tailwind.config.ts` under `theme.extend.colors`
- Use `cn()` utility (clsx + tailwind-merge) for conditional class merging
- Consistent spacing scale: sections use `py-20` or `py-24`

## Future Plans

- Supabase integration for events CRUD and prayer times
- Admin dashboard with Supabase Auth (email/password)
- Additional pages: About, Events listing, Contact
- Data migration from existing static site
