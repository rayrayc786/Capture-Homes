import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import Button from '../../../components/common/Button';
import gsap from 'gsap';

const Pricing = ({ data }) => {
  const root = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={root} className="py-32 px-6 md:px-24 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-primary font-bold tracking-widest text-xs uppercase underline underline-offset-8 decoration-2 mb-6 block">
              INVESTMENT
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4 italic text-on-surface">
              {data.title}
            </h2>
            <p className="text-on-surface-variant text-lg max-w-lg">
              Choose a level of visual storytelling that matches your property's architectural legacy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant rounded-2xl overflow-hidden bg-surface-container shadow-2xl">
          {data.plans.map((plan, idx) => (
            <div 
              key={plan.id} 
              className={`p-12 border-b md:border-b-0 ${idx !== 2 ? 'md:border-r' : ''} border-outline-variant hover:bg-outline-variant/10 transition-all duration-500 group pricing-card`}
            >
              <div className="flex justify-between items-start mb-16">
                <div className="text-left">
                  <span className="text-xs font-bold text-on-surface-variant opacity-50 tracking-[0.2em] mb-2 block uppercase">
                    {plan.tier}
                  </span>
                  <h3 className="text-3xl font-black tracking-tighter group-hover:text-primary transition-colors text-on-surface">
                    {plan.name}
                  </h3>
                </div>
              </div>

              <div className="mb-12 text-left">
                <span className="text-5xl font-black tracking-tighter text-on-surface">{plan.price}</span>
                <p className="text-on-surface-variant text-sm mt-4 font-body">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-16">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-xs text-on-surface font-medium uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                to="/book-now"
                variant={plan.isPopular ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.buttonText || 'Begin Journey'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
