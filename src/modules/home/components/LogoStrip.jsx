import React from 'react';

const LogoStrip = ({ data }) => {
  return (
    <section className="bg-surface-container-low py-16 px-12 overflow-hidden border-y border-on-surface/5">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale contrast-125">
        {data.map((logo, idx) => (
          <span key={idx} className="text-2xl font-black tracking-tighter hover:opacity-100 transition-opacity cursor-default">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;
