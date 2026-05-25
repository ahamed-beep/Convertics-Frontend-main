import FeaturedSites from "@/Components/clientside/resources/FeaturedSites";
import GetResources from "@/Components/clientside/resources/GetResources";
import CtaBanner from "@/Components/reuseableui/CtaBanner";
import Footer from "@/Components/reuseableui/Footer";
import Navbar from "@/Components/reuseableui/Navbar";

export const metadata = {
  title: "Resources — Convertica Journal",
  description: "Partner with Convertica Journal. Get featured, sponsor content, and reach an audience of experts who follow growth, marketing, and technology.",
  keywords: ["advertise", "get featured", "sponsored post", "product review", "partnership", "B2B marketing", "SaaS", "hosting", "Convertica"],
  authors: [{ name: "Convertica Editorial" }],
  metadataBase: new URL("https://convertica.com"),
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources — Convertica Journal",
    description: "Partner with Convertica Journal and reach an audience of experts who follow growth, marketing, and technology.",
    url: "https://convertica.com/resources",
    siteName: "Convertica Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Resources — Convertica Journal",
    description: "Partner with Convertica Journal and reach an audience of experts.",
    creator: "@convertica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] font-sans text-gray-900">
<Navbar/>
      <GetResources />
      <FeaturedSites />
      <CtaBanner/>
      <Footer/>
    </main>
  );
}