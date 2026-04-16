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
      <EditorialSection data={editorial} />
      <Pricing data={pricing} />
      <CTA data={cta} />
      
      {/* Footer Minimalist */}
      <footer className="py-20 bg-on-background text-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded" />
            <span className="font-display font-black text-lg uppercase tracking-tighter">Capture Homes</span>
          </div>
          <div className="flex gap-12 font-label text-sm uppercase tracking-widest text-background/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
          <p className="text-xs font-label text-background/30 text-right">
            © 2026 CAPTURE HOMES STUDIO. ALL ARCHITECTURAL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default HomeView;
