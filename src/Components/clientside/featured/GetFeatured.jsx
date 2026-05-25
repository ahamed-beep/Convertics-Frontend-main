// components/featured/GetFeatured.jsx

export default function GetFeatured() {
  return (
    <section aria-labelledby="featured-heading" className= " px-5 md:px-6 pt-20 pb-10  md:py-20 text-center">
      <h2
        id="featured-heading"
        className=" font-fraunces font-semibold  text-5xl  sm:text-6xl text-[#171A21]"
      >
        Get Featured on{" "}
        <em className="italic font-normal">Convertica</em>
      </h2>
      <p className="mx-auto mt-2  text-md text-[#171A21CC] leading-relaxed">
    Promote your product, platform, or service to an audience interested in business growth, marketing, and technology.
      </p>
    <p className="mt-3 text-sm text-[#171A21] font-inter">
          We're always open to{" "}
          <span className="text-[#3B82F6]">collaborations and new opportunities.</span>
        </p>

              <hr className="w-full mt-10 md:mt-22 px-6 border-[#171A21]" />
    </section>
  );
}