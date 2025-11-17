import React from 'react';

const StatBar = () => {
  const stats = [
    { k: '100%', v: 'Client Satisfaction' },
    { k: '10+', v: 'Years Experience' },
    { k: '30+', v: 'Beauty Services' },
    { k: '24/7', v: 'Appointment Booking' },
  ];
  return (
    <section className="bg-[#4A413C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-semibold text-[#CCB499]">{s.k}</div>
            <div className="text-sm opacity-90 mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatBar;