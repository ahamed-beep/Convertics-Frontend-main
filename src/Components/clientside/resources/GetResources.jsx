// components/resources/GetFeatured.jsx

export default function GetResources() {
  return (
    <section aria-labelledby="featured-heading" className="px-6 py-20 text-center">
     <div className="text-center tracking-1 ">
<h1 className="font-fraunces italic text-[#171A21] text-4xl sm:text-6xl leading-tight">
  Recommended{" "}
  <span className="font-semibold  not-italic ">Tools & Platforms</span>
</h1>
        <p className="mx-auto mt-2 max-w-xl text-md text-[#171A21CC] font-inter leading-relaxed">
        Here are some of the tools and platforms we recommend for business growth, marketing, and operations. Each tool is selected based on usability, performance, and real-world value
        </p>
        <p className="mt-3 text-sm text-[#171A21] font-inter">
          We're always open to{" "}
          <span className="text-[#3B82F6]">collaborations and new opportunities.</span>
        </p>
      </div>

    </section>
  );
}