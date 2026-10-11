import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SiteFooter, footerData } from "@/features/footer"

const dmSansHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lawal Kamaldeen | PinnacleCodes",
    template: "%s | PinnacleCodes",
  },
  description:
    "Full stack developer building scalable web applications, responsive frontends, and high-performance digital experiences using modern technologies.",
  keywords: [
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "TypeScript",
    "Nigeria",
    "PinnacleCodes",
    "Lawal Kamaldeen",
  ],
  authors: [{ name: "Lawal Kamaldeen", url: "https://pinnaclecodes.dev" }],
  creator: "Lawal Kamaldeen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pinnaclecodes.dev",
    siteName: "PinnacleCodes",
    title: "Lawal Kamaldeen | PinnacleCodes",
    description:
      "Full stack developer building scalable web applications and modern digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PinnacleCodes — Lawal Kamaldeen, Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawal Kamaldeen | PinnacleCodes",
    description:
      "Full stack developer building scalable web applications and modern digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={cn(
        "h-full",
        "antialiased",
        "dark",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        dmSansHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <SiteChrome />
        {children}
        <SiteFooter data={footerData} />
      </body>
    </html>
  );
}
