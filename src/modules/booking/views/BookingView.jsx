import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/common/Navbar';
import { ChevronLeft } from 'lucide-react';

const BookingView = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMessage = (event) => {
      if (typeof event.data === 'string') {
        const args = event.data.split(':');
        if (args.length > 2 && args[0] === 'setHeight') {
          const iframe = document.getElementById('JotFormIFrame-252603933683057');
          if (iframe) {
            iframe.style.height = args[1] + 'px';
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-20 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-10 md:mb-16">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary font-label font-bold text-[10px] uppercase tracking-[0.3em] hover:gap-4 transition-all mb-6 md:mb-10"
              >
                <ChevronLeft size={14} />
                Back to Home
              </Link>
              
              <h1 className="font-display font-black text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-4 text-on-background leading-none">
                Elevate Your <span className="text-primary italic">Media</span>
              </h1>
              <p className="text-on-background/50 font-body text-sm md:text-lg max-w-2xl leading-relaxed italic">
                Schedule your professional session with Auckland's premier real estate photography studio.
              </p>
            </div>

            {/* Form Outer Container */}
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white min-h-[600px]">
                
                {/* Form Progress/Safe Label */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-gray-50 bg-white">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                    <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                    <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  </div>
                  <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface/40 flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgb(34,197,94)]"></div>
                    Secure Booking Channel
                  </span>
                </div>

                {/* Loading Placeholder */}
                {isLoading && (
                  <div className="absolute inset-0 z-50 flex items-center justify-center bg-white py-60">
                    <div className="flex flex-col items-center gap-6">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"></div>
                      </div>
                      <p className="font-label text-xs uppercase tracking-[0.4em] font-bold opacity-30 animate-pulse text-primary">Initializing Studio Access</p>
                    </div>
                  </div>
                )}

                <iframe
                  id="JotFormIFrame-252603933683057"
                  title="Capture Homes Booking Form"
                  onLoad={() => {
                    setIsLoading(false);
                    window.parent.scrollTo(0,0);
                  }}
                  allowTransparency="true"
                  allowFullScreen={true}
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/252603933683057"
                  frameBorder="0"
                  style={{
                    minWidth: '100%',
                    height: '800px', 
                    border: 'none',
                    backgroundColor: 'transparent',
                    visibility: isLoading ? 'hidden' : 'visible',
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                  scrolling="no"
                />
              </div>
            </div>

            {/* Support Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-t border-outline-variant/20 opacity-80">
              <div className="space-y-4">
                <h4 className="font-label font-bold text-xs uppercase tracking-[0.3em] text-primary">Creative Concierge</h4>
                <p className="text-on-background/60 text-sm leading-relaxed font-body">
                  Need a bespoke package or have complex requirements? Reach out to our team directly: <br/>
                  <a href="mailto:Capturehomes.info@gmail.com" className="text-primary hover:underline underline-offset-8 transition-all">Capturehomes.info@gmail.com</a>
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-label font-bold text-xs uppercase tracking-[0.3em] text-primary">Confirmation Timeline</h4>
                <p className="text-on-background/60 text-sm leading-relaxed font-body">
                  Once your session is logged, a Studio Producer will finalize your time slot and send a secure confirmation link within 2-4 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 bg-on-background text-background mt-auto">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center font-display font-black text-on-primary text-xs shadow-lg shadow-primary/20">C</div>
            <span className="font-display font-black text-lg uppercase tracking-tighter">Capture Homes</span>
          </div>
          <p className="text-[10px] font-label font-bold uppercase tracking-[0.4em] opacity-30">
            © 2026 CAPTURE HOMES DIGITAL STUDIO. AUCKLAND, NZ.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BookingView;
