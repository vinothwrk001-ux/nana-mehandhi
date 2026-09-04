import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import bridalImg from '../../assets/Bridal.png';
import arabicImg from '../../assets/Arabic.png';
import traditionalImg from '../../assets/Traditional.png';
import minimalImg from '../../assets/Minimal.png';
import modernImg from '../../assets/Modern.png';

const categories = [
  { name: 'Bridal', image: bridalImg, colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { name: 'Arabic', image: arabicImg, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { name: 'Traditional', image: traditionalImg, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { name: 'Minimal', image: minimalImg, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { name: 'Modern', image: modernImg, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
];

const DesignGallery: React.FC = () => {
  return (
    <section id="designs" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Selection of <br className="hidden md:block" />
              <span className="text-brand-text-secondary italic">Beautiful Artworks.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="https://instagram.com/nana_mehendi_designs" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-medium tracking-wide border-b border-white/20 hover:border-primary pb-1">
              View Instagram <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-sm cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <img 
                src={item.image} 
                alt={`${item.name} Mehendi Design`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="text-white font-serif text-2xl mb-1">{item.name}</h3>
                  <p className="text-primary/0 group-hover:text-primary transition-colors duration-500 text-sm flex items-center gap-2">
                    View Design <ArrowRight size={14} />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
