# Krovos live-vs-local diff report

Generated 2026-08-28 from `https://krovos.ca` fetched with Python `urllib.request`, Mozilla UA, 20s timeout. 17 top-level routes + 17 subroutes probed.

---

## TL;DR

- **The live site is NOT the current local source.** It is an entirely different, older brand/build.
- **Local title**: `Krovos Inc. | Global Enterprise Technology Holdings`
- **Live title (homepage)**: `Krovos Inc. | AI Development & Staff Augmentation Company` — different brand position, different business description, different locale (Toronto vs Vancouver).
- **Four top-level routes 404 on live** (`/product`, `/company`, `/careers`, `/legal`) — three of them ALSO lack a `page.tsx` in local source, but `/careers` has a full page locally. Live render is Next.js `notFound()`, not a Netlify Function.
- **404 page itself has been cached at the Netlify edge for ~98 days** (Age: 8,456,148s).
- **Local subroutes for `/services/*` are 404 live** (different slug names exist live: `ai-development`, `staff-augmentation`). Local `/services/{ai-automation,custom-software,...}` simply don't exist on the live deployment.

---

## 1. Status matrix

Top-level routes — raw measurement from `urllib.request`:

| Route | Live status | Body size (bytes) | ETag | Live title |
|---|---|---|---|---|
| `/` | 200 | 48,563 | `2bzyrif8wj11gw` | Krovos Inc. \| AI Development & Staff Augmentation Company |
| `/about` | 200 | 63,158 | — | Krovos Inc. \| AI Development & Staff Augmentation Company |
| `/services` | 200 | 42,404 | — | AI Development & Staff Augmentation Services - Krovos |
| `/solutions` | 200 | 37,913 | — | Solutions - Krovos |
| `/product` | **404** | 30,122 | `s8u11ziy9kn8p` | Krovos Inc. \| AI Development & Staff Augmentation Company (404 page) |
| `/company` | **404** | 30,122 | `s8u11ziy9kn8p` | Krovos Inc. \| AI Development & Staff Augmentation Company (404 page) |
| `/trust` | 200 | 58,979 | — | Trust & Quality - Krovos Inc. |
| `/contact` | 200 | 60,884 | — | Contact Krovos - AI Development & Staff Augmentation |
| `/careers` | **404** | 30,122 | `s8u11ziy9kn8p` | Krovos Inc. \| AI Development & Staff Augmentation Company (404 page) |
| `/docs` | 200 | 50,308 | — | Our Process - Krovos |
| `/integrations` | 200 | 72,992 | — | Technologies We Work With - Krovos |
| `/resources` | 200 | 65,589 | — | Resources - Krovos |
| `/status` | 200 | 36,068 | — | Service Availability - Krovos |
| `/demo` | 200 | 33,465 | — | Book a Consultation - Krovos |
| `/signup` | 200 | 36,775 | — | Get In Touch - Krovos |
| `/login` | 200 | 37,986 | — | Client Portal - Coming Soon \| Krovos |
| `/legal` | **404** | 30,122 | `s8u11ziy9kn8p` | Krovos Inc. \| AI Development & Staff Augmentation Company (404 page) |

Subroutes probed (out of scope of the requested 17, but informative):

| Route | Live status | Body size |
|---|---|---|
| `/services/ai-automation` | 404 | 30,122 |
| `/services/custom-software` | 404 | 30,122 |
| `/services/digital-marketing` | 404 | 30,122 |
| `/services/logistics` | 404 | 30,122 |
| `/services/managed-it` | 404 | 30,122 |
| `/services/talent-solutions` | 404 | 30,122 |
| `/services/ai-development` | 200 | 57,141 |
| `/services/staff-augmentation` | 200 | 57,097 |
| `/company/about` | 200 | 74,301 |
| `/company/careers` | 404 | 30,122 |
| `/company/leadership` | 200 | 44,224 |
| `/company/partners` | 404 | 30,122 |
| `/company/press` | 404 | 30,122 |
| `/legal/cookies` | connection closed | 0 |
| `/legal/privacy` | 200 | 41,019 |
| `/legal/terms` | 200 | 41,365 |

The four 404 top-level routes all return byte-identical 30,122-byte HTML (same `s8u11ziy9kn8p` etag). That body is the Next.js `notFound()` page rendered through `@netlify/plugin-nextjs` — see §6.

---

## 2. Title discrepancy table

Live `<title>` (parsed from fetched HTML) vs local `<title>` (from `src/app/{route}/page.tsx` metadata). For routes that have no local `page.tsx`, the layout's root title applies.

| Route | Local title (from source) | Live title (rendered HTML) | Match? |
|---|---|---|---|
| `/` (layout.tsx) | **Krovos Inc. \| Global Enterprise Technology Holdings** | **Krovos Inc. \| AI Development & Staff Augmentation Company** | ❌ |
| `/about` | (inherits layout) **Krovos Inc. \| Global Enterprise Technology Holdings** | Krovos Inc. \| AI Development & Staff Augmentation Company | ❌ |
| `/services` | NO `page.tsx` (subroutes only) | AI Development & Staff Augmentation Services - Krovos | n/a (local has no page) |
| `/solutions` | Solutions - Krovos | Solutions - Krovos | ✅ |
| `/product` | Product Overview - Krovos | (404 page: Krovos Inc. \| AI Development & Staff Augmentation Company) | ❌ + 404 |
| `/company` | NO `page.tsx` (subroutes only) | (404 page: Krovos Inc. \| AI Development & Staff Augmentation Company) | ❌ + 404 |
| `/trust` | Trust Center - Krovos | Trust & Quality - Krovos Inc. | ❌ |
| `/contact` | (inherits layout) Krovos Inc. \| Global Enterprise Technology Holdings | Contact Krovos - AI Development & Staff Augmentation | ❌ |
| `/careers` | (inherits layout) Krovos Inc. \| Global Enterprise Technology Holdings | (404 page: Krovos Inc. \| AI Development & Staff Augmentation Company) | ❌ + 404 |
| `/docs` | Documentation - Krovos | Our Process - Krovos | ❌ |
| `/integrations` | Integrations - Krovos | Technologies We Work With - Krovos | ❌ |
| `/resources` | Resources - Krovos | Resources - Krovos | ✅ |
| `/status` | Status - Krovos | Service Availability - Krovos | ❌ |
| `/demo` | Book a Demo - Krovos | Book a Consultation - Krovos | ❌ |
| `/signup` | Sign Up - Krovos | Get In Touch - Krovos | ❌ |
| `/login` | Login - Krovos | Client Portal - Coming Soon \| Krovos | ❌ |
| `/legal` | NO `page.tsx` (subroutes only) | (404 page: Krovos Inc. \| AI Development & Staff Augmentation Company) | ❌ + 404 |

**Key finding:** 14 of 17 top-level routes have a different title on live vs local. Even for routes that match in title (`/solutions`, `/resources`), the body content is the older brand. The root cause is **the live deployment is an entirely different build of the site, not a stale deploy of the current source**.

---

## 3. Content diff per route where both exist

For routes that DO 200 on live AND have a local `page.tsx`, here are the first H1 / headline and the local H1 from source. (Local H1s are extracted from the source files; live H1s are extracted from the rendered HTML.)

| Route | Live H1 (rendered) | Local H1 (source) | Match? |
|---|---|---|---|
| `/` | `AI Development & Staff Augmentation` | Hero is "Building Tomorrow's Enterprise Solutions" (src/app/page.tsx, motion.h1) | � |
| `/about` | `Building the Future of AI Development` | (no `<h1>` in src/app/about/page.tsx — only H2s like "What Drives Us", "What We Stand For") | ❌ |
| `/solutions` | `AI Solutions by Industry` | "AI automation solutions for every team" (motion.h1 in src/app/solutions/page.tsx) | ❌ |
| `/trust` | `Built on trust` | "Security, compliance, and privacy at Krovos" (motion.h1 in src/app/trust/page.tsx) | ❌ |
| `/contact` | `Let's Build Something Extraordinary Together` | "Let's Build Something Extraordinary" (motion.h1 in src/app/contact/page.tsx) | ❌ |
| `/docs` | `How We Deliver` | Documentation hero h1 (src/app/docs/page.tsx) | ❌ |
| `/integrations` | `Technologies We Work With` | Integrations hero h1 (src/app/integrations/page.tsx) | � |
| `/resources` | `Resources` | Resources hero h1 (src/app/resources/page.tsx) | ❌ |
| `/status` | `Project Status & Updates` | "Krovos Status" (src/app/status/page.tsx) | ❌ |
| `/demo` | `Book a Consultation` | "Book a demo" (src/app/demo/page.tsx) | ❌ |
| `/signup` | `Let's Work Together` | "Create your account" (src/app/signup/page.tsx) | ❌ |
| `/login` | `Client Portal` | "Welcome back" (src/app/login/page.tsx) | ❌ |

**Live headlines / CTAs** for each successful 200 route (verbatim from rendered HTML):

- `/` — H1 "AI Development & Staff Augmentation"; H2s "Complete Technology Solutions", "The Krovos Advantage", "Delivering Worldwide", "Ready to Build With AI?"; CTAs "Explore Services", "Start Your Project", "Learn More About Us".
- `/about` — H1 "Building the Future of AI Development"; H2s "A Journey of Innovation and Growth", "What Drives Us", "What We Stand For", "Milestones That Define Us", "Meet Our Executive Team", "Our Offices Worldwide", "Awards & Certifications", "Ready to Get Started?"; CTAs "Get Started", "Meet Our Team", "Contact Us".
- `/services` — H1 "Technology Services by Krovos"; H2s "AI Development", "Staff Augmentation", "Not Sure Which Service You Need?"; CTA "Contact Us".
- `/solutions` — H1 "AI Solutions by Industry"; H2 "Ready to get started?"; CTA "Contact Us".
- `/trust` — H1 "Built on trust"; H2s "Our Commitment to Clients", "Have Questions About How We Work?"; CTAs "Contact Us", "Learn About Us".
- `/contact` — H1 "Let's Build Something Extraordinary Together"; H2s "Send Us a Message", "Our Offices Worldwide", "Serving Clients Across the Globe", "Frequently Asked Questions", "Ready to Get Started?"; CTAs "Send a Message", "Visit Our Offices", "Contact Us Now", "Request a Demo" (→ /demo).
- `/docs` — H1 "How We Deliver"; H2s "Our Development Process", "Engagement Models", "Ready to Start Your Project?"; CTA "Get in Touch".
- `/integrations` — H1 "Technologies We Work With"; H2s "Our Technology Stack", "Not Seeing What You Need?"; CTA "Discuss Your Project".
- `/resources` — H1 "Resources"; H2s "How We Work", "Explore Our Services", "Have a question?"; CTA "Contact Us".
- `/status` — H1 "Project Status & Updates"; no H2; CTA "Contact Us".
- `/demo` — H1 "Book a Consultation"; no H2; CTA "Book a Consultation".
- `/signup` — H1 "Let's Work Together"; H2 "Why partner with Krovos?"; CTAs "Get in Touch", "Book a Consultation".
- `/login` — H1 "Client Portal"; H2 "What to expect"; CTAs "Schedule a Demo", "Contact Us".

**No route where both exist has matching H1s** between live and local. The body content is consistently the older brand.

---

## 4. Routes live but not local

Discovered live (via internal anchors across all fetched pages):

| Live route | Has local `page.tsx`? |
|---|---|
| `/services/ai-development` | ❌ no |
| `/services/staff-augmentation` | ❌ no |

Plus the four 404 top-level routes that the live site is supposed to render — those exist locally in the `app/{route}/` directory tree but lack a `page.tsx` (see §5).

Also: the **404 page itself** uses an entirely different copy ("Krovos Inc. is a Canadian AI development and staff augmentation company headquartered in Toronto") which doesn't appear in any local file.

---

## 5. Routes local but not live

Routes that exist locally (have a `page.tsx` or are a directory with subroute `page.tsx` files) but are not reachable as 200 on live:

| Local route | Local state | Live state |
|---|---|---|
| `/product` | `src/app/product/page.tsx` exists with full content | 404 — Next.js notFound() |
| `/careers` | `src/app/careers/page.tsx` exists with full content | 404 — Next.js notFound() |
| `/services/ai-automation` | `src/app/services/ai-automation/page.tsx` exists | 404 |
| `/services/custom-software` | `src/app/services/custom-software/page.tsx` exists | 404 |
| `/services/digital-marketing` | `src/app/services/digital-marketing/page.tsx` exists | 404 |
| `/services/logistics` | `src/app/services/logistics/page.tsx` exists | 404 |
| `/services/managed-it` | `src/app/services/managed-it/page.tsx` exists | 404 |
| `/services/talent-solutions` | `src/app/services/talent-solutions/page.tsx` exists | 404 |
| `/company/careers` | `src/app/company/careers/page.tsx` exists | 404 |
| `/company/partners` | `src/app/company/partners/page.tsx` exists | 404 |
| `/company/press` | `src/app/company/press/page.tsx` exists | 404 |

Three local directories **also lack a top-level `page.tsx`** even though they have subroutes, so the top-level route 404 is expected:
- `/company` — no `src/app/company/page.tsx` (subroutes: `about`, `careers`, `leadership`, `partners`, `press`)
- `/legal` — no `src/app/legal/page.tsx` (subroutes: `cookies`, `privacy`, `terms`)
- `/services` — no `src/app/services/page.tsx` (subroutes: 6 service lines)

But `/product`, `/careers`, and all the `/services/*` and `/company/{careers,partners,press}` subroutes have local pages and still 404 on live. This confirms the live deploy is a different build.

---

## 6. 502 / 404 root-cause hypothesis

**Important correction:** the brief described the failures as "502", but every failure actually returned **HTTP 404**, not 502. The 404 body is still served from the Next.js edge (it is the rendered `notFound()` page), which matches the brief's note that "the 502 page is likely still served from the Next.js edge".

### Evidence that responses are from Next.js, not a Netlify Function

Sample headers from the 404 response (from `/product` — all four failing routes share the same response, byte-identical 30,122-byte body and same etag):

```
HTTP/1.1 404
Age: 8456148
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate
Cache-Status: "Netlify Edge"; fwd=miss; fwd-status=404
Content-Type: text/html; charset=utf-8
Etag: "s8u11ziy9kn8p"
Server: Netlify
X-Content-Type-Options: nosniff
X-Nextjs-Date: Fri, 28 Aug 2026 19:27:32 GMT
X-Nextjs-Prerender: 1, 1
X-Nextjs-Stale-Time: 300
X-Nf-Request-Id: 01M14XEXA4T30MFWGA2AQVBQM1
X-Powered-By: Next.js
```

Indicators:
- `X-Powered-By: Next.js` — Next.js rendered the body.
- `X-Nextjs-Prerender: 1, 1` and `X-Nextjs-Stale-Time: 300` — Next.js prerendered the response as static.
- `Cache-Status: "Netlify Edge"; fwd=miss; fwd-status=404` — Netlify Edge received a 404 from upstream (`fwd=miss` means it forwarded to the origin function, and `fwd-status=404` is the upstream's status). The edge is the cache, not the generator.
- `Age: 8456148` seconds = **97.9 days**. The 404 has been cached at the edge since late May 2026.
- `Etag: "s8u11ziy9kn8p"` is identical across `/product`, `/company`, `/careers`, `/legal` and the response body is byte-identical (30,122 bytes). That's one cached artifact.
- No `X-NF-Worker` or function-invocation header, so this is **not** a Netlify Function invocation — it's Next.js static prerender routed through the Next.js runtime on Netlify's edge (per `@netlify/plugin-nextjs`).

For the 200 routes, headers show:

```
Cache-Status: "Netlify Edge"; hit; ttl=23079854
Cache-Control: public,max-age=0,must-revalidate
X-Nextjs-Prerender: 1, 1
X-Powered-By: Next.js
```

i.e. all responses are Next.js prerendered static output served from the Netlify Edge cache.

### Why these specific routes 404

Two distinct reasons, both pointing to "live deploy is a different, older build":

1. **Three local routes genuinely have no top-level `page.tsx`** — `/company`, `/legal`, `/services`. The directory contains only subroutes. In Next.js App Router this means `/{company,legal,services}` resolves to `notFound()` unless there's a default export. The 404 here is correct behaviour, but the brief asked us to test those routes — they 404 in both local source AND live. **Not a deploy bug, but the live version uses the same Next.js convention.**

2. **The remaining 404 routes DO have local `page.tsx` files** — `/product`, `/careers`, `/services/ai-automation`, `/services/custom-software`, etc. Their local source is fully fleshed out (verified by grep — they contain H1, H2, motion sections, metadata). On live they return the cached 404. **This means the live build that Netlify deployed predates these local files**, or the local files were never pushed to the deployment. The cached 404 has been sitting at the edge for ~98 days, suggesting **the live deploy hasn't been refreshed in roughly three months**.

### Framework version

No framework-version error string is visible in any 404 body — the response is the standard Next.js `notFound()` default page (customised only in its copy, not in any error indicator). The `X-Nextjs-Prerender: 1, 1` and `X-Nextjs-Stale-Time: 300` headers show Next.js is functioning normally; there is no Next.js internal error or version mismatch visible.

### Recommended next steps (do not execute — observation only)

- Force a Netlify cache purge for the four etag-matched URLs and redeploy.
- Compare the live Netlify deploy's commit SHA to the current local HEAD; if they differ by >3 months, that's the explanation.
- The `Age: 8456148` on the 404 specifically indicates the **cached not-found artifact itself** is stale — clearing the Netlify edge cache for those paths will force a re-render that may either succeed (if the new build includes those routes) or re-render the same 404 (if the new build genuinely lacks them).
- The brand mismatch (live "AI Development & Staff Augmentation" vs local "Global Enterprise Technology Holdings") cannot be fixed by cache — the local source simply has different copy that has not been deployed.

---

## Appendix: raw data files

All raw data is saved to `C:\Users\dchat\AppData\Local\Temp\krovos_live_pages\`:
- `_summary.json` — every route with status, size, headers
- `_parsed.json` — every route with parsed title, meta description, H1s, H2s, internal anchors
- `_extra.json` — additional subroute probes
- `<route>.html` — full raw response body for every top-level route
- `extra_<route>.html` — full raw response body for every extra subroute
- `_fetch.py`, `_parse.py`, `_extra.py` — fetch scripts (urllib.request only; no curl)

No source code was modified.
