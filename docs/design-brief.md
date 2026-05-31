# Bytewright — Design Brief

## Visual Identity
Dark-first, minimal, premium. Inspired by saasframe.io but with cinematic scroll animations
and a stronger typographic voice. Feels like a top-tier software studio — not a template.

## Color
Accent: Indigo #6366F1 — sits between blue (engineering/trust) and purple (creativity),
directly reflecting "Where creativity meets top-notch engineering."

Dark background #07070F with slight blue undertone — warmer than pure black, cooler than navy.
Cards at #0E0E1C — just enough elevation to separate from background without harsh contrast.

## Typography Hierarchy
H1 (hero): Syne 800, 72px desktop / 48px mobile
H2 (sections): Syne 700, 40px desktop / 32px mobile
H3 (cards): Syne 700, 20px
Body: DM Sans 400, 16px / 1.7 line height
Labels/nav: DM Sans 500, 14px
Eyebrows: JetBrains Mono 500, 11px, 0.2em tracking, uppercase

## Spacing System
8px base grid. Sections: 120px vertical padding (desktop), 80px (mobile).
Cards: 24px padding. Between cards: 24px gap.

## Animation Philosophy
Reveal-on-scroll is the primary animation. Content enters from below (40px) as you scroll.
Stagger grid children by 80ms for rhythm. Keep it subtle — animations support content, don't perform.
Hero has a static CSS gradient orb — atmosphere, not distraction.

## Component Language
Cards: subtle border (#1C1C2E), on hover border becomes accent (#6366F1) + bg lifts.
Buttons: primary = accent fill, ghost = transparent border. Max 8px radius.
Badges: pill shape, small text, accent-dim background.
