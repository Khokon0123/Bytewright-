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
  {
    id: "flora-studio",
    client: "Flora Studio",
    type: "Web Development",
    industry: "Beauty / Wellness",
    description:
      "A boutique beauty studio needed an elegant online presence to showcase their services, enable appointment bookings, and build a loyal client base.",
    result:
      "Crafted a refined, visually-driven website with integrated booking flow that elevated the brand and increased client retention.",
    rating: 5,
    initials: "FS",
    gradient: "from-rose-900/40 to-pink-900/40",
    tags: ["Website", "Booking", "Beauty"],
  },
  {
    id: "onlyswap",
    client: "OnlySwap",
    type: "Web App",
    industry: "Fintech / DeFi",
    description:
      "A DeFi platform needed a clean, fast trading interface that made token swapping accessible to both crypto-native and first-time users.",
    result:
      "Shipped a performant, intuitive swap interface with real-time pricing and wallet integration that drove strong early user adoption.",
    rating: 5,
    initials: "OS",
    gradient: "from-cyan-900/40 to-blue-900/40",
    tags: ["Web App", "DeFi", "Fintech"],
  },
];
