"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (

    <section className=" px-7 md:px-15 py-12">

      {/* Hero text */}
      <div className="text-center">
        <h1 className="font-fraunces text-[#171A21] font-semibold text-4xl sm:text-6xl">
          Contact <em className="italic font-fraunces font-thin">Us</em>
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-md text-[#171A21CC] font-inter leading-relaxed">
          If you have questions, partnership inquiries, or would like to feature your product or service on our platform, feel free to reach out.
        </p>
        <p className="mt-3 text-sm text-[#171A21] font-inter">
          We're always open to{" "}
          <span className="text-[#3B82F6]">collaborations and new opportunities.</span>
        </p>
      </div>

      <hr className="w-full my-10 px-6 border-[#171A21]" />

      {/* items-stretch — dono column barabar height */}
      <div className="mx-auto grid md:pt-15 gap-10 md:grid-cols-2 md:items-stretch">

        {/* Image — h-full so it fills column height */}
        <div className="overflow-hidden rounded-lg h-full">
          <img
            src="/Images/contact/contact.webp"
            alt="Convertica support agent ready to help"
            loading="lazy"
            decoding="async"
            width={600}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col">
          <h2 className="font-fraunces text-[#171A21] font-semibold text-3xl sm:text-4xl">
            Get <em className="italic font-fraunces font-thin">In</em>{" "}
            <span className="text-[#3B82F6]">Touch</span>
          </h2>

          {submitted ? (
            <div role="alert" className="mt-8 rounded-lg bg-blue-50 px-6 py-8 text-center">
              <p className="text-lg font-semibold text-blue-600">Message sent!</p>
              <p className="mt-2 text-sm text-gray-600">We'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 flex flex-col flex-1"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="NAME"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full  border border-[#171A2180] px-4 py-4 text-xs tracking-widest text-[#575E6B] font-semibold font-jetbrains-mono outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="EMAIL"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full  px-4 py-4 text-xs tracking-widest  outline-none text-[#575E6B] font-semibold focus:ring-2 border border-[#171A2180]  focus:ring-blue-400/20 transition"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full h-full min-h-[120px] resize-none  border border-[#171A2180] px-4 py-4 text-xs tracking-widest text-[#575E6B] font-jetbrains-mono  outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
                />
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="rounded-full bg-[#3B82F6] px-8 py-2.5 text-sm font-medium text-[#F8F6F2] hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}