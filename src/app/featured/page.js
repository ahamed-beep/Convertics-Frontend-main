import GetFeatured from "@/Components/clientside/featured/GetFeatured";
import SectionList from "@/Components/clientside/featured/SectionList";
import WhyWorkWithUs from "@/Components/clientside/featured/WhyWorkWithUs";
import CtaBanner from "@/Components/reuseableui/CtaBanner";
import Footer from "@/Components/reuseableui/Footer";
import Navbar from "@/Components/reuseableui/Navbar";

export const metadata = {
  title: "Get Featured — Convertica Journal",
  description: "Promote your product, platform, or service to an audience of experts who follow growth, marketing, and technology. Partner with Convertica Journal.",
  keywords: ["advertise", "get featured", "sponsored post", "product review", "partnership", "B2B marketing", "Convertica"],
  authors: [{ name: "Convertica Editorial" }],
  metadataBase: new URL("https://convertica.com"),
  alternates: { canonical: "/featured" },
  openGraph: {
    title: "Get Featured — Convertica Journal",
    description: "Promote your product to an audience of experts who follow growth, marketing, and technology.",
    url: "https://convertica.com/featured",
    siteName: "Convertica Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Get Featured — Convertica Journal",
    description: "Promote your product to an audience of experts who follow growth, marketing, and technology.",
    creator: "@convertica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function FeaturedPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] font-sans text-gray-900">
        <Navbar/>
      <GetFeatured />
      <SectionList />
      <WhyWorkWithUs />
      <CtaBanner/>
      <Footer/>
    </main>
  );
}