import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#EBEFEE]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#EBEFEE]/60 via-[#EBEFEE]/70 to-[#EBEFEE] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm tracking-wide text-[#4A413C]/80">
            <span className="inline-block h-[1px] w-8 bg-[#CCB499]" />
            Luxe Beauty
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif text-[#4A413C] leading-tight">
            Enhance Your Natural Beauty
          </h1>
          <p className="mt-4 text-[#4A413C]/80 text-base sm:text-lg max-w-xl">
            Experience soft, elegant, professional aesthetic care tailored to you.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-[#4A413C] px-6 py-3 text-white shadow-lg shadow-[#4A413C]/20 hover:shadow-xl transition">
              Book an Appointment
            </a>
            <div className="hidden sm:flex items-center gap-2 text-[#4A413C]/80">
              <span className="h-8 w-8 rounded-full bg-[#CCB499]/20 border border-[#CCB499]/40 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#CCB499]" />
              </span>
              <span className="text-sm">Premium · Gentle · Serene</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5" />
      </div>

      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-[#CCB499]/20 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10%] bottom-10 h-64 w-64 rounded-full bg-white/50 blur-3xl" />
    </section>
  );
};

export default Hero;