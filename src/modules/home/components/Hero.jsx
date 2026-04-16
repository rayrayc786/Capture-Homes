import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Button from '../../../components/common/Button';

const Hero = ({ data }) => {
  const root = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: 0.5
      })
      .from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 1
      }, "-=0.8")
      .from(buttonsRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8
      }, "-=0.5");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Abstract Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="overflow-hidden mb-6">
          <span className="hero-line inline-block font-label font-bold text-primary tracking-[0.3em] uppercase text-xs md:text-sm">
            {data.eyebrow}
          </span>
        </div>
        
        <h1 ref={titleRef} className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold max-w-5xl mx-auto leading-[1.1] mb-8">
          <span className="hero-line block">{data.title.split(' ').slice(0, 3).join(' ')}</span>
          <span className="hero-line block text-outline-text italic font-normal text-transparent stroke-primary" style={{ WebkitTextStroke: '1px var(--color-on-background)' }}>
             {data.title.split(' ').slice(3).join(' ')}
          </span>
        </h1>

        <p ref={descRef} className="text-lg md:text-xl text-on-background/60 max-w-2xl mx-auto mb-12 font-body font-light leading-relaxed">
          {data.description}
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" className="group flex items-center gap-2 min-w-[200px]">
            {data.cta}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" className="group flex items-center gap-2 min-w-[200px]">
            {data.secondaryCta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Hero Visual Accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
