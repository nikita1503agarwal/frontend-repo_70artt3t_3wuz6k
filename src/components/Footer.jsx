import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4A413C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl font-serif">Luxe Beauty</div>
          <p className="mt-3 text-white/80">Soft, feminine, premium care in a serene studio. Gentle radiance, tailored to you.</p>
        </div>
        <div>
          <div className="text-sm tracking-wide text-[#CCB499]">Contact</div>
          <ul className="mt-3 space-y-2 text-white/85">
            <li>hello@luxebeauty.studio</li>
            <li>(555) 123-4567</li>
            <li>123 Serenity Ave, Suite 5</li>
          </ul>
        </div>
        <div>
          <div className="text-sm tracking-wide text-[#CCB499]">Hours</div>
          <ul className="mt-3 space-y-2 text-white/85">
            <li>Mon–Fri: 9am – 7pm</li>
            <li>Sat: 10am – 6pm</li>
            <li>Sun: By appointment</li>
          </ul>
        </div>
        <div>
          <div className="text-sm tracking-wide text-[#CCB499]">Quick Links</div>
          <ul className="mt-3 space-y-2 text-white/85">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-sm text-white/70">
          <div>© {new Date().getFullYear()} Luxe Beauty. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="h-6 w-6 rounded-full bg-[#CCB499]/30" />
            <span className="h-6 w-6 rounded-full bg-[#CCB499]/30" />
            <span className="h-6 w-6 rounded-full bg-[#CCB499]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;