import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureGrid = ({ data }) => {
  const root = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 md:py-40 bg-surface-container/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="font-label font-bold text-primary tracking-widest uppercase text-xs">
            {data.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl mt-4 font-display font-extrabold max-w-xl">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.items.map((item, idx) => (
            <div 
              key={item.id} 
              className="feature-card group flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-2xl bg-surface-container-high">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.05] group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-4">
                  <span className="text-sm font-label text-primary/40">0{idx + 1}</span>
                  {item.title}
                </h3>
                <p className="text-on-background/60 font-body leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
