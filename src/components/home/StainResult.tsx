import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import applicationImg from '../../assets/Application.png';
import initialImg from '../../assets/Initial.png';
import finalImg from '../../assets/Final Dark Stain.png';

const StainResult: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Quality</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            See the <span className="text-gradient italic">Difference.</span>
          </h2>
          <p className="text-brand-text-secondary leading-relaxed font-light text-lg">
            Our natural Mehendi cones are carefully prepared to deliver a beautiful, deep stain when properly applied and cared for. Experience the rich color that only pure nature can provide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full text-center"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 border border-white/10 relative">
              <img 
                src={applicationImg} 
                alt="Mehendi Application" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>
            <h4 className="font-serif text-lg text-white">1. Application</h4>
            <p className="text-sm text-brand-text-muted">Fresh, smooth paste applied.</p>
          </motion.div>

          <ArrowRight className="text-brand-text-muted hidden md:block rotate-90 md:rotate-0" size={32} />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full text-center"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 border border-white/10 relative">
              <img 
                src={initialImg} 
                alt="Initial Color" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/10" />
            </div>
            <h4 className="font-serif text-lg text-white">2. Initial Color</h4>
            <p className="text-sm text-brand-text-muted">Bright orange tone after removal.</p>
          </motion.div>

          <ArrowRight className="text-brand-text-muted hidden md:block rotate-90 md:rotate-0" size={32} />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 w-full text-center"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 border border-primary/40 relative">
              <img 
                src={finalImg} 
                alt="Final Dark Stain" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            <h4 className="font-serif text-lg text-primary">3. Final Stain</h4>
            <p className="text-sm text-brand-text-muted">Rich, dark maroon color after 48h.</p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-text-secondary mb-6">Check our Instagram for real designs and stain results.</p>
          <a 
            href="https://instagram.com/nana_mehendi_designs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/5 transition-all cursor-pointer font-medium"
          >
            View Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default StainResult;
