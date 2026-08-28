# KROVOS INC. — Website Redesign Plan

> **Plan date:** 2026-08-28
> **Project:** Krovos.ca — Next.js 16 / React 19 / Tailwind v4 / Framer Motion
> **Live:** https://krovos.ca → Netlify (site `3c7f4bb1-c4ce-4c49-b792-701b409c86f0`)
> **Repo:** https://github.com/dchatpar/krovos
> **Current domain:** krovos.ca

---

## ⚡ Phase 0 — Critical Fixes (MUST do before any design work)

### 0.1 Company Address
**From (placeholders):**
- "123 Innovation Drive, San Francisco, CA 94102" (75% of pages)
- "1000-500 Granville Street, Vancouver, BC V6C 1S4"
- "Level 42, Emirates Tower, Sheikh Zayed Road, Dubai"
- "Level 8, One BKC, G Block, Bandra Kurla Complex, Mumbai 400051"

**To:**
```
13428 105 Ave Suite 1410
Surrey, BC V3T 0S6
Canada
```

### 0.2 Email Domain
**From:** `@krovos.com` → **To:** `@krovos.ca`
All email references across 10+ files.

### 0.3 Remove Multi-City Claims
Remove all references to Vancouver HQ, Dubai office, Mumbai office. Keep only **Surrey, BC** as the single location. This affects:
- Home page hero subheadline
- Home page "Global Offices" section → either remove or convert to single-location card
- About page timeline (remove expansion milestones)
- About/Company about page "Global Presence" sections
- Contact page office cards (collapse to one)
- Careers page job location badges (change to "Surrey, BC" or "Remote")
- Layout metadata description

### 0.4 Legal Pages
- Terms of Service: change governing law from California → British Columbia / Canada
- Privacy Policy: change contact address from San Francisco → Surrey
- Terms of Service: change contact address from San Francisco → Surrey
- Both: change `privacy@krovos.com` / `legal@krovos.com` → `@krovos.ca`

---

## 🏗️ Phase 1 — Design Foundation (already partially built)

The current site has a solid foundation:
- **Colors**: Navy (#0A1628), Gold (#D4A017), Teal (#0E7C7B) — **keep these**
- **Fonts**: Inter (body), Syne (display), JetBrains Mono (code) — **keep these**
- **CSS**: Full design system in `globals.css` with glass, card, bento, mesh classes
- **Existing utilities**: `btn-primary`, `btn-secondary`, `glass`, `card-premium`, gradient text classes

**Design philosophy for Phase 1:** Modern, premium B2B enterprise — think Stripe/Linear dark mode meets McKinsey clean. The dark navy + gold is distinctive and professional.

---

## 🎨 Phase 2 — Visual Upgrade Priorities

### 2.1 Navigation Bar
**Current:** Fixed glass navbar with mega-menu for Services, responsive mobile drawer
**Improvements:**
- [ ] Add subtle gold underline animation on active nav item
- [ ] Smooth glass blur transition from transparent → glass on scroll
- [ ] Add "Get Started" button with pulse-glow effect
- [ ] Mobile: smoother slide-down drawer

### 2.2 Hero Section
**Current:** Mesh gradient animated orbs + bold headline + badge pills + CTA buttons
**Improvements:**
- [ ] Replace generic mesh gradient with layered 3D particle/canvas effect (subtle — don't be gaudy)
- [ ] Better loading strategy — hero should appear instantly, not wait for framer-motion
- [ ] Tagline: shorten to one strong statement reflecting actual single-location Surrey business
- [ ] Remove `[UNVERIFIED]` badges "ISO-Certified" / "GDPR Compliant" unless real certs exist
- [ ] Replace "200+ projects · 11 countries · Fortune 500 clients" with honest metrics or remove

### 2.3 Services Section (the 6 services — this is the core)
**Current:** 3-column grid with AI & Automation (large card) and 5 normal cards
**Improvements:**
- [ ] Add actual service detail pages or links (currently all hrefs go to non-existent `/services/*`)
- [ ] Add icons per service (custom SVG, not generic stroke icons)
- [ ] Each service card should clearly answer "what does this mean for me?"
- [ ] Bento layout with visual hierarchy

### 2.4 Stats Counter Bar
**Current:** Animated counter (200+, 450+, 11, 120+)
**Problem:** All stats are **[UNVERIFIED]** / fabricated
**Fix:** Either remove, replace with honest metrics, or mark clearly as aspirational

### 2.5 Client Logo Marquee
**Current:** Fictional company names ("TechCorp", "GlobalBank", "MediCare", etc.) on animated marquee
**Fix:** Replace with actual clients if any exist, or remove section entirely. Fabricated logos damage credibility.

### 2.6 Case Studies
**Current:** 3 generic case studies with fabricated client names and results
**Fix:** Same as above — replace with real work or remove. Keep the card component for when real case studies exist.

### 2.7 Testimonials
**Current:** 3 fabricated testimonials (James Morrison / Priya Sharma / Michael Chen — all fictional)
**Fix:** Remove entirely. Replace with "Get in Touch" section or real testimonials when available.

### 2.8 Why Krovos → Why Choose Us
**Current:** 4 cards — "Global 3-Office Delivery", "6-Division Capability", "Fixed-Price Engagement", "Enterprise-Grade Quality"
**Problem:** 3-office model no longer applies (Surrey only)
**Fix:** Rewrite for single-location boutique agency reality. Keep "Fixed Price" and "Quality" angles.

### 2.9 Global Offices → Contact Info / Location
**Current:** SVG world map with Vancouver/Dubai/Mumbai dots
**Fix:** Replace with a single "Our Location" card showing:
- Real Google Maps embed or static map of Surrey, BC
- Actual phone number
- info@krovos.ca
- Business hours

### 2.10 Final CTA
**Current:** Gold gradient section with "Ready to Build Something Extraordinary?"
**Fix:** This section is well-designed — keep with minor copy tweaks.

---

## 📄 Phase 3 — Page-by-Page Changes

### Root page (`/`)
- ✅ Services section (6 services — **keep**, these are the core offerings)
- Replace fabricated logos/case studies/testimonials
- Remove multi-city global claims
- Fix address and email

### About (`/about` and `/company/about`)
- Remove fabricated leadership bios (Sarah Chen/Google, Marcus Rodriguez/Stanford, Emily Watson/McKinsey)
- Replace timeline with honest company history (incorporated 2026-02-24)
- Remove "SOC 2 Type II" claim unless real
- Fix address

### Careers (`/careers` and `/company/careers`)
- Remove fabricated "120+ team members", "98% employee satisfaction", "Glassdoor 4.9"
- Change job locations from Vancouver/Dubai/Mumbai to Surrey, BC / Remote
- Remove inflated department counts ("12 open" when company just started)
- Keep the benefits/perks cards — they're aspirational but useful

### Contact (`/contact`)
- **This page needs the most work**
- Collapse 3 office cards → 1 Surrey location card
- Replace "1000-500 Granville" → 13428 105 Ave Suite 1410, Surrey
- Fix phone numbers (remove 555 placeholders — need real number)
- Change email to info@krovos.ca
- Keep the contact form (it works as a lead capture)

### Legal pages
- Fix addresses, emails, governing law

### Other pages (`/solutions/*`, `/resources/*`, `/services/*`, `/docs`, `/demo`, `/login`, `/signup`, `/status`, `/trust`)
- These are mostly template pages with no fabricated claims
- Fix emails where present
- No major redesign needed for most

---

## 🚀 Phase 4 — Deployment

### Netlify Redeploy
```bash
cd /c/Users/dchat/Documents/krovos
npm run build    # Build Next.js static export or server
npx netlify deploy --prod --dir=.next
```

Since the site already auto-deploys from GitHub main branch:
```bash
git add -A
git commit -m "Address update + content cleanup"
git push origin main
```

Netlify auto-detects the push and deploys.

---

## 📋 Timeline Estimate
| Phase | Effort | Priority |
|-------|--------|----------|
| 0. Address + email fixes | 30 min | 🔴 CRITICAL |
| 1. Home page cleanup | 2-3 hrs | 🟡 HIGH |
| 2. About page rewrite | 1-2 hrs | 🟡 HIGH |
| 3. Contact page consolidation | 1 hr | 🟡 HIGH |
| 4. Legal pages | 30 min | 🟢 MEDIUM |
| 5. Design polish | 3-4 hrs | 🟢 MEDIUM |
| 6. Deployment | 30 min | 🔴 CRITICAL |
| **Total** | **~10 hrs** | |

---

## ✅ Success Criteria
1. ✅ All addresses show "13428 105 Ave Suite 1410, Surrey, BC V3T 0S6"
2. ✅ All emails use `@krovos.ca` domain
3. ✅ No fabricated client logos, testimonials, or case studies on home page
4. ✅ No multi-city "global presence" claims
5. ✅ Legal pages use correct jurisdiction (BC, Canada)
6. ✅ Site builds and deploys cleanly
7. ✅ Live at krovos.ca reflects all changes

---

## 🛑 Fabricated Content to Remove/Replace
| Section | What | Action |
|---------|------|--------|
| Hero badges | ISO-Certified, GDPR Compliant | Remove unless certified |
| Hero social proof | "200+ projects · 11 countries · Fortune 500" | Remove or rephrase |
| Stats bar | 200+/450+/11/120+ | Remove or replace with real |
| Client logos | 15 fabricated company names | Remove entire section |
| Case studies | Global Bank, Hospital, Retail | Remove entire section |
| Testimonials | 3 fabricated quotes | Remove entire section |
| Leadership | Sarah Chen, Marcus Rodriguez, et al. | Remove fabricated bios |
| Timeline | 2023 founding when corp is 2026 | Fix |
| Office addresses | SF, Vancouver, Dubai, Mumbai | → Surrey only |
| Social links | Linkedin/Twitter/GitHub/YouTube follower counts | Remove counts |