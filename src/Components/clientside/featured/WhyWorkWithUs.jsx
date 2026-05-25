// components/featured/WhyWorkWithUs.jsx

export default function WhyWorkWithUs() {
  return (
    <section aria-labelledby="why-heading" className="mx-auto  pb-12 text-center">
        <div className=" px-4  md:px-6" >

  
      <h2
        id="why-heading"
        className=" font-fraunces font-bold text-4xl sm:text-6xl text-[#171A21]"
      >
        Why Work <em className="italic font-normal">With Us</em>
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-md  font-inter text-gray-600 leading-relaxed">
 We focus on clear, value-driven content that helps readers understand your product and take action. Our goal is to connect your platform with the right audience in a simple and effective way.
      </p>
            </div>
      <div className="mt-10 md:px-10 overflow-hidden rounded-lg">
        <img
          src="/Images/featured/featured.webp"
          alt="Convertica team collaborating on content strategy"
          loading="lazy"
          decoding="async"
          width={1000}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}