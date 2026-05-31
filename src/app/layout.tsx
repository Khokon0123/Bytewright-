import type { Metadata } from "next";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bytewright — Where creativity meets top-notch engineering",
    template: "%s | Bytewright",
  },
  description:
    "Bytewright builds premium digital products: portfolio sites, AI chatbots, business dashboards, websites, software apps, and web apps.",
  keywords: [
    "software development",
    "web development",
    "AI chatbot",
    "business dashboard",
    "portfolio site",
    "Bytewright",
  ],
  authors: [{ name: "Bytewright" }],
  creator: "Bytewright",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bytewright",
    title: "Bytewright — Where creativity meets top-notch engineering",
    description:
      "Premium digital products built with craft. Portfolio sites, AI chatbots, dashboards, apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytewright — Where creativity meets top-notch engineering",
    description:
      "Premium digital products built with craft. Portfolio sites, AI chatbots, dashboards, apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-base text-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
