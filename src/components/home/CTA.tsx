import React from 'react';
import { Link } from 'react-scroll';
import WhatsAppButton from '../shared/WhatsAppButton';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden flex items-center justify-center">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto border border-white/5 bg-brand-elevated/30 backdrop-blur-md p-12 md:p-20 rounded-sm shadow-2xl"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
            Your Hands Deserve <br />
            <span className="text-gradient italic">A Beautiful Story.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-10 font-light">
            Book your Mehendi design or order our natural organic cones today. Experience the premium quality of Nathivadhani N.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton text="Book on WhatsApp" className="w-full sm:w-auto px-10 py-4 text-lg" />
            <Link
              to="designs"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all cursor-pointer font-medium text-lg"
            >
              Explore Designs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
