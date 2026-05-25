import CoverStory from "@/Components/clientside/Home/Coverstory";
import CtaNewsletter from "@/Components/clientside/Home/CtaNewsletter";
import DepartmentsSection from "@/Components/clientside/Home/DepartmentsSection";
import FeaturedInsights from "@/Components/clientside/Home/FeaturedInsights";
import WeeklyDispatch from "@/Components/clientside/Home/WeeklyDispatch";
import Footer from "@/Components/reuseableui/Footer";
import Navbar from "@/Components/reuseableui/Navbar";

export const metadata = {
  title: "Convertics Journal — Business, Marketing, Design & Technology",
  description: "Convertics is an independent journal on business, marketing, technology and design — written for the people who build, ship, and sell.",
  keywords: ["business journal", "marketing essays", "B2B strategy", "design insights", "technology trends", "fashion retail", "growth strategy", "startup", "digital transformation"],
  authors: [{ name: "Convertics Editorial" }],
  creator: "Convertics Journal",
  publisher: "Convertics Journal",
  metadataBase: new URL("https://convertics.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Convertics Journal — Business, Marketing, Design & Technology",
    description: "An independent journal on business, marketing, technology and design — written for the people who build, ship, and sell.",
    url: "https://convertics.com",
    siteName: "Convertics Journal",
    images: [{ url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80", width: 1200, height: 630, alt: "Convertics Journal Cover" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertics Journal — Business, Marketing, Design & Technology",
    description: "An independent journal on business, marketing, technology and design.",
    images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"],
    creator: "@convertics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-900 font-serif">
      <Navbar />
      <CoverStory />
      <DepartmentsSection />
      <FeaturedInsights />
      <WeeklyDispatch />
      <CtaNewsletter />
      <Footer />
    </main>
  );
}