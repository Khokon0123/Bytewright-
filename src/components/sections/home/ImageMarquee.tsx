import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const marqueeItems = [
  {
    label: "Portfolio Site",
    sub: "Personal brand — Design",
    gradient: "from-violet-600/30 to-indigo-800/30",
    accent: "#7C3AED",
    layout: "portfolio",
  },
  {
    label: "AI Chatbot",
    sub: "Customer support — SaaS",
    gradient: "from-cyan-600/30 to-blue-800/30",
    accent: "#0891B2",
    layout: "chat",
  },
  {
    label: "Business Dashboard",
    sub: "Analytics platform — Enterprise",
    gradient: "from-slate-700/40 to-indigo-900/40",
    accent: "#6366F1",
    layout: "dashboard",
  },
  {
    label: "Web Application",
    sub: "Booking system — Startup",
    gradient: "from-emerald-700/30 to-teal-900/40",
    accent: "#059669",
    layout: "webapp",
  },
  {
    label: "Corporate Website",
    sub: "Marketing site — Agency",
    gradient: "from-orange-600/25 to-rose-800/30",
    accent: "#EA580C",
    layout: "marketing",
  },
  {
    label: "Software App",
    sub: "Productivity tool — B2B",
    gradient: "from-fuchsia-700/30 to-purple-900/40",
    accent: "#A21CAF",
    layout: "software",
  },
  {
    label: "E-commerce Store",
    sub: "Retail platform — D2C",
    gradient: "from-amber-600/25 to-orange-900/30",
    accent: "#D97706",
    layout: "ecommerce",
  },
  {
    label: "Non-profit Website",
    sub: "Community org — Welfare",
    gradient: "from-green-700/30 to-emerald-900/40",
    accent: "#15803D",
    layout: "nonprofit",
  },
];

function MockBrowserCard({
  item,
}: {
  item: (typeof marqueeItems)[0];
}) {
  return (
    <div
      className="flex-shrink-0 w-72 rounded-xl border border-white/10 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-white/10"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div
          className="flex-1 h-5 rounded-full text-[10px] font-mono flex items-center px-3"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "var(--text-secondary)",
          }}
        >
          bytewright.com/{item.label.toLowerCase().replace(/\s+/g, "-")}
        </div>
      </div>

      {/* Mock screenshot body */}
      <div className={`relative h-44 bg-gradient-to-br ${item.gradient} p-4 overflow-hidden`}>
        <MockContent layout={item.layout} accent={item.accent} />
      </div>

      {/* Card label */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <p
            className="font-display font-semibold text-sm"
            style={{ color: "var(--text-primary)" }}
          >
            {item.label}
          </p>
          <p className="font-mono text-[10px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
            {item.sub}
          </p>
        </div>
        <div
          className="w-5 h-5 rounded-full opacity-80"
          style={{ background: item.accent }}
        />
      </div>
    </div>
  );
}

function MockContent({ layout, accent }: { layout: string; accent: string }) {
  if (layout === "chat") {
    return (
      <div className="flex flex-col gap-2 h-full justify-center">
        <div className="flex items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: accent, opacity: 0.7 }} />
          <div className="rounded-lg rounded-bl-none p-2 text-[9px] font-mono max-w-[80%]" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
            Hi! How can I help you today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-lg rounded-br-none p-2 text-[9px] font-mono max-w-[75%]" style={{ background: accent, opacity: 0.8, color: "white" }}>
            I need help with pricing.
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: accent, opacity: 0.7 }} />
          <div className="rounded-lg rounded-bl-none p-2 text-[9px] font-mono max-w-[80%]" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
            Sure! Our plans start at...
          </div>
        </div>
      </div>
    );
  }

  if (layout === "dashboard") {
    return (
      <div className="flex flex-col gap-2 h-full">
        <div className="grid grid-cols-3 gap-2">
          {["$48.2K", "1,284", "94%"].map((v, i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="text-[9px] font-mono mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Metric {i + 1}</div>
              <div className="text-[11px] font-display font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{v}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg p-2 flex items-end gap-1" style={{ background: "rgba(255,255,255,0.05)" }}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: accent, opacity: 0.7 + (i / 10) * 0.3 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (layout === "portfolio") {
    return (
      <div className="flex flex-col gap-2 h-full">
        <div className="flex gap-2 items-center mb-1">
          <div className="w-8 h-8 rounded-full" style={{ background: accent, opacity: 0.8 }} />
          <div>
            <div className="h-2 w-20 rounded-full mb-1" style={{ background: "rgba(255,255,255,0.3)" }} />
            <div className="h-1.5 w-14 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
        <div className="h-2 w-full rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="h-2 w-4/5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="grid grid-cols-2 gap-2 flex-1 mt-1">
          {[0, 1].map((i) => (
            <div key={i} className="rounded-lg" style={{ background: "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
      </div>
    );
  }

  if (layout === "ecommerce") {
    return (
      <div className="grid grid-cols-3 gap-1.5 h-full">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-lg flex flex-col gap-1 p-1.5" style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="flex-1 rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="h-1.5 w-full rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="h-1 w-2/3 rounded-full" style={{ background: accent, opacity: 0.7 }} />
          </div>
        ))}
      </div>
    );
  }

  /* Generic layout for: webapp, marketing, software, nonprofit */
  return (
    <div className="flex flex-col gap-2.5 h-full">
      <div className="flex gap-3 items-center">
        <div className="h-2 w-12 rounded-full" style={{ background: accent, opacity: 0.8 }} />
        <div className="h-2 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="h-2 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="ml-auto h-6 w-14 rounded-lg" style={{ background: accent, opacity: 0.7 }} />
      </div>
      <div className="h-6 w-3/4 rounded-lg" style={{ background: "rgba(255,255,255,0.15)" }} />
      <div className="h-3 w-full rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
      <div className="h-3 w-5/6 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="flex gap-2 mt-auto">
        <div className="h-7 w-20 rounded-lg" style={{ background: accent, opacity: 0.75 }} />
        <div className="h-7 w-16 rounded-lg border" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
      </div>
    </div>
  );
}

const doubled = [...marqueeItems, ...marqueeItems];

export function ImageMarquee() {
  return (
    <section className="py-20 overflow-hidden border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We've Built"
            heading="Crafted for every industry."
            subtext="From nonprofits to SaaS startups — we build exactly what the project demands."
          />
        </ScrollReveal>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--bg), transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--bg), transparent)",
          }}
        />

        <div className="flex gap-4 marquee-track">
          {doubled.map((item, i) => (
            <MockBrowserCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
