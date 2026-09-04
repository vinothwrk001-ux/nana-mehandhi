import React from 'react';
import { Leaf, Droplets, HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: <Leaf className="text-primary" size={24} />,
    title: '100% Natural',
    description: 'Chemical-Free Cones',
  },
  {
    icon: <Droplets className="text-secondary" size={24} />,
    title: 'Rich Dark Stain',
    description: 'Premium Quality',
  },
  {
    icon: <HeartHandshake className="text-primary" size={24} />,
    title: 'Custom Designs',
    description: 'Made With Care',
  },
  {
    icon: <MapPin className="text-secondary" size={24} />,
    title: 'Coimbatore',
    description: 'Local Service',
  },
];

const TrustHighlights: React.FC = () => {
  return (
    <section className="py-12 bg-brand-dark border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 bg-brand-black p-3 rounded-full border border-white/5">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-white mb-1">{item.title}</h3>
              <p className="text-brand-text-muted text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
