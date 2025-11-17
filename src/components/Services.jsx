import React from 'react';

const services = [
  { title: 'Permanent Makeup' },
  { title: 'Nail Services' },
  { title: 'Hair Removal' },
  { title: 'Facial Treatments' },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#EBEFEE] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h3 className="font-serif text-3xl text-[#4A413C]">Top Services</h3>
          <p className="mt-2 text-[#4A413C]/70">Curated treatments for a soft, radiant look</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="mx-auto h-28 w-28 rounded-full bg-[#EBEFEE] border border-[#CCB499]/40 flex items-center justify-center shadow-inner">
                <div className="h-16 w-16 rounded-full bg-gradient-to-b from-white to-[#F6F2EE]" />
              </div>
              <h4 className="mt-6 text-center font-medium text-[#4A413C]">{s.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;