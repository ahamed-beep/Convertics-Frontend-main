// components/resources/FeaturedSites.jsx

const featuredSites = [
  {
    img: "/Images/resources/site-monday.webp",
    brand: "MONDAY.COM",
    title: "CRM & Project Management",
    desc: "Manage projects, track leads, and streamline workflows in one platform.",
    href: "https://monday.com",
  },
  {
    img: "/Images/resources/site-cloudways.webp",
    brand: "CLOUDWAYS",
    title: "Cloud Hosting",
    desc: "Managed cloud hosting designed for speed, flexibility, and performance.",
    href: "https://cloudways.com",
  },
  {
    img: "/Images/resources/site-verpex.webp",
    brand: "VERPEX HOSTING",
    title: "Web Hosting",
    desc: "Reliable and affordable hosting solution suitable for beginners and growing websites.",
    href: "https://verpex.com",
  },
  {
    img: "/Images/resources/site-aircall.webp",
    brand: "AIRCALL",
    title: "Communication Tools",
    desc: "Cloud-based phone system built for modern sales and support teams.",
    href: "https://aircall.io",
  },
  {
    img: "/Images/resources/site-domain.webp",
    brand: "NETWORK SOLUTIONS",
    title: "Domain & Hosting",
    desc: "Complete solution for domains, hosting, and getting your business online.",
    href: "https://networksolutions.com",
  },
  {
    img: "/Images/resources/site-shopify.webp",
    brand: "SHOPIFY",
    title: "eCommerce Website Builder",
    desc: "Complete solution for creating, managing, and scaling your online store.",
    href: "https://shopify.com",
  },
];

export default function FeaturedSites() {
  return (
    <section aria-labelledby="sites-heading" className="mx-auto max-w-6xl px-6 pb-24">
      <h2 id="sites-heading" className="sr-only">Featured Partners</h2>
      <hr className="mb-12 border-gray-300" />
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featuredSites.map((s) => (
          <li key={s.brand} className="flex flex-col">
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
              <img
                src={s.img}
                alt={`${s.brand} — ${s.title}`}
                loading="lazy"
                decoding="async"
                width={800}
                height={512}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-blue-500">
              {s.brand}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-gray-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            <div className="mt-4">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${s.brand} website`}
                className="rounded-full bg-blue-500 px-5 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition"
              >
                Visit Website
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}