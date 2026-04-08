---
name: Vetron Landing Page Project
description: Austrian B2B automation software landing page built with Next.js 16, React 19, Tailwind v4, shadcn
type: project
---

Vetron is an Austrian B2B software company building automation tools for mid-sized manufacturing companies.

**Why:** Production-ready landing page at vetron.at to market ComplianceFlow (CE declarations + safety data sheets automation).

**Tech stack:**
- Next.js 16.2.2 (App Router), React 19
- Tailwind CSS v4 (`@import "tailwindcss"`, no config file, uses CSS custom properties)
- shadcn with "radix-nova" style — button uses `Slot.Root` from `radix-ui` (not `@radix-ui/react-slot`)
- Framer Motion 12, lucide-react 1.7

**Design system:**
- Background: #000000, Accent: #2563EB, Text: white
- Font: Inter (via `next/font/google`, CSS var `--font-inter`)
- Apple-inspired minimal, no gradients except subtle blue glow

**Pages:**
- `/` — Vetron home: hero (FloatingPaths + rotating words), products cards, stats count-up, footer
- `/complianceflow` — Product page: hero, how-it-works + features, pricing (monthly/annual toggle), CTA

**ComplianceFlow CTA links:** `http://127.0.0.1:5000` (test) and `http://127.0.0.1:5000/register` (register)

**How to apply:** When modifying the site, note Tailwind v4 uses CSS vars for theming in `globals.css`, not `tailwind.config.js`. The FloatingPaths animation uses deterministic durations (not Math.random()) to avoid SSR hydration issues.
