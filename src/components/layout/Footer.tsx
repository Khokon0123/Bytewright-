import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  Services: [
    { label: "Portfolio Sites", href: "/services#portfolio-sites" },
    { label: "AI Chatbot", href: "/services#ai-chatbot" },
    { label: "Business Dashboard", href: "/services#business-dashboard" },
    { label: "Web App", href: "/services#web-app" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Meeting", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: "#" },        /* [PLACEHOLDER] */
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },    /* [PLACEHOLDER] */
  { icon: TwitterXIcon, label: "Twitter / X", href: "#" }, /* [PLACEHOLDER] */
  { icon: InstagramIcon, label: "Instagram", href: "#" },  /* [PLACEHOLDER] */
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              href="/"
              className="font-display font-bold text-xl text-primary hover:text-accent transition-colors duration-200 w-fit"
            >
              <span className="text-accent">B</span>ytewright
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Where creativity meets top-notch engineering. We build digital
              products that make an impact.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@bytewright.com"
                className="flex items-center gap-2 text-muted hover:text-accent text-sm transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.75} />
                <span>hello@bytewright.com</span> {/* [PLACEHOLDER] */}
              </a>
              <span className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={14} strokeWidth={1.75} />
                <span>New York, USA</span> {/* [PLACEHOLDER] */}
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-line text-muted hover:text-accent hover:border-accent hover:bg-accent-dim transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                {title}
              </span>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © 2025 Bytewright. All rights reserved.
          </p>
          <p className="text-muted text-sm">
            Built with craft by the Bytewright team.
          </p>
        </div>
      </div>
    </footer>
  );
}
