import React from 'react';

const Testimonials = ({ data }) => {
  return (
    <section className="py-24 md:py-40 bg-on-background text-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="flex justify-center mb-12">
          <span className="text-6xl text-primary font-serif">“</span>
        </div>
        
        {data.map((item, idx) => (
          <div key={idx} className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display font-medium leading-tight mb-16 italic tracking-tight">
              "{item.quote}"
            </blockquote>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                <img src={item.avatar} alt={item.author} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-lg uppercase tracking-wider">{item.author}</div>
                <div className="text-primary text-xs font-label font-bold tracking-[0.2em] mt-1">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-display font-black text-white/[0.03] select-none pointer-events-none">
        “
      </div>
    </section>
  );
};

export default Testimonials;
