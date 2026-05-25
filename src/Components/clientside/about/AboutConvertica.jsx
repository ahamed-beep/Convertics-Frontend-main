// components/about/AboutConvertica.jsx

import Stats from "@/Components/reuseableui/Stats";
import Ticker from "@/Components/reuseableui/Ticker";

export default function AboutConvertica() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto  pb-20 pt-13  md:py-20 text-center"
    >
        <div className="px-6 mb-6 md:mb-15 " >

      
      <h1
        id="about-heading"
        className="font-serif text-4xl sm:text-6xl text-[#171A21]"
      >
        <em className="italic font-fraunces">About</em>{" "}
        <span className="font-semibold font-fraunces ">Convertica</span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-sm md:text-md text-[#171A21CC] font-inter leading-relaxed">
        Convertica is a content platform focused on helping businesses, marketers, and
        professionals make smarter decisions through clear and practical insights. We cover
        tools, platforms, and strategies across business, marketing, technology, and design
        — with a focus on real-world usability, not just theory.
      </p>

      <p className="mx-auto mt-4 max-w-3xl  text-sm md:text-md text-[#171A21CC] font-inter leading-relaxed">
        Our content is designed to simplify complex tools, highlight key benefits, and guide
        you toward solutions that support your growth. Whether you're choosing a CRM,
        exploring hosting platforms, or understanding industry trends, our goal is to provide
        clarity so you can move forward with confidence.
      </p>

      <div className="mt-10 overflow-hidden rounded-lg">
        <img
          src="/Images/about/about.webp"
          alt="Convertica editorial team working together"
          loading="lazy"
          decoding="async"
          width={1280}
          height={720}
          className="w-full h-full object-cover"
        />
      </div>
      <Stats/>
        </div>
        <Ticker/>
    </section>
  );
}