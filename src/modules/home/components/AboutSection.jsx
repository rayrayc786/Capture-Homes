import React from 'react';

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-2xl relative group">
            <img 
              src={data.image} 
              alt="About Curator" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 bg-primary px-8 py-12 text-on-primary hidden md:block z-10 translate-x-[-15%]">
            <span className="text-xs tracking-[0.3em] font-bold block mb-4 uppercase">{data.since}</span>
            <p className="text-2xl font-light italic leading-tight">
              "{data.quote.split('<br/>').join('\n')}"
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          <span className="text-primary font-bold tracking-widest text-xs uppercase underline underline-offset-8 decoration-2">{data.eyebrow}</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-on-surface">
            {data.title}
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-body">
            {data.description}
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-4">
            {data.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black mb-2 text-on-surface">{stat.value}</div>
                <div className="text-xs tracking-widest text-primary uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
