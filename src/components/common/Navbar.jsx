import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { label: 'Home', href: '/', isHash: false },
    { label: 'Gallery', href: '/#gallery', isHash: true },
    { label: 'Price List', href: '/#pricing', isHash: true },
    { label: 'About Us', href: '/#about', isHash: true },
    { label: 'Book Now', href: '/book-now', isHash: false },
    { label: 'Contact Us', href: '/#contact', isHash: true }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl py-4 border-b border-outline-variant' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-display font-black text-on-primary group-hover:scale-110 transition-transform">
            C
          </div>
          <span className="font-display font-extrabold text-xl tracking-tighter uppercase whitespace-nowrap text-on-background">
            Capture Homes
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            item.isHash && location.pathname === '/' ? (
              <a 
                key={item.label} 
                href={item.href.replace('/', '')}
                className="text-xs font-label font-bold text-on-background/70 hover:text-primary transition-all tracking-widest uppercase"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label} 
                to={item.href}
                className={`text-xs font-label font-bold tracking-widest uppercase transition-all ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-on-background/70 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
          
          <div className="flex items-center gap-4 pl-6 border-l border-outline-variant">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button variant="primary" className="!px-6 !py-2.5 !text-xs">Inquire</Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface-container text-on-surface"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-on-background"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-40 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navLinks.map((item) => (
            <Link 
              key={item.label} 
              to={item.href}
              className={`text-3xl font-display font-black uppercase tracking-tighter transition-colors ${
                location.pathname === item.href ? 'text-primary' : 'hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" className="mt-8 w-full max-w-xs">Inquire Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
