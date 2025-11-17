import React from 'react';

const Trusted = () => {
  return (
    <section className="bg-[#EBEFEE] py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm h-80 flex items-center justify-center">
          <div className="h-52 w-4/5 rounded-xl bg-[#F6F2EE]" />
        </div>
        <div className="md:col-span-6">
          <div className="text-sm tracking-wide text-[#4A413C]/80 flex items-center gap-2">
            <span className="inline-block h-[1px] w-8 bg-[#CCB499]" />
            Trusted Beauty Partner
          </div>
          <h3 className="mt-3 font-serif text-3xl text-[#4A413C]">Quality, safety, comfort</h3>
          <p className="mt-4 text-[#4A413C]/80">
            Our studio is meticulously maintained for a serene experience. We use
            premium products and uphold the highest standards of care.
          </p>
          <ul className="mt-6 space-y-3 text-[#4A413C]/90">
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#CCB499]" /> Delicate, skin-kind techniques</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#CCB499]" /> Hygienic, professional environment</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#CCB499]" /> Comfort-first approach</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trusted;