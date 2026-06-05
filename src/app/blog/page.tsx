"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PostCard } from "@/components/sections/blog/PostCard";
import { posts, categories, type Category } from "@/lib/data/posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5 block">
                Blog & Resources
              </span>
              <h1
                className="font-display font-extrabold text-primary leading-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Insights from the
                <br />
                <span className="text-accent">Bytewright team.</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                We share what we know — about software, design, AI, and
                building products that actually work.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category filter + grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category chips */}
          <div
            className="flex items-center gap-2 flex-wrap mb-10"
            role="group"
            aria-label="Filter posts by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`font-sans text-xs font-semibold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border transition-all duration-200 ease-out ${
                  activeCategory === cat
                    ? "bg-accent text-white border-accent"
                    : "border-line text-muted hover:border-accent hover:text-accent hover:bg-accent-dim"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
