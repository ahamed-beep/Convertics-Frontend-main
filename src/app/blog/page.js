import BrowseSection from "@/Components/clientside/blog/BrowseSection";
import CtaBanner from "@/Components/reuseableui/CtaBanner";
import InsightsSection from "@/Components/clientside/blog/InsightsSection";
import Footer from "@/Components/reuseableui/Footer";
import Navbar from "@/Components/reuseableui/Navbar";

export const metadata = {
  title: "Convertica Journal — Business, Marketing, Design & Technology",
  description: "Convertica is an independent journal on business, marketing, technology and design — written for the people who build, ship, and sell.",
  keywords: ["business journal", "marketing essays", "B2B strategy", "design insights", "technology trends", "growth strategy", "startup", "digital transformation"],
  authors: [{ name: "Convertica Editorial" }],
  creator: "Convertica Journal",
  publisher: "Convertica Journal",
  metadataBase: new URL("https://convertica.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Convertica Journal — Business, Marketing, Design & Technology",
    description: "An independent journal on business, marketing, technology and design.",
    url: "https://convertica.com",
    siteName: "Convertica Journal",
    images: [{ url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80", width: 1200, height: 630, alt: "Convertica Journal Cover" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertica Journal — Business, Marketing, Design & Technology",
    description: "An independent journal on business, marketing, technology and design.",
    images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"],
    creator: "@convertica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#0e1116] font-sans">
        <Navbar/>
      <InsightsSection />
      <BrowseSection />
      <CtaBanner />
<Footer/>
    </main>
  );
}