import React from 'react';
import { ShieldCheck, Clock, Zap, MapPin, RefreshCcw, Camera, Eraser, DollarSign, Calendar } from 'lucide-react';

const advantages = [
  { icon: <ShieldCheck className="text-primary" />, title: "No Cancellation Fee", desc: "We understand plans can change; we won't charge you." },
  { icon: <MapPin className="text-primary" />, title: "No Travel Cost", desc: "Our services come to you without any additional fees." },
  { icon: <RefreshCcw className="text-primary" />, title: "Unlimited Changes", desc: "Your satisfaction is our absolute priority." },
  { icon: <Camera className="text-primary" />, title: "Free First Headshot", desc: "A professional portrait gift with your first booking." },
  { icon: <Eraser className="text-primary" />, title: "Free Decluttering", desc: "Complimentary services to present properties at their best." },
  { icon: <DollarSign className="text-primary" />, title: "No Hidden Costs", desc: "Transparent pricing with no surprises or hourly fees." },
  { icon: <Calendar className="text-primary" />, title: "No Reschedule Fee", desc: "Plans change, and we're flexible with your schedule." },
  { icon: <Zap className="text-primary" />, title: "No Weekend Charges", desc: "Consistent quality service without weekend surcharges." },
  { icon: <Clock className="text-primary" />, title: "Next Day Delivery", desc: "Fast turnaround to get your visuals live promptly." }
];

const Advantages = () => {
  return (
    <section className="py-24 bg-surface-container-highest/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Unbeatable Advantages</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-4 tracking-tighter">Why Choose Capture Homes?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {advantages.map((adv, idx) => (
            <div key={idx} className="flex gap-6 items-start group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-12 h-12 shrink-0 bg-surface-container rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {adv.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-on-surface">{adv.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
