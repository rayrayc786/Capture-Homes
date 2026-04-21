import React from 'react';
import Navbar from '../../../components/common/Navbar';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import FeatureGrid from '../components/FeatureGrid';
import AboutSection from '../components/AboutSection';
import ProcessTimeline from '../components/ProcessTimeline';
import ArtifactsGallery from '../components/ArtifactsGallery';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import EditorialSection from '../components/EditorialSection';
import CTA from '../components/CTA';
import Advantages from '../components/Advantages';
import { useHomeViewModel } from '../viewModel/useHomeViewModel';

const HomeView = () => {
  const { 
    hero, logoStrip, features, about, process, 
    artifacts, pricing, testimonials, editorial, cta 
  } = useHomeViewModel();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={hero} />
      <LogoStrip data={logoStrip} />
      <FeatureGrid data={features} />
      <AboutSection data={about} />
      <ProcessTimeline data={process} />
      <ArtifactsGallery data={artifacts} />
      <Testimonials data={testimonials} />
      <Advantages />
      <EditorialSection data={editorial} />
      <Pricing data={pricing} />
      <CTA data={cta} />
      
      {/* Footer Minimalist */}
      <footer id="contact" className="py-24 bg-on-background text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-display font-black text-on-primary">C</div>
                <span className="font-display font-black text-2xl uppercase tracking-tighter">Capture Homes</span>
              </div>
              <p className="text-background/50 max-w-sm font-body leading-relaxed">
                Elevating real estate visuals across Auckland. Professional photography, videography, and digital staging for the modern agent.
              </p>
            </div>
            
            <div>
              <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] mb-8 text-primary">Inquiries</h4>
              <div className="flex flex-col gap-4 font-body text-sm underline underline-offset-4 decoration-background/20 hover:decoration-primary transition-all">
                <a href="mailto:Capturehomes.info@gmail.com" className="hover:text-primary transition-colors">Capturehomes.info@gmail.com</a>
                <a href="mailto:capturehomes.services@gmail.com" className="hover:text-primary transition-colors">capturehomes.services@gmail.com</a>
              </div>
            </div>

            <div>
              <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] mb-8 text-primary">Connect</h4>
              <div className="flex flex-col gap-4 font-body text-sm">
                <a href="tel:+64277683662" className="hover:text-primary transition-colors">+64 27 768 3662</a>
                <div className="flex gap-6 mt-2 opacity-50">
                  <a href="#" className="hover:text-primary transition-colors uppercase text-[10px] tracking-widest font-bold">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase text-[10px] tracking-widest font-bold">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8 font-label text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
            <p className="text-[10px] font-label font-bold uppercase tracking-[0.3em] opacity-20">
              © 2026 CAPTURE HOMES STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomeView;
