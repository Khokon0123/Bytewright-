# New Section Scaffold

Build a new section for the Bytewright site. Follow these rules:

1. Read CLAUDE.md first — use the project dictionary and design tokens
2. Create the file in src/components/sections/[page]/SectionName.tsx
3. Use SectionHeader for the eyebrow + H2
4. Wrap animated elements in ScrollReveal
5. Use only CSS custom property colors (var(--accent), var(--text-primary), etc.)
6. Props interface: minimal — only what the parent needs to customize
7. All styling, animation, and responsive logic goes INSIDE the component
8. Export from the page file and verify it renders before moving on
