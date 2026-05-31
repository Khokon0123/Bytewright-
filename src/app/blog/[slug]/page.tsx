import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MeetingCTA } from "@/components/sections/home/MeetingCTA";
import { posts } from "@/lib/data/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="flex items-center gap-2 text-muted hover:text-accent text-sm font-medium transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="flex flex-col gap-5 mb-12 pb-12 border-b border-line">
            <Badge variant="accent">{post.category}</Badge>
            <h1
              className="font-display font-extrabold text-primary leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              {post.title}
            </h1>
            <p className="text-muted text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-muted text-sm">
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <Calendar size={12} strokeWidth={1.75} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <Clock size={12} strokeWidth={1.75} />
                {post.readTime}
              </span>
              <span className="font-mono text-[11px]">By {post.author}</span>
            </div>
          </header>

          {/* Placeholder body */}
          <div className="prose-like flex flex-col gap-6 text-muted leading-relaxed">
            <p>
              {/* [PLACEHOLDER] — Full article content will be added here */}
              This article is coming soon. The Bytewright team is working on
              a full-length piece covering this topic in depth. Check back
              shortly, or{" "}
              <Link href="/contact" className="text-accent hover:underline">
                reach out to us
              </Link>{" "}
              if you have specific questions about this subject — we&apos;re
              always happy to talk shop.
            </p>
            <p>
              In the meantime, explore our other resources or learn more
              about how we work by visiting our{" "}
              <Link href="/services" className="text-accent hover:underline">
                services page
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <MeetingCTA />
    </>
  );
}
