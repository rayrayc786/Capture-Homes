import { useState, useCallback } from 'react';
import { homeData } from '../data/homeData';

export const useHomeViewModel = () => {
  const [data] = useState(homeData);
  const [loading, setLoading] = useState(false);

  const handleCtaClick = useCallback(() => {
    console.log("Navigating to inquiry form...");
  }, []);

  return {
    hero: data.hero,
    features: data.features,
    process: data.process,
    pricing: data.pricing,
    testimonials: data.testimonials,
    cta: data.cta,
    logoStrip: data.logoStrip,
    about: data.about,
    artifacts: data.artifacts,
    editorial: data.editorial,
    loading,
    handleCtaClick
  };
};
