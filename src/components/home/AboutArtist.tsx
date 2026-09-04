import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/About .jpeg';

const AboutArtist: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-brand-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 rounded-sm" />
              <img 
                src={aboutImage} 
                alt="Mehendi Artist Nathivadhani N" 
                className="w-full h-full object-cover rounded-sm relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-elevated border border-white/10 p-6 z-20 backdrop-blur-md hidden md:block">
                <p className="font-serif text-2xl text-gradient mb-1">3</p>
                <p className="text-xs text-brand-text-muted uppercase tracking-widest">Years of Artistry</p>
              </div>
            </div>
          </motion.div>
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-4">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">The Artist</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Crafted With Passion, <br />
              <span className="text-brand-text-secondary italic">Created With Tradition.</span>
            </h2>
            
            <div className="space-y-6 text-brand-text-secondary leading-relaxed font-light">
              <p>
                Hello, I am <strong className="text-white font-medium">Nathivadhani N</strong>, a professional Mehendi artist based in Kaundampalayam, Coimbatore. My journey is rooted in a deep love for traditional Indian artistry and a commitment to modern elegance.
              </p>
              <p>
                I believe that Mehendi is more than just a temporary tattoo—it is a beautiful tradition that tells a story. That is why I exclusively use 100% natural, chemical-free organic cones that I personally prepare. This ensures not only a rich, dark, and long-lasting stain but also complete safety for your skin.
              </p>
              <p>
                Whether it is your wedding day or a festive celebration, my goal is to provide a premium, relaxing experience while creating intricate designs tailored precisely to your vision.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-brand-elevated flex items-center justify-center overflow-hidden border border-white/5">
                <span className="font-serif text-2xl text-gradient">N</span>
              </div>
              <div>
                <p className="text-white font-serif text-xl tracking-wide">Nathivadhani N</p>
                <p className="text-brand-text-muted text-sm">Founder & Lead Artist</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutArtist;
