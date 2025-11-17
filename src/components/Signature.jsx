import React from 'react';

const items = [
  {
    title: 'Silk Brow Design',
    desc: 'Feather-light definition for naturally full, feminine brows.',
  },
  {
    title: 'Glow Facial Ritual',
    desc: 'A soothing treatment for refined texture and radiant calm.',
  },
  {
    title: 'Velvet Manicure',
    desc: 'Soft-touch finish with clean, minimalist artistry.',
  },
];

const Signature = () => {
  return (
    <section className="bg-[#EBEFEE] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h3 className="font-serif text-3xl text-[#4A413C]">Signature Treatments</h3>
          <p className="mt-2 text-[#4A413C]/70">Our most-loved services</p>
        </div>
        <div className="mt-10 space-y-5">
          {items.map((i, idx) => (
            <div key={idx} className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-12 items-center">
                <div className="md:col-span-3 h-40 md:h-32 bg-[#F6F2EE]" />
                <div className="md:col-span-9 p-6">
                  <div className="h-[1px] w-10 bg-[#CCB499]" />
                  <h4 className="mt-3 text-xl text-[#4A413C]">{i.title}</h4>
                  <p className="mt-1 text-[#4A413C]/80">{i.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;