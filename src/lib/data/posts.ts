export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: "Development" | "AI" | "Design" | "Business";
  readTime: string;
  date: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "ai-chatbots-transforming-small-businesses",
    title: "How AI Chatbots Are Transforming Small Businesses",
    excerpt:
      "AI-powered chatbots are no longer just for enterprise. Here's how small businesses are using them to automate support, capture leads, and grow without hiring.",
    category: "AI",
    readTime: "5 min read",
    date: "May 20, 2025",
    author: "Wasif Karim",
  },
  {
    slug: "5-things-every-business-website-needs-2025",
    title: "5 Things Every Business Website Needs in 2025",
    excerpt:
      "The bar for professional websites has risen sharply. We break down the five non-negotiable elements that separate credible business sites from amateur ones.",
    category: "Development",
    readTime: "4 min read",
    date: "May 14, 2025",
    author: "Khokon Barua",
  },
  {
    slug: "what-to-expect-hiring-software-team",
    title: "What to Expect When You Hire a Software Team",
    excerpt:
      "First-time clients often don't know what questions to ask. This guide demystifies the process — from the discovery call to launch day — so you can collaborate with confidence.",
    category: "Business",
    readTime: "6 min read",
    date: "May 8, 2025",
    author: "Wasif Karim",
  },
  {
    slug: "case-for-custom-dashboards",
    title: "The Case for Custom Dashboards Over Off-the-Shelf Tools",
    excerpt:
      "Generic analytics platforms give you generic insights. We explain why a custom-built dashboard often pays for itself within months and how to know when you need one.",
    category: "Development",
    readTime: "7 min read",
    date: "April 30, 2025",
    author: "Khokon Barua",
  },
  {
    slug: "designing-for-non-technical-clients",
    title: "Designing for Non-Technical Clients",
    excerpt:
      "Bridging the gap between designers and clients who aren't fluent in tech-speak is a skill. Here are the principles we use to keep everyone aligned and projects moving.",
    category: "Design",
    readTime: "5 min read",
    date: "April 22, 2025",
    author: "Wasif Karim",
  },
  {
    slug: "web-apps-vs-mobile-apps",
    title: "Web Apps vs. Mobile Apps: What Should You Build First?",
    excerpt:
      "The age-old question for startups and growing businesses. We walk through the decision framework we use with every client to help them invest their budget wisely.",
    category: "Development",
    readTime: "8 min read",
    date: "April 15, 2025",
    author: "Khokon Barua",
  },
];

export const categories = ["All", "Development", "AI", "Design", "Business"] as const;
export type Category = (typeof categories)[number];
