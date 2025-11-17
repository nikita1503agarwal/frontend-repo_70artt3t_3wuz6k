import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="bg-[#EBEFEE] py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="font-serif text-2xl text-[#4A413C]">Book Your Visit</h3>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input placeholder="First Name" className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <input placeholder="Last Name" className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <input type="email" placeholder="Email" className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <input type="tel" placeholder="Phone" className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <select className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50">
              <option>Choose Service</option>
              <option>Permanent Makeup</option>
              <option>Nail Services</option>
              <option>Hair Removal</option>
              <option>Facial Treatments</option>
            </select>
            <input type="date" className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <input type="time" className="rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <textarea placeholder="Message" className="sm:col-span-2 min-h-[120px] rounded-lg border border-[#CCB499]/40 bg-[#F9FAF9] px-4 py-3 text-[#4A413C] outline-none focus:ring-2 focus:ring-[#CCB499]/50" />
            <button className="sm:col-span-2 mt-2 inline-flex justify-center rounded-full bg-[#4A413C] px-6 py-3 text-white shadow-lg shadow-[#4A413C]/20">Send Request</button>
          </form>
        </div>
        <div className="md:col-span-6">
          <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm h-[520px] flex items-center justify-center">
            <div className="h-[420px] w-3/4 rounded-xl bg-[#F6F2EE]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;