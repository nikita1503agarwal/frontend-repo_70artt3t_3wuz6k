import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Amelia',
    text: 'The most serene experience. My skin feels refreshed and I love the subtle, feminine result.',
  },
  {
    name: 'Sofia',
    text: 'Warm, gentle, and so professional. The space feels like calm luxury.',
  },
  {
    name: 'Isabella',
    text: 'Beautiful results and such care throughout. Truly boutique, truly premium.',
  },
  {
    name: 'Mia',
    text: 'From booking to treatment, everything is effortless and elegant.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visible = testimonials.slice(index, index + 3);

  const next = () => setIndex((prev) => (prev + 1) % (testimonials.length - 2));
  const prev = () => setIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));

  return (
    <section className="bg-[#F3F5F4] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-3xl text-[#4A413C]">What clients say</h3>
            <p className="mt-2 text-[#4A413C]/70">Calm, elegant, trustworthy</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} className="h-9 w-9 rounded-full border border-[#CCB499]/50 text-[#4A413C]">‹</button>
            <button onClick={next} className="h-9 w-9 rounded-full border border-[#CCB499]/50 text-[#4A413C]">›</button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="h-10 w-10 rounded-full bg-[#EBEFEE] border border-[#CCB499]/40" />
              <p className="mt-4 text-[#4A413C]/80">“{t.text}”</p>
              <div className="mt-4 text-sm font-medium text-[#4A413C]">{t.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#4A413C]' : 'bg-[#4A413C]/30'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;