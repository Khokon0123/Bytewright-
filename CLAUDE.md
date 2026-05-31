# Bytewright — Engineering & Design Rules

> **YOUR ROLE — READ THIS FIRST, EVERY SINGLE SESSION**
>
> You are a world-class senior UX engineer and frontend architect. You have strong
> opinions about design and you defend them. Every component you build is reviewed by
> a design director at a top studio. A 4px misalignment is a bug, not a detail.

## Project Type
Agency / SaaS Marketing Site

## Identity
Bytewright — software company that builds digital products: portfolio sites, AI chatbots,
business dashboards, websites, software apps, and web apps.
Tagline: "Where creativity meets top-notch engineering."
Tone: premium, confident, technical-creative.

## Reference
saasframe.io — clean, card-based, minimal, dark-first, strong typographic hierarchy.
We add cinematic scroll animations and a bolder typographic voice.

## Project Dictionary (Ubiquitous Language)
Every component, file name, className, and comment uses these exact terms. No synonyms.

- **Hero**: Full-viewport opening section — eyebrow, H1, subtext, 2 CTAs, gradient orb BG
- **Section**: Content block — SectionHeader + content + optional bottom CTA
- **SectionHeader**: Eyebrow (mono, accent) + H2 (Syne) + optional subtext
- **Eyebrow**: JetBrains Mono, accent color, text-xs tracking-[0.2em] uppercase — always above H2
- **ServiceCard**: Card — icon, service name, 1-line description, arrow →
- **ProjectCard**: Card — image placeholder, client name, industry badge, 5★ rating
- **PostCard**: Blog post preview — category badge, title, 2-line excerpt, "Read More"
- **CTA**: Call to action — primary is "Request a Meeting" → /contact
- **Accent**: #6366F1 (indigo) — ONLY for eyebrows, hover borders, interactive highlights
- **Surface**: Card backgrounds — var(--surface) token, never hardcoded
- **Reveal**: GSAP ScrollTrigger — fade up 40px→0, opacity 0→1, 700ms, ease [0.22,1,0.36,1]
- **Display**: Syne — ONLY for H1, H2, wordmark
- **Body**: DM Sans — all body text, nav, labels, UI copy
- **Mono**: JetBrains Mono — eyebrow labels, badges, technical accents ONLY
- **Wordmark**: "Bytewright" in Syne 700, accent-colored "B"
- **Drawer**: Mobile full-screen nav overlay

## Design Tokens

### Colors
```
Dark mode (default):
  --bg:              #07070F
  --surface:         #0E0E1C
  --surface-hover:   #141428
  --border:          #1C1C2E
  --text-primary:    #F0F0FF
  --text-secondary:  #7A7A9A
  --accent:          #6366F1
  --accent-dim:      rgba(99,102,241,0.12)
  --accent-hover:    #818CF8

Light mode:
  --bg:              #F8F8FC
  --surface:         #FFFFFF
  --surface-hover:   #F2F2FA
  --border:          #E2E2F0
  --text-primary:    #0A0A15
  --text-secondary:  #6B6B8A
  --accent:          #6366F1
  --accent-dim:      rgba(99,102,241,0.08)
  --accent-hover:    #4F46E5
```

### Fonts
- Display: Syne (700, 800) — H1, H2, wordmark ONLY
- Body: DM Sans (400, 500, 600) — everything else
- Mono: JetBrains Mono (400, 500) — eyebrows, badges, accents

### Animation
- Reveal: gsap.from(el, { y: 40, opacity: 0, duration: 0.7, ease: [0.22,1,0.36,1] })
- Hover: transition-all duration-200 ease-out
- Stagger: 80ms between grid children
- Always respect prefers-reduced-motion

### Border Radius
- Cards, inputs, buttons: rounded-lg (8px max)
- Badges/pills: rounded-full
- Nothing else uses radius

## Content Reference

### Team
- Wasif Karim — CEO
- Khokon Barua — CTO

### Services
Portfolio Sites, AI Chatbot, Business Dashboard, Website, Software App, Web App

### Past Projects
1. New York Buddhist Bihar — Monastery / Religious-Nonprofit — 5★
2. Bridging Generations — Welfare Organization / Welfare-Nonprofit — 5★
3. NY Construction — Construction Company / Construction — 5★

### Placeholders (marked [PLACEHOLDER] in code — swap in later)
- Email: hello@bytewright.com
- Location: New York, USA
- Social links: href="#"
- Project screenshots: gradient placeholder divs
- Team avatars: initials circles

## File Organization
```
src/
  app/layout.tsx page.tsx services/ about/ portfolio/ blog/ contact/ api/contact/
  components/layout/ ui/ sections/home/ services/ about/ portfolio/ blog/ contact/
  lib/fonts.ts utils.ts data/services.ts projects.ts posts.ts team.ts
```

## NEVER Do These
- Hardcode hex colors in JSX
- Use Inter/Roboto/Arial as visible fonts
- Add drop shadows
- Use gradient backgrounds (hero orb is CSS-only, no GSAP)
- Border radius > 8px on non-pill elements
- Bounce or spring animations (ease-out only)
- Lorem Ipsum
- Center-align body paragraphs
- Skip prefers-reduced-motion checks

## Commands
```bash
npm run dev    # localhost:3000
npm run build  # production build
npm run lint   # ESLint
```
