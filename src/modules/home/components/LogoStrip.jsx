import React from 'react';

const LogoStrip = ({ data }) => {
  // Multiply the data to ensure smooth infinite loop and full coverage on wide screens
  const marqueeData = [...data, ...data, ...data, ...data];



  return (
    <section className="bg-surface-container-low py-16 overflow-hidden border-y border-on-surface/5">
      <div className="flex animate-marquee gap-16 items-center opacity-30 grayscale contrast-125">
        {marqueeData.map((logo, idx) => (
          <span key={idx} className="text-2xl font-black tracking-tighter hover:opacity-100 transition-opacity cursor-default whitespace-nowrap px-8">

            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};


export default LogoStrip;
