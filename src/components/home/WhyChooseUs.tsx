import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Leaf, Clock, Heart, Award } from 'lucide-react';

const features = [
  { icon: <Leaf size={24} />, title: '100% Natural Ingredients' },
  { icon: <ShieldCheck size={24} />, title: 'Chemical-Free' },
  { icon: <Sparkles size={24} />, title: 'Dark & Rich Stain' },
  { icon: <Clock size={24} />, title: 'Fresh Organic Cones' },
  { icon: <Heart size={24} />, title: 'Carefully Prepared' },
  { icon: <Award size={24} />, title: 'Trusted Local Service' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
              Why Choose <br />
              <span className="text-brand-text-secondary italic">Our Mehendi?</span>
            </h2>
            <p className="text-brand-text-secondary mb-8">
              We never compromise on quality. Every cone is freshly prepared using premium ingredients to ensure a beautiful, safe, and long-lasting stain.
            </p>
          </motion.div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 border border-white/5 bg-brand-dark/50 hover:bg-brand-elevated transition-colors rounded-sm group"
              >
                <div className="text-brand-text-muted group-hover:text-primary transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">{feature.title}</h4>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
