import React from 'react';
import { Link } from 'react-scroll';
import { Phone, MapPin } from 'lucide-react';
import Instagram from '../shared/InstagramIcon';
import logoImage from '../../assets/Logo.jpeg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 md:pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black overflow-hidden relative">
                <img src={logoImage} alt="Mehendi Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
              Crafting beautiful Mehendi with nature, tradition & creativity. Premium artist based in Coimbatore.
            </p>
            <div className="flex gap-4 text-brand-text-secondary">
              <a href="https://instagram.com/nana_mehendi_designs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="tel:+917395870780" className="hover:text-primary transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              {['Home', 'About', 'Designs', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase()} 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    className="hover:text-primary transition-colors cursor-pointer inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6 font-serif">Services</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              {['Bridal Mehendi', 'Engagement', 'Festival Designs', 'Organic Cones'].map((item) => (
                <li key={item}>
                  <span className="hover:text-primary transition-colors cursor-pointer inline-block">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 font-serif">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand-text-secondary" />
                <span>Kaundampalayam, <br />Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0 text-brand-text-secondary" />
                <a href="tel:+917395870780" className="hover:text-primary transition-colors">+91 7395870780</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted">
          <p>© {currentYear} Nana Mehendi Designs. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
