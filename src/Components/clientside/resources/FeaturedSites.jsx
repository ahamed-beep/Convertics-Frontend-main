// components/resources/FeaturedSites.jsx

const featuredSites = [
  {
    img: "/Images/resources/resource1.webp",
    brand: "MONDAY.COM",
    title: "CRM & Project Management",
    desc: "Manage projects, track leads, and streamline workflows in one platform.",
    href: "https://monday.com",
  },
  {
    img: "/Images/resources/resource2.webp",
    brand: "CLOUDWAYS",
    title: "Cloud Hosting",
    desc: "Managed cloud hosting designed for speed, flexibility, and performance.",
    href: "https://cloudways.com",
  },
  {
    img: "/Images/resources/resource3.webp",
    brand: "VERPEX HOSTING",
    title: "Web Hosting",
    desc: "Reliable and affordable hosting solution suitable for beginners and growing websites.",
    href: "https://verpex.com",
  },
  {
    img: "/Images/resources/resource4.webp",
    brand: "AIRCALL",
    title: "Communication Tools",
    desc: "Cloud-based phone system built for modern sales and support teams.",
    href: "https://aircall.io",
  },
  {
    img: "/Images/resources/resource5.webp",
    brand: "NETWORK SOLUTIONS",
    title: "Domain & Hosting",
    desc: "Complete solution for domains, hosting, and getting your business online.",
    href: "https://networksolutions.com",
  },
  {
    img: "/Images/resources/resource6.webp",
    brand: "SHOPIFY",
    title: "eCommerce Website Builder",
    desc: "Complete solution for creating, managing, and scaling your online store.",
    href: "https://shopify.com",
  },
];

export default function FeaturedSites() {
  return (
    <section aria-labelledby="sites-heading" className="mx-auto px-8 pb-24">
      <div>

      </div>
      <h2 id="sites-heading" className="sr-only">Featured Partners</h2>

     <hr className="w-full  mb-10 md:mb-16  border-[#171A21]" />
      <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featuredSites.map((s) => (
          <li key={s.brand} className="flex flex-col">
         <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white aspect-square">
  <img
    src={s.img}
    alt={`${s.brand} — ${s.title}`}
    loading="lazy"
    decoding="async"
    width={800}
    height={512}
    className="w-full h-full object-cover"
  />
</div>
            <p className="mt-6 text-sm  font-jetbrains-mono font-semibold tracking-[0.1em] text-blue-500">
              {s.brand}
            </p>
            <h3 className="mt-2  font-fraunces text-2xl font-semibold text-[#171A21]">{s.title}</h3>
            <p className="mt-2 text-md font-inter leading-relaxed text-[#171A21CC]">{s.desc}</p>
            <div className="mt-6">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${s.brand} website`}
                className="rounded-full bg-[#3B82F6] px-5 py-4 text-xs font-medium text-[#F8F6F2] font-inter hover:bg-blue-600 transition"
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