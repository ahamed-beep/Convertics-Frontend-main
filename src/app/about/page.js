import AboutConvertica from "@/Components/clientside/about/AboutConvertica";
import WeeklyDispatch from "@/Components/clientside/about/WeeklyDispatch";
import CtaBanner from "@/Components/reuseableui/CtaBanner";
import Footer from "@/Components/reuseableui/Footer";
import Navbar from "@/Components/reuseableui/Navbar";

export const metadata = {
  title: "About — Convertica Journal",
  description: "Convertica is a content platform focused on helping businesses, marketers, and professionals make smarter decisions through clear and practical insights.",
  keywords: ["about Convertica", "content platform", "business insights", "marketing tools", "technology reviews", "design"],
  authors: [{ name: "Convertica Editorial" }],
  metadataBase: new URL("https://convertica.com"),
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Convertica Journal",
    description: "Convertica helps businesses, marketers, and professionals make smarter decisions through clear and practical insights.",
    url: "https://convertica.com/about",
    siteName: "Convertica Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About — Convertica Journal",
    description: "Convertica helps businesses and professionals make smarter decisions.",
    creator: "@convertica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] font-sans text-gray-900">
        <Navbar/>
      <AboutConvertica />
      <WeeklyDispatch/>
      <CtaBanner/>
      <Footer/>
    </main>
  );
}