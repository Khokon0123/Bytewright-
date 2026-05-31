import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/lib/data/posts";

const categoryColor: Record<Post["category"], "accent" | "muted"> = {
  AI: "accent",
  Development: "muted",
  Design: "muted",
  Business: "muted",
};

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 p-6 rounded-lg border border-line bg-surface hover:border-accent hover:bg-surface-hover transition-all duration-200 ease-out h-full"
    >
      {/* Category + read time */}
      <div className="flex items-center justify-between gap-3">
        <Badge variant={categoryColor[post.category]}>{post.category}</Badge>
        <span className="flex items-center gap-1 text-muted font-mono text-[11px]">
          <Clock size={11} strokeWidth={1.75} />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-primary text-lg leading-snug group-hover:text-accent transition-colors duration-200 flex-1">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-muted text-sm leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-line mt-auto">
        <span className="text-muted text-xs font-mono">{post.date}</span>
        <span className="flex items-center gap-1 text-accent text-xs font-medium group-hover:gap-2 transition-all duration-200">
          Read more
          <ArrowRight
            size={12}
            strokeWidth={2}
            className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </span>
      </div>
    </Link>
  );
}
