import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import WhatsAppButton from '../shared/WhatsAppButton';
import logoImage from '../../assets/Logo.jpeg';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Designs', to: 'designs' },
  { name: 'Products', to: 'products' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3 z-50">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-black overflow-hidden relative shadow-lg">
              <img src={logoImage} alt="Mehendi Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-brand-text-secondary hover:text-white hover:text-primary transition-colors cursor-pointer text-sm tracking-wide"
                  activeClass="text-primary font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <WhatsAppButton text="Book on WhatsApp" className="text-sm px-5 py-2.5" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Extracted to prevent backdrop-blur containing block bug */}
      <div 
        className={`fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-brand-text-secondary hover:text-primary transition-colors cursor-pointer"
            activeClass="text-primary"
          >
            {link.name}
          </Link>
        ))}
        <div className="mt-8">
          <WhatsAppButton text="Book on WhatsApp" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
