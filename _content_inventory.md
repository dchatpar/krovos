# Krovos Inc. — Content Inventory

> **Purpose:** Reconnaissance of every route's copy in `src/app/**/page.tsx` and every component in `src/components/**` for the upcoming redesign.
>
> **Strict rules followed:**
> - Original copy is preserved verbatim — never paraphrased.
> - Every claim that looks like marketing puffery, a made-up stat, a fake testimonial, an invented customer, or an unverified award is tagged **[UNVERIFIED]**.
> - Sections that are purely decorative (only SVG/canvas/image, no readable copy) are noted.
> - No source files were modified.
>
> **Background for context (NOT from code):** Krovos Inc. is a Canadian federal corporation (Corp #1772355-5), incorporated 2026-02-24, registered at 13428 105 Ave Suite 1410 Surrey BC V3T 0S6. Founder/Director Hantz Prosper. Mukul Mukul is the authorized signer per W-8BEN-E. The current date during this audit is 2026-08-28. The longest timeline claim in the code is "founded 2015" / "founded in 2023" — see the About page section for the discrepancy.

---

## 0. Foundation / Project files

### 0.1 `package.json`
- `"name": "krovos"` — `package.json:2`
- `"version": "0.1.0"` — `package.json:3`
- `"private": true` — `package.json:4`
- Scripts: `dev`, `build`, `start`, `lint` — `package.json:7-10`
- Dependencies: `framer-motion ^12.34.3`, `next 16.1.6`, `react 19.2.3`, `react-dom 19.2.3` — `package.json:12-15`
- Dev dependencies: `@tailwindcss/postcss ^4`, `@types/node ^20`, `@types/react ^19`, `@types/react-dom ^19`, `eslint ^9`, `eslint-config-next 16.1.6`, `tailwindcss ^4`, `typescript 5.9.3` — `package.json:18-25`

### 0.2 `README.md` (verbatim, all 36 lines)
The README is the unmodified create-next-app default. It contains no Krovos-specific copy and reads in full:
- `This is a Next.js project bootstrapped with create-next-app.` — `README.md:1`
- `## Getting Started` → instructs `npm run dev` / `yarn dev` / `pnpm dev` / `bun dev` — `README.md:3-15`
- `Open http://localhost:3000` — `README.md:17`
- `You can start editing the page by modifying app/page.tsx.` — `README.md:19`  **[UNVERIFIED]** — note: the actual pages live in `src/app/...`, not `app/...`, so this line is misleading.
- Mentions `next/font` with Geist font — `README.md:21` — **[UNVERIFIED]** for the actual app; the real fonts loaded are Inter, JetBrains_Mono, Syne (see 0.4 layout.tsx).
- Standard "Learn More" and "Deploy on Vercel" boilerplate — `README.md:23-36`

### 0.3 `next.config.ts`
- Verbatim: `images.remotePatterns: [{ protocol: 'https', hostname: '**' }]` and `images.dangerouslyAllowSVG: true` — `next.config.ts:4-12`

### 0.4 `src/app/layout.tsx` — root layout (page chrome for every route)
- Default `<title>` (metadata.title): `"Krovos Inc. | Global Enterprise Technology Holdings"` — `src/app/layout.tsx:26`
- Default description: `"Krovos Inc. is a premier global enterprise technology holding company headquartered in Vancouver, with operations spanning Dubai and Mumbai. We deliver transformative AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology."` — `src/app/layout.tsx:27-28`
- Keywords: `enterprise technology, AI automation, custom software, digital marketing, managed IT, talent solutions, logistics technology, global enterprise, corporate holdings` — `src/app/layout.tsx:30-38`
- Authors: `[{ name: "Krovos Inc." }]` — `src/app/layout.tsx:40`
- OpenGraph: title `"Krovos Inc. | Global Enterprise Technology Holdings"`, description `"Transforming enterprises through innovative technology solutions worldwide."`, type `website`, locale `en_US`, siteName `Krovos Inc.` — `src/app/layout.tsx:41-47`
- Fonts loaded: Inter (`--font-inter`), JetBrains_Mono (`--font-jetbrains-mono`), Syne (`--font-syne`), all from `next/font/google` — `src/app/layout.tsx:2, 7-23, 58`
- HTML lang: `en` — `src/app/layout.tsx:56`
- Wraps every page with `<Navbar />` and `<Footer />` — `src/app/layout.tsx:60-62`

### 0.5 No SEO files
- `robots.txt` — **NOT FOUND**
- `sitemap.xml` — **NOT FOUND**
- No `app/sitemap.ts`, no `app/robots.ts`
- No `manifest.json` / `manifest.ts`
- The codebase contains only `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `public/favicon.ico`, and a `public/images/` directory (all are template defaults / decorative; their `next/image` usage paths were inspected for relevance only).

### 0.6 `src/app/globals.css`
- File exists, 16690 bytes — `src/app/globals.css`. Not read in detail because it is purely CSS (no human-readable copy claims).

### 0.7 `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `.gitignore`, `next-env.d.ts`
- All present, all standard boilerplate. No copy claims. No further inventory.

---

## 1. ROOT ROUTES (`src/app/**/page.tsx`)

### 1.1 `/` — `src/app/page.tsx` (Home)
- **Page title (metadata):** none — this page does not export `metadata`; it inherits the root layout title `"Krovos Inc. | Global Enterprise Technology Holdings"`.
- **H1:** `We Build Technology That Moves Business` — `src/app/page.tsx:582-587`
- **Sub-headline (sub-p under H1):** `Enterprise AI · Custom Software · Managed IT · Digital Marketing delivered globally from Vancouver, Dubai & Mumbai` — `src/app/page.tsx:589-594`
- **Badges above the headline:**
  - `ISO-Certified` — `src/app/page.tsx:565`  **[UNVERIFIED]** — no certificate number, no auditor.
  - `GDPR Compliant` — `src/app/page.tsx:571`
- **Hero CTAs:**
  - `Start Your Project` (→ `/contact`) — `src/app/page.tsx:609`
  - `View Our Work` (→ `/solutions`) — `src/app/page.tsx:620`
- **Social-proof line under hero:** `200+ projects · 11 countries · Fortune 500 clients` — `src/app/page.tsx:631-633`  **[UNVERIFIED]** — Fortune 500 reference is anonymous.
- **Stats counter bar (animated counters):**
  - `200+` `Clients Served` — `src/app/page.tsx:642-646`
  - `450+` `Projects Delivered` — `src/app/page.tsx:643`
  - `11` `Countries` — `src/app/page.tsx:644`
  - `120+` `Team Members` — `src/app/page.tsx:645`
  All four are **[UNVERIFIED]**. The same numbers appear in `/about`, `/careers`, `/contact` and are inconsistent (see Section 1.2 / 1.3).
- **Services section H2:** `Complete Technology Solutions` — `src/app/page.tsx:679-684`
- **Services section lead-in:** `Six specialized divisions working together to deliver comprehensive enterprise solutions.` — `src/app/page.tsx:685-687`
- **Service cards (six):** each card lists a service name, a description, and three feature tags.
  - `AI & Automation` — description verbatim: `Intelligent automation solutions powered by machine learning and advanced algorithms to streamline operations and reduce manual workload.` — features: `AI Agents`, `Process Automation`, `Machine Learning` — `src/app/page.tsx:388-397`
  - `Custom Software` — description: `Bespoke software solutions tailored to your unique business requirements with cutting-edge technologies.` — features: `Web Apps`, `Mobile Apps`, `Cloud Solutions` — `src/app/page.tsx:399-406`
  - `Digital Marketing` — description: `Data-driven marketing strategies to amplify your brand presence and drive meaningful engagement across all channels.` — features: `SEO`, `Social Media`, `Content Strategy` — `src/app/page.tsx:408-415`
  - `Managed IT` — description: `Comprehensive IT infrastructure management ensuring your systems remain secure, efficient, and always available.` — features: `24/7 Support`, `Security`, `Cloud Management` — `src/app/page.tsx:417-424`
  - `Talent Solutions` — description: `Strategic talent acquisition and management to build high-performing teams that drive business success.` — features: `Recruitment`, `Team Building`, `Training` — `src/app/page.tsx:426-433`
  - `Logistics Tech` — description: `Advanced technology solutions to optimize supply chain operations and enhance logistics efficiency.` — features: `Fleet Management`, `Tracking`, `Route Optimization` — `src/app/page.tsx:435-442`
- **All service cards** carry a `Learn more` link — `src/app/page.tsx:121-125`
- **Client logo marquee section heading:** `Trusted by Industry Leaders` — `src/app/page.tsx:709-711`. The logos in the marquee are **fictional invented names** — preserve verbatim:
  - `TechCorp`, `GlobalBank`, `MediCare`, `RetailMax`, `LogiFlow`, `FinanceHub`, `DataSync`, `CloudNine`, `InnovateAI`, `SecureNet`, `RetailPro`, `HealthTech`, `FinServe`, `AutoMotive`, `EnergyPlus` — `src/app/page.tsx:269-273` — **all [UNVERIFIED] / fabricated**.
- **Featured Case Studies section:**
  - Eyebrow: `Case Studies` — `src/app/page.tsx:728`
  - H2: `Proven Results` — `src/app/page.tsx:730-735`
  - Lead-in: `Real projects, real impact. See how we have helped enterprises transform their operations.` — `src/app/page.tsx:736-738`
  - Study 1 — Industry badge `Finance`, title `Global Bank Modernization`, challenge `Legacy systems causing 40% inefficiency in transaction processing and poor customer experience.`, result `65% Faster Processing`, tech `Python, AWS, React, Kubernetes` — `src/app/page.tsx:447-453` **[UNVERIFIED]** — generic client name, no source.
  - Study 2 — Industry `Healthcare`, title `Hospital Network Integration`, challenge `Disconnected systems across 12 facilities causing data silos and delayed patient care.`, result `90% Data Accessibility`, tech `Java, FHIR, Azure, AI/ML` — `src/app/page.tsx:455-459` **[UNVERIFIED]**
  - Study 3 — Industry `Retail`, title `E-commerce Platform Scale`, challenge `Unable to handle Black Friday traffic spikes, losing an estimated $2M in sales annually.`, result `99.99% Uptime`, tech `Node.js, MongoDB, Redis, CDN` — `src/app/page.tsx:461-467` **[UNVERIFIED]**
- **Why Krovos section:**
  - Eyebrow: `Why Krovos` — `src/app/page.tsx:760`
  - H2: `The Krovos Advantage` — `src/app/page.tsx:762-767`
  - Lead-in: `What sets us apart in the enterprise technology landscape.` — `src/app/page.tsx:768-770`
  - 4 cards:
    - `Global 3-Office Delivery Model` — `Strategic presence across Vancouver, Dubai, and Mumbai enables around-the-clock development cycles and diverse market expertise.` — `src/app/page.tsx:472-476`
    - `6-Division Full-Stack Capability` — `From AI automation to talent solutions, we provide end-to-end services across all technology domains your business needs.` — `src/app/page.tsx:478-481`
    - `Fixed-Price Engagement Model` — `Predictable costs with transparent pricing. No surprises, just reliable project delivery within budget.` — `src/app/page.tsx:483-486`
    - `Enterprise-Grade Quality` — `ISO-certified processes, GDPR compliance, and Fortune 500 client references. Security and quality are non-negotiable.` — `src/app/page.tsx:488-491` **[UNVERIFIED]** — Fortune 500 reference unnamed.
- **Testimonials section:**
  - Eyebrow: `Testimonials` — `src/app/page.tsx:792`
  - H2: `Client Success Stories` — `src/app/page.tsx:794-799`
  - 3 testimonials, all **[UNVERIFIED]** / fabricated:
    - Quote: `Krovos transformed our digital infrastructure. Their team's expertise in AI automation helped us reduce operational costs by 40% in just 6 months.` — `James Morrison`, `CTO`, `Global Finance Corp` — `src/app/page.tsx:497-501`
    - Quote: `Working with Krovos was exceptional. They delivered our custom software platform ahead of schedule and the quality exceeded our expectations.` — `Priya Sharma`, `VP of Operations`, `MediCare Plus` — `src/app/page.tsx:503-507`
    - Quote: `The team's understanding of both technology and business requirements made all the difference. They didn't just build what we asked for, they built what we needed.` — `Michael Chen`, `CEO`, `TechVentures Inc` — `src/app/page.tsx:509-513`
- **Global Offices section:**
  - Eyebrow: `Global Presence` — `src/app/page.tsx:821`
  - H2: `Delivering Worldwide` — `src/app/page.tsx:823-825`
  - Lead-in: `Strategic offices in key business hubs to serve clients across continents.` — `src/app/page.tsx:826-828`
  - World map with three named dots and SVG-continent labels (`NORTH AMERICA`, `EUROPE`, `ASIA`, `AUSTRALIA`) — `src/app/page.tsx:317-385` — the SVG is a stylized decorative rendering, not a real map.
  - Offices listed in `GlobalOffices` array:
    - `Vancouver`, `Canada` — `src/app/page.tsx:319`
    - `Dubai`, `UAE` — `src/app/page.tsx:320`
    - `Mumbai`, `India` — `src/app/page.tsx:321`
- **Final CTA section:**
  - H2: `Ready to Build Something Extraordinary?` — `src/app/page.tsx:851-853`
  - Lead-in: `Let us transform your vision into reality. Our team of experts is ready to deliver solutions that drive business growth.` — `src/app/page.tsx:854-856`
  - CTAs: `Start Your Project` (→ `/contact`) and `Learn More About Us` (→ `/company/about`) — `src/app/page.tsx:858-869`

### 1.2 `/about` — `src/app/about/page.tsx`
- **Metadata title:** `About - Krovos | Enterprise AI Automation Company` — `src/app/about/page.tsx:5`
- **Metadata description:** `Krovos is a global enterprise technology holding company delivering transformative AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology.` — `src/app/about/page.tsx:6`
- **H1:** `Building the Future of Enterprise Technology` — `src/app/about/page.tsx:66-68`
- **Lead paragraphs (verbatim):**
  - `Krovos Inc. is a premier global enterprise technology holding company headquartered in Vancouver, with operations spanning Dubai and Mumbai. We deliver transformative solutions across AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology.` — `src/app/about/page.tsx:69-73`
  - `Our mission is to liberate enterprises from repetitive tasks through intelligent automation, enabling teams to focus on creative strategy and high-impact work that drives business growth.` — `src/app/about/page.tsx:74-77`
- **Stats section (verbatim values):**
  - `500+` `Enterprise Clients` — `Companies trusting Krovos worldwide` — `src/app/about/page.tsx:48` **[UNVERIFIED]**
  - `50M+` `Workflows Automated` — `Processes optimized each month` — `src/app/about/page.tsx:49` **[UNVERIFIED]**
  - `99.99%` `Uptime SLA` — `Guaranteed reliability` — `src/app/about/page.tsx:50`
  - `24/7` `Support` — `Always available assistance` — `src/app/about/page.tsx:51`
- **Mission section H2:** `Our Mission` — `src/app/about/page.tsx:115-117`
- **Mission paragraph:** `At Krovos, we believe that the future of work lies in the seamless integration of artificial intelligence with human creativity. Our mission is to automate every repetitive task so that people can focus on work that truly matters.` — `src/app/about/page.tsx:118-122`
- **Vision section H2:** `Our Vision` — `src/app/about/page.tsx:157`
- **Vision paragraph:** `Our vision extends beyond mere efficiency gains. We envision a world where enterprises can scale infinitely without proportional increases in headcount, where innovation isn't constrained by operational bandwidth, and where human creativity is the primary driver of business value.` — `src/app/about/page.tsx:158-164`
- **`What Sets Us Apart` checklist (verbatim):**
  - `Enterprise-grade security with SOC 2 Type II compliance` — `src/app/about/page.tsx:178` **[UNVERIFIED]** — no audit report referenced.
  - `500+ enterprise integrations out of the box` — `src/app/about/page.tsx:186` **[UNVERIFIED]**
  - `99.99% uptime SLA with global infrastructure` — `src/app/about/page.tsx:194`
  - `24/7 dedicated support with enterprise success teams` — `src/app/about/page.tsx:202`
- **Core Values H2:** `Our Core Values` — `src/app/about/page.tsx:215`
- **4 Core Values (verbatim):**
  - `Customer Obsession` — `We start with customer needs and work backwards from there. Every decision we make is guided by what will create the most value for our clients.` — `src/app/about/page.tsx:11-13`
  - `Bias for Action` — `Speed matters in business. We make decisions quickly, iterate fast, and learn from real-world feedback to continuously improve.` — `src/app/about/page.tsx:15-18`
  - `Radical Transparency` — `We share information openly across the organization. Honesty and clarity in communication build trust with our team and clients.` — `src/app/about/page.tsx:21-24`
  - `Excellence` — `We ship the best products and never settle for good enough. Quality is not an afterthought - it's built into everything we do.` — `src/app/about/page.tsx:26-29`
- **Leadership section H2:** `Leadership Team` — `src/app/about/page.tsx:240`
- **Leadership cards (verbatim — **[UNVERIFIED]** — all 3 are fabricated leadership claims):**
  - `Sarah Chen`, `CEO & Founder`, `Former VP of Engineering at Google with 15+ years in enterprise software. Led digital transformation initiatives for Fortune 500 companies.` — `src/app/about/page.tsx:41-44`
  - `Marcus Rodriguez`, `CTO`, `AI researcher and technologist. Previously founded 2 successful exits in the automation space. PhD in Machine Learning from Stanford.` — `src/app/about/page.tsx:43`
  - `Emily Watson`, `COO`, `Operational excellence leader with experience scaling startups to $100M+ ARR. Former McKinsey consultant.` — `src/app/about/page.tsx:44`
- **Timeline (verbatim years, in source verbatim):**
  - `2023` — `Krovos founded in Vancouver with vision to transform enterprise operations` — milestone `[true]` — `src/app/about/page.tsx:33` **[UNVERIFIED]**
  - `2024` — `Public beta launch - 10,000+ early adopters join platform` — `src/app/about/page.tsx:34` **[UNVERIFIED]**
  - `2025` — `SOC 2 Type II certification achieved - enterprise security validated` — milestone `[true]` — `src/app/about/page.tsx:35` **[UNVERIFIED]**
  - `2025` — `Expanded operations to Dubai and Mumbai - global presence established` — `src/app/about/page.tsx:36`
  - `2026` — `Enterprise growth - 500+ enterprise clients worldwide` — milestone `[true]` — `src/app/about/page.tsx:37` **[UNVERIFIED]**
  - `2026` — `50M+ workflows automated - milestone of 50 million processes automated` — milestone `[true]` — `src/app/about/page.tsx:38` **[UNVERIFIED]**
- **Global Presence H2:** `Global Presence` — `src/app/about/page.tsx:273`
- **Global Presence bullets:** `Vancouver (HQ)` (CA), `Dubai` (AE), `Mumbai` (IN) — `src/app/about/page.tsx:280-305`
- **Why Global Matters bullets:** `Round-the-clock development cycles across time zones`, `Local market expertise in key enterprise regions`, `Data residency options for compliance requirements`, `24/7 customer support with regional teams`, `Partnerships with local technology ecosystems` — `src/app/about/page.tsx:312-318`
- **Our Journey H2:** `Our Journey` — `src/app/about/page.tsx:329`
- **Final CTA H2:** `Join Our Growing Team` — `src/app/about/page.tsx:354`
- **Final CTAs:** `View Open Positions` (→ `/company/careers`) and `Get in Touch` (→ `/contact`) — `src/app/about/page.tsx:365, 374`
- **`/about/page.tsx` referenced image:** `src="/images/hero-enterprise.png"` — `src/app/about/page.tsx:83` — (decorative; alt text: `"Krovos Enterprise Operations"`)
- **`/about/page.tsx` referenced image 2:** `src="/images/ai-automation.png"` — `src/app/about/page.tsx:140` — (decorative; alt text: `"AI Automation Platform"`)

### 1.3 `/careers` — `src/app/careers/page.tsx`
- **Metadata title:** `Careers - Krovos` — `src/app/careers/page.tsx:4`
- **Metadata description:** `Join the Krovos team. We're building the future of AI automation.` — `src/app/careers/page.tsx:5`
- **H1:** `Join the Future of Enterprise Technology` — `src/app/careers/page.tsx:568-571`
- **Hero lead:** `Join a global team of innovators building the next generation of enterprise AI automation. Work on challenging problems, grow your skills, and make an impact that reaches millions of businesses worldwide.` — `src/app/careers/page.tsx:574-581`
- **Hero badge:** `Join Our Team` — `src/app/careers/page.tsx:558-560`
- **Hero CTAs:** `View Open Positions` (→ `#open-positions`) and `Learn About Our Culture` (→ `#culture`) — `src/app/careers/page.tsx:589-594`
- **Stats section (4 items):**
  - `120+` `Team Members` — `src/app/careers/page.tsx:624` **[UNVERIFIED]**
  - `11` `Countries` — `src/app/careers/page.tsx:625` — consistent with home page.
  - `200+` `Enterprise Clients` — `src/app/careers/page.tsx:626` — **inconsistent** with `/about/page.tsx:48` which says `500+`.
  - `98%` `Employee Satisfaction` — `src/app/careers/page.tsx:627` **[UNVERIFIED]** — no source.
- **H2:** `Benefits & Culture` — `src/app/careers/page.tsx:639`
- **8 Benefit Cards (verbatim titles):**
  - `Competitive Compensation` — `Industry-leading salaries with equity participation. We reward talent with compensation that reflects your value and contributions to our success. Annual performance reviews ensure your growth is recognized and rewarded.` — `src/app/careers/page.tsx:311-314` **[UNVERIFIED]**
  - `Comprehensive Health` — `Full medical, dental, and vision coverage for you and your family. Including mental health support, wellness programs, and access to premium healthcare providers across all our office locations.` — `src/app/careers/page.tsx:316-319`
  - `Flexible Time Off` — `Unlimited PTO policy. Take the time you need to recharge, innovate, and bring your best self to work every day. We trust our employees to manage their own time responsibly.` — `src/app/careers/page.tsx:321-324`
  - `Remote-First Culture` — `Work from anywhere. Our distributed-first approach gives you the freedom to work where you're most productive and happy. Core hours are flexible, and we host quarterly in-person team gatherings.` — `src/app/careers/page.tsx:326-329`
  - `Home Office Setup` — `$2,000 home office stipend. Set up your perfect workspace with the equipment you need to do your best work. Includes ergonomic furniture, monitors, and cutting-edge technology.` — `src/app/careers/page.tsx:331-334`
  - `Learning & Growth` — `$3,000 annual learning budget. Access conferences, courses, certifications, and books to accelerate your professional growth. Internal mentorship programs help you develop new skills.` — `src/app/careers/page.tsx:336-339`
  - `Team Building` — `Annual team retreats and monthly virtual events. Build lasting relationships with colleagues through hackathons, social events, and collaborative projects that span departments.` — `src/app/careers/page.tsx:341-344`
  - `Cutting-Edge Tech` — `Work with the latest technologies and tools. We invest heavily in our tech stack, ensuring you have access to state-of-the-art equipment and platforms for innovation.` — `src/app/careers/page.tsx:346-349`
- **Bento copy within section:** `Equity participation` — `src/app/careers/page.tsx:666`
- **4 Culture Values (verbatim):**
  - `Innovation Without Limits` — `We encourage bold ideas and experimentation. Every voice matters, and the best solutions emerge from challenging the status quo. Our innovation lab provides resources for exploring new ideas.` — `src/app/careers/page.tsx:355-358`
  - `Collaboration First` — `Great achievements come from great teams. We foster an environment where knowledge sharing and mutual support are core values. Cross-functional collaboration is embedded in our workflow.` — `src/app/careers/page.tsx:360-363`
  - `Continuous Learning` — `The tech landscape evolves rapidly, and so do we. We invest heavily in your growth and provide pathways for skill development through workshops, certifications, and conference attendance.` — `src/app/careers/page.tsx:365-368`
  - `Work-Life Integration` — `We believe in results, not hours. Flexible schedules and remote options allow you to integrate work seamlessly with your life. Your well-being is our priority.` — `src/app/careers/page.tsx:370-373`
- **Glassdoor Rating Block:** `4.9` (5-star visual), `Glassdoor Rating`, `Based on 50+ employee reviews` — `src/app/careers/page.tsx:792-801` **[UNVERIFIED]** — no Glassdoor URL.
- **4 Growth Opportunity Cards (verbatim titles):**
  - `Leadership Pathways` — `Clear career progression to engineering manager, technical lead, and director roles. We develop future leaders through structured programs and mentorship.` — `src/app/careers/page.tsx:378-381`
  - `Technical Track` — `Deep-dive into architecture, AI/ML, or specialized domains. Become a principal engineer or distinguished technical expert in your field.` — `src/app/careers/page.tsx:383-386`
  - `Cross-Functional Exposure` — `Rotate through different teams and projects. Gain broad experience across product, engineering, design, and business functions.` — `src/app/careers/page.tsx:388-391`
  - `Global Mobility` — `Transfer between our offices in Vancouver, Dubai, and Mumbai. Experience different cultures while advancing your career with international exposure.` — `src/app/careers/page.tsx:393-396`
- **Bento inline labels:** `Health & Wellness`, `Unlimited PTO`, `$2,000 Setup`, `$3,000 Learning` — `src/app/careers/page.tsx:678-725`
- **Testimonials H2:** `Hear From Our Team` — `src/app/careers/page.tsx:820`
- **Testimonials (all **[UNVERIFIED]** — internal "employees" are fictional):**
  - `Sarah Chen`, `Senior Software Engineer`, `Krovos` — quote: `Joining Krovos was the best career decision I've ever made. The culture of innovation and collaboration is unmatched. I've grown more in two years here than I did in five years at my previous company.` — `src/app/careers/page.tsx:402-408`
  - `Mohammed Al-Rashid`, `Engineering Manager`, `Krovos` — quote: `The leadership genuinely cares about employee growth. I've been given opportunities to lead major projects and develop skills I never thought I'd need. This is where careers are built.` — `src/app/careers/page.tsx:410-415`
  - `Elena Rodriguez`, `Principal Product Designer`, `Krovos` — quote: `As a designer, Krovos gives me the freedom to push boundaries and create meaningful experiences. The collaboration with engineering is seamless, and the impact of our work is visible every day.` — `src/app/careers/page.tsx:417-422`
  - `James Okonkwo`, `DevOps Lead`, `Krovos` — quote: `The remote-first culture is real, not just a buzzword. I'm trusted to do my best work from anywhere, and the team connections are stronger than any office-based experience I've had.` — `src/app/careers/page.tsx:424-429`
- **Open Positions H2:** `Join Our Growing Team` — `src/app/careers/page.tsx:849`
- **8 Job Cards (verbatim titles + depts + locations + types):**
  - `Senior Frontend Engineer`, `Engineering`, `Remote (Worldwide)`, `Full-time` — description `Join our frontend team to build cutting-edge enterprise applications using React, TypeScript, and modern web technologies. You'll work on products that serve hundreds of enterprise clients, creating intuitive interfaces that make complex AI automation accessible.` — requirements: `5+ years of experience with React and TypeScript`, `Strong understanding of web performance optimization`, `Experience with state management (Redux, Zustand, or similar)`, `Excellent communication skills in English` — `src/app/careers/page.tsx:434-446`
  - `Backend Engineer - AI/ML`, `Engineering`, `Vancouver, Canada`, `Full-time` — description `Build scalable backend systems that power our AI automation platform. Work with Python, Node.js, and cloud infrastructure to deliver intelligent solutions that transform enterprise operations.` — requirements: `4+ years of backend development experience`, `Experience with Python and machine learning frameworks`, `Knowledge of distributed systems and microservices`, `Experience with AWS or GCP cloud services` — `src/app/careers/page.tsx:448-459`
  - `Senior Product Designer`, `Design`, `Remote (Americas)`, `Full-time` — requirements: `5+ years of product design experience`, `Strong portfolio showcasing enterprise B2B products`, `Proficiency in Figma and design systems`, `Experience with user research and prototyping` — `src/app/careers/page.tsx:461-472`
  - `Enterprise Sales Manager`, `Sales`, `Dubai, UAE`, `Full-time` — requirements: `5+ years of enterprise software sales experience`, `Proven track record of meeting and exceeding quotas`, `Deep understanding of enterprise sales cycles`, `Arabic and English fluency required` — `src/app/careers/page.tsx:474-485`
  - `DevOps Engineer`, `Engineering`, `Mumbai, India`, `Full-time` — requirements: `4+ years of DevOps or SRE experience`, `Strong experience with Kubernetes and Docker`, `Knowledge of Infrastructure as Code (Terraform)`, `Experience with CI/CD pipelines and monitoring` — `src/app/careers/page.tsx:487-498`
  - `Customer Success Manager`, `Customer Success`, `Vancouver, Canada`, `Full-time` — requirements: `3+ years in customer success or account management`, `Experience with enterprise SaaS platforms`, `Strong analytical and communication skills`, `Proven ability to manage multiple accounts` — `src/app/careers/page.tsx:500-511`
  - `Technical Writer`, `Product`, `Remote (Europe)`, `Full-time` — requirements: `3+ years of technical writing experience`, `Experience with developer documentation`, `Understanding of API documentation`, `Ability to learn complex technical concepts quickly` — `src/app/careers/page.tsx:513-524`
  - `AI Research Scientist`, `Engineering`, `Remote (Worldwide)`, `Full-time` — requirements: `Advanced degree in Computer Science, ML, or related field`, `Publication record in top-tier conferences`, `Experience with large language models`, `Strong Python and deep learning framework skills` — `src/app/careers/page.tsx:526-537`
- **Per-card CTA:** `View Details` / `View Less` (expand toggle) — `src/app/careers/page.tsx:104`
- **Apply CTA inside expanded job:** `Apply Now` (→ `/contact`) — `src/app/careers/page.tsx:135`
- **Application Process H2:** `How to Join Us` — `src/app/careers/page.tsx:881`
- **4 Application Steps (verbatim):**
  - `01 Apply Online` — `Submit your resume and cover letter through our careers portal. Tell us about your experience and why you want to join Krovos.` — `src/app/careers/page.tsx:890-894`
  - `02 Initial Screening` — `A 30-minute call with our recruitment team to learn about your background, skills, and career aspirations.` — `src/app/careers/page.tsx:896-899`
  - `03 Technical Interview` — `Deep-dive sessions with team members to assess your technical skills, problem-solving abilities, and domain expertise.` — `src/app/careers/page.tsx:901-904`
  - `04 Team Fit` — `Meet with leadership and potential team members to ensure cultural alignment and mutual fit for success.` — `src/app/careers/page.tsx:906-909`
- **Final CTA H2:** `Ready to Make an Impact?` — `src/app/careers/page.tsx:940-942`
- **Final CTAs:** `Browse Open Positions` (→ `#open-positions`), `Get in Touch` (→ `/contact`) — `src/app/careers/page.tsx:950-955`
- **Footer email:** `careers@krovos.com` — `src/app/careers/page.tsx:961`

### 1.4 `/contact` — `src/app/contact/page.tsx`
- **Metadata title:** (inherits root layout — `src/app/layout.tsx:26`) — `Krovos Inc. | Global Enterprise Technology Holdings`
- **Hero badge:** `Contact Us` — `src/app/contact/page.tsx:322-324`
- **H1:** `Let's Build Something Extraordinary` — `src/app/contact/page.tsx:331-335`
- **Hero paragraph:** `Ready to transform your business with cutting-edge technology? Our team is here to help you every step of the way.` — `src/app/contact/page.tsx:337-345`
- **Hero CTAs:** `Send a Message` (→ `#contact-form`) and `Visit Our Offices` (→ `#offices`) — `src/app/contact/page.tsx:353-358`
- **3 Contact Method cards (verbatim):**
  - `Email Us` — `Send us an email anytime. We respond within 24 hours.` — `contact@krovos.com` — `src/app/contact/page.tsx:389-395`
  - `Call Us` — `Speak directly with our team during business hours.` — `+1 (604) 555-0100` — `src/app/contact/page.tsx:396-402` **[UNVERIFIED]** — phone number style is `555-01XX`, typical placeholder pattern; no live phone.
  - `Live Chat` — `Chat with us in real-time for quick answers.` — `Start a conversation` — `src/app/contact/page.tsx:403-409`
- **Form section eyebrow:** `Get in Touch` — `src/app/contact/page.tsx:421`
- **Form H2:** `Send Us a Message` — `src/app/contact/page.tsx:422`
- **Form lead:** `Fill out the form below and our team will get back to you within 24 hours.` — `src/app/contact/page.tsx:423-425`
- **Form labels:** `Your Name`, `Email Address`, `Company Name`, `Your Message` — `src/app/contact/page.tsx:460-481`
- **Submit button text:** `Send Message` / `Sending...` (in flight) / `Send Another Message` (success) — `src/app/contact/page.tsx:489, 497, 448`
- **Privacy disclaimer:** `By submitting this form, you agree to our Privacy Policy.` — `src/app/contact/page.tsx:509-511`
- **Offices H2:** `Our Offices Worldwide` — `src/app/contact/page.tsx:527`
- **3 Office cards (verbatim):**
  - `Vancouver`, `Canada (Headquarters)`, `1000-500 Granville Street, Vancouver, BC V6C 1S4`, phone `+1 (604) 555-0100`, email `vancouver@krovos.com`, timezone `PST (UTC-8)` — `src/app/contact/page.tsx:534-542`
  - `Dubai`, `United Arab Emirates`, `Level 42, Emirates Tower, Sheikh Zayed Road, Dubai`, phone `+971 4 555 0200`, email `dubai@krovos.com`, timezone `GST (UTC+4)` — `src/app/contact/page.tsx:543-551`
  - `Mumbai`, `India`, `Level 8, One BKC, G Block, Bandra Kurla Complex, Mumbai 400051`, phone `+91 22 5555 0300`, email `mumbai@krovos.com`, timezone `IST (UTC+5:30)` — `src/app/contact/page.tsx:552-560`
  - **All 3 addresses and phones are **[UNVERIFIED]** — they look like placeholder-style addresses (e.g., `1000-500 Granville Street`, `Level 42, Emirates Tower`) and `555-01XX` / `555 0200` / `5555 0300` placeholder phone numbers. The Vancouver address contradicts the BC Corporations registry address (13428 105 Ave Suite 1410 Surrey BC V3T 0S6).
- **Global Reach H2:** `Serving Clients Across the Globe` — `src/app/contact/page.tsx:575`
- **Global Reach paragraph:** `With offices in North America, Middle East, and Asia, we provide round-the-clock support to enterprise clients across 11 countries. Our distributed team ensures you always have access to the expertise you need, when you need it.` — `src/app/contact/page.tsx:577-581`
- **Global Reach stats:** `11` `Countries`, `200+` `Enterprise Clients`, `24/7` `Support Available` — `src/app/contact/page.tsx:584-587` — `200+` again inconsistent with `/about` which says `500+`.
- **Social Links H2:** `Connect With Us` — `src/app/contact/page.tsx:676`
- **Social links (verbatim):**
  - `LinkedIn` — `12,500+ followers` — `https://linkedin.com/company/krovos` — `src/app/contact/page.tsx:691-714` **[UNVERIFIED]** — no actual page link to verify.
  - `X (Twitter)` — `8,200+ followers` — `https://twitter.com/krovos` — `src/app/contact/page.tsx:717-736` **[UNVERIFIED]**
  - `GitHub` — `150+ repositories` — `https://github.com/krovos` — `src/app/contact/page.tsx:738-757` **[UNVERIFIED]**
  - `YouTube` — `5,000+ subscribers` — `https://youtube.com/@krovos` — `src/app/contact/page.tsx:759-778` **[UNVERIFIED]**
  - `Instagram` — `3,800+ followers` — `https://instagram.com/krovos` — `src/app/contact/page.tsx:780-799` **[UNVERIFIED]**
- **FAQ H2:** `Frequently Asked Questions` — `src/app/contact/page.tsx:811`
- **6 FAQ entries (verbatim):**
  - Q: `What are your typical response times?` — A: `We typically respond to all inquiries within 24 business hours. For urgent matters, please mention this in your message and we will prioritize your request.` — `src/app/contact/page.tsx:279-281`
  - Q: `Do you offer free consultations?` — A: `Yes, we offer complimentary initial consultations for all potential clients. This allows us to understand your needs and propose the best solutions for your business.` — `src/app/contact/page.tsx:283-285`
  - Q: `What industries do you specialize in?` — A: `We serve a wide range of industries including finance, healthcare, retail, logistics, real estate, events, and hospitality. Our team has deep expertise in enterprise digital transformation.` — `src/app/contact/page.tsx:287-289`
  - Q: `Can you work with our existing systems?` — A: `Absolutely. We specialize in integrating with existing infrastructure and platforms. Our team will assess your current setup and recommend solutions that work seamlessly with your systems.` — `src/app/contact/page.tsx:291-293`
  - Q: `What is your typical project timeline?` — A: `Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while enterprise transformations can take 3-6 months. We provide detailed timelines during our initial consultation.` — `src/app/contact/page.tsx:295-297`
  - Q: `Do you offer ongoing support and maintenance?` — A: `Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes regular updates, security patches, performance monitoring, and dedicated support channels.` — `src/app/contact/page.tsx:299-301`
- **Final CTA H2:** `Ready to Get Started?` — `src/app/contact/page.tsx:840`
- **Final CTAs:** `Contact Us Now` (→ `#contact-form`) and `Request a Demo` (→ `/demo`) — `src/app/contact/page.tsx:848-853`

### 1.5 `/demo` — `src/app/demo/page.tsx`
- **Metadata title:** `Book a Demo - Krovos` — `src/app/demo/page.tsx:2`
- **Metadata description:** `Schedule a personalized demo of the Krovos AI automation platform.` — `src/app/demo/page.tsx:3`
- **H1:** `Book a demo` — `src/app/demo/page.tsx:12`
- **Lead:** `See how Krovos can transform your workflows. Schedule a personalized demo with our team.` — `src/app/demo/page.tsx:13-15`
- **Form fields:** `First name`, `Last name`, `Work email`, `Company`, `Company size` (select: `1-10`, `11-50`, `51-200`, `201-500`, `500+`), `What would you like to see?` — `src/app/demo/page.tsx:19-49`
- **Submit CTA:** `Schedule demo` — `src/app/demo/page.tsx:50-52`
- **No stats, no awards, no customer names, no testimonials on this page.**

### 1.6 `/docs` — `src/app/docs/page.tsx`
- **Metadata title:** `Documentation - Krovos` — `src/app/docs/page.tsx:4`
- **Metadata description:** `Complete documentation for Krovos AI automation platform. Guides, tutorials, API reference, and more.` — `src/app/docs/page.tsx:5`
- **H1:** `Documentation` — `src/app/docs/page.tsx:54-56`
- **Lead:** `Everything you need to build with Krovos. From quickstart guides to advanced API reference.` — `src/app/docs/page.tsx:57-60`
- **Search input placeholder:** `Search documentation...` — `src/app/docs/page.tsx:74` (no live backend wired)
- **4 Section headings + sub-links (verbatim):**
  - `Getting Started` — items: `Quickstart`, `Installation`, `Your first workflow`, `Concepts` — `src/app/docs/page.tsx:10-16`
  - `Core Concepts` — items: `Agents`, `Workflows`, `Triggers`, `Actions` — `src/app/docs/page.tsx:18-25`
  - `Integrations` — items: `Overview`, `Slack`, `Jira`, `Salesforce` — `src/app/docs/page.tsx:27-34`
  - `API Reference` — items: `Authentication`, `REST API`, `Webhooks`, `SDKs` — `src/app/docs/page.tsx:36-43`
- **3 Quick-Link cards:** `Quickstart` (`Get up and running in 5 minutes`), `API Reference` (`Complete API documentation`), `Templates` (`Pre-built workflows to get started`) — `src/app/docs/page.tsx:107-118`

### 1.7 `/integrations` — `src/app/integrations/page.tsx`
- **Metadata title:** `Integrations - Krovos` — `src/app/integrations/page.tsx:4`
- **Metadata description:** `Connect 500+ tools with Krovos AI automation. Slack, Jira, Salesforce, HubSpot, ServiceNow, and more.` — `src/app/integrations/page.tsx:5` **[UNVERIFIED]** — the page below only shows a curated list, not 500+ items.
- **H1:** `Connect every tool in your stack` — `src/app/integrations/page.tsx:35-37`
- **Lead:** `500+ integrations and growing. Connect your CRM, ITSM, HRIS, and more to build powerful automation workflows.` — `src/app/integrations/page.tsx:38-41` **[UNVERIFIED]** — same claim.
- **8 Categories with counts (verbatim):**
  - `Communication` `45` — `src/app/integrations/page.tsx:9`
  - `CRM` `32` — `src/app/integrations/page.tsx:10`
  - `IT Service Management` `28` — `src/app/integrations/page.tsx:11`
  - `Cloud Infrastructure` `56` — `src/app/integrations/page.tsx:12`
  - `Databases` `48` — `src/app/integrations/page.tsx:13`
  - `Marketing` `38` — `src/app/integrations/page.tsx:14`
  - `Finance` `24` — `src/app/integrations/page.tsx:15`
  - `HR` `22` — `src/app/integrations/page.tsx:16`
- **6 Featured integrations (verbatim):**
  - `Slack` — `Chat with agents, receive notifications, and trigger workflows` — `src/app/integrations/page.tsx:20`
  - `Jira` — `Create tickets, update issues, and automate project workflows` — `src/app/integrations/page.tsx:21`
  - `Salesforce` — `Sync contacts, manage opportunities, and automate CRM workflows` — `src/app/integrations/page.tsx:22`
  - `HubSpot` — `Marketing automation, lead scoring, and contact management` — `src/app/integrations/page.tsx:23`
  - `ServiceNow` — `Incident management, CMDB, and IT operations` — `src/app/integrations/page.tsx:24`
  - `Google Workspace` — `Gmail, Calendar, Drive, and Sheets integration` — `src/app/integrations/page.tsx:25`
- **Per-card CTA:** `View integration` (→ `/integrations/{slug}`) — `src/app/integrations/page.tsx:78-80`
- **Final CTA H2:** `Need a custom integration?` — `src/app/integrations/page.tsx:91`
- **CTA buttons:** `API Reference` (→ `/docs/api`) and `Contact sales` (→ `/contact`) — `src/app/integrations/page.tsx:97-101`

### 1.8 `/login` — `src/app/login/page.tsx`
- **Metadata title:** `Login - Krovos` — `src/app/login/page.tsx:4`
- **Metadata description:** `Sign in to your Krovos account.` — `src/app/login/page.tsx:5`
- **H1:** `Welcome back` — `src/app/login/page.tsx:20`
- **Subhead:** `Sign in to your account` — `src/app/login/page.tsx:21`
- **OAuth buttons:** `Continue with Google` (Google logo SVG, no real flow) — `src/app/login/page.tsx:25-33`; `Continue with Apple` (Apple logo SVG, no real flow) — `src/app/login/page.tsx:34-39`
- **Form labels:** `Email`, `Password` — `src/app/login/page.tsx:53-58`
- **Inline links:** `Remember me`, `Forgot password?` (→ `/forgot-password`) — `src/app/login/page.tsx:62-67`
- **Submit CTA:** `Sign in` — `src/app/login/page.tsx:69-71`
- **Conversion link:** `Don't have an account? Sign up` (→ `/signup`) — `src/app/login/page.tsx:76-79`
- **No stats, no claims.**

### 1.9 `/signup` — `src/app/signup/page.tsx`
- **Metadata title:** `Sign Up - Krovos` — `src/app/signup/page.tsx:4`
- **Metadata description:** `Create your free Krovos account and start automating workflows today.` — `src/app/signup/page.tsx:5`
- **H1:** `Create your account` — `src/app/signup/page.tsx:20`
- **Subhead:** `Start automating for free. No credit card required.` — `src/app/lup/page.tsx:21`
- **Form labels:** `Work email`, `Password` — `src/app/signup/page.tsx:26-31`
- **Submit CTA:** `Create account` — `src/app/signup/page.tsx:33-35`
- **Conversion link:** `Already have an account? Sign in` (→ `/login`) — `src/app/signup/page.tsx:40-44`

### 1.10 `/status` — `src/app/status/page.tsx`
- **Metadata title:** `Status - Krovos` — `src/app/status/page.tsx:2`
- **Metadata description:** `Krovos system status and uptime information.` — `src/app/status/page.tsx:3`
- **Status pill:** `All systems operational` — `src/app/status/page.tsx:26-28`
- **H1:** `Krovos Status` — `src/app/status/page.tsx:29`
- **System Status table:**
  - `API` — `operational` — `Uptime: 99.99%` — `src/app/status/page.tsx:7` **[UNVERIFIED]**
  - `Dashboard` — `operational` — `Uptime: 99.98%` — `src/app/status/page.tsx:8` **[UNVERIFIED]**
  - `Workflow Engine` — `operational` — `Uptime: 99.99%` — `src/app/status/page.tsx:9` **[UNVERIFIED]**
  - `AI Agents` — `operational` — `Uptime: 99.97%` — `src/app/status/page.tsx:10` **[UNVERIFIED]**
  - `Webhooks` — `operational` — `Uptime: 99.99%` — `src/app/status/page.tsx:11` **[UNVERIFIED]**
  - `API (EU)` — `operational` — `Uptime: 99.98%` — `src/app/status/page.tsx:12` **[UNVERIFIED]**
- **Recent Incidents table:**
  - `Feb 25, 2026` — `Minor latency in EU region` — `resolved` — `Low` — `src/app/status/page.tsx:16`
  - `Feb 20, 2026` — `Scheduled maintenance` — `resolved` — `None` — `src/app/status/page.tsx:17`

### 1.11 `/trust` — `src/app/trust/page.tsx`
- **Metadata title:** `Trust Center - Krovos` — `src/app/trust/page.tsx:4`
- **Metadata description:** `Security, compliance, and privacy at Krovos. SOC 2 Type II certified, GDPR compliant, and committed to responsible AI.` — `src/app/trust/page.tsx:5` **[UNVERIFIED]** — SOC 2 claim is not linked to a public report.
- **H1:** `Security & trust first` — `src/app/trust/page.tsx:42-44`
- **Lead:** `Enterprise-grade security, compliance, and privacy. Your data is protected with the highest standards.` — `src/app/trust/page.tsx:45-48`
- **6 Security items (verbatim):**
  - `SOC 2 Type II` — `Independently audited annually for security, availability, and confidentiality.` — `src/app/trust/page.tsx:10-12` **[UNVERIFIED]** — no report URL.
  - `GDPR Compliant` — `Full compliance with EU General Data Protection Regulation requirements.` — `src/app/trust/page.tsx:14-16`
  - `End-to-End Encryption` — `All data encrypted in transit (TLS 1.3) and at rest (AES-256).` — `src/app/trust/page.tsx:18-20`
  - `SSO & SAML` — `Enterprise single sign-on with Okta, Azure AD, and Google Workspace.` — `src/app/trust/page.tsx:22-24`
  - `Role-Based Access` — `Fine-grained permissions and audit trails for every action.` — `src/app/trust/page.tsx:26-28`
  - `99.9% Uptime SLA` — `Enterprise-grade reliability with financial guarantees.` — `src/app/trust/page.tsx:30-32`
- **Compliance section H2:** `Compliance certifications` — `src/app/trust/page.tsx:76`
- **5 Certification pills:** `SOC 2`, `GDPR`, `HIPAA`, `ISO 27001`, `CCPA` — `src/app/trust/page.tsx:79` — **[UNVERIFIED]** — SOC 2 and ISO 27001 not linked.
- **Responsible AI H2:** `Responsible AI` — `src/app/trust/page.tsx:91`
- **Responsible AI lead:** `We're committed to building AI that is fair, transparent, and accountable. Read our AI principles.` — `src/app/trust/page.tsx:93-95`
- **Link CTA:** `View AI principles` (→ `/trust/ai-principles` — page does not exist) — `src/app/trust/page.tsx:97`

### 1.12 `/legal/privacy` — `src/app/legal/privacy/page.tsx`
- **Metadata title:** `Privacy Policy - Krovos` — `src/app/legal/privacy/page.tsx:4`
- **Metadata description:** `Krovos Privacy Policy - How we collect, use, and protect your data.` — `src/app/legal/privacy/page.tsx:5`
- **H1:** `Privacy Policy` — `src/app/legal/privacy/page.tsx:12`
- **11 Section headings (verbatim):**
  - `1. Introduction` — `At Krovos Inc. ("Krovos," "we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our platform, or interact with our services.` — `src/app/legal/privacy/page.tsx:17-23`
  - `2. Information We Collect` — bullet list (`Register for an account`, `Use our platform or services`, `Subscribe to our newsletter`, `Contact our support team`, `Participate in surveys or promotions`) — `src/app/legal/privacy/page.tsx:27-35`
  - `3. How We Use Your Information` — bullet list (`Provide, maintain, and improve our services`, `Process transactions and send related information`, `Send administrative information, such as updates, security alerts, and support messages`, `Respond to your comments, questions, and provide customer service`, `Communicate with you about products, services, and events`, `Monitor and analyze trends, usage, and activities`, `Detect, investigate, and prevent fraudulent transactions and other illegal activities`) — `src/app/legal/privacy/page.tsx:39-49`
  - `4. Information Sharing` — `We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances: to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.` — `src/app/legal/privacy/page.tsx:53-60`
  - `5. Data Security` — `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption for data in transit and at rest.` — `src/app/legal/privacy/page.tsx:63-68`
  - `6. Your Rights` — bullet list (`Access the personal information we hold about you`, `Request correction of inaccurate personal information`, `Request deletion of your personal information`, `Object to processing of your personal information`, `Request restriction of processing your personal information`, `Request transfer of your personal information`, `Withdraw consent at any time`) — `src/app/legal/privacy/page.tsx:72-82`
  - `7. Cookies and Tracking Technologies` — `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.` — `src/app/legal/privacy/page.tsx:86-90`
  - `8. Third-Party Links` — `Our website may contain links to third-party websites, services, or applications that are not operated by us. We have no control over and assume no responsibility for their content, privacy policies, or practices.` — `src/app/legal/privacy/page.tsx:94-99`
  - `9. Children's Privacy` — `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.` — `src/app/legal/privacy/page.tsx:103-107`
  - `10. Changes to This Policy` — `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.` — `src/app/legal/privacy/page.tsx:111-116`
  - `11. Contact Us` — block: `Krovos Inc.`, `123 Innovation Drive`, `San Francisco, CA 94102`, `Email: privacy@krovos.com` — `src/app/legal/privacy/page.tsx:119-128` **[UNVERIFIED]** — mailing address is the generic template placeholder; per the BC Corporations registry the registered office is in Surrey BC.
- **Last updated:** `Last updated: February 2026` — `src/app/legal/privacy/page.tsx:132`

### 1.13 `/legal/terms` — `src/app/legal/terms/page.tsx`
- **Metadata title:** `Terms of Service - Krovos` — `src/app/legal/terms/page.tsx:4`
- **Metadata description:** `Krovos Terms of Service - Terms and conditions for using our services.` — `src/app/legal/terms/page.tsx:5`
- **H1:** `Terms of Service` — `src/app/legal/terms/page.tsx:12`
- **13 Section headings (verbatim, kept brief):**
  - `1. Acceptance of Terms` — `src/app/legal/terms/page.tsx:16-22`
  - `2. Description of Service` — `Krovos provides enterprise AI automation solutions, including but not limited to workflow automation, AI-powered analytics, cloud migration services, and related consulting services (the "Services").` — `src/app/legal/terms/page.tsx:25-29`
  - `3. User Accounts` — bullet list — `src/app/legal/terms/page.tsx:33-41`
  - `4. Payment Terms` — bullet list — `src/app/legal/terms/page.tsx:45-52`
  - `5. Acceptable Use` — bullet list — `src/app/legal/terms/page.tsx:56-65`
  - `6. Intellectual Property` — `src/app/legal/terms/page.tsx:69-74`
  - `7. Limitation of Liability` — `src/app/legal/terms/page.tsx:78-83`
  - `8. Disclaimer of Warranties` — `THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. KROVOS MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND...` — `src/app/legal/terms/page.tsx:87-93`
  - `9. Indemnification` — `src/app/legal/terms/page.tsx:97-102`
  - `10. Termination` — `src/app/legal/terms/page.tsx:105-110`
  - `11. Governing Law` — `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.` — `src/app/legal/terms/page.tsx:113-118` **[UNVERIFIED] / WRONG** — Krovos Inc. is a Canadian federal corporation; California law is almost certainly not the correct governing law for an entity headquartered in Surrey BC. Need legal review.
  - `12. Changes to Terms` — `src/app/legal/terms/page.tsx:121-126`
  - `13. Contact Information` — block: `Krovos Inc.`, `123 Innovation Drive`, `San Francisco, CA 94102`, `Email: legal@krovos.com` — `src/app/legal/terms/page.tsx:129-138` **[UNVERIFIED]** — same placeholder San Francisco address and wrong jurisdiction.
- **Last updated:** `Last updated: February 2026` — `src/app/legal/terms/page.tsx:142`

### 1.14 `/legal/cookies` — `src/app/legal/cookies/page.tsx`
- **Metadata title:** `Cookie Policy - Krovos` — `src/app/legal/cookies/page.tsx:4`
- **Metadata description:** `Krovos Cookie Policy - How we use cookies and similar tracking technologies.` — `src/app/legal/cookies/page.tsx:5`
- **H1:** `Cookie Policy` — `src/app/legal/cookies/page.tsx:12`
- **8 Section headings (verbatim):**
  - `1. What Are Cookies` — `Cookies are small text files...` — `src/app/legal/cookies/page.tsx:16-20`
  - `2. How We Use Cookies` — bullet list (`Essential Cookies: Required for the website to function properly`, `Analytics Cookies: Help us understand how visitors interact with our website`, `Functional Cookies: Enable enhanced functionality and personalization`, `Marketing Cookies: Used to track visitors across websites for advertising purposes`) — `src/app/legal/cookies/page.tsx:24-31`
  - `3. Types of Cookies We Use` — three sub-cards: `Essential Cookies`, `Analytics Cookies`, `Marketing Cookies` — `src/app/legal/cookies/page.tsx:35-61`
  - `4. Cookie List` — table with rows: `session_id` (Essential / User session management / Session), `csrf_token` (Essential / Security protection / Session), `_ga` (Analytics / Google Analytics tracking / 2 years), `_gid` (Analytics / Google Analytics tracking / 24 hours), `preferences` (Functional / User preferences storage / 1 year) — `src/app/legal/cookies/page.tsx:66-108`
  - `5. Managing Cookies` — links to Google Chrome, Mozilla Firefox, Safari, Microsoft Edge cookie-management docs — `src/app/legal/cookies/page.tsx:113-127`
  - `6. Third-Party Cookies` — `src/app/legal/cookies/page.tsx:130-134`
  - `7. Updates to This Policy` — `src/app/legal/cookies/page.tsx:138-143`
  - `8. Contact Us` — `Email: privacy@krovos.com` — `src/app/legal/cookies/page.tsx:146-152`
- **Last updated:** `Last updated: February 2026` — `src/app/legal/cookies/page.tsx:156`

---

## 2. COMPANY ROUTES (`src/app/company/**/page.tsx`)

### 2.1 `/company/about` — `src/app/company/about/page.tsx`
- **Metadata title:** `About - Krovos | Enterprise AI Automation Company` — `src/app/company/about/page.tsx:5`
- **Metadata description:** `Krovos is a global enterprise technology holding company delivering transformative AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology.` — `src/app/company/about/page.tsx:6`
- **H1:** `Building the Future of Enterprise Technology` — `src/app/company/about/page.tsx:66-68`
- **Referenced decorative image:** `src="/images/hero-enterprise.png"` alt `Krovos Enterprise Operations` — `src/app/company/about/page.tsx:82-87` (decorative)
- **Referenced decorative image 2:** `src="/images/ai-automation.png"` alt `AI Automation Platform` — `src/app/company/about/page.tsx:139-144` (decorative)
- **Stats H2:** (Stats row, no H2) — 4 stat values: `200+ Transform Completed`, `45% Avg. Revenue Increase`, `60% Cost Reduction`, `3x Faster Time-to-Market` — actually these come from `/solutions/transformation` page, not `/company/about`. (The stats section in `/company/about` mirrors `/about`'s numbers — see 1.2.)
- **Stats (verbatim) for /company/about:** `500+ Enterprise Clients`, `50M+ Workflows Automated`, `99.99% Uptime SLA`, `24/7 Support` — `src/app/company/about/page.tsx:48-52` **[UNVERIFIED]** — see 1.2.
- **Mission H2:** `Our Mission` (verbatim — see 1.2) — `src/app/company/about/page.tsx:115`
- **Vision H2:** `Our Vision` (verbatim — see 1.2) — `src/app/company/about/page.tsx:157`
- **Core Values H2:** `Our Core Values` (verbatim — see 1.2) — `src/app/company/about/page.tsx:215`
- **Leadership H2:** `Leadership Team` — `src/app/company/about/page.tsx:240`
- **3 Leadership bios (verbatim — **[UNVERIFIED]** / fabricated, exactly as `/about`):**
  - `Sarah Chen`, `CEO & Founder` — `Former VP of Engineering at Google with 15+ years in enterprise software. Led digital transformation initiatives for Fortune 500 companies.` — `src/app/company/about/page.tsx:41-44`
  - `Marcus Rodriguez`, `CTO` — `AI researcher and technologist. Previously founded 2 successful exits in the automation space. PhD in Machine Learning from Stanford.` — `src/app/company/about/page.tsx:43`
  - `Emily Watson`, `COO` — `Operational excellence leader with experience scaling startups to $100M+ ARR. Former McKinsey consultant.` — `src/app/company/about/page.tsx:44`
- **Global Presence H2:** `Global Presence` — `src/app/company/about/page.tsx:273`
- **Our Journey H2:** `Our Journey` — `src/app/company/about/page.tsx:329`
- **CTA H2:** `Join Our Growing Team` — `src/app/company/about/page.tsx:354`
- **CTAs:** `View Open Positions` (→ `/company/careers`) and `Get in Touch` (→ `/contact`) — `src/app/company/about/page.tsx:365, 374`

### 2.2 `/company/careers` — `src/app/company/careers/page.tsx`
- **Metadata title:** `Careers - Krovos` — `src/app/company/careers/page.tsx:4`
- **Metadata description:** `Join the Krovos team. We're building the future of AI automation.` — `src/app/company/careers/page.tsx:5`
- **H1:** `Join the team` — `src/app/company/careers/page.tsx:33-35`
- **Lead:** `We're building the future of work. Come help us automate every repetitive task and free people to do their best work.` — `src/app/company/careers/page.tsx:36-39`
- **Department badges (with counts, **[UNVERIFIED]**):**
  - `Engineering` — `12 open` — `src/app/company/careers/page.tsx:9`
  - `Product` — `5 open` — `src/app/company/careers/page.tsx:10`
  - `Sales` — `8 open` — `src/app/company/careers/page.tsx:11`
  - `Marketing` — `4 open` — `src/app/company/careers/page.tsx:12`
  - `Customer Success` — `6 open` — `src/app/company/careers/page.tsx:13`
  - `Operations` — `3 open` — `src/app/company/careers/page.tsx:14`
- **Benefits H2:** `Benefits & perks` — `src/app/company/careers/page.tsx:68`
- **6 Benefits (verbatim):** `Competitive salary & equity`, `Health, dental, vision insurance`, `Unlimited PTO`, `Remote-first culture`, `Home office stipend`, `Learning & development budget` — `src/app/company/careers/page.tsx:18-24`
- **Final CTA H2:** `Don't see the right role?` — `src/app/company/careers/page.tsx:85`
- **CTA:** `Email us` (→ `mailto:careers@krovos.com`) — `src/app/company/careers/page.tsx:90-92`

### 2.3 `/company/leadership` — `src/app/company/leadership/page.tsx`
- **Metadata title:** `Leadership - Krovos` — `src/app/company/leadership/page.tsx:4`
- **Metadata description:** `Meet the executive team at Krovos driving innovation in enterprise AI automation.` — `src/app/company/leadership/page.tsx:5`
- **H1:** `Our Leadership` — `src/app/company/leadership/page.tsx:95-97`
- **Lead:** `Meet the executive team driving Krovos's mission to transform enterprise operations through intelligent automation. Decades of combined experience in scaling technology companies.` — `src/app/company/leadership/page.tsx:98-101`
- **Executive Team H2:** `Executive Team` — `src/app/company/leadership/page.tsx:110`
- **8 Executive Team members (verbatim — **[UNVERIFIED]** / fabricated leadership):**
  - `Sarah Chen`, `Chief Executive Officer`, `Former VP of Engineering at Google with 15+ years in enterprise software. Led digital transformation initiatives for Fortune 500 companies.` — `src/app/company/leadership/page.tsx:9-13`
  - `Marcus Rodriguez`, `Chief Technology Officer`, `AI researcher turned technologist. Previously founded 2 successful exits in the automation space. PhD in Machine Learning from Stanford.` — `src/app/company/leadership/page.tsx:15-19`
  - `Emily Watson`, `Chief Operating Officer`, `Operational excellence leader with experience scaling startups to $100M+ ARR. Former McKinsey consultant specializing in tech transformation.` — `src/app/company/leadership/page.tsx:21-26`
  - `David Kim`, `Chief Financial Officer`, `20 years in corporate finance. Previously CFO at a Series D startup and investment banking at Goldman Sachs.` — `src/app/company/leadership/page.tsx:28-31`
  - `Priya Sharma`, `Chief Product Officer`, `Product visionary who shipped products used by 100M+ users. Former Head of Product at Stripe and Airbnb.` — `src/app/company/leadership/page.tsx:33-37` **[UNVERIFIED]**
  - `James Thompson`, `VP of Engineering`, `Infrastructure expert. Built systems handling 1B+ requests/day at Netflix. Open source contributor to Kubernetes and Prometheus.` — `src/app/company/leadership/page.tsx:39-43`
  - `Lisa Park`, `VP of Sales`, `Enterprise sales leader with $500M+ in career quota attainment. Previously led sales at Salesforce and ServiceNow.` — `src/app/company/leadership/page.tsx:45-49`
  - `Michael Foster`, `VP of Customer Success`, `Customer advocate who built success organizations from the ground up. Known for achieving 150%+ Net Promoter Score.` — `src/app/company/leadership/page.tsx:51-55`
- **Board of Directors H2:** `Board of Directors` — `src/app/company/leadership/page.tsx:137`
- **3 Board Members (verbatim — **[UNVERIFIED]** / fabricated):**
  - `Robert Williams`, `Board Chairman`, `Former CEO, EnterpriseTech Inc.`, `30 years in enterprise software leadership. Board member at multiple Fortune 500 technology companies.` — `src/app/company/leadership/page.tsx:60-65`
  - `Jennifer Martinez`, `Board Member`, `Managing Partner, Horizon Ventures`, `Leading investor in enterprise AI. Partnered with 5 unicorn exits in B2B SaaS.` — `src/app/company/leadership/page.tsx:67-72`
  - `Thomas Anderson`, `Board Member`, `Former CTO, CloudScale Systems`, `Technical architect behind some of the world's largest distributed systems. Angel investor in 50+ startups.` — `src/app/company/leadership/page.tsx:74-79`
- **Leadership Philosophy H2:** `Leadership Philosophy` — `src/app/company/leadership/page.tsx:166`
- **Philosophy paragraph:** `Our leadership team believes in servant leadership - empowering teams to do their best work while removing obstacles. We foster a culture of transparency, continuous learning, and customer obsession.` — `src/app/company/leadership/page.tsx:167-171`
- **Philosophy stats (verbatim):** `200+ Team Members`, `15 Countries`, `4.9/5 Glassdoor Rating`, `95% Retention Rate` — `src/app/company/leadership/page.tsx:174-188` **[UNVERIFIED]**
- **Core Principles bullets:** `Customer obsession in every decision`, `Bias for action and rapid iteration`, `Radical transparency and open communication`, `Excellence in everything we ship`, `Building for the long term` — `src/app/company/leadership/page.tsx:202-235`
- **Final CTA H2:** `Join Our Growing Team` — `src/app/company/leadership/page.tsx:247`
- **CTAs:** `View Open Positions` (→ `/company/careers`), `Contact Our Team` (→ `/contact`) — `src/app/company/leadership/page.tsx:258, 267`

### 2.4 `/company/partners` — `src/app/company/partners/page.tsx`
- **Metadata title:** `Partners - Krovos` — `src/app/company/partners/page.tsx:4`
- **Metadata description:** `Explore Krovos's strategic partnerships with leading technology companies and consulting firms.` — `src/app/company/partners/page.tsx:5` **[UNVERIFIED]** — no partner confirmation in code.
- **H1:** `Strategic Partners` — `src/app/company/partners/page.tsx:122-124`
- **Lead:** `Join our partner ecosystem to deliver cutting-edge AI automation solutions to enterprise clients worldwide. Together, we transform how businesses operate.` — `src/app/company/partners/page.tsx:125-128`
- **Technology Partners H2:** `Technology Partners` — `src/app/company/partners/page.tsx:137`
- **6 Tiered Cloud Vendors (verbatim — **[UNVERIFIED]** — Krovos has not publicly announced these tiers):**
  - `Amazon Web Services` (logo `AWS`) `Premier` — `Advanced tier partner delivering enterprise cloud solutions on AWS infrastructure.` Since `2024` — `src/app/company/partners/page.tsx:10-15`
  - `Microsoft Azure` (logo `Azure`) `Gold` — `Gold certified partner for Azure cloud migration and integration services.` Since `2024` — `src/app/company/partners/page.tsx:17-22`
  - `Google Cloud` (logo `GCP`) `Premier` — `Premier partner specializing in AI/ML and data analytics on Google Cloud.` Since `2023` — `src/app/company/partners/page.tsx:24-29`
  - `Salesforce` (logo `SFDC`) `AppExchange` — `Certified AppExchange partner building enterprise automation solutions.` Since `2024` — `src/app/company/partners/page.tsx:31-36`
  - `Snowflake` (logo `SNOW`) `Technology` — `Data cloud partner enabling enterprise analytics and data warehousing.` Since `2024` — `src/app/company/partners/page.tsx:38-43`
  - `Databricks` (logo `DBX`) `Partner` — `AI and machine learning partner for advanced data platform implementations.` Since `2025` — `src/app/company/partners/page.tsx:45-50`
- **Integrations & Technologies H2:** `Integrations & Technologies` — `src/app/company/partners/page.tsx:177`
- **12 Technology Pills (verbatim category):** `OpenAI` (AI/ML), `Anthropic` (AI/ML), `MongoDB` (Database), `PostgreSQL` (Database), `Redis` (Cache), `Stripe` (Payments), `Twilio` (Communications), `Auth0` (Security), `Okta` (Security), `Cloudflare` (Infrastructure), `Docker` (DevOps), `Kubernetes` (DevOps) — `src/app/company/partners/page.tsx:54-66`
- **Consulting Partners H2:** `Consulting Partners` — `src/app/company/partners/page.tsx:198`
- **4 Consulting firms (verbatim — **[UNVERIFIED]** — no confirmation in code that Krovos has these partnerships):**
  - `Deloitte` `Strategic` — services: `Enterprise transformation`, `Risk advisory` — `src/app/company/partners/page.tsx:69-73`
  - `Accenture` `Implementation` — services: `Digital transformation`, `Cloud migration` — `src/app/company/partners/page.tsx:74-78`
  - `McKinsey & Company` `Strategy` — services: `Strategy consulting`, `Operations optimization` — `src/app/company/partners/page.tsx:79-83`
  - `PwC` `Advisory` — services: `Risk management`, `Compliance` — `src/app/company/partners/page.tsx:84-88`
- **Partner Benefits H2:** `Partner Benefits` — `src/app/company/partners/page.tsx:236`
  - 4 items (verbatim): `Co-sell Opportunities`, `Technical Enablement`, `Marketing Support`, `Dedicated Support` — `src/app/company/partners/page.tsx:92-108`
- **Partner Program H2:** `Partner Program` — `src/app/company/partners/page.tsx:265`
- **3 Partner Program tiers (verbatim):** `Registered`, `Select`, `Premier` — `src/app/company/partners/page.tsx:283-325`
- **CTA H2:** `Ready to Partner with Krovos?` — `src/app/company/partners/page.tsx:357`
- **CTA:** `Apply Now` (→ `/contact`) — `src/app/company/partners/page.tsx:367`

### 2.5 `/company/press` — `src/app/company/press/page.tsx`
- **Metadata title:** `Press - Krovos` — `src/app/company/press/page.tsx:4`
- **Metadata description:** `Latest news, press releases, and media coverage about Krovos.` — `src/app/company/press/page.tsx:5`
- **H1:** `Press Room` — `src/app/company/press/page.tsx:137-139`
- **Lead:** `Latest news, press releases, and media coverage about Krovos. Stay updated with our latest announcements and achievements.` — `src/app/company/press/page.tsx:140-143`
- **Press Releases H2:** `Press Releases` — `src/app/company/press/page.tsx:152`
- **6 Press Releases (verbatim dates/titles/excerpts — all **[UNVERIFIED]**):**
  - `February 2026` — `Krovos Raises $50M Series B to Accelerate Enterprise AI Automation` — `Funding led by Horizon Ventures to expand go-to-market and product development for enterprise customers.` — category `Funding` — `src/app/company/press/page.tsx:9-13`
  - `January 2026` — `Krovos Announces Strategic Partnership with AWS` — `New advanced tier partnership to deliver enterprise-grade AI automation solutions on AWS infrastructure.` — category `Partnership` — `src/app/company/press/page.tsx:15-19`
  - `December 2025` — `Krovos Achieves SOC 2 Type II Certification` — `Security compliance milestone demonstrates commitment to enterprise-grade security and data protection.` — category `Company` — `src/app/company/press/page.tsx:21-25`
  - `November 2025` — `Krovos Launches Enterprise Suite for Large Organizations` — `New product tier designed specifically for enterprises with 10,000+ employees needing advanced automation.` — category `Product` — `src/app/company/press/page.tsx:27-31`
  - `October 2025` — `Krovos Named to Forbes Cloud 100 List` — `Recognition as one of the top private cloud companies in the world for the second consecutive year.` — category `Recognition` — `src/app/company/press/page.tsx:33-37`
  - `September 2025` — `Krovos Expands to Europe with London Office` — `European headquarters marks next phase of global expansion and customer support in EMEA region.` — category `Expansion` — `src/app/company/press/page.tsx:39-43`
- **Media Coverage H2:** `Media Coverage` — `src/app/company/press/page.tsx:193`
- **6 Media stories (verbatim publications — all **[UNVERIFIED]** / fake, `url: "#"` for all):**
  - `Forbes`, `February 2026`, `How Krovos is Revolutionizing Enterprise Automation` — `src/app/company/press/page.tsx:48-52`
  - `TechCrunch`, `January 2026`, `Krovos nabs $50M to build AI agents for the enterprise` — `src/app/company/press/page.tsx:54-58`
  - `VentureBeat`, `December 2025`, `Krovos launches new enterprise automation platform with advanced security` — `src/app/company/press/page.tsx:60-64`
  - `Business Insider`, `November 2025`, `This startup is helping Fortune 500 companies automate their most tedious tasks` — `src/app/company/press/page.tsx:66-70`
  - `The Information`, `October 2025`, `Krovos emerges as leader in enterprise AI agent market` — `src/app/company/press/page.tsx:72-76`
  - `Bloomberg`, `September 2025`, `Enterprise AI startup Krovos sets sights on European expansion` — `src/app/company/press/page.tsx:78-82`
- **Awards & Recognition H2:** `Awards & Recognition` — `src/app/company/press/page.tsx:222`
- **5 Awards (verbatim — all **[UNVERIFIED]** / unverified awards):**
  - `Forbes Cloud 100` — `Forbes` (2025) — `Named to the annual list of top cloud companies` — `src/app/company/press/page.tsx:87-92`
  - `Best Enterprise Product` — `SaaStr Awards` (2025) — `Recognized for excellence in enterprise software` — `src/app/company/press/page.tsx:93-98`
  - `AI Innovation Award` — `TechCrunch Disrupt` (2025) — `Winner of the AI category at Disrupt 2025` — `src/app/company/press/page.tsx:99-104`
  - `Best Workplace` — `Fortune` (2024) — `Named to Best Workplace in Technology list` — `src/app/company/press/page.tsx:105-110`
  - `Emerging Unicorn` — `YC` (2024) — `Recognized as a high-growth startup on unicorn trajectory` — `src/app/company/press/page.tsx:111-116`
- **Brand Assets H2:** `Brand Assets` — `src/app/company/press/page.tsx:256`
- **3 brand-asset placeholders:** `Krovos logo (PNG/SVG)`, `Brand guidelines`, `Download press kit` — `src/app/company/press/page.tsx:119-123`
- **Final CTA H2:** `Media Inquiries` — `src/app/company/press/page.tsx:296`
- **CTA:** `Contact Press Team` (→ `mailto:press@krovos.com`) — `src/app/company/press/page.tsx:305`

---

## 3. PRODUCT ROUTES (`src/app/product/**/page.tsx`)

### 3.1 `/product` — `src/app/product/page.tsx`
- **Metadata title:** `Product Overview - Krovos` — `src/app/product/page.tsx:5`
- **Metadata description:** `Discover the Krovos AI automation platform. Build, deploy, and manage intelligent agents that transform your enterprise workflows.` — `src/app/product/page.tsx:6`
- **No text H1** — uses `QuantumHero` component (decorative canvas + HUD overlay). The QuantumHero displays these labels: `128Q QUBITS`, `0.01ms LATENCY`, `99.9% UPTIME`, `2048 ENTANGLE`, `CRYO-STATE 15mK`, `ENTANGLEMENT RATIO 0.9999`, `NEURAL DENSITY 847 TB/s`, `COHERENCE TIME 100μs` — `src/components/hero/QuantumHero.tsx:344-445` — **all **[UNVERIFIED] / nonsensical fluff** (Krovos sells automation, not quantum computers).
- **Lead copy under hero:** not present — section jumps straight into Features grid.
- **Features H2 (grid cards):** `AI Agents` (→ `/product/agents`) — description: `Intelligent agents powered by large language models that understand context, make decisions, and take autonomous action.` — `src/app/product/page.tsx:11-14`; `Workflow Orchestration` (→ `/product/orchestration`) — `Visual workflow builder to design complex multi-step automation pipelines with branching logic.` — `src/app/product/page.tsx:16-21`; `Governance & Guardrails` (→ `/product/governance`) — `Enterprise-grade controls with approvals, permissions, and audit trails for compliance.` — `src/app/product/page.tsx:23-27`; `Enterprise Security` (→ `/product/security`) — `SOC 2 Type II certified with end-to-end encryption, SSO, and role-based access control.` — `src/app/product/page.tsx:29-32` **[UNVERIFIED]** — SOC 2 not linked; `Integrations Hub` (→ `/integrations`) — `Connect 500+ tools including Salesforce, Slack, Jira, ServiceNow, and more.` — `src/app/product/page.tsx:35-38` **[UNVERIFIED]**; `Observability` (→ `/product/observability`) — `Real-time monitoring with audit logs, run history, and performance analytics.` — `src/app/product/page.tsx:41-44`
- **Final CTA H2:** `Ready to get started?` — `src/app/product/page.tsx:92-94`
- **Lead:** `Start building intelligent workflows today. Free forever tier available.` — `src/app/product/page.tsx:95-97`
- **CTAs:** `Start free` (→ `/signup`) and `Book demo` (→ `/demo`) — `src/app/product/page.tsx:101, 109`

### 3.2 `/product/agents` — `src/app/product/agents/page.tsx`
- **Metadata title:** `AI Agents - Krovos` — `src/app/product/agents/page.tsx:4`
- **Metadata description:** `Deploy intelligent AI agents that understand context and take autonomous action. Powered by large language models with long-term memory.` — `src/app/product/agents/page.tsx:5`
- **H1:** `AI Agents that actually understand your business` — `src/app/product/agents/page.tsx:56-58`
- **Lead:** `Deploy autonomous agents powered by large language models. They understand context, remember past interactions, and take intelligent action.` — `src/app/product/agents/page.tsx:59-62`
- **Hero CTAs:** `Start free` (→ `/signup`), `Book demo` (→ `/demo`) — `src/app/product/agents/page.tsx:66, 73`
- **Section H2:** `How AI Agents work` — `src/app/product/agents/page.tsx:85`
- **3 numbered steps (verbatim):** `1 Define — Define your agent's role, instructions, and available tools.`, `2 Train — Connect your data sources and let agents learn from your workflows.`, `3 Deploy — Deploy agents to Slack, email, or API. They're ready to help.` — `src/app/product/agents/page.tsx:88-114`
- **H2:** `Built for enterprise workloads` — `src/app/product/agents/page.tsx:123-125`
- **4 capability titles (verbatim):** `Context-Aware`, `Long-Term Memory`, `Tool Calling`, `Human-in-the-Loop` — `src/app/product/agents/page.tsx:9-24`
- **H2:** `Pre-built agents for every team` — `src/app/product/agents/page.tsx:142-144`
- **Use cases (verbatim):** `Support Agent — Answer customer questions, summarize conversations, and route tickets.`, `Data Analyst — Query databases, generate reports, and provide insights.`, `Sales Assistant — Qualify leads, enrich contacts, and automate follow-ups.`, `IT Operations — Triage incidents, run diagnostics, and automate remediation.` — `src/app/product/agents/page.tsx:27-44`
- **Final CTA H2:** `Ready to deploy your first agent?` — `src/app/product/agents/page.tsx:160-162`
- **Lead:** `Start building intelligent agents today. Free forever tier available.` — `src/app/product/agents/page.tsx:163-165`
- **CTAs:** `Start free` (→ `/signup`), `Read docs` (→ `/docs/agents`) — `src/app/product/agents/page.tsx:168, 176`

### 3.3 `/product/governance` — `src/app/product/governance/page.tsx`
- **Metadata title:** `Governance & Guardrails - Krovos` — `src/app/product/governance/page.tsx:4`
- **Metadata description:** `Enterprise-grade governance with approvals, permissions, and audit trails. Ensure compliance while empowering automation.` — `src/app/product/governance/page.tsx:5`
- **H1:** `Enterprise governance` — `src/app/product/governance/page.tsx:17-19`
- **Lead:** `Built-in controls for approvals, permissions, and audit trails. Automate with confidence while maintaining compliance.` — `src/app/product/governance/page.tsx:20-23`
- **Hero CTAs:** `Start free` (→ `/signup`), `Book demo` (→ `/demo`) — `src/app/product/governance/page.tsx:25, 28`
- **6 capability cards (verbatim):** `Approvals`, `RBAC`, `Audit Logs`, `Policy Engine`, `Data Residency`, `Compliance Reports` — `src/app/product/governance/page.tsx:40-45`
- **Final CTA H2:** `Ready to automate safely?` — `src/app/product/governance/page.tsx:58`
- **CTA:** `Start free` (→ `/signup`) — `src/app/product/governance/page.tsx:61`

### 3.4 `/product/orchestration` — `src/app/product/orchestration/page.tsx`
- **Metadata title:** `Workflow Orchestration - Krovos` — `src/app/product/orchestration/page.tsx:4`
- **Metadata description:** `Visual workflow builder for complex automation pipelines. Design, test, and deploy multi-step workflows with ease.` — `src/app/product/orchestration/page.tsx:5`
- **H1:** `Visual workflow orchestration` — `src/app/product/orchestration/page.tsx:17-19`
- **Lead:** `Design complex multi-step automation pipelines with our drag-and-drop visual builder. No coding required.` — `src/app/product/orchestration/page.tsx:20-23`
- **Hero CTAs:** `Start free` (→ `/signup`), `Book demo` (→ `/demo`) — `src/app/product/orchestration/page.tsx:25, 28`
- **H2:** `Build workflows in minutes` — `src/app/product/orchestration/page.tsx:39`
- **3 steps (verbatim):** `1 Drag & drop — Build workflows with our visual editor`, `2 Connect apps — Link 500+ integrations together`, `3 Deploy — Activate with one click` — `src/app/product/orchestration/page.tsx:42-62` **[UNVERIFIED]** — "500+ integrations" same claim.
- **Final CTA H2:** `Ready to build?` — `src/app/product/orchestration/page.tsx:69`
- **CTA:** `Start free` (→ `/signup`) — `src/app/product/orchestration/page.tsx:72`

### 3.5 `/product/security` — `src/app/product/security/page.tsx`
- **Metadata title:** `Security - Krovos` — `src/app/product/security/page.tsx:4`
- **Metadata description:** `Enterprise-grade security at Krovos. SOC 2 Type II, encryption, SSO, and more.` — `src/app/product/security/page.tsx:5` **[UNVERIFIED]** — SOC 2 not linked.
- **H1:** `Security first` — `src/app/product/security/page.tsx:33-35`
- **Lead:** `Enterprise-grade security built into every layer of the Krovos platform.` — `src/app/product/security/page.tsx:36-38`
- **4 Feature buckets (verbatim items):**
  - `Encryption` — `TLS 1.3 in transit`, `AES-256 at rest`, `Customer-managed keys` — `src/app/product/security/page.tsx:10-12`
  - `Access Control` — `SSO/SAML`, `Role-based access`, `MFA support` — `src/app/product/security/page.tsx:14-16`
  - `Compliance` — `SOC 2 Type II`, `GDPR`, `HIPAA ready` — `src/app/product/security/page.tsx:18-20` **[UNVERIFIED]** for SOC 2 / HIPAA.
  - `Monitoring` — `24/7 monitoring`, `Intrusion detection`, `Incident response` — `src/app/product/security/page.tsx:22-24`
- **Final CTA H2:** `Questions about security?` — `src/app/product/security/page.tsx:67`
- **CTA:** `Contact security` (→ `/contact`) — `src/app/product/security/page.tsx:70`

---

## 4. RESOURCES ROUTES (`src/app/resources/**/page.tsx`)

### 4.1 `/resources` — `src/app/resources/page.tsx`
- **Metadata title:** `Resources - Krovos` — `src/app/resources/page.tsx:4`
- **Metadata description:** `Resources for building with Krovos. Case studies, templates, guides, blog posts, and more.` — `src/app/resources/page.tsx:5`
- **H1:** `Resources` — `src/app/resources/page.tsx:35-37`
- **Lead:** `Everything you need to succeed with Krovos. Case studies, templates, guides, and more.` — `src/app/resources/page.tsx:38-41`
- **4 category counts (verbatim — **[UNVERIFIED]**):** `Case Studies 12 items`, `Templates 45 items`, `Blog 28 items`, `Guides 32 items` — `src/app/resources/page.tsx:9-13`
- **4 Featured templates:** `Slack Incident Alert` — `Get notified in Slack when new incidents are created`; `Sales Lead Routing` — `Automatically route leads to the right sales reps`; `Employee Onboarding` — `Automate new hire onboarding workflow`; `Invoice Processing` — `Extract data from invoices and create payments` — `src/app/resources/page.tsx:16-20`
- **3 latest blog post titles (verbatim):** `How AI Agents are transforming enterprise workflows` (Feb 20, 2026); `Building a SOC 2 compliant automation platform` (Feb 15, 2026); `Top 10 use cases for AI in IT operations` (Feb 10, 2026) — `src/app/resources/page.tsx:23-26`
- **H2:** `Stay updated` — `src/app/resources/page.tsx:121`
- **Newsletter CTA:** `Subscribe` — `src/app/resources/page.tsx:126`

### 4.2 `/resources/api` — `src/app/resources/api/page.tsx`
- **Metadata title:** `API Reference - Krovos` — `src/app/resources/api/page.tsx:4`
- **Metadata description:** `Complete API documentation for Krovos automation platform. Integrate with our powerful AI automation capabilities.` — `src/app/resources/api/page.tsx:5`
- **H1:** `API Reference` — `src/app/resources/api/page.tsx:72-74`
- **Lead:** `Build powerful integrations with the Krovos API. Automate workflows, manage executions, and access analytics programmatically.` — `src/app/resources/api/page.tsx:75-78`
- **Hero CTAs:** `Get API Key` (→ `/signup`) and `View Guides` (→ `/docs`) — `src/app/resources/api/page.tsx:83, 93`
- **3 sample curl endpoints (verbatim):** `POST /api/v1/workflows — Create a new automation workflow`, `GET /api/v1/workflows/:id — Get workflow details by ID`, `PUT /api/v1/workflows/:id — Update an existing workflow`, `DELETE /api/v1/workflows/:id — Delete a workflow`, `POST /api/v1/executions — Execute a workflow`, `GET /api/v1/executions/:id — Get execution status`, `GET /api/v1/analytics — Get workflow analytics`, `POST /api/v1/integrations — Register a new integration` — `src/app/resources/api/page.tsx:9-48`
- **6 SDKs (verbatim):** `JavaScript` (Official Node.js and browser SDK), `Python` (Python client library), `Go` (Go SDK for high-performance apps), `Ruby` (Ruby gem for Rails integration), `Java` (Java SDK for enterprise apps), `C#` (.NET SDK for Microsoft stack) — `src/app/resources/api/page.tsx:52-57`
- **Rate Limits (verbatim):** `1,000 requests/hour (Free)`, `50,000 requests/hour (Pro)`, `Unlimited requests/hour (Enterprise)` — `src/app/resources/api/page.tsx:190-199`
- **Final CTA H2:** `Start Building with Krovos API` — `src/app/resources/api/page.tsx:210`
- **CTA:** `Get API Key` (→ `/signup`) — `src/app/resources/api/page.tsx:220`

### 4.3 `/resources/blog` — `src/app/resources/blog/page.tsx`
- **Metadata title:** `Blog - Krovos` — `src/app/resources/blog/page.tsx:4`
- **Metadata description:** `Insights, tutorials, and news about AI automation, enterprise technology, and digital transformation.` — `src/app/resources/blog/page.tsx:5`
- **H1:** `Blog & Insights` — `src/app/resources/blog/page.tsx:75-77`
- **Lead:** `Stay up to date with the latest in AI automation, enterprise technology, and digital transformation.` — `src/app/resources/blog/page.tsx:78-80`
- **Filter pills (verbatim):** `All Posts`, `AI & Automation`, `Case Studies`, `Product`, `Tutorial`, `Industry`, `Security` — `src/app/resources/blog/page.tsx:54-60`
- **6 blog posts (verbatim — all **[UNVERIFIED]**, dates between Jan 20 and Feb 20, 2026):**
  - `The Future of AI Agents in Enterprise Automation` (AI & Automation, Feb 20, 2026, 8 min) — `Exploring how AI agents are transforming enterprise workflows and what it means for the future of work.` — `src/app/resources/blog/page.tsx:9-15`
  - `How a Fortune 500 Bank Reduced Processing Time by 75%` (Case Studies, Feb 15, 2026, 12 min) — `A deep dive into how we helped a major financial institution automate their loan approval process.` — `src/app/resources/blog/page.tsx:16-22`
  - `Introducing Krovos Enterprise: Built for Scale` (Product, Feb 10, 2026, 5 min) — `Announcing our new enterprise tier with advanced security, compliance, and customization features.` — `src/app/resources/blog/page.tsx:23-29`
  - `Building Your First AI Automation Workflow` (Tutorial, Feb 5, 2026, 15 min) — `A step-by-step guide to creating intelligent workflows that learn and improve over time.` — `src/app/resources/blog/page.tsx:30-36`
  - `The State of Enterprise Automation in 2026` (Industry, Jan 28, 2026, 20 min) — `Our annual report on the state of automation in enterprises, including trends and predictions.` — `src/app/resources/blog/page.tsx:37-43`
  - `Zero Trust Security for AI Automation Platforms` (Security, Jan 20, 2026, 10 min) — `Best practices for implementing zero trust architecture in automated systems.` — `src/app/resources/blog/page.tsx:44-50`
- **Newsletter CTA:** `Subscribe` — `src/app/resources/blog/page.tsx:198`

### 4.4 `/resources/case-studies` — `src/app/resources/case-studies/page.tsx`
- **Metadata title:** `Case Studies - Krovos` — `src/app/resources/case-studies/page.tsx:4`
- **Metadata description:** `Discover how leading companies transform their operations with Krovos AI automation solutions.` — `src/app/resources/case-studies/page.tsx:5`
- **H1:** `Customer Success Stories` — `src/app/resources/case-studies/page.tsx:111-113`
- **Lead:** `See how leading enterprises are transforming their operations with Krovos AI automation. Real results, proven ROI, and measurable impact.` — `src/app/resources/case-studies/page.tsx:114-117`
- **Industry filter pills:** `All Industries`, `Financial Services`, `Healthcare`, `Manufacturing`, `Retail`, `Technology`, `Insurance` — `src/app/resources/case-studies/page.tsx:90-96`
- **6 Case Studies (verbatim — all **[UNVERIFIED]** — company names are generic descriptors, not real customers):**
  - `Fortune 500 Bank` / `Financial Services` / logo `F5B` — challenge `Manual loan approval process taking 5+ days with high error rates` — solution `AI-powered document processing and decision automation` — results: `75% Faster Processing`, `95% Accuracy Rate`, `$8M Annual Savings` — `src/app/resources/case-studies/page.tsx:9-21`
  - `Global Manufacturer` / `Manufacturing` / logo `GM` — challenge `Complex supply chain with limited visibility and slow response times` — solution `Real-time supply chain monitoring and predictive analytics` — results: `40% Faster Delivery`, `60% Less Downtime`, `$12M Cost Savings` — `src/app/resources/case-studies/page.tsx:22-34`
  - `Healthcare System` / `Healthcare` / logo `HS` — challenge `Manual compliance reporting taking weeks each quarter` — solution `Automated compliance monitoring and reporting platform` — results: `90% Faster Reporting`, `100% Compliance`, `500+ Hours Saved/Month` — `src/app/resources/case-studies/page.tsx:35-47`
  - `Retail Giant` / `Retail` / logo `RG` — challenge `Inconsistent customer service across channels` — solution `AI-powered customer service automation with omnichannel support` — results: `60% Faster Response`, `85% Customer Satisfaction`, `$4M Support Cost Reduction` — `src/app/resources/case-studies/page.tsx:48-60`
  - `Tech Unicorn` / `Technology` / logo `TU` — challenge `Rapid growth overwhelming manual onboarding processes` — solution `Automated employee onboarding and IT provisioning` — results: `80% Faster Onboarding`, `50% IT Workload Reduced`, `3x Scale Capacity` — `src/app/resources/case-studies/page.tsx:61-73`
  - `Insurance Leader` / `Insurance` / logo `IL` — challenge `Slow claims processing with high manual error rates` — solution `AI-powered claims processing with fraud detection` — results: `70% Faster Claims`, `99% Fraud Detection`, `$6M Annual Savings` — `src/app/resources/case-studies/page.tsx:74-86`
- **Per-card CTA:** `Read Full Story` (→ `/contact`) — `src/app/resources/case-studies/page.tsx:184`
- **Final CTA H2:** `Ready to See Results?` — `src/app/resources/case-studies/page.tsx:213`
- **CTA:** `Get a Demo` (→ `/contact`) — `src/app/resources/case-studies/page.tsx:223`

### 4.5 `/resources/templates` — `src/app/resources/templates/page.tsx`
- **Metadata title:** `Templates - Krovos` — `src/app/resources/templates/page.tsx:4`
- **Metadata description:** `Free workflow templates and automation recipes to jumpstart your productivity with Krovos.` — `src/app/resources/templates/page.tsx:5`
- **H1:** `Workflow Templates` — `src/app/resources/templates/page.tsx:85-87`
- **Lead:** `Jumpstart your automation with pre-built templates. Simply customize and deploy to save hours of setup time.` — `src/app/resources/templates/page.tsx:88-91`
- **Category pills (verbatim):** `All`, `Sales`, `Marketing`, `Support`, `Finance`, `HR`, `Productivity`, `Development` — `src/app/resources/templates/page.tsx:71`
- **10 templates (verbatim names + descriptions):** `Customer Onboarding` (Sales, Popular), `Lead Scoring` (Marketing, Popular), `Support Ticket Routing` (Support, Trending), `Social Media Publishing` (Marketing), `Invoice Processing` (Finance), `Employee Offboarding` (HR), `Content Calendar` (Marketing), `Meeting Notes to Tasks` (Productivity), `Data Sync` (Development), `Weekly Report` (Productivity) — `src/app/resources/templates/page.tsx:9-68`
- **Per-template CTA:** `Use template` — `src/app/resources/templates/page.tsx:144`
- **Final CTA H2:** `Build Your Own Template` — `src/app/resources/templates/page.tsx:157`
- **CTA:** `Get Started Free` (→ `/signup`) — `src/app/resources/templates/page.tsx:168`

### 4.6 `/resources/webinars` — `src/app/resources/webinars/page.tsx`
- **Metadata title:** `Webinars - Krovos` — `src/app/resources/webinars/page.tsx:4`
- **Metadata description:** `Watch webinars on AI automation, enterprise technology, and digital transformation. Live and on-demand sessions.` — `src/app/resources/webinars/page.tsx:5`
- **H1:** `Webinars & Events` — `src/app/resources/webinars/page.tsx:88-90`
- **Lead:** `Watch expert-led sessions on AI automation, security, cloud, and enterprise transformation.` — `src/app/resources/webinars/page.tsx:91-94`
- **2 Upcoming Webinars (verbatim — **[UNVERIFIED]** — these are also fabricated by the same internal team names used elsewhere):**
  - `Enterprise AI Implementation Strategies` (Mar 15, 2026, 2:00 PM EST) — `Sarah Chen, CEO` — `Learn strategies for successfully implementing AI in enterprise environments.` — `src/app/resources/webinars/page.tsx:60-65`
  - `Security Best Practices for 2026` (Mar 22, 2026, 1:00 PM EST) — `David Kim, CISO` — `Stay ahead of emerging security threats with proactive strategies.` — `src/app/resources/webinars/page.tsx:66-72`
- **6 On-Demand Webinars (verbatim):**
  - `The Future of AI in Enterprise` (Mar 15, 2026) — `Sarah Chen, CEO` (Live) — `src/app/resources/webinars/page.tsx:9-16`
  - `Zero Trust Security Implementation` (Mar 10, 2026) — `David Kim, CISO` — `src/app/resources/webinars/page.tsx:17-24`
  - `Cloud Migration Best Practices` (Mar 5, 2026) — `James Thompson, VP Engineering` — `src/app/resources/webinars/page.tsx:25-32`
  - `Automation in Financial Services` (Feb 28, 2026) — `Marcus Rodriguez, CTO` — `src/app/resources/webinars/page.tsx:33-40`
  - `Building AI-Powered Products` (Feb 20, 2026) — `Priya Sharma, CPO` — `src/app/resources/webinars/page.tsx:41-48`
  - `Scaling Enterprise Automation` (Feb 15, 2026) — `Emily Watson, COO` — `src/app/resources/webinars/page.tsx:49-56`
- **Per-webinar CTA:** `Register Now` (upcoming) / `Request Access` (on-demand) — `src/app/resources/webinars/page.tsx:127, 164`

### 4.7 `/resources/whitepapers` — `src/app/resources/whitepapers/page.tsx`
- **Metadata title:** `Whitepapers - Krovos` — `src/app/resources/whitepapers/page.tsx:4`
- **Metadata description:** `Download in-depth research papers and technical guides on AI automation, enterprise security, and digital transformation.` — `src/app/resources/whitepapers/page.tsx:5`
- **H1:** `Whitepapers & Research` — `src/app/resources/whitepapers/page.tsx:59-61`
- **Lead:** `In-depth research, technical guides, and industry reports from our team of experts.` — `src/app/resources/whitepapers/page.tsx:62-64`
- **6 Whitepapers (verbatim):**
  - `Enterprise AI Automation: A Complete Guide` (AI & Automation, 45 pages) — `Everything you need to know about implementing AI automation in enterprise environments.` — `src/app/resources/whitepapers/page.tsx:9-13`
  - `Zero Trust Security for Modern Enterprises` (Security, 32 pages) — `Implementation guide for zero trust architecture in cloud-native applications.` — `src/app/resources/whitepapers/page.tsx:14-19`
  - `The State of Cloud Migration 2026` (Cloud, 58 pages) — `Annual research report on cloud migration trends, challenges, and best practices.` — `src/app/resources/whitepapers/page.tsx:20-25`
  - `Building Scalable AI Systems` (Architecture, 62 pages) — `Technical deep-dive into architecting AI systems that scale to millions of users.` — `src/app/resources/whitepapers/page.tsx:26-31`
  - `Compliance Guide: SOC 2, HIPAA, GDPR` (Compliance, 40 pages) — `Navigate enterprise compliance requirements with this comprehensive guide.` — `src/app/resources/whitepapers/page.tsx:32-37`
  - `Digital Transformation Playbook` (Strategy, 55 pages) — `Step-by-step guide to planning and executing successful digital transformation.` — `src/app/resources/whitepapers/page.tsx:38-43`
- **Per-paper CTA:** `Request Access` — `src/app/resources/whitepapers/page.tsx:91`

---

## 5. SERVICES ROUTES (`src/app/services/**/page.tsx`)

### 5.1 `/services/ai-automation` — `src/app/services/ai-automation/page.tsx`
- **Metadata title:** (no `metadata` export — file uses `"use client"`; the page renders without a Next.js metadata block, so title falls back to root layout `Krovos Inc. | Global Enterprise Technology Holdings`) — `src/app/services/ai-automation/page.tsx:1`
- **H1 (verified):** `Intelligent Solutions for Modern Business` — `src/app/services/ai-automation/page.tsx:558`
- **H2s (verbatim, first 8 of multiple):** `The Future of Business is Intelligent`, `Comprehensive AI & Automation Services`, `Business Value Through AI`, `Our Implementation Process`, `Success Stories`, `Powered by Leading Technologies`, `What Our Clients Say`, `Return on Investment` — `src/app/services/ai-automation/page.tsx` (H2 sweep)
- **7 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `Global Financial Services`, `Global Financial Services Firm`, `Healthcare System`, `Manufacturing Conglomerate`, `Manufacturing Corp`, `Regional Healthcare System`, `Retail Distribution Network` — `src/app/services/ai-automation/page.tsx` (testimonials array)
- **3 Testimonial Authors (verbatim):** `David Martinez`, `Jennifer Williams`, `Sarah Chen` — same source
- **Stats (verbatim, located elsewhere in file):** `200+` Clients, `500+` Projects, `15+` Years, `50+` Experts — same source (LiquidMetalHero-derived numbers, not verified for Krovos itself)

### 5.2 `/services/custom-software` — `src/app/services/custom-software/page.tsx`
- **Metadata title:** (none — page is `"use client"`, no metadata export)
- **H1 (verified):** `Bespoke Software Built for Your Business` — `src/app/services/custom-software/page.tsx:603`
- **H2s:** `Custom Solutions for Complex Challenges`, `Comprehensive Development Capabilities`, `Our Core Services`, `Why Choose Krovos for Custom Software`, `Built with Modern Technologies`, `Our Development Process`, `Success Stories`, `What Our Clients Say` — same source
- **7 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `FinServe Analytics`, `Global Retail Brand`, `HealthTech Solutions`, `Logistics Enterprise`, `Manufacturing Conglomerate`, `Manufacturing Corp`, `National Healthcare Provider`
- **3 Testimonial Authors (verbatim):** `James Williams`, `Michael Rodriguez`, `Sarah Chen`
- **Stats (verbatim):** `200+` Projects Delivered, `98%` Client Retention, `48` Hours to First Build, `24/7` Support Available — `src/app/services/custom-software/page.tsx` (stats array)
- **No customer names appear in the page beyond testimonials.**

### 5.3 `/services/digital-marketing` — `src/app/services/digital-marketing/page.tsx`
- **Metadata title:** (none)
- **H1 (verified):** `Data-Driven Digital Marketing That Delivers Results` — `src/app/services/digital-marketing/page.tsx:646`
- **H2s:** `Comprehensive Digital Marketing Services`, `Why Choose Krovos for Digital Marketing`, `Our Proven Process`, `Deep-Dive Marketing Solutions`, `Proven Results`, `What Our Clients Say`, `Frequently Asked Questions`, `Ready to Transform Your Digital Presence?`
- **6 Capabilities (verbatim):** `Search Engine Optimization`, `Pay-Per-Click Advertising`, `Social Media Marketing`, `Email Marketing`, `Content Marketing`, `Marketing Analytics` — `src/app/services/digital-marketing/page.tsx:407-435`
- **6 Key Features (verbatim):** `Data-Driven Strategy`, `Multi-Channel Integration`, `Conversion Optimization`, `Scalable Solutions`, `Transparent Reporting`, `Dedicated Account Team` — `src/app/services/digital-marketing/page.tsx:439-468`
- **5 Process steps:** `01 Discovery & Analysis`, `02 Strategy Development`, `03 Campaign Execution`, `04 Continuous Optimization`, `05 Scale & Growth` — `src/app/services/digital-marketing/page.tsx:472-500`
- **Metrics (verbatim, **[UNVERIFIED]**):** `2.3M Monthly Impressions`, `347% Average ROI Increase`, `412% Average ROI Increase`, `524% Average ROI Increase`, `68% Clients Served`, `89% Industry Awards` — actual layout was: metric labels were `Clients Served`, `Monthly Impressions`, `Average ROI Increase`, `Industry Awards` (page-level stat array)
- **9 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `CloudSync Analytics`, `Enterprise Software Company`, `FinTech Startup`, `Legacy Manufacturing Brand`, `LuxeHome Interiors`, `National Fast-Casual Chain`, `Premium Fashion Retailer`, `Regional Healthcare System`, `TechFlow Solutions`
- **3 Testimonial Authors (verbatim):** `Jennifer Rodriguez`, `Michael Chen`, `Sarah Mitchell`

### 5.4 `/services/logistics` — `src/app/services/logistics/page.tsx`
- **Metadata title:** (none)
- **H1:** (H1 search returned nothing for text-4xl/5xl/6xl font-bold pattern in this file — H1 appears to be inside a canvas/hero component)
- **H2s:** `Comprehensive Logistics Solutions`, `Advanced Features`, `Our Implementation Process`, `Success Stories`, `What Our Clients Say`, `Frequently Asked Questions`, `Ready to Transform Your Logistics?`
- **6 Capabilities (verbatim):** `Supply Chain Solutions`, `Fleet Management`, `Route Optimization`, `Real-Time Tracking`, `Warehouse Management`, `Predictive Analytics` — `src/app/services/logistics/page.tsx:340-369`
- **Stats (verbatim, **[UNVERIFIED]**):** `2.5M+ Shipments Tracked Daily`, `35 Cost Reduction %`, `40 Faster Delivery %`, `99.99 Uptime Guarantee` — `src/app/services/logistics/page.tsx:304-309`
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `Leading Consumer Goods Company`, `Global 3PL Provider`, `International Freight Forwarder`, `National Distribution Partners`, `Global Logistics Solutions`, `Premier Freight Services` — `src/app/services/logistics/page.tsx:441-485`
- **3 Testimonial Authors (verbatim):** `Michael Torres`, `Sarah Chen`, `James Williams`
- **3 Case Studies (verbatim):**
  - `National Distribution Network` (Leading Consumer Goods Company) — `28% Fuel Cost Savings` — `Implemented AI-powered route optimization across 500+ vehicles, reducing fuel consumption by 28% while improving on-time delivery rates to 98.5%.` — `src/app/services/logistics/page.tsx:442-448` **[UNVERIFIED]**
  - `Smart Warehouse Transformation` (Global 3PL Provider) — `3x Throughput Increase` — `Deployed automated picking systems and inventory optimization, tripling warehouse throughput while reducing labor costs by 45%.` — `src/app/services/logistics/page.tsx:449-455` **[UNVERIFIED]**
  - `End-to-End Visibility Platform` (International Freight Forwarder) — `99.8% Shipment Visibility` — `Built real-time tracking infrastructure across 12,000+ monthly shipments, providing customers with precise location data and accurate ETAs.` — `src/app/services/logistics/page.tsx:456-462` **[UNVERIFIED]**

### 5.5 `/services/managed-it` — `src/app/services/managed-it/page.tsx`
- **Metadata title:** (none)
- **H1 (verified):** `Enterprise IT & Cybersecurity Managed, Protected, Optimized` — `src/app/services/managed-it/page.tsx:640`
- **H2s:** `Enterprise-Grade Managed IT & Security`, `Comprehensive IT & Security Capabilities`, `Our Core Service Areas`, `Why Krovos for Managed IT Services`, `Trusted Compliance & Security`, `Proven Results`, `Our Managed Services Process`, `What Our Clients Say`
- **6 Capabilities (verbatim):** `Enterprise Security`, `24/7 Monitoring`, `Help Desk Support`, `Compliance Management`, `Cloud Management`, `Backup & Recovery` — `src/app/services/managed-it/page.tsx:428-458`
- **6 Service Features (verbatim):** `IT Infrastructure`, `Network Management`, `Security Services`, `Cloud Services`, `24/7 Support`, `Proactive Monitoring` — `src/app/services/managed-it/page.tsx:461-498`
- **Stats (verbatim, **[UNVERIFIED]**):** `500+ Enterprise Clients`, `99.99% Uptime SLA`, `15min Avg Response Time` — `src/app/services/managed-it/page.tsx` (stats block)
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `Global Investment Bank`, `Industrial Conglomerate`, `Meridian Financial Group`, `Pacific Health Systems`, `Regional Hospital Network`, `TechCorp Industries`
- **3 Testimonial Authors (verbatim):** `James Patterson`, `Michael Rodriguez`, `Sarah Chen`

### 5.6 `/services/talent-solutions` — `src/app/services/talent-solutions/page.tsx`
- **Metadata title:** (none)
- **H1 (verified):** `Global Talent Solutions Scale Your Team` — `src/app/services/talent-solutions/page.tsx:626`
- **H2s:** `Comprehensive Talent Services`, `Why Choose Krovos`, `Results That Speak`, `Proven Results`, `Our Talent Acquisition Process`, `What Our Clients Say`, `Frequently Asked Questions`, `Ready to Build Your Dream Team?`
- **6 Services (verbatim):** `Talent Acquisition`, `Team Building`, `Training & Development`, `Recruitment`, `Staffing Solutions`, `Executive Search` — `src/app/services/talent-solutions/page.tsx:424-454`
- **6 Features (verbatim):** `Global Talent Network`, `AI-Powered Matching`, `Rigorous Vetting`, `Industry Expertise`, `Flexible Engagement`, `Post-Placement Support` — `src/app/services/talent-solutions/page.tsx:457-487`
- **Stats (verbatim, **[UNVERIFIED]**):** `15,000+ Placements Made`, `94% Retention Rate`, `50K+ Talent Pool` — `src/app/services/talent-solutions/page.tsx:491-501`
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `Enterprise Tech Solutions`, `Fortune 500 Tech Company`, `GrowthStage Startups`, `Healthcare SaaS Leader`, `Nexus Global`, `Series B Fintech Company`

---

## 6. SOLUTIONS ROUTES (`src/app/solutions/**/page.tsx`)

### 6.1 `/solutions` — `src/app/solutions/page.tsx`
- **Metadata title:** `Solutions - Krovos` — `src/app/solutions/page.tsx:4`
- **Metadata description:** `AI automation solutions for every team. IT Operations, Security, Sales, Support, and more.` — `src/app/solutions/page.tsx:5`
- **H1:** `Solutions for every team` — `src/app/solutions/page.tsx:58-60`
- **Lead:** `Krovos agents work where your teams work. Automate workflows across the entire organization.` — `src/app/solutions/page.tsx:61-63`
- **8 Solution cards (verbatim titles + descriptions):**
  - `IT Operations` (→ `/solutions/it-ops`) — `Automate incident triage, asset management, and compliance checks.` — `src/app/solutions/page.tsx:9-12`
  - `Security Operations` (→ `/solutions/security-ops`) — `Detect threats, enrich alerts, and automate response workflows.` — `src/app/solutions/page.tsx:14-17`
  - `RevOps` (→ `/solutions/revops`) — `Align sales, marketing, and revenue operations with automated workflows.` — `src/app/solutions/page.tsx:19-22`
  - `Sales` (→ `/solutions/sales`) — `Qualify leads, enrich contacts, and automate deal workflows.` — `src/app/solutions/page.tsx:24-27`
  - `Customer Support` (→ `/solutions/customer-support`) — `Route tickets, summarize conversations, and automate responses.` — `src/app/solutions/page.tsx:29-32`
  - `Finance` (→ `/solutions/finance`) — `Automate invoice processing, approvals, and financial reporting.` — `src/app/solutions/page.tsx:34-37`
  - `HR` (→ `/solutions/hr`) — `Streamline onboarding, offboarding, and employee requests.` — `src/app/solutions/page.tsx:39-42`
  - `Product & Engineering` (→ `/solutions/engineering`) — `Automate code reviews, deployments, and incident response.` — `src/app/solutions/page.tsx:44-48`
- **Final CTA H2:** `Can't find what you need?` — `src/app/solutions/page.tsx:99`
- **CTAs:** `Talk to sales` (→ `/demo`), `Read docs` (→ `/docs`) — `src/app/solutions/page.tsx:105, 108`

### 6.2 `/solutions/analytics` — `src/app/solutions/analytics/page.tsx`
- **Metadata title:** `Data Analytics - Krovos` — `src/app/solutions/analytics/page.tsx:4`
- **Metadata description:** `Transform your data into actionable insights with AI-powered analytics. Real-time dashboards, predictive models, and business intelligence.` — `src/app/solutions/analytics/page.tsx:5`
- **H1:** `Data Analytics Powered by AI` — `src/app/solutions/analytics/page.tsx:51-53`
- **Lead:** `Turn your data into competitive advantage. AI-powered analytics that reveal insights you never knew existed and predict what comes next.` — `src/app/solutions/analytics/page.tsx:54-57`
- **Hero CTAs:** `Start Free Trial` (→ `/contact`), `Watch Demo` (→ `/demo`) — `src/app/solutions/analytics/page.tsx:61, 71`
- **Stats (verbatim, **[UNVERIFIED]**):** `10B+ Data Points Processed`, `<100ms Query Response Time`, `50K+ Dashboards Created`, `1M+ AI Insights Generated` — `src/app/solutions/analytics/page.tsx:28-32`
- **H2:** `Analytics That Think` — `src/app/solutions/analytics/page.tsx:97`
- **4 Features (verbatim):** `Real-Time Analytics`, `AI-Powered Insights`, `Custom Dashboards`, `Predictive Analytics` — `src/app/solutions/analytics/page.tsx:9-24`
- **12 Integration pills (verbatim):** `Snowflake`, `Databricks`, `BigQuery`, `Redshift`, `PostgreSQL`, `MySQL`, `Salesforce`, `HubSpot`, `Stripe`, `Google Analytics`, `Amplitude`, `Mixpanel` — `src/app/solutions/analytics/page.tsx:35-37`
- **Final CTA H2:** `Unlock Your Data Potential` — `src/app/solutions/analytics/page.tsx:140`
- **CTA:** `Start Free Trial` (→ `/signup`) — `src/app/solutions/analytics/page.tsx:149`

### 6.3 `/solutions/cloud` — `src/app/solutions/cloud/page.tsx`
- **Metadata title:** `Cloud Migration - Krovos` — `src/app/solutions/cloud/page.tsx:4`
- **Metadata description:** `Seamless cloud migration solutions. Move your infrastructure to AWS, Azure, or Google Cloud with zero downtime.` — `src/app/solutions/cloud/page.tsx:5`
- **H1:** `Cloud Migration Made Simple` — `src/app/solutions/cloud/page.tsx:73-75`
- **Lead:** `Migrate to the cloud with confidence. Our AI-powered platform ensures zero downtime, optimal performance, and significant cost savings.` — `src/app/solutions/cloud/page.tsx:76-79`
- **Hero CTAs:** `Start Migration` (→ `/contact`), `View Case Studies` (→ `/resources/case-studies`) — `src/app/solutions/cloud/page.tsx:84, 93`
- **Stats (verbatim, **[UNVERIFIED]**):** `500+ Migrations Completed`, `99.99% Uptime During Migration`, `60% Average Cost Savings`, `40% Faster Time-to-Market` — `src/app/solutions/cloud/page.tsx:55-58`
- **4 Features (verbatim):** `Zero Downtime Migration`, `Automated Assessment`, `Cost Optimization`, `Security First` — `src/app/solutions/cloud/page.tsx:9-28`
- **4 Migration Paths (verbatim):** `On-Premise → AWS — Migrate datacenters to Amazon Web Services`, `On-Premise → Azure — Move infrastructure to Microsoft Azure`, `On-Premise → GCP — Transition to Google Cloud Platform`, `Legacy Cloud → Multi-Cloud — Distribute workloads across multiple providers` — `src/app/solutions/cloud/page.tsx:31-52`
- **4 Process Steps (verbatim):** `01 Assess — AI analysis of current infrastructure`, `02 Plan — Detailed migration roadmap`, `03 Migrate — Execute with zero downtime`, `04 Optimize — Fine-tune for performance & cost` — `src/app/solutions/cloud/page.tsx:181-184`
- **Final CTA H2:** `Ready to Move to the Cloud?` — `src/app/solutions/cloud/page.tsx:209`
- **CTA:** `Get Free Assessment` (→ `/contact`) — `src/app/solutions/cloud/page.tsx:218`

### 6.4 `/solutions/customer-support` — `src/app/solutions/customer-support/page.tsx`
- **Metadata title:** (none exported)
- **H1:** (none of the standard text-4xl pattern matches — appears to be inside the large ServiceIllustration / hero composition)
- **H2s (verbatim):** `Comprehensive Support Automation`, `What you can automate`, `Omnichannel Support`, `Powerful Analytics Dashboard`, `Self-Service Portal`, `Seamless Integrations`, `Proven ROI`, `How it works`
- **Stats (verbatim, **[UNVERIFIED]**):** `65% Faster Response Time`, `70% Automation Rate`, `4.8/5 Customer Satisfaction`, `40% Cost Reduction`, `500+ Enterprise Customers`, `10M+ Tickets Resolved`, `99.9% Uptime SLA`, `24/7 AI Availability` — `src/app/solutions/customer-support/page.tsx:344-357`
- **ROI values (verbatim, **[UNVERIFIED]**):** `+45% Increase in tickets handled per agent`, `-67% Reduction in support costs`, `340% Return on investment within first year`, `4.2 Months to recover initial investment`
- **4 Automation features:** `AI Ticket Routing`, `Intelligent Auto-Responses`, `Sentiment Analysis`, `Priority Detection`
- **5 Bento features:** `Live Chat Automation`, `Call Center Integration`, `Self-Service Portal`, `Knowledge Base`, `Community Forums`
- **3 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `CloudScale Inc`, `GlobalServe`, `TechFlow SaaS`
- **3 Testimonial Authors (verbatim):** `Amanda Chen`, `David Kim`, `Jessica Park`

### 6.5 `/solutions/engineering` — `src/app/solutions/engineering/page.tsx`
- **Metadata title:** (none exported)
- **H1:** (standard pattern not found — hero composition)
- **H2s:** `What you can automate`, `DevSecOps & Security`, `GitOps Workflows`, `Container & Cloud Orchestration`, `Full-Stack Observability`, `Developer Productivity`, `How it works`, `Integration Hub`
- **Hero Stats (verbatim, **[UNVERIFIED]**):** `500+ Enterprise Teams`, `2M+ Deployments/Year`, `99.99% Uptime SLA`, `40% Cost Reduction` — `src/app/solutions/engineering/page.tsx:235-240`
- **Section Stats (verbatim, **[UNVERIFIED]**):** `70% Faster Deployments`, `85% Code Coverage`, `99.9% Pipeline Uptime`, `50% Less Manual Work`, `$2.3M Annual Savings`, `47hrs Weekly/Engineer`, `312% 3-Year ROI`, `4.2months Payback Period` — `src/app/solutions/engineering/page.tsx:228-232`
- **6 Automation Features:** `CI/CD Pipeline Automation`, `Infrastructure as Code`, `Automated Testing & QA`, `Code Review Automation`, `Deployment Orchestration`, `Incident Management`
- **4 DevSecOps Features:** `Security Scanning`, `Container Security`, `Compliance as Code`, `Secrets Management`
- **4 GitOps Features:** `GitOps Workflows` (note: title appears as just ` drift Detection` for one card due to a leading space — `src/app/solutions/engineering/page.tsx:363`), `Declarative Config`, `Audit Trail`
- **3 Cloud Features:** `Container Orchestration`, `Cloud Provisioning`, `Cost Optimization`
- **3 Observability Features:** `Performance Monitoring`, `Log Aggregation`, `Tracing & Metrics`
- **3 Productivity Features:** `Developer Experience`, `Self-Service Infrastructure`, `Knowledge Sharing`
- **16 Integration Pills (verbatim):** `GitHub`, `GitLab`, `Jenkins`, `CircleCI`, `Terraform`, `AWS`, `Azure`, `GCP`, `Kubernetes`, `Docker`, `Datadog`, `New Relic`, `Splunk`, `PagerDuty`, `Slack`, `Vault` — `src/app/solutions/engineering/page.tsx:447-463`
- **3 Testimonials (verbatim — **[UNVERIFIED]** / fabricated):**
  - `David Kim`, `VP of Engineering`, `CloudScale Technologies` — `Krovos cut our deployment time from 45 minutes to under 5. The automated rollback feature alone has saved us countless hours of incident response.` — `src/app/solutions/engineering/page.tsx:490-496`
  - `Amanda Foster`, `Engineering Director`, `DataFlow Systems` — `Our code review process is now 80% automated. Developers focus on logic and architecture while Krovos handles style, security, and quality checks.` — `src/app/solutions/engineering/page.tsx:497-501`
  - 6 more testimonial companies/people across the page

### 6.6 `/solutions/enterprise` — `src/app/solutions/enterprise/page.tsx`
- **Metadata title:** `Enterprise Solutions - Krovos` — `src/app/solutions/enterprise/page.tsx:4`
- **Metadata description:** `Comprehensive enterprise automation solutions designed for large-scale organizations with advanced security and compliance requirements.` — `src/app/solutions/enterprise/page.tsx:5`
- **H1:** `Enterprise-Grade Automation` — `src/app/solutions/enterprise/page.tsx:68-70`
- **Lead:** `Scale automation across your entire organization with Krovos Enterprise. Purpose-built for large organizations with advanced security, compliance, and integration requirements.` — `src/app/solutions/enterprise/page.tsx:71-74`
- **Hero CTA:** `Schedule Demo` (→ `/contact`), `View Case Studies` (→ `/resources/case-studies`) — `src/app/solutions/enterprise/page.tsx:79, 88`
- **Stats (verbatim, **[UNVERIFIED]**):** `500+ Enterprise Clients`, `99.99% Uptime SLA`, `50M+ Workflows/Month`, `24/7 Support` — `src/app/solutions/enterprise/page.tsx:32-36`
- **4 Features (verbatim):** `Scalable Architecture`, `Advanced Security`, `Custom Integrations`, `Dedicated Support` — `src/app/solutions/enterprise/page.tsx:9-28`
- **3 Case Studies (verbatim — **[UNVERIFIED]**):**
  - `Fortune 500 Bank` — `75% Reduction in manual processing time` — `src/app/solutions/enterprise/page.tsx:39-42`
  - `Global Manufacturer` — `$12M Annual cost savings achieved` — `src/app/solutions/enterprise/page.tsx:43-47`
  - `Healthcare System` — `90% Faster compliance reporting` — `src/app/solutions/enterprise/page.tsx:48-52`
- **Compliance pills (verbatim):** `SOC 2 Type II`, `GDPR Compliant`, `HIPAA Ready`, `ISO 27001`, `SSO (SAML/OIDC)`, `Audit Logs` — `src/app/solutions/enterprise/page.tsx:189-235` **[UNVERIFIED]** for SOC 2 / ISO 27001.
- **Enterprise Features bullets:** `Data residency controls`, `Custom data retention policies`, `Private cloud deployment options`, `Advanced threat protection` — `src/app/solutions/enterprise/page.tsx:247-266`
- **Final CTA H2:** `Ready to Scale Your Enterprise?` — `src/app/solutions/enterprise/page.tsx:278`
- **CTA:** `Schedule Enterprise Demo` (→ `/contact`) — `src/app/solutions/enterprise/page.tsx:287`

### 6.7 `/solutions/finance` — `src/app/solutions/finance/page.tsx`
- **Metadata title:** (none exported)
- **H1 (verified):** `Automate your finance operations` — `src/app/solutions/finance/page.tsx:448`
- **H2s:** `Comprehensive Financial Automation`, `Enterprise-Grade Financial Capabilities`, `Proven Return on Investment`, `Success Stories`, `How it works`, `Integration Hub`, `Trusted by Finance Teams Worldwide`, `Enterprise-Grade Security & Compliance`
- **Stats (verbatim, **[UNVERIFIED]**):** `75% Faster Processing`, `98% Accuracy Rate`, `60% Cost Reduction`, `$1.2M`, `12`, `15%`, `25`, `5 days`, `10 days`, `3 months`, `78%`, `95%` — page-level stat blocks
- **7 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `Capital Investments Ltd`, `Global Manufacturing Corp`, `Global Retail Inc`, `International Trade Co`, `Manufacturing Solutions`, `Meridian Healthcare`, `TechVentures Capital`
- **7 Testimonial Authors (verbatim):** `Amanda Foster`, `Christopher Lee`, `James Wilson`, `Michael Torres`, `Patricia Williams`, `Robert Martinez`, `Sarah Thompson`

### 6.8 `/solutions/hr` — `src/app/solutions/hr/page.tsx`
- **Metadata title:** (none exported)
- **H1:** (standard text-4xl pattern not found — appears to be inside hero composition)
- **H2s:** `Complete HR Automation Suite`, `Integration Hub`, `Success Stories`, `Proven ROI`, `How it works`, `Loved by HR teams worldwide`, `Frequently Asked Questions`
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `FinanceFirst Corp`, `GlobalTech Solutions`, `Healthcare Plus`, `RetailMax`, `TechCorp Global`, `TechStart Innovations`
- **3 Testimonial Authors (verbatim):** `Amanda Thompson`, `Jessica Williams`, `Robert Martinez`

### 6.9 `/solutions/it-ops` — `src/app/solutions/it-ops/page.tsx`
- **Metadata title:** (none exported)
- **H1:** (standard text-4xl pattern not found — hero composition)
- **H2s:** `The IT Operations Challenge`, `Everything you need to run efficient IT operations`, `Transform your IT operations`, `Platform Architecture`, `Comprehensive Use Cases`, `Before & After Krovos`, `Integrations & Extensibility`, `Your journey to automated IT operations`
- **3 H3 platform layer titles (verbatim):** `Data Sources`, `AI Processing Layer`, `Actions & Insights` — `src/app/solutions/it-ops/page.tsx` (Platform Architecture section)
- **Stats (verbatim, **[UNVERIFIED]**):** `60% Faster MTTR`, `80% Fewer Manual Tasks`, `99.9% Uptime`, `45% Cost Reduction`, `10,000 requests/minute`, `100,000+ per day`, `13 months (configurable)`, `200+ integrations`, `24/7 Enterprise with 1-hour response`, `AES-256 at rest, TLS 1.3 in transit` (lists of capabilities)
- **Deployment model bullets:** `AWS, Azure, GCP, On-Premise, Kubernetes`, `Cloud, On-Premise, Hybrid`, `SOC 2 Type II, GDPR, HIPAA, ISO 27001` — `[UNVERIFIED]` for SOC 2 / ISO 27001.
- **3 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `FinSecure Bank`, `GlobalTech Solutions`, `TechScale Inc`
- **3 Testimonial Authors (verbatim):** `Emily Rodriguez`, `Michael Torres`, `Sarah Chen`

### 6.10 `/solutions/revops` — `src/app/solutions/revops/page.tsx`
- **Metadata title:** (none exported)
- **H1 (verified):** `Unify your revenue operations` — `src/app/solutions/revops/page.tsx:396`
- **H2s:** `Revenue Intelligence`, `Pipeline Management`, `Cross-Team Alignment`, `Deal Insights`, `Account-Based Revenue`, `Forecasting AI`, `Commission Tracking`, `Territory Management`
- **Stats (verbatim, **[UNVERIFIED]**):** `$12.4M`, `$45K`, `28%`, `312%`, `34%`, `35%`, `4.2`, `45%` (page-level stat blocks)
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `CloudFirst Inc`, `Enterprise Solutions`, `Enterprise Solutions Group`, `GrowthCo`, `ScaleUp Technologies`, `TechScale Inc`
- **6 Testimonial Authors (verbatim):** `Amanda Foster`, `James Wilson`, `Jessica Williams`, `Michael Torres`, `Michelle Park`, `Sarah Chen`

### 6.11 `/solutions/sales` — `src/app/solutions/sales/page.tsx`
- **Metadata title:** (none exported)
- **H1:** (standard text-4xl pattern not found — hero composition)
- **H2s:** `Lead Generation Automation`, `CRM Integration Deep Dive`, `Pipeline Management`, `Sales Forecasting AI`, `Conversation Intelligence`, `Email Automation`, `Meeting Scheduling`, `Proposal Generation`
- **Stats (verbatim, **[UNVERIFIED]**):** `3x More Leads`, `50% Shorter Sales Cycle`, `40% Higher Conversion`, `$1.2M`, `$1.8M`, `$2.5M`, `$450K`, `$800K`
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `CloudScale Solutions`, `EnterpriseFlow`, `GlobalTech Solutions`, `InnovateCorp`, `TechGrowth Inc`, `TechScale Inc`
- **3 Testimonial Authors (verbatim):** `David Park`, `Jessica Martinez`, `Robert Chen`

### 6.12 `/solutions/security-ops` — `src/app/solutions/security-ops/page.tsx`
- **Metadata title:** (none exported)
- **H1:** (standard text-4xl pattern not found — hero composition)
- **H2s:** `The Security Challenge`, `The Krovos Solution`, `Comprehensive Security Platform`, `Threat Detection Architecture`, `What you can automate`, `Use Cases`, `Transform Your Security Operations`, `Built for Modern SOCs`
- **Stats (verbatim, **[UNVERIFIED]**):** `85% Alert Reduction`, `24/7 Coverage`, `60% Cost Reduction`, `3x Client Growth`, `95% Coverage`, `40% Faster MTTR`, `2.5x More Findings`, `70% Time Saved`, `13 months`, `200+`, `99.7%`, `99.99%`, `< 0.1%`, `< 100ms`, `< 5 minutes`, `AES-256`
- **6 Testimonial Companies (verbatim — **[UNVERIFIED]** / fabricated):** `CloudScale Enterprise`, `FinTech Global`, `Global Finance Corp`, `HealthFirst Systems`, `MedTech Solutions`, `RetailMax`
- **3 Testimonial Authors (verbatim):** `David Martinez`, `Jennifer Walsh`, `Robert Kim`

### 6.13 `/solutions/startup` — `src/app/solutions/startup/page.tsx`
- **Metadata title:** `Startup Accelerator - Krovos` — `src/app/solutions/startup/page.tsx:4`
- **Metadata description:** `AI-powered solutions designed specifically for startups and growing companies. Scale faster with intelligent automation.` — `src/app/solutions/startup/page.tsx:5`
- **H1:** `Scale Your Startup Faster` — `src/app/solutions/startup/page.tsx:77-79`
- **Badge:** `Built for Startups` — `src/app/solutions/startup/page.tsx:73-75`
- **4 Features (verbatim):** `Rapid Deployment — Get started in minutes, not months. Pre-built templates and workflows for common startup use cases.`, `Growth Scaling — Automations that grow with you. From 10 to 10,000 users without changing platforms.`, `Cost Effective — Startup-friendly pricing with generous free tiers. Pay only for what you use as you scale.`, `Integration Ready — Connect with the tools startups use: Stripe, Slack, Notion, Airtable, and 200+ more.` — `src/app/solutions/startup/page.tsx:8-25`
- **8 Startup Tools (verbatim):** `Stripe (Payments)`, `Slack (Communication)`, `Notion (Productivity)`, `Airtable (Database)`, `HubSpot (CRM)`, `Intercom (Support)`, `Linear (Project Mgmt)`, `GitHub (Development)` — `src/app/solutions/startup/page.tsx:27-36`
- **3 Pricing Plans (verbatim):**
  - `Starter` — `Free` — `For early-stage startups` — `1,000 workflows/month`, `5 automations`, `Basic integrations`, `Community support` — `src/app/solutions/startup/page.tsx:38-44`
  - `Growth` — `$99 /month` — `For scaling startups` — `50,000 workflows/month`, `Unlimited automations`, `Advanced integrations`, `Priority support`, `Custom AI models` — `src/app/solutions/startup/page.tsx:45-51`
  - `Scale` — `$299 /month` — `For fast-growing companies` — `Unlimited workflows`, `Unlimited automations`, `All integrations`, `Dedicated support`, `SLA guarantee`, `Custom development` — `src/app/solutions/startup/page.tsx:52-58`
- **Per-plan CTA:** `Get Started` — `src/app/solutions/startup/page.tsx:174`

### 6.14 `/solutions/transformation` — `src/app/solutions/transformation/page.tsx`
- **Metadata title:** `Digital Transformation - Krovos` — `src/app/solutions/transformation/page.tsx:4`
- **Metadata description:** `Transform your business with comprehensive digital transformation solutions. Modernize operations, enhance customer experiences, and drive innovation.` — `src/app/solutions/transformation/page.tsx:5`
- **H1:** `Digital Transformation` — `src/app/solutions/transformation/page.tsx:53-55`
- **Lead:** `Transform your business for the digital age. We help organizations modernize operations, enhance customer experiences, and unlock new revenue streams.` — `src/app/solutions/transformation/page.tsx:56-59`
- **Hero CTAs:** `Start Transformation` (→ `/contact`), `View Case Studies` (→ `/resources/case-studies`) — `src/app/solutions/transformation/page.tsx:64, 73`
- **4 Capabilities (verbatim):** `Process Automation — Streamline operations with intelligent workflow automation that reduces manual tasks by 80%.`, `Customer Experience — Create seamless digital experiences that delight customers and drive loyalty.`, `Data Modernization — Break down data silos and enable real-time insights across your organization.`, `Cloud Native — Build scalable, resilient applications with modern cloud architecture.` — `src/app/solutions/transformation/page.tsx:8-25`
- **4 Approach Steps (verbatim):** `01 Assess — Evaluate current state and identify opportunities`, `02 Strategy — Create roadmap aligned with business goals`, `03 Implement — Execute transformation with agile methodology`, `04 Optimize — Continuous improvement and innovation` — `src/app/solutions/transformation/page.tsx:27-32`
- **Stats (verbatim, **[UNVERIFIED]**):** `200+ Transformations Completed`, `45% Avg. Revenue Increase`, `60% Cost Reduction`, `3x Faster Time-to-Market` — `src/app/solutions/transformation/page.tsx:34-39`

---

## 7. SHARED COMPONENTS (`src/components/**`)

### 7.1 `src/components/landing/Navbar.tsx` — global header
- Top-level nav links: `Services` (with MegaMenu), `Solutions` (`/solutions`), `About` (`/about`), `Careers` (`/careers`), `Contact` (`/contact`) — `src/components/landing/Navbar.tsx:8-13`
- Logo component renders brand text `KROV` (white) + `OS` (gold) using Syne font — `src/components/landing/Logo.tsx:64-69, 120-123`
- Header CTA: `Get Started` (→ `/contact`) — `src/components/landing/Navbar.tsx:228`
- Mega menu services (verbatim names): `AI & Automation`, `Custom Software`, `Digital Marketing`, `Managed IT`, `Talent Solutions`, `Logistics Tech` — `src/components/landing/Navbar.tsx:17-52`
- Footer link inside MegaMenu: `View all services` (→ `/services`) — `src/components/landing/Navbar.tsx:200`

### 7.2 `src/components/landing/MegaMenu.tsx` — Services dropdown only
- Same 6 service entries with slightly different descriptions (verbatim): `Intelligent automation solutions that transform your business operations`, `Tailored software development for your unique business needs`, `Growth and brand strategy to expand your digital presence`, `End-to-end IT services for seamless business operations`, `Tech talent acquisition to build your dream team`, `Supply chain solutions for efficient operations` — `src/components/landing/MegaMenu.tsx:16-57`
- Footer CTA: `View all services` (→ `/services`) — `src/components/landing/MegaMenu.tsx:179`

### 7.3 `src/components/landing/Footer.tsx` — global footer
- Address block (verbatim): `Headquarters`, `123 Innovation Drive`, `San Francisco, CA 94102`, `Email: info@krovos.com`, `Phone: +1 (415) 555-1234` — `src/components/landing/Footer.tsx:41-46` **[UNVERIFIED]** — placeholder San Francisco address + 555 placeholder phone.
- Footer columns: `Company` (About Us / Careers / Leadership / Partners / Press), `Services` (AI & Automation / Custom Software / Digital Marketing / Managed IT / Talent Solutions / Logistics Tech), `Solutions` (Enterprise Solutions / Startup Accelerator / Cloud Migration / Data Analytics / Cybersecurity / Digital Transformation), `Resources` (Blog / Case Studies / Whitepapers / Webinars / Documentation / API Reference) — `src/components/landing/Footer.tsx:6-39`
- Social icons (verbatim alt labels): `LinkedIn`, `Twitter`, `Instagram`, `YouTube` — `src/components/landing/Footer.tsx:87-132`
- Footer note: `Enterprise technology holding company delivering innovative solutions across AI, software, marketing, and IT services.` — `src/components/landing/Footer.tsx:83-85`
- Newsletter subscribe CTA: `Subscribe` — `src/components/landing/Footer.tsx:157`
- Bottom bar: `Privacy Policy` (→ `/legal/privacy`), `Terms of Service` (→ `/legal/terms`), `Cookie Policy` (→ `/legal/cookies`) — `src/components/landing/Footer.tsx:300-317`
- Copyright: `© {new Date().getFullYear()} Krovos Inc. All rights reserved.` — `src/components/landing/Footer.tsx:297`
- `Get in Touch` link → `/contact` — `src/components/landing/Footer.tsx:284`

### 7.4 `src/components/landing/Hero.tsx` — alternative hero (used on `/product` overlay)
- Badge: `Enterprise AI Automation Solutions` — `src/components/landing/Hero.tsx:117`
- H1: `Enterprise AI Automation & Agentic Solutions` — `src/components/landing/Hero.tsx:123-128`
- Lead: `Krovos is a corporate enterprise specializing in AI-driven automation. Deploy intelligent agents that transform operations, accelerate workflows, and deliver measurable business outcomes.` — `src/components/landing/Hero.tsx:129-132`
- CTAs: `Request Demo` (→ `/contact`) and `Watch demo` (→ `/contact`) — `src/components/landing/Hero.tsx:140, 153`
- Trust badges: `Free forever tier`, `No credit card required`, `SOC 2 compliant` — `src/components/landing/Hero.tsx:168-181` **[UNVERIFIED]** for SOC 2.
- Platform preview URL: `app.krovos.com` — `src/components/landing/Hero.tsx:204`
- 4 metrics: `10K+ Active Users`, `50M+ Workflows Run`, `99.9% Uptime SLA`, `500+ Integrations` — `src/components/landing/Hero.tsx:268-271` **[UNVERIFIED]**
- Logo ticker (verbatim names — none are real customers): `Salesforce`, `Slack`, `Jira`, `ServiceNow`, `HubSpot`, `Microsoft`, `Google`, `AWS`, `Datadog`, `Splunk` — `src/components/landing/Hero.tsx:88` — **all [UNVERIFIED] / fabricated placement** (these are integration partners, not Krovos customers).
- Logo ticker label: `Trusted by innovative teams worldwide` — `src/components/landing/Hero.tsx:276`

### 7.5 `src/components/hero/ArchitecturalHero.tsx` — used on `/about`
- Badge: `Architectural Studio` — `src/components/hero/ArchitecturalHero.tsx:164`
- H1: `Where vision meets precision` — `src/components/hero/ArchitecturalHero.tsx:168-171`
- Lead: `We design spaces that transcend the ordinary. Our approach combines raw materiality with computational precision, creating environments that breathe and evolve.` — `src/components/hero/ArchitecturalHero.tsx:173-177`
- 3 methodology cards: `Orchestrating Silent Volumes — Spatial computing meets architectural precision`, `Material Authenticity — Raw concrete, honest surfaces`, `Light as Material — Natural illumination as design element` — `src/components/hero/ArchitecturalHero.tsx:29-45`
- Magnetic CTA button: `Discover` — `src/components/hero/ArchitecturalHero.tsx:182`
- Spinning seal text: `BESPOKE CRAFT • RAW MATERIALITY • ORCHESTRATING SILENCE` — `src/components/hero/ArchitecturalHero.tsx:232`
- Top-nav links (hard-coded; do NOT match the real Krovos nav): `Projects`, `Studio`, `Approach`, `Journal`, `Contact` — `src/components/hero/ArchitecturalHero.tsx:110`
- Top CTA: `Start a Project` — `src/components/hero/ArchitecturalHero.tsx:121` **[UNVERIFIED]** — the words `Start a Project` sound like an architecture firm, not Krovos; appears to be a leftover template.
- H2: `Our approach defines us` — `src/components/hero/ArchitecturalHero.tsx:248-250`
- **This hero is decorative / off-brand for Krovos** — `[UNVERIFIED]` / placeholder content.

### 7.6 `src/components/hero/LiquidMetalHero.tsx` — alternative hero
- Badge: `✦ ISO-Certified · GDPR Compliant` — `src/components/hero/LiquidMetalHero.tsx:233` **[UNVERIFIED]** for ISO.
- H1: `We Build Technology That Moves Business` — `src/components/hero/LiquidMetalHero.tsx:236-246`
- Lead: `Accelerate your digital transformation with enterprise-grade solutions. From AI automation to custom software, we build technology that scales with your ambitions.` — `src/components/hero/LiquidMetalHero.tsx:248-252`
- CTAs: `Start Your Project` and `View Our Work` — `src/components/hero/LiquidMetalHero.tsx:255, 258`
- Stats (verbatim, **[UNVERIFIED]**): `200+ Clients`, `450+ Projects`, `15+ Years`, `50+ Experts` — `src/components/hero/LiquidMetalHero.tsx:264-269`
- Top nav: `Products`, `Solutions`, `Services`, `Company`, `Resources` — `src/components/hero/LiquidMetalHero.tsx:201`
- Right CTAs: `Sign in` and `Get Started` — `src/components/hero/LiquidMetalHero.tsx:213, 219`

### 7.7 `src/components/hero/QuantumHero.tsx` — alternative hero (used on `/product`)
- Eyebrow: `// GENERATE ONCE, PUBLISH EVERYWHERE` — `src/components/hero/QuantumHero.tsx:341`
- H1 (verbatim): `One piece of content. Every platform. Instantly.` — `src/components/hero/QuantumHero.tsx:344-348`
- Lead: `Zero-latency neural bridging across all endpoints. Our quantum-ready infrastructure synchronizes your content ecosystem in real-time, eliminating deployment friction forever.` — `src/components/hero/QuantumHero.tsx:351-355` **[UNVERIFIED]** / nonsense — Krovos has no quantum infrastructure.
- Stat cards: `128Q QUBITS`, `0.01ms LATENCY`, `99.9% UPTIME`, `2048 ENTANGLE`, plus four HUD readouts: `CRYO-STATE 15mK`, `ENTANGLEMENT RATIO 0.9999`, `NEURAL DENSITY 847 TB/s`, `COHERENCE TIME 100μs` — `src/components/hero/QuantumHero.tsx:378-444` — **all [UNVERIFIED] / nonsense**.
- Top nav (hard-coded): `// Core`, `// Synapse`, `// Topology`, `// Matrix` — `src/components/hero/QuantumHero.tsx:313-325` — looks like leftover template links.
- Buttons: `v EN` (language toggle), `Initialize` — `src/components/hero/QuantumHero.tsx:329-334`
- In-page nav: `Sign in` and `Learn more` — `src/components/hero/QuantumHero.tsx:365, 372`
- **This hero is decorative / off-brand for Krovos** — `[UNVERIFIED]` / placeholder content.

### 7.8 `src/components/landing/ServiceComponents.tsx` — shared SVG illustrations
- 9 SVG-based service illustrations keyed by type: `IT Operations`, `Security Operations`, `Sales`, `Customer Support`, `RevOps`, `Finance`, `HR`, `Engineering`, `default` — `src/components/landing/ServiceComponents.tsx:21-216` (purely decorative SVG, no readable claims other than a few placeholder strings like `INVOICE`, `LEADS`, `DEALS`, `REVENUE` inside the SVGs).
- 5-star rating rendered as inline SVGs in `TestimonialCard` — `src/components/landing/ServiceComponents.tsx:305-311`
- No claims of customer counts or awards.

### 7.9 `src/components/landing/CookiesPopup.tsx`
- H3: `Cookie Settings` — `src/components/landing/CookiesPopup.tsx:46`
- Subhead: `We value your privacy` — `src/components/landing/CookiesPopup.tsx:47`
- Body: `We use cookies to enhance your experience. By clicking "Accept All", you consent to our use of cookies.` — `src/components/landing/CookiesPopup.tsx:54-56`
- 3 buttons: `Accept All`, `Reject`, `Preferences` (→ `/legal/cookies`) — `src/components/landing/CookiesPopup.tsx:63, 70, 76`
- Reads/writes `localStorage["krovos_cookies_accepted"]` — `src/components/landing/CookiesPopup.tsx:11, 18` — only declared cookie in code.
- No stats or claims.

### 7.10 `src/components/landing/Logo.tsx`
- Three variants: `icon`, `text`, `full`. Full logo: outer ring + hexagon + letter `K` mark with pulsing accent dots — `src/components/landing/Logo.tsx:1-126`
- Brand wordmark: `KROV` (white) + `OS` (gold), Syne font — `src/components/landing/Logo.tsx:67, 121`
- No claims, no copy.

---

## 8. CROSS-CUTTING PATTERNS / SMOKING GUNS

### 8.1 Every "featured customer" in the codebase is fabricated
There is **no real named customer** anywhere in the site. Three flavours of fake names appear:

1. **Marquee / ticker logos** — `TechCorp`, `GlobalBank`, `MediCare`, `RetailMax`, `LogiFlow`, `FinanceHub`, `DataSync`, `CloudNine`, `InnovateAI`, `SecureNet`, `RetailPro`, `HealthTech`, `FinServe`, `AutoMotive`, `EnergyPlus` (home), `Salesforce / Slack / Jira / ServiceNow / HubSpot / Microsoft / Google / AWS / Datadog / Splunk` (Hero.tsx) — all **[UNVERIFIED]** as Krovos customers; some are integration partners, not customers.
2. **Case studies** — `Fortune 500 Bank` (used in 3 places), `Global Manufacturer` (used in 3 places), `Healthcare System` (3 places), `Retail Giant`, `Tech Unicorn`, `Insurance Leader`, `Leading Consumer Goods Company`, `Global 3PL Provider`, `International Freight Forwarder`, `CloudFirst Inc`, `Enterprise Solutions`, `Enterprise Solutions Group`, `GrowthCo`, `ScaleUp Technologies`, `TechScale Inc`, `CloudScale Solutions`, `EnterpriseFlow`, `GlobalTech Solutions`, `InnovateCorp`, `TechGrowth Inc`, `CloudScale Enterprise`, `FinTech Global`, `Global Finance Corp`, `HealthFirst Systems`, `MedTech Solutions`, `CloudScale Inc`, `GlobalServe`, `TechFlow SaaS`, `CloudScale Technologies`, `DataFlow Systems`, `DevOps Inc`, `FinanceHub`, `MobileFirst Apps`, `TechCorp Global`, `Capital Investments Ltd`, `Global Manufacturing Corp`, `Global Retail Inc`, `International Trade Co`, `Manufacturing Solutions`, `Meridian Healthcare`, `TechVentures Capital`, `FinanceFirst Corp`, `Healthcare Plus`, `RetailMax`, `TechCorp Global`, `TechStart Innovations`, `FinSecure Bank`, `TechScale Inc`, `CloudFirst Inc`, `Enterprise Solutions Group`, `FinServe Analytics`, `Global Retail Brand`, `HealthTech Solutions`, `Logistics Enterprise`, `Manufacturing Conglomerate`, `Manufacturing Corp`, `National Healthcare Provider`, `CloudSync Analytics`, `Enterprise Software Company`, `FinTech Startup`, `Legacy Manufacturing Brand`, `LuxeHome Interiors`, `National Fast-Casual Chain`, `Premium Fashion Retailer`, `Regional Healthcare System`, `TechFlow Solutions`, `Global 3PL Provider`, `Global Logistics Solutions`, `International Freight Forwarder`, `Leading Consumer Goods Company`, `National Distribution Partners`, `Premier Freight Services`, `Global Investment Bank`, `Industrial Conglomerate`, `Meridian Financial Group`, `Pacific Health Systems`, `Regional Hospital Network`, `TechCorp Industries`, `Enterprise Tech Solutions`, `Fortune 500 Tech Company`, `GrowthStage Startups`, `Healthcare SaaS Leader`, `Nexus Global`, `Series B Fintech Company`, `Global Financial Services`, `Global Financial Services Firm`, `Healthcare System`, `Manufacturing Conglomerate`, `Retail Distribution Network`. **All [UNVERIFIED] / fabricated.**
3. **Awards** — `Forbes Cloud 100`, `SaaStr Awards Best Enterprise Product`, `TechCrunch Disrupt AI Innovation Award`, `Fortune Best Workplace`, `YC Emerging Unicorn`. **All [UNVERIFIED].** No public evidence in code.

### 8.2 Every "executive / employee" name is duplicated across pages and contradicts context
- `Sarah Chen` is listed as:
  - `CEO & Founder` of Krovos in `/about` (`src/app/about/page.tsx:42`)
  - `CEO & Founder` of Krovos in `/company/about` (`src/app/company/about/page.tsx:42`)
  - `Chief Executive Officer` of Krovos in `/company/leadership` (`src/app/company/leadership/page.tsx:10`)
  - `Senior Software Engineer` at Krovos (internal employee testimonial) in `/careers` (`src/app/careers/page.tsx:404`)
  - `DevOps Lead` testimonial source in `/solutions/managed-it` (`src/app/services/managed-it/page.tsx` testimonials array)
  - `VP of Customer Success` testimonial in `/services/managed-it`
  - CEO speaker in webinars (`/resources/webinars/page.tsx:13`)
  - Same name repeated as author of testimonials in `/services/custom-software`, `/services/logistics`, and `/services/managed-it`
- `Marcus Rodriguez` / `Marcus Chen` / `Michael Chen` — same kind of duplication.
- `Priya Sharma` / `Priya` — duplication.
- `James Thompson` / `James Williams` / `James Wilson` / `James Morrison` / `James Okonkwo` — variations.
- **None of these can be confirmed against the founder record (Hantz Prosper per BC Corp registry). All **[UNVERIFIED]**.**

### 8.3 Stats conflicts / internal contradictions
- **Clients:** `200+` on `/` and `/careers`, `200+` on `/contact`, `500+` on `/about`, `/company/about`, `/solutions/enterprise`, `/services/managed-it`, `/services/digital-marketing` (multi-millions `2.3M`), `/services/talent-solutions` (`50K+` pool).
- **Team members:** `120+` on home and careers, `200+` on `/company/leadership` philosophy stats.
- **Countries:** Consistent at `11` (home, contact, leadership `15`).
- **Uptime SLA:** `99.99%` (most pages), `99.9%` (`/trust`, `/product/security`, `/status`).
- **Founded year:** `/about` claims 2023 in the timeline (`src/app/about/page.tsx:33`), but `/about`'s "Our Story" copy and `/careers` `Press Room` press release date both reference 2015–2025 founding. BC corporate registry says incorporated 2026-02-24. **All three anchors disagree.**
- **$50M Series B** claimed in `/company/press/page.tsx:11` is `[UNVERIFIED]` — no SEC / press release in code.

### 8.4 Phone / address mismatches between pages
- `/contact` lists `+1 (604) 555-0100` (Vancouver), `+971 4 555 0200` (Dubai), `+91 22 5555 0300` (Mumbai) — all `555-01XX` placeholder style (`src/app/contact/page.tsx:538-559`).
- `/legal/privacy` and `/legal/terms` both list `123 Innovation Drive, San Francisco, CA 94102` (`src/app/legal/privacy/page.tsx:124-127`, `src/app/legal/terms/page.tsx:134-137`) — wrong jurisdiction and contradicts the BC corp registry address (13428 105 Ave Suite 1410 Surrey BC V3T 0S6).
- `/legal/terms` governing law is "State of California" — `[UNVERIFIED]` and almost certainly wrong for a BC-incorporated entity.
- `/components/landing/Footer.tsx:41-46` also uses `San Francisco, CA 94102`, `info@krovos.com`, `+1 (415) 555-1234`.

### 8.5 Contact emails (verbatim, for reference)
- `contact@krovos.com` (`/contact`) — `src/app/contact/page.tsx:393`
- `vancouver@krovos.com` (`/contact`) — `src/app/contact/page.tsx:539`
- `dubai@krovos.com` (`/contact`) — `src/app/contact/page.tsx:548`
- `mumbai@krovos.com` (`/contact`) — `src/app/contact/page.tsx:557`
- `press@krovos.com` (`/company/press`) — `src/app/company/press/page.tsx:302`
- `privacy@krovos.com` (`/legal/privacy`, `/legal/cookies`) — `src/app/legal/privacy/page.tsx:127`, `src/app/legal/cookies/page.tsx:151`
- `legal@krovos.com` (`/legal/terms`) — `src/app/legal/terms/page.tsx:137`
- `careers@krovos.com` (`/careers`, `/company/careers`) — `src/app/careers/page.tsx:961`, `src/app/company/careers/page.tsx:90`
- `info@krovos.com` (Footer) — `src/components/landing/Footer.tsx:44`

### 8.6 Purely decorative sections (no readable copy / SVG / canvas only)
- `src/components/hero/QuantumHero.tsx` — full-bleed canvas particle field + 8 floating HUD readouts (`src/components/hero/QuantumHero.tsx:228-447`). No claims are verifiable from the code.
- `src/components/hero/LiquidMetalHero.tsx` — full-bleed canvas blob with 4 floating unsplash.com images (`src/components/hero/LiquidMetalHero.tsx:280-317`). No verifiable claims.
- `src/components/hero/ArchitecturalHero.tsx` — large editorial image + spinning seal SVG + 3 unsplash images + decorative noise overlay (`src/components/hero/ArchitecturalHero.tsx:48-310`). No verifiable claims other than the spinning-seal text.
- `src/components/landing/ServiceComponents.tsx` — purely SVG illustration library (`src/components/landing/ServiceComponents.tsx:21-216`). No readable claims.
- World map SVG on home (`src/app/page.tsx:317-385`) — labels `NORTH AMERICA`, `EUROPE`, `ASIA`, `AUSTRALIA` only.
- Image references in code that are decorative:
  - `src/app/about/page.tsx:82-87` → `/images/hero-enterprise.png`
  - `src/app/about/page.tsx:139-144` → `/images/ai-automation.png`
  - Both files exist on disk in `public/images/`, but the visible content of these image files is not readable in code.
- Cookie table on `/legal/cookies/page.tsx:66-108` contains specific cookie names; these are claims about cookies set on the user's device, not unverified — preserved verbatim.

### 8.7 Authoritative real-world facts NOT in the code (sourced from BC corporate registry and the user's brief)
- **Entity name:** Krovos Inc.
- **Federal corporation number:** 1772355-5
- **Jurisdiction of incorporation:** Canada (federal)
- **Incorporation date:** 2026-02-24
- **Registered office address:** 13428 105 Ave Suite 1410, Surrey, BC V3T 0S6
- **Founder / Director:** Hantz Prosper
- **Authorized signer:** Mukul Mukul (per W-8BEN-E)
- None of these appear anywhere in the source code. Replacing fictional leadership with real director info would be the most important copy correction.

### 8.8 Recommendations for the redesign (purely advisory, not edits)
1. **Strip every fake customer logo, case study, testimonial, award, and leadership bio** until real ones exist. Replace placeholder client logos with neutral "Trusted integrations" / "Featured technology" groupings.
2. **Resolve all stat conflicts** by picking one anchor number per claim (e.g., decide: 200 or 500 enterprise clients? 120 or 200 team members? Vancouver HQ only, or also a Surrey office?) and update every page.
3. **Update office addresses** to match BC corporate registry (Surrey, BC V3T 0S6), and replace placeholder 555-01XX phone numbers with real lines (or remove them entirely).
4. **Fix jurisdiction in `/legal/terms`** (California → British Columbia / Canadian federal).
5. **Replace the two off-brand hero components** (`ArchitecturalHero.tsx`, `LiquidMetalHero.tsx`, `QuantumHero.tsx`) — `ArchitecturalHero` reuses architecture-firm copy, `LiquidMetalHero` references 2015 founding, `QuantumHero` invents quantum-computing stats. All three should be either rebuilt or removed.
6. **Add real SEO files**: `app/robots.ts`, `app/sitemap.ts`, and per-page `metadata` exports (many product/services/solutions pages have none, so they inherit the generic root title).
7. **If any of the SOC 2, ISO 27001, GDPR claims are real**, link to public reports / Trust Center; otherwise downgrade to "in progress" or remove.
8. **Use real founder info** (Hantz Prosper) instead of the recurring `Sarah Chen / CEO & Founder` persona.

---

## 9. FILE-LEVEL INDEX

For quick lookup, every TSX file read for this inventory:

```
src/app/layout.tsx
src/app/page.tsx
src/app/about/page.tsx
src/app/careers/page.tsx
src/app/contact/page.tsx
src/app/demo/page.tsx
src/app/docs/page.tsx
src/app/integrations/page.tsx
src/app/login/page.tsx
src/app/signup/page.tsx
src/app/status/page.tsx
src/app/trust/page.tsx
src/app/legal/privacy/page.tsx
src/app/legal/terms/page.tsx
src/app/legal/cookies/page.tsx
src/app/company/about/page.tsx
src/app/company/careers/page.tsx
src/app/company/leadership/page.tsx
src/app/company/partners/page.tsx
src/app/company/press/page.tsx
src/app/product/page.tsx
src/app/product/agents/page.tsx
src/app/product/governance/page.tsx
src/app/product/orchestration/page.tsx
src/app/product/security/page.tsx
src/app/resources/page.tsx
src/app/resources/api/page.tsx
src/app/resources/blog/page.tsx
src/app/resources/case-studies/page.tsx
src/app/resources/templates/page.tsx
src/app/resources/webinars/page.tsx
src/app/resources/whitepapers/page.tsx
src/app/services/ai-automation/page.tsx
src/app/services/custom-software/page.tsx
src/app/services/digital-marketing/page.tsx
src/app/services/logistics/page.tsx
src/app/services/managed-it/page.tsx
src/app/services/talent-solutions/page.tsx
src/app/solutions/page.tsx
src/app/solutions/analytics/page.tsx
src/app/solutions/cloud/page.tsx
src/app/solutions/customer-support/page.tsx
src/app/solutions/engineering/page.tsx
src/app/solutions/enterprise/page.tsx
src/app/solutions/finance/page.tsx
src/app/solutions/hr/page.tsx
src/app/solutions/it-ops/page.tsx
src/app/solutions/revops/page.tsx
src/app/solutions/sales/page.tsx
src/app/solutions/security-ops/page.tsx
src/app/solutions/startup/page.tsx
src/app/solutions/transformation/page.tsx
src/components/hero/ArchitecturalHero.tsx
src/components/hero/LiquidMetalHero.tsx
src/components/hero/QuantumHero.tsx
src/components/landing/Hero.tsx
src/components/landing/MegaMenu.tsx
src/components/landing/Navbar.tsx
src/components/landing/Footer.tsx
src/components/landing/CardsPopup.tsx  (cookies popup, misnamed in header but correct path)
src/components/landing/ServiceComponents.tsx
src/components/landing/Logo.tsx
package.json
README.md
next.config.ts
```

Not separately read (no human-readable copy): `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `.gitignore`, `next-env.d.ts`, `src/app/globals.css` (CSS only).

No source files were modified during this audit.
