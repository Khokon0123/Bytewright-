import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* Real website/app screenshots via Unsplash — swap with your own screenshots later */
const marqueeItems = [
  {
    label: "Analytics Dashboard",
    sub: "SaaS · Enterprise",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/dashboard",
  },
  {
    label: "Portfolio Site",
    sub: "Personal Brand · Design",
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/portfolio",
  },
  {
    label: "AI Chatbot Interface",
    sub: "Startup · Customer Support",
    src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/ai-chatbot",
  },
  {
    label: "E-commerce Storefront",
    sub: "Retail · D2C",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/store",
  },
  {
    label: "Corporate Website",
    sub: "B2B · Marketing",
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/corporate",
  },
  {
    label: "SaaS Web Application",
    sub: "Productivity · B2B",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/web-app",
  },
  {
    label: "Business Dashboard",
    sub: "Operations · Analytics",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/bi-dashboard",
  },
  {
    label: "Software Platform",
    sub: "Startup · Full-stack",
    src: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?auto=format&fit=crop&w=720&h=460&q=80",
    url: "bytewright.com/software",
  },
];

const doubled = [...marqueeItems, ...marqueeItems];

function BrowserCard({
  item,
}: {
  item: (typeof marqueeItems)[0];
}) {
  return (
    <div
      className="flex-shrink-0 w-[340px] rounded-xl overflow-hidden border border-line shadow-lg"
      style={{ background: "var(--surface)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2.5 px-4 py-2.5 border-b border-line"
        style={{ background: "var(--surface-hover)" }}
      >
        {/* Traffic lights */}
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        {/* URL bar */}
        <div
          className="flex-1 flex items-center h-5 rounded-full px-3 font-mono text-[10px] truncate"
          style={{
            background: "var(--bg)",
            color: "var(--text-secondary)",
          }}
        >
          {item.url}
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={item.src}
          alt={item.label}
          fill
          sizes="340px"
          className="object-cover object-top"
          unoptimized={false}
        />
      </div>

      {/* Card footer */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p
            className="font-display font-semibold text-sm truncate"
            style={{ color: "var(--text-primary)" }}
          >
            {item.label}
          </p>
          <p
            className="font-mono text-[10px] mt-0.5"
            style={{ color: "var(--text-secondary)" }}
          >
            {item.sub}
          </p>
        </div>
        {/* Accent dot */}
        <span
          className="w-2 h-2 rounded-full shrink-0 bg-accent"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function ImageMarquee() {
  return (
    <section className="py-20 border-t border-line overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Examples"
            heading="Built for every industry."
            subtext="From nonprofits to SaaS startups — we build exactly what the project demands."
          />
        </ScrollReveal>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
          aria-hidden
        />

        {/* Track */}
        <div className="marquee-track" aria-label="Project examples scrolling display">
          {doubled.map((item, i) => (
            <BrowserCard key={i} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
}
