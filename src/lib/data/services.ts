export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  useCases: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "portfolio-sites",
    name: "Portfolio Sites",
    description: "Stunning personal portfolios that make your work impossible to ignore.",
    longDescription:
      "We craft bespoke portfolio websites that showcase your work with precision and artistry. Every detail — from typography to animation — is designed to communicate your unique value.",
    useCases: [
      "Designers and creatives seeking client work",
      "Engineers showcasing side projects",
      "Freelancers building personal brand",
      "Job seekers standing out from the crowd",
    ],
    icon: "User",
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    description: "Intelligent chatbots that engage your customers and handle queries 24/7.",
    longDescription:
      "Deploy AI-powered chatbots trained on your business data. From lead qualification to customer support, our chatbots integrate seamlessly with your existing workflows.",
    useCases: [
      "Customer support automation",
      "Lead capture and qualification",
      "FAQ handling and product guidance",
      "Internal knowledge base assistants",
    ],
    icon: "Bot",
  },
  {
    id: "business-dashboard",
    name: "Business Dashboard",
    description: "Real-time dashboards that transform raw data into clear business decisions.",
    longDescription:
      "Custom analytics dashboards built for your exact KPIs. We design data-rich interfaces that make complex information immediately understandable for your team.",
    useCases: [
      "Sales and revenue tracking",
      "Operational metrics monitoring",
      "Multi-platform analytics consolidation",
      "Executive reporting interfaces",
    ],
    icon: "LayoutDashboard",
  },
  {
    id: "website",
    name: "Website",
    description: "Professional websites that represent your brand with impact and clarity.",
    longDescription:
      "From landing pages to full multi-page sites, we build websites that convert visitors into customers. Performance-optimized, accessible, and built to last.",
    useCases: [
      "Business landing pages",
      "Service or product marketing sites",
      "Non-profit and community organizations",
      "Event or campaign microsites",
    ],
    icon: "Globe",
  },
  {
    id: "software-app",
    name: "Software App",
    description: "Full-stack software applications built for scale, speed, and reliability.",
    longDescription:
      "End-to-end software development from architecture to deployment. We build robust applications with clean code, comprehensive testing, and thoughtful UX.",
    useCases: [
      "SaaS products and internal tools",
      "Workflow automation platforms",
      "Data processing and reporting systems",
      "API development and integrations",
    ],
    icon: "Code2",
  },
  {
    id: "web-app",
    name: "Web App",
    description: "Interactive web applications with seamless user experiences across all devices.",
    longDescription:
      "Complex, dynamic web applications built with modern frameworks. We deliver fast, responsive, and intuitive interfaces backed by solid architecture.",
    useCases: [
      "Client portals and member platforms",
      "Booking and scheduling systems",
      "Collaboration and productivity tools",
      "E-commerce and marketplace platforms",
    ],
    icon: "AppWindow",
  },
];
