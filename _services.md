# Krovos Inc. — Service Catalog (deduplicated, evidence-based)

> Built strictly from `src/app/**` and `src/components/**/*.tsx`. No services invented. Every entry cites the file:line where it appears.
>
> **Method:** Each candidate "service / product / solution" was grepped, then classified by whether it has (a) a real description in source, (b) a dedicated page route, or (c) only marketing prose. Routing/filesystem evidence is primary; hero copy is not.
>
> **Key structural facts the catalog reflects:**
> - There is **no `/services/page.tsx` index** — only `/services/<slug>/page.tsx` siblings. The "Services" link in the nav/footer points at a route that 404s.
> - There is no `/solutions/<slug>` index either, but `/solutions/page.tsx` exists with a grid.
> - `package.json` has zero backend, zero DB, zero auth — pure Next.js frontend. No real infrastructure exists for any of these "services."
> - Public `images/` matches the AI / Cloud / Security / Team categories.

---

## 1. AI and Automation

### 1.1 AI & Automation (services/ai-automation) — primary service
- **Where it appears:** Navbar.tsx:18 (mega-menu), MegaMenu.tsx:17, page.tsx:390 (home bento), Footer.tsx:15, layout.tsx:28, layout.tsx:31
- **Description (verbatim, src/app/services/ai-automation/page.tsx:313–339):** "Intelligent automation solutions powered by machine learning and advanced algorithms to streamline operations and reduce manual workload." Sub-capabilities listed: Machine Learning Solutions, Process Automation (Workflow Automation, RPA, Integration with Enterprise Systems, Custom Automation Scripts), AI Agents & Assistants.
- **Real page?** YES — `src/app/services/ai-automation/page.tsx` (1,094 lines). Has hero, bento grid, FAQs (Q7 at L512 mentions "200+ enterprise systems"), process steps, case studies, "AI & Automation Division" tagline.
- **Verdict:** Real service page. Substantial.

### 1.2 AI Agents (product/agents)
- **Where it appears:** page.tsx:11 (product overview grid), status/page.tsx:10 ("AI Agents operational 99.97%"), product/page.tsx:11, about/page.tsx:125 ("We're building AI agents…")
- **Description (verbatim, src/app/product/agents/page.tsx:5):** "Deploy intelligent AI agents that understand context and take autonomous action. Powered by large language models with long-term memory." Capabilities: Context-Aware, Long-Term Memory, Tool Calling, Human-in-the-Loop.
- **Real page?** YES — `src/app/product/agents/page.tsx` (184 lines). Has capabilities, use-cases (Support/Data Analyst/Sales/IT Ops), 3-step "Define/Train/Deploy."
- **Verdict:** Real product page. But product ≠ service — it's the underlying platform that powers the AI & Automation service.

### 1.3 AI Automation (used as a single concept across the site)
- **Where it appears:** Hero.tsx:117 ("Enterprise AI Automation Solutions"), Hero.tsx:124 ("Enterprise AI Automation & Agentic Solutions"), Hero.tsx:130 ("Krovos is a corporate enterprise specializing in AI-driven automation"), LiquidMetalHero.tsx:250
- **Description:** Not a separate service — it's the marketing umbrella that subsumes 1.1 and 1.2. Treated as copy-only.

### 1.4 Machine Learning / Process Automation / RPA / AI-Powered Customer Support / AI-Powered Data Analytics
- **Where it appears:** services/ai-automation/page.tsx:313, 326, 330–335, 339 (named sub-bullets)
- **Description:** Listed as in-scope deliverables of the AI & Automation service (1.1), not standalone offerings.
- **Verdict:** Sub-features of 1.1, not separate services.

### 1.5 AI Analytics / Data Analytics (solutions/analytics)
- **Where it appears:** Footer.tsx:27, solutions/page.tsx (not in grid), analytics/page.tsx:5
- **Description (verbatim, src/app/solutions/analytics/page.tsx:5):** "Transform your data into actionable insights with AI-powered analytics. Real-time dashboards, predictive models, and business intelligence." Features: Real-Time Analytics, AI-Powered Insights, Custom Dashboards, Predictive Analytics.
- **Real page?** YES — `src/app/solutions/analytics/page.tsx` (160 lines). Hero + 4 metrics + 4 features + integrations chips + CTA. Standard template.
- **Verdict:** Real route, marketing-grade content only. Substantive feature claims but no implementation.

---

## 2. Cloud and Infrastructure

### 2.1 Cloud Migration (solutions/cloud)
- **Where it appears:** Footer.tsx:26, layout.tsx:31 (implied "cloud migration services"), solutions/page.tsx footer, cloud/page.tsx:5
- **Description (verbatim, src/app/solutions/cloud/page.tsx:5):** "Seamless cloud migration solutions. Move your infrastructure to AWS, Azure, or Google Cloud with zero downtime." Features: Zero Downtime Migration (blue-green), Automated Assessment, Cost Optimization, Security First. Migration paths defined: On-Prem → AWS, On-Prem → Azure, On-Prem → GCP, Legacy Cloud → Multi-Cloud.
- **Real page?** YES — `src/app/solutions/cloud/page.tsx` (229 lines). Has 4-step process (Assess/Plan/Migrate/Optimize), stats ("500+ Migrations Completed", "99.99% Uptime During Migration"), and a CTA to `/contact`.
- **Verdict:** Real page, marketing-grade description. No infrastructure code for it anywhere in src.

### 2.2 Cloud Management / Managed Cloud
- **Where it appears:** services/managed-it/page.tsx:450 ("Cloud Management — Seamless management of multi-cloud environments including AWS, Azure, and Google Cloud…"), services/managed-it/page.tsx:481 (Cloud Services sub-list: "Cloud Migration Strategy, AWS/Azure/Google Cloud Management, Cloud Security Hardening, Cost Optimization, Hybrid Cloud Architecture")
- **Description (verbatim, src/app/services/managed-it/page.tsx:451):** "Seamless management of multi-cloud environments including AWS, Azure, and Google Cloud with optimized costs, security hardening, and governance policies."
- **Real page?** Lives inside `/services/managed-it` — see §5.2. Not a standalone route.
- **Verdict:** Sub-feature of Managed IT (5.2).

### 2.3 Cloud Solutions (custom-software sub-capability)
- **Where it appears:** services/custom-software/page.tsx:369 ("Cloud Solutions — Cloud-native applications and migration services leveraging AWS, Azure, and Google Cloud…"), page.tsx:426
- **Description (verbatim, services/custom-software/page.tsx:370):** "Cloud-native applications and migration services leveraging AWS, Azure, and Google Cloud for maximum scalability, security, and cost-efficiency."
- **Real page?** Sub-feature of `/services/custom-software` (see §5.1).
- **Verdict:** Sub-feature of Custom Software.

### 2.4 Cloud Security / Cloud Workload Protection
- **Where it appears:** solutions/security-ops/page.tsx:440 ("Cloud workload protection"), solutions/security-ops/page.tsx:554 (Managed Security / Cloud Security cards)
- **Description (verbatim, solutions/security-ops/page.tsx:555):** "Protect multi-cloud environments with AI agents that understand the unique threats facing AWS, Azure, and GCP workloads."
- **Real page?** Sub-feature of `/solutions/security-ops` (see §3.2).
- **Verdict:** Sub-feature of Security Operations.

---

## 3. Security

### 3.1 Cybersecurity (solutions/security)
- **Where it appears:** Footer.tsx:28, services/page.tsx (footer link), security/page.tsx:5
- **Description (verbatim, src/app/solutions/security/page.tsx:5):** "Enterprise-grade cybersecurity solutions. Protect your business with AI-powered threat detection, incident response, and compliance management." Features: AI Threat Detection, Zero Trust Architecture, 24/7 SOC, Compliance Management (SOC 2 / HIPAA / GDPR / PCI-DSS). Service list: Penetration Testing, Security Audits, Incident Response, Security Training.
- **Real page?** YES — `src/app/solutions/security/page.tsx` (163 lines). Stats: "500+ Protected Enterprises", "10M+ Threats Blocked", "<15min Avg Response Time".
- **Verdict:** Real route, marketing-only content. No SOC, no threat detection, no pen-testing infrastructure in the codebase.

### 3.2 Security Operations / SecOps (solutions/security-ops)
- **Where it appears:** solutions/page.tsx:15 ("Security Operations"), solutions/page.tsx:33 (link), solutions/page.tsx:33, security-ops/page.tsx:5
- **Description (verbatim, src/app/solutions/security-ops/page.tsx:435 — "AI-powered anomaly detection that identifies potential threats across your entire infrastructure before they become breaches."). Sub-cards: Managed Security, Cloud Security, Threat Hunting.
- **Real page?** YES — `src/app/solutions/security-ops/page.tsx` (1,500 lines — substantial). Has metrics, integrations (CrowdStrike, Splunk, SentinelOne, Defender, Palo Alto), 200+ supported integrations claim, case studies, FAQ.
- **Verdict:** Largest page in the codebase. Real route, substantial marketing copy. No actual SOC infrastructure.

### 3.3 Enterprise Security (product/security)
- **Where it appears:** product/page.tsx:29 (card), trust/page.tsx:5 (page metadata), security/page.tsx:5
- **Description (verbatim, src/app/product/security/page.tsx:5):** "Enterprise-grade security at Krovos. SOC 2 Type II, encryption, SSO, and more." Features: Encryption (TLS 1.3 / AES-256 / customer-managed keys), Access Control (SSO/SAML, RBAC, MFA), Compliance (SOC 2 Type II, GDPR, HIPAA ready), Monitoring.
- **Real page?** YES — `src/app/product/security/page.tsx` (78 lines). Very thin compared to security-ops.
- **Verdict:** Real product page, brief. This is the *platform's* security feature, not a paid service offering.

### 3.4 Trust & Security (trust page)
- **Where it appears:** trust/page.tsx:43 ("Security & trust first"), about/page.tsx:213 ("Trust & Security" milestone)
- **Description (verbatim, src/app/trust/page.tsx:5):** "Security, compliance, and privacy at Krovos. SOC 2 Type II certified, GDPR compliant, and committed to responsible AI."
- **Real page?** YES — `src/app/trust/page.tsx` exists. Treated as corporate/compliance content, not a service for sale.
- **Verdict:** Trust page, not a billable service.

### 3.5 Engineering / DevSecOps / Container Security / Cloud Provisioning (solutions/engineering)
- **Where it appears:** solutions/engineering/page.tsx:11 (IntegrationLogo), page.tsx:242 (Automation features), page.tsx:275 ("Security vulnerability scanning"), page.tsx:281 (Code Review Automation), page.tsx:321 (Security Scanning), page.tsx:328 (Container Security), page.tsx:387 (Cloud Provisioning), page.tsx:393 ("Cloud-native integrations"), page.tsx:1003 (Integration Hub Section)
- **Description (verbatim, src/app/solutions/engineering/page.tsx:543, the FAQ answer):** "Security is built into every layer of Krovos. We implement SOC 2 Type II compliance, end-to-end encryption, and zero-trust architecture. Our DevSecOps features include automated vulnerability scanning (SAST/DAST/SCA), container security scanning, secrets management via HashiCorp Vault integration, and compliance-as-code with OPA policies."
- **Real page?** YES — `src/app/solutions/engineering/page.tsx` (1,252 lines). "Engineering" appears as a Solutions vertical.
- **Verdict:** Real route. The page is mostly about AI/CI/CD automation for engineering teams with security as a sub-feature.

---

## 4. Consulting / Staff Augmentation

### 4.1 Talent Solutions / Tech Talent Acquisition (services/talent-solutions)
- **Where it appears:** Navbar.tsx:42, MegaMenu.tsx:45, page.tsx:426 (home bento), Footer.tsx:19, layout.tsx:28 ("talent solutions"), talent-solutions/page.tsx:418
- **Description (verbatim, src/app/services/talent-solutions/page.tsx:427):** "Our comprehensive talent acquisition services cover the entire hiring lifecycle. From workforce planning and candidate sourcing to offer management and onboarding support, we partner with you to build high-performing teams that drive business success." Other in-page capabilities: Training & Development (L436), Staffing Solutions (L446), AI-Powered Matching (L464).
- **Real page?** YES — `src/app/services/talent-solutions/page.tsx` (969 lines). Has FAQ, case studies, "Talent Solutions Division" tagline.
- **Verdict:** Real route. Substantial content. But this is an IT-staffing offering, not what most people mean by "consulting."

### 4.2 Consulting Partners (company/partners)
- **Where it appears:** company/partners/page.tsx:194 ("Consulting Partners" section), company/partners/page.tsx:198 ("Consulting Partners" h2), company/partners/page.tsx:77 (services array: "Digital transformation, Cloud migration")
- **Description:** Listing of *partner* firms Krovos works with. Not a service Krovos itself sells.
- **Verdict:** Copy-only mention of "consulting" in the partners context. Krovos does not bill itself as a consulting firm in any standalone page.

### 4.3 Training & Development (talent sub-capability)
- **Where it appears:** services/talent-solutions/page.tsx:436 ("Training & Development"), services/talent-solutions/page.tsx:727 (in Bento grid), careers/page.tsx:386 (career-track description)
- **Description:** "Training & Development" is listed as one capability inside the Talent Solutions page; also mentioned as a career-track in careers.
- **Verdict:** Sub-feature of Talent Solutions.

---

## 5. Other (Custom Software, Managed IT, Digital Marketing, Logistics)

### 5.1 Custom Software Development (services/custom-software)
- **Where it appears:** Navbar.tsx:24, MegaMenu.tsx:24, page.tsx:399 (home bento), Footer.tsx:16, custom-software/page.tsx:244
- **Description (verbatim, src/app/services/custom-software/page.tsx:244 onward):** Capabilities include Agile Development, Mobile App Development, API Development & Integration, Cloud Solutions, Custom Database Solutions, Web Application Development, Mobile Application Development, Enterprise Solutions.
- **Real page?** YES — `src/app/services/custom-software/page.tsx` (1,111 lines). "Custom Software Development Division" tagline at L600. FAQ, case studies.
- **Verdict:** Real route. Substantial.

### 5.2 Managed IT (services/managed-it)
- **Where it appears:** Navbar.tsx:36, MegaMenu.tsx:38, page.tsx:417 (home bento), Footer.tsx:18, managed-it/page.tsx:430
- **Description (verbatim, src/app/services/managed-it/page.tsx:418–488):** Capabilities include Enterprise Security (SOC, AI-powered anomaly detection), Cloud Management (AWS/Azure/GCP), Network Services (Network Monitoring, Firewall Management, VPN, SD-WAN, Network Segmentation), Security Services (EDR, SIEM, Threat Hunting, Zero Trust), Cloud Services (Migration, Management, Hardening, Cost Optimization, Hybrid).
- **Real page?** YES — `src/app/services/managed-it/page.tsx` (1,067 lines). Has "Trusted Compliance & Security" badges section, "Why Krovos for Managed IT Services" CTA, "Our Managed Services Process."
- **Verdict:** Real route. This page **also covers the cloud management, managed security, and SOC capabilities** — they live inside the Managed IT offering, not as separate routes.

### 5.3 Digital Marketing (services/digital-marketing)
- **Where it appears:** Navbar.tsx:30, MegaMenu.tsx:31, page.tsx:408 (home bento), Footer.tsx:17, digital-marketing/page.tsx:445
- **Description (verbatim, src/app/services/digital-marketing/page.tsx:445–519):** Capabilities include Multi-Channel Integration, Scalable Solutions, Strategy Development. Tags in case-studies: "B2B, LinkedIn, Content, Automation."
- **Real page?** YES — `src/app/services/digital-marketing/page.tsx` (1,106 lines). "Comprehensive Digital Marketing Services" Bento, "Deep-Dive Marketing Solutions" detail section.
- **Verdict:** Real route. Substantial.

### 5.4 Logistics / Logistics Tech (services/logistics)
- **Where it appears:** Navbar.tsx:48, MegaMenu.tsx:52, page.tsx:435 (home bento), Footer.tsx:20, layout.tsx:28 ("logistics technology"), logistics/page.tsx:341
- **Description (verbatim, src/app/services/logistics/page.tsx:341–457):** Capabilities include Supply Chain Solutions, AI-powered route planning, Warehouse Automation, EDI Integration, End-to-End Visibility Platform.
- **Real page?** YES — `src/app/services/logistics/page.tsx` (914 lines). Has supply-chain FAQ, security answer, case studies.
- **Verdict:** Real route. Substantial. **The most questionably-fitted service** for a "Vancouver / Dubai / Mumbai AI startup" — there is zero logistics DNA in the team bio (CTO is an ML PhD from Stanford, CEO is "AI/ML researcher turned technologist").

### 5.5 Workflow Orchestration (product/orchestration)
- **Where it appears:** product/page.tsx:17 (Workflow Orchestration card)
- **Description (verbatim, src/app/product/orchestration/page.tsx:5):** "Visual workflow builder for complex automation pipelines. Design, test, and deploy multi-step workflows with ease."
- **Real page?** YES — `src/app/product/orchestration/page.tsx` (80 lines). 3-step "Drag & drop / Connect apps / Deploy."
- **Verdict:** Real product page. Thin.

### 5.6 Governance & Guardrails (product/governance)
- **Where it appears:** product/page.tsx:23 (Governance & Guardrails card)
- **Description (verbatim, src/app/product/governance/page.tsx:5):** "Enterprise-grade governance with approvals, permissions, and audit trails. Ensure compliance while empowering automation." Cards: Approvals, RBAC, Audit Logs, Policy Engine, Data Residency, Compliance Reports.
- **Real page?** YES — `src/app/product/governance/page.tsx` (69 lines). Very thin.
- **Verdict:** Real product page. Very thin.

### 5.7 Integrations / Integrations Hub
- **Where it appears:** integrations/page.tsx:5 ("Connect 500+ tools"), integrations/page.tsx:28 (page entry), product/page.tsx:35 (Integrations Hub card), integrations/page.tsx:12 ("Cloud Infrastructure" category, count 56)
- **Description (verbatim, src/app/integrations/page.tsx:5):** "Connect 500+ tools with Krovos AI automation. Slack, Jira, Salesforce, HubSpot, ServiceNow, and more."
- **Real page?** YES — `src/app/integrations/page.tsx` exists.
- **Verdict:** Platform feature, not a billable service. The page lists categories (Cloud Infrastructure, Development, etc.) and counts. Marketing.

### 5.8 Other Solutions sub-verticals (solutions/*)
These are listed in `/solutions/page.tsx` and have real pages, but each is **just an industry-tinted skin on the same AI-agent platform** — not a separate offering:

| Slug | Lines | Title (verbatim metadata) | Verdict |
|---|---|---|---|
| solutions/it-ops | 1,388 | AI for IT Operations | Real page, marketing-only. |
| solutions/customer-support | 1,699 | AI for Customer Support | Real page, largest after security-ops. |
| solutions/finance | 1,128 | AI for Finance | Real page, marketing-only. |
| solutions/hr | 1,484 | AI for HR | Real page, marketing-only. |
| solutions/revops | 1,927 | AI for RevOps | Real page, marketing-only. |
| solutions/sales | 1,634 | AI for Sales | Real page, marketing-only. |
| solutions/enterprise | 298 | "Enterprise-Grade Automation" | Template-style, marketing-only. |
| solutions/startup | 198 | "Startup Accelerator" | Template-style, marketing-only. |
| solutions/analytics | 160 | "Data Analytics Powered by AI" | Template-style, marketing-only. |
| solutions/cloud | 229 | "Cloud Migration Made Simple" | Template-style, marketing-only. |
| solutions/security | 163 | "Enterprise Cybersecurity" | Template-style, marketing-only. |
| solutions/transformation | 172 | "Digital Transformation" | Template-style, marketing-only. |
| solutions/security-ops | 1,500 | "Security Operations" | Substantial page. Real route. |
| solutions/engineering | 1,252 | "Engineering" (CI/CD/DevSecOps) | Substantial page. Real route. |

These are 8 distinct vertical "solutions" pages in addition to the 6 in `/services/`. They share an identical marketing-template skeleton (Hero / Stats / Features / CTA) and reuse the same KPI numbers (500+ integrations, 99.99% uptime, 200+ enterprise systems, 200+ security tools, "15,000+ placements"). Several also include testimonials attributed to companies like "CloudScale Technologies" / "CloudScale Inc" / "CloudScale Enterprise" / "CloudScale Systems" — a fictional customer appears across multiple pages.

### 5.9 Product surface (product/*)
- product/page.tsx — index that links to agents / orchestration / governance / security / integrations / observability. Observability is linked but the route doesn't exist (no `product/observability/page.tsx`).
- product/agents (184 lines), product/orchestration (80), product/governance (69), product/security (78) — all real, all thin templates.
- These describe the *platform*, not a service Krovos sells.

---

## 6. Evidence strength summary

For each candidate service, the labels follow this rubric:
- **STRONG** — multiple file references + a dedicated page/component + concrete deliverables
- **MEDIUM** — 1 file but a concrete, multi-paragraph description
- **WEAK** — mentioned in nav/marketing, no implementation, but a real page exists
- **NONE** — mentioned but contradicted by missing infrastructure

| Service | Files referencing it | Dedicated page | Concrete description | Strength |
|---|---|---|---|---|
| AI & Automation | Navbar, MegaMenu, Footer, page.tsx, layout.tsx, services/ai-automation/page.tsx (1,094 LOC), careers | YES (`/services/ai-automation`) | YES — ML, Process Automation, RPA, AI Agents sub-bullets | **STRONG** |
| AI Agents | product/page.tsx, status/page.tsx, product/agents, about | YES (`/product/agents`) | YES — context-aware, tool-calling, HITL | **MEDIUM** (platform feature, not a paid service) |
| AI Analytics / Data Analytics | Footer, services/ai-automation, solutions/analytics | YES (`/solutions/analytics`) | YES — 4 named features | **WEAK** (160-LOC template, no data stack) |
| Cloud Migration | Footer, services/managed-it, solutions/cloud | YES (`/solutions/cloud`) | YES — 4 paths (AWS/Azure/GCP/Multi-Cloud), 4-step process | **WEAK** (template page, no migration tooling) |
| Cloud Management | services/managed-it, custom-software | NO (sub-feature of managed-it) | YES — AWS/Azure/GCP management description | **MEDIUM** (sub-feature, well-described) |
| Cybersecurity (general) | Footer, solutions/security, services/managed-it | YES (`/solutions/security`) | YES — pen-testing, SOC, IR, training | **WEAK** (163-LOC template; claims "10M+ threats blocked" with no SOC infra) |
| Security Operations / SecOps | solutions/page.tsx, solutions/security-ops (1,500 LOC), services/managed-it | YES (`/solutions/security-ops`) | YES — anomaly detection, threat hunting, cloud workload protection, 200+ security tools | **STRONG page, NONE infra** — the page is the largest in the codebase, but no SOC code exists. **STRONG (marketing depth)** |
| Enterprise Security (product) | product/page.tsx, trust, security | YES (`/product/security`) | YES — TLS 1.3 / AES-256 / SSO / SOC 2 / HIPAA | **MEDIUM** (platform feature; thin page but concrete claims) |
| Trust & Security | trust/page.tsx, about (Trust & Security milestone) | YES (`/trust`) | YES — SOC 2 Type II, GDPR, responsible AI | **NONE** — corporate trust content, not a service |
| Engineering / DevSecOps | solutions/engineering (1,252 LOC), Navbar (mega-menu), integrations | YES (`/solutions/engineering`) | YES — CI/CD, SAST/DAST/SCA, OPA, Vault, container security | **WEAK** (marketing depth but no CI/CD infra) |
| Consulting | company/partners (mentions "Consulting Partners") | NO dedicated consulting service page | NO | **NONE** — "consulting" appears only as a partner-ecosystem reference, never as a service Krovos sells |
| Staff Augmentation / Talent Solutions | Navbar, MegaMenu, Footer, page.tsx, services/talent-solutions (969 LOC), careers | YES (`/services/talent-solutions`) | YES — workforce planning, sourcing, AI-powered matching, training, "15,000+ placements" | **STRONG page, NONE infra** — substantial page, but the source itself says "94% retention rate" + "15,000+ placements" with no proof |
| Custom Software Development | Navbar, MegaMenu, Footer, page.tsx, services/custom-software (1,111 LOC) | YES (`/services/custom-software`) | YES — Agile, Mobile, API/Integration, Cloud, Database, Web, Enterprise | **STRONG page, NONE infra** — substantial, "Custom Software Development Division" tagline, but no client roster or team |
| Managed IT | Navbar, MegaMenu, Footer, page.tsx, services/managed-it (1,067 LOC) | YES (`/services/managed-it`) | YES — Server Mgmt, Network, Virtualization, Storage, Data Center, SOC, Cloud Management, Security Services | **STRONG page, NONE infra** — substantial, includes SOC/security/cloud, but no actual infrastructure |
| Digital Marketing | Navbar, MegaMenu, Footer, page.tsx, services/digital-marketing (1,106 LOC) | YES (`/services/digital-marketing`) | YES — Multi-Channel Integration, Scalable Solutions, Strategy Development, B2B/LinkedIn/Content | **STRONG page, NONE infra** — substantial; "Marketing" on a brand-new company's site is unusual unless it's an actual agency |
| Logistics / Logistics Tech | Navbar, MegaMenu, Footer, page.tsx, services/logistics (914 LOC), layout | YES (`/services/logistics`) | YES — Supply Chain, Route Planning, Warehouse Automation, EDI, Visibility Platform | **STRONG page, NONE infra** — substantial, but the team bio (Stanford ML PhD, AI researcher) has zero logistics background |
| Workflow Orchestration | product/page.tsx, product/orchestration | YES (`/product/orchestration`) | YES — drag-and-drop, 500+ integrations | **WEAK** (80-LOC stub) |
| Governance & Guardrails | product/page.tsx, product/governance | YES (`/product/governance`) | YES — Approvals, RBAC, Audit Logs, Policy Engine, Data Residency | **WEAK** (69-LOC stub) |
| Integrations Hub | integrations, product/page.tsx, status | YES (`/integrations`) | YES — 500+ tools, 56 Cloud Infrastructure integrations | **WEAK** (mostly a list page) |
| Startup Accelerator / Enterprise / Digital Transformation | solutions/startup, solutions/enterprise, solutions/transformation | YES (each) | YES — feature lists, plans | **WEAK** (templates) |

---

## 7. Thin-offering verdict

**Honest verdict: this is a marketing-bloated, thinly-implemented site claiming 6 distinct service lines + 14 industry vertical solutions, but with no infrastructure, no customers, and a leadership bio that's purely AI/ML. It reads as one product (an AI-agent automation platform) wrapped in service-line skin.**

Specifically:

1. **The product is real-shaped (1 underlying idea).** The AI & Automation service page (`/services/ai-automation`), the AI Agents product page (`/product/agents`), and every "Solutions for every team" page describe the same thing in different words: an AI agent platform with integrations. There is one underlying capability described in many skins.

2. **Six "services" are full marketing pages with no implementation.** `/services/{ai-automation, custom-software, digital-marketing, managed-it, talent-solutions, logistics}` — every one of them is 900–1,100 lines of hero/stats/features/FAQ/CTA copy. None connects to actual infrastructure (the codebase has no backend, no DB, no API — `package.json` is purely Next.js + framer-motion + tailwind). All six pages use the same generic testimonial companies ("CloudScale Technologies", "Global Financial Services Firm", "MedTech Solutions") and the same fabricated metrics ("500+ implementations", "94% retention", "10M+ threats blocked", "15,000+ placements").

3. **14 "solutions" pages are mostly templates.** Eight of the fourteen solutions pages (`/solutions/{enterprise, startup, analytics, cloud, security, transformation}`) are 160–300-line templates sharing the same Hero / Stats / Features / CTA skeleton with identical color schemes and stats. Six solutions pages (`it-ops`, `customer-support`, `finance`, `hr`, `revops`, `sales`, `security-ops`, `engineering`) are 1,100–1,900-line marketing essays — long but still pure copy.

4. **Three categories are structurally suspicious for a Vancouver-founded AI company in 2026:**
   - **Logistics Tech** — claimed as a core service (line 28 of layout.tsx), but the CTO's bio is "AI researcher, 2 successful exits in the automation space, PhD ML from Stanford," and the CEO bio is the same. There is no logistics experience anywhere in the team bio, on the leadership page, in partners, or in the press releases. The "/services/logistics" page describes AI route planning, EDI integration, and warehouse automation — none of which an ML-led team would actually be shipping.
   - **Talent Solutions / Staff Augmentation** — claims "15,000+ placements" and a "94% retention rate" (services/talent-solutions/page.tsx:587). For a company incorporated in Feb 2026 this is implausible by ~6 orders of magnitude. Either the metric is fabricated or it was inherited from a partner.
   - **Digital Marketing** — claim of comprehensive marketing services with B2B/LinkedIn/content expertise. Same implausibility argument; for a brand-new company, "we provide digital marketing services to other enterprises" is implausible unless this is itself a marketing agency.

5. **"Consulting" and "Staff Augmentation" do not exist as a service.** The grep term "Consulting" only appears in `company/partners/page.tsx:198` as a section header ("Consulting Partners") describing *partner firms*, and "Staffing" only appears as part of "Staffing Solutions" inside the Talent Solutions page (L446). There is no `/services/consulting` route. There is no `/services/staffing` route.

6. **One category matches the leadership team's actual expertise: AI/ML.** Every bio (CTO, CEO, AI Research Scientist job posting in `careers/page.tsx:526`, Backend Engineer-AI/ML in `careers/page.tsx:448`, the "AI/ML researcher with 15 patents" in `about/page.tsx:283`) is AI/ML. The "AI & Automation" + "AI Agents" + every "Solutions for X team" page is consistent with that. Everything else is marketing extension.

7. **The "thin offering" inventory, then, is roughly:**
   - **Real (consistent with team DNA):** AI & Automation, AI Agents, Workflow Orchestration, Governance, Integrations, plus the 8 vertical solutions pages (they're all the same AI-agent platform).
   - **Marketing-only stubs with real pages but no team/infrastructure fit:** Cloud Migration (template), Cybersecurity (template), Enterprise Security (thin), Trust page (corporate).
   - **Marketing-only stubs that contradict the team bio / company age:** Logistics Tech, Talent Solutions, Digital Marketing, Managed IT (Managed IT is the closest to defensible since it bundles SOC + Cloud Management, which a future AI-agent play could power, but the claims like "24/7 SOC" and "AI-powered anomaly detection" are not backed by anything in the codebase).

8. **Honest recommendation for the redesigned services section:**
   - **Show 1 service, prominently.** The AI & Automation / AI Agents product line. Lead with it.
   - **Group the 14 "Solutions for every team" pages under a single "Solutions" tab** with team/industry sub-tabs. They are not separate services; they are the same product.
   - **Drop or hide the following until they have backing:** Logistics Tech, Talent Solutions / Staff Augmentation, Digital Marketing. These are the ones that hurt credibility the most — they make Krovos look like every other "we do everything" agency site.
   - **Keep Managed IT but relabel it** — Managed IT + Cloud Management + Security Ops are arguably the same offering (an AI-agent platform you can hand enterprise IT to). Don't bill three separate routes for the same capability.
   - **Either build out a real `/services` index page or remove the link from the nav** — the link currently 404s because there is no `/services/page.tsx`.
   - **Cut the duplicate test-customer references** — "CloudScale Technologies / Inc / Enterprise / Systems" appears across multiple pages and breaks immersion. If they're real customers, name them once and don't reuse; if they're not, remove them.

**Bottom line:** This site claims to be a multi-service firm with 6 service lines and 14 industry solutions, plus a product platform. The honest read is: **one product (AI agent automation) + one platform narrative + a lot of marketing pages.** The "thin offering" risk is real for any reader who tries to reconcile the breadth of services with a 5-person leadership team whose entire résumé is AI/ML.