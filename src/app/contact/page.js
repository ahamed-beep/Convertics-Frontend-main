import ContactForm from "@/Components/clientside/contact/ContactForm";
import CtaBanner from "@/Components/reuseableui/CtaBanner";
import Footer from "@/Components/reuseableui/Footer";
import Navbar from "@/Components/reuseableui/Navbar";

export const metadata = {
  title: "Contact Us — Convertica Journal",
  description: "Have questions, partnership inquiries, or want to feature your product? Reach out to the Convertica team — we're always open to collaborations.",
  keywords: ["contact", "partnership", "collaboration", "advertise", "Convertica"],
  authors: [{ name: "Convertica Editorial" }],
  metadataBase: new URL("https://convertica.com"),
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Convertica Journal",
    description: "Have questions or partnership inquiries? Reach out to the Convertica team.",
    url: "https://convertica.com/contact",
    siteName: "Convertica Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us — Convertica Journal",
    description: "Have questions or partnership inquiries? Reach out to the Convertica team.",
    creator: "@convertica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar/>
      <ContactForm />
      <CtaBanner/>
      <Footer/>
    </main>
  );
}