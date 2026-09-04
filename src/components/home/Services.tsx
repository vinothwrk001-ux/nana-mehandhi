import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, PartyPopper, Flower2, Heart, Palette } from 'lucide-react';
import WhatsAppButton from '../shared/WhatsAppButton';

const services = [
  {
    icon: <Crown className="text-primary" size={28} />,
    title: 'Bridal Mehendi',
    description: 'Intricate, full-hand traditional or modern bridal designs for your special day.',
  },
  {
    icon: <Heart className="text-secondary" size={28} />,
    title: 'Engagement Mehendi',
    description: 'Elegant and detailed patterns perfect for pre-wedding celebrations.',
  },
  {
    icon: <PartyPopper className="text-primary" size={28} />,
    title: 'Festival Mehendi',
    description: 'Beautiful traditional designs for Diwali, Eid, Karwa Chauth, and more.',
  },
  {
    icon: <Flower2 className="text-secondary" size={28} />,
    title: 'Traditional Mehendi',
    description: 'Classic Indian motifs including paisleys, mandalas, and floral patterns.',
  },
  {
    icon: <Sparkles className="text-primary" size={28} />,
    title: 'Arabic Mehendi',
    description: 'Bold, flowing vine-like patterns with elegant spacing and shading.',
  },
  {
    icon: <Palette className="text-secondary" size={28} />,
    title: 'Custom Designs',
    description: 'Personalized designs incorporating your unique story or elements.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black border-y border-white/5 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Services Tailored <br />
            <span className="text-brand-text-secondary italic">For Your Special Occasion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-brand-elevated border border-white/5 p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 rounded-sm"
            >
              <div className="mb-6 p-4 bg-brand-dark inline-block rounded-full border border-white/5 group-hover:glow-primary transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
              <p className="text-brand-text-muted mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <WhatsAppButton 
                variant="outline" 
                text="Enquire Now" 
                message={`Hi, I would like to enquire about ${service.title}.`}
                className="w-full text-sm py-2.5 border-white/10 hover:border-primary"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
