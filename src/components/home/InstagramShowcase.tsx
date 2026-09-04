import React from 'react';
import Instagram from '../shared/InstagramIcon';
import { motion } from 'framer-motion';

import img1 from '../../assets/Image 1.jpeg';
import img2 from '../../assets/image 2.jpeg';
import img3 from '../../assets/image 3.jpeg';
import img4 from '../../assets/image 4.jpeg';
import img5 from '../../assets/image 5.jpeg';
import img6 from '../../assets/image 6.jpeg';

const instaImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const InstagramShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Social</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">
            More Designs on <span className="text-brand-text-secondary italic">Instagram</span>
          </h2>
          <a 
            href="https://instagram.com/nana_mehendi_designs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="font-medium tracking-wide">@nana_mehendi_designs</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instaImages.map((img, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/nana_mehendi_designs"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group block rounded-sm"
            >
              <img 
                src={img} 
                alt="Instagram Mehendi Post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
