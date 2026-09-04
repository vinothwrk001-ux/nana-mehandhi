import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import WhatsAppButton from '../shared/WhatsAppButton';
import heroImg from '../../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black z-10" />
        <img 
          src={heroImg} 
          alt="" 
          className="w-full h-full object-cover opacity-60 text-transparent"
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.2em] text-brand-text-secondary uppercase">
              Premium Henna Artist
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6">
            Where Tradition <br />
            <span className="text-gradient italic pr-2">Meets Beautiful Art.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Handcrafted Mehendi designs made with natural, chemical-free organic cones for a rich, beautiful stain.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <WhatsAppButton text="Book Your Mehendi" className="w-full sm:w-auto" />
            <Link
              to="designs"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all cursor-pointer font-medium"
            >
              Explore Designs
            </Link>
          </div>
          
          {/* Trust Statement */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-brand-text-muted tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
              100% Natural
            </span>
            <span className="hidden sm:block text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary/70"></span>
              Chemical-Free
            </span>
            <span className="hidden sm:block text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
              Rich Dark Stain
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
