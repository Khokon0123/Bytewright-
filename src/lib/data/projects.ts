export interface Project {
  id: string;
  client: string;
  type: string;
  industry: string;
  description: string;
  result: string;
  rating: number;
  initials: string;
  gradient: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "new-york-buddhist-bihar",
    client: "New York Buddhist Bihar",
    type: "Web Development",
    industry: "Religious / Nonprofit",
    description:
      "A monastery in New York needed a dignified online presence to share their teachings, events, and community resources with practitioners across the region.",
    result:
      "Delivered a serene, accessible website with event management and multilingual support, increasing community engagement significantly.",
    rating: 5,
    initials: "NYBB",
    gradient: "from-violet-900/40 to-indigo-900/40",
    tags: ["Website", "Nonprofit", "Multilingual"],
  },
  {
    id: "bridging-generations",
    client: "Bridging Generations",
    type: "Web Development",
    industry: "Welfare / Nonprofit",
    description:
      "A welfare organization connecting youth with senior mentors needed a platform to manage their programs, volunteer sign-ups, and impact storytelling.",
    result:
      "Built a warm, accessible platform that simplified volunteer onboarding and amplified their mission to a wider audience.",
    rating: 5,
    initials: "BG",
    gradient: "from-emerald-900/40 to-teal-900/40",
    tags: ["Website", "Nonprofit", "Community"],
  },
  {
    id: "ny-construction",
    client: "NY Construction",
    type: "Web Development",
    industry: "Construction",
    description:
      "A construction company required a professional digital presence to showcase completed projects, attract commercial clients, and streamline quote requests.",
    result:
      "Delivered a high-impact site with project gallery, service pages, and a lead generation form that boosted inbound inquiries.",
    rating: 5,
    initials: "NYC",
    gradient: "from-orange-900/40 to-amber-900/40",
    tags: ["Website", "B2B", "Lead Generation"],
  },
];
