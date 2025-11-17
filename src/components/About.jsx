import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#EBEFEE] py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="text-sm tracking-wide text-[#4A413C]/80 flex items-center gap-2">
            <span className="inline-block h-[1px] w-8 bg-[#CCB499]" />
            ABOUT US
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#4A413C]">Luxe Beauty</h2>
          <p className="mt-4 text-[#4A413C]/80">
            A serene beauty studio offering premium, feminine treatments designed
            to enhance your natural radiance. Our space is warm, airy, and
            thoughtfully curated for calm.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="h-px w-16 bg-[#CCB499]" />
          <p className="mt-5 text-[#4A413C]/80 leading-relaxed">
            Our mission is to provide soft, meticulous care that prioritizes
            your comfort and celebrates your individuality. With gentle
            techniques and professional expertise, we create a soothing
            experience rooted in safety, elegance, and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;