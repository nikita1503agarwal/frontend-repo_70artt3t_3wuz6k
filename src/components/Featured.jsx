import React from 'react';

const Featured = () => {
  return (
    <section className="bg-[#EBEFEE] py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 grid grid-cols-6 grid-rows-6 gap-3">
          <div className="col-span-6 row-span-3 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
            <div className="h-28 w-3/4 rounded-lg bg-[#F6F2EE]" />
          </div>
          <div className="col-span-3 row-span-2 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
            <div className="h-20 w-3/4 rounded-lg bg-[#F6F2EE]" />
          </div>
          <div className="col-span-3 row-span-2 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
            <div className="h-20 w-3/4 rounded-lg bg-[#F6F2EE]" />
          </div>
          <div className="col-span-2 row-span-1 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
            <div className="h-12 w-2/3 rounded-lg bg-[#F6F2EE]" />
          </div>
          <div className="col-span-2 row-span-1 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
            <div className="h-12 w-2/3 rounded-lg bg-[#F6F2EE]" />
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="text-sm tracking-wide text-[#4A413C]/80 flex items-center gap-2">
            <span className="inline-block h-[1px] w-8 bg-[#CCB499]" />
            Our Philosophy
          </div>
          <h3 className="mt-3 font-serif text-3xl text-[#4A413C]">Premium care, gentle treatments</h3>
          <p className="mt-4 text-[#4A413C]/80">
            We blend modern technique with soft, feminine artistry to create a
            calm, luxurious experience. Each treatment is thoughtfully tailored
            to your unique beauty, with delicate precision and soothing touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;