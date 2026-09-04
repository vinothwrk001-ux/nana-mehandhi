import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import Instagram from '../shared/InstagramIcon';
import WhatsAppButton from '../shared/WhatsAppButton';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Let's Create <br />
              <span className="text-brand-text-secondary italic">Something Beautiful.</span>
            </h2>
            <p className="text-brand-text-secondary mb-10 text-lg font-light max-w-md">
              Whether you are looking to book a bridal Mehendi appointment or order our organic cones, we're just a message away.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-elevated border border-white/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-brand-text-muted">Kaundampalayam, Coimbatore<br />Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-elevated border border-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone / WhatsApp</h4>
                  <p className="text-brand-text-muted">+91 7395870780</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-elevated border border-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Instagram className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Instagram</h4>
                  <p className="text-brand-text-muted">@nana_mehendi_designs</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-brand-black border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-serif text-white mb-8">Quick Connect</h3>
              
              <div className="space-y-6 relative z-10">
                <WhatsAppButton text="Chat on WhatsApp" className="w-full justify-center py-3 md:py-4 text-sm md:text-base" />
                
                <a 
                  href="tel:+917395870780"
                  className="w-full flex items-center justify-center gap-2 border border-white/20 text-white px-4 md:px-6 py-3 md:py-4 rounded-full hover:bg-white/5 transition-all font-medium text-sm md:text-base"
                >
                  <Phone size={20} />
                  Call Us Directly
                </a>
                
                <a 
                  href="https://instagram.com/nana_mehendi_designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-white/20 text-white px-4 md:px-6 py-3 md:py-4 rounded-full hover:bg-white/5 transition-all font-medium text-sm md:text-base"
                >
                  <Instagram size={20} />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
