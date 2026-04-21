import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = ({ data }) => {
  const root = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".process-item", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        x: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
        clearProps: "all"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="py-32 px-6 md:px-24 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-32">
          <span className="text-primary font-bold tracking-widest text-xs uppercase underline underline-offset-8 decoration-2">
            METHODOLOGY
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mt-4 text-on-surface">
            The Architecture of Experience
          </h2>
        </div>

        {/* Connection Line (Desktop) */}
        <div className="absolute left-1/2 top-48 bottom-0 w-px bg-outline-variant hidden md:block -translate-x-1/2 z-0 overflow-hidden">
          <div className="process-line w-full h-full animate-pan-y"></div>
        </div>

        <div className="relative z-10 space-y-24 md:space-y-0">
          {data.map((step, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div key={step.number} className={`process-item flex flex-col md:flex-row items-center justify-between group ${idx !== 0 ? 'md:pt-32' : ''}`}>
                {/* Left Side (Number for Odd, Content for Even) */}
                <div className={`md:w-5/12 ${isEven ? 'order-3 md:order-1' : 'text-right hidden md:block order-1'}`}>
                  {isEven ? (
                    <div className="bg-surface p-8 whisper-shadow transition-all duration-500 group-hover:-translate-y-2 border-l-2 border-primary md:border-r-2 md:border-l-0 text-left md:text-right">
                      <span className="md:hidden text-4xl font-black text-primary opacity-30 mb-2 block">{step.number}</span>
                      <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase text-on-surface">{step.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed text-sm">{step.description}</p>
                    </div>
                  ) : (
                    <span className="text-[120px] font-black text-surface-container transition-colors group-hover:text-primary opacity-50 block leading-none select-none">
                      {step.number}
                    </span>
                  )}
                </div>

                {/* Center Circle */}
                <div className="md:w-1/12 flex justify-center order-2 relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-surface z-10 transition-transform group-hover:scale-150"></div>
                </div>

                {/* Right Side (Content for Odd, Number for Even) */}
                <div className={`md:w-5/12 ${isEven ? 'hidden md:block order-3' : 'order-3 bg-surface p-8 whisper-shadow transition-all duration-500 group-hover:-translate-y-2 border-l-2 border-primary md:border-l-0'}`}>
                  {isEven ? (
                    <span className="text-[120px] font-black text-surface-container transition-colors group-hover:text-primary opacity-50 block leading-none select-none">
                      {step.number}
                    </span>
                  ) : (
                    <>
                      <span className="md:hidden text-4xl font-black text-primary opacity-30 mb-2 block">{step.number}</span>
                      <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase text-on-surface">{step.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed text-sm">{step.description}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
