import React from 'react';
import Button from '../../../components/common/Button';

const CTA = ({ data }) => {
  return (
    <section className="py-24 md:py-40 bg-on-background text-background overflow-hidden relative border-t border-white/5">
      {/* Background Decorative Graphic */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[60px] border-primary/5 rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8">
              {data.title}
            </h2>
            <p className="text-lg md:text-xl text-background/60 font-body font-light">
              {data.subtitle}
            </p>
          </div>
          
          <div className="shrink-0">
            <Button variant="primary" className="!px-12 !py-6 text-base shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              {data.buttonText}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 opacity-10 flex gap-4">
        <div className="w-12 h-1 bg-primary" />
        <div className="w-4 h-1 bg-primary" />
        <div className="w-2 h-1 bg-primary" />
      </div>
    </section>
  );
};

export default CTA;
