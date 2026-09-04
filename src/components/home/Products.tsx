import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '../shared/WhatsAppButton';
import productImg from '../../assets/Product.jpeg';

const normalCones = [
  { weight: '15 Grams', price: '₹30' },
  { weight: '20 Grams', price: '₹40' },
  { weight: '25 Grams', price: '₹50' },
  { weight: '30 Grams', price: '₹60' },
];

const bridalCones = [
  { weight: '20 Grams', price: '₹50' },
  { weight: '25 Grams', price: '₹60' },
  { weight: '30 Grams', price: '₹70' },
];

const afterCareProducts = [
  { name: 'Eucalyptus Balm', price: '₹40', benefit: 'Enhances color depth' },
  { name: 'Tea Tree Balm', price: '₹50', benefit: 'Skin soothing & protection' },
  { name: 'Lavender Balm', price: '₹60', benefit: 'Calming aroma & dark stain' },
  { name: 'After Care Oil', price: '₹40', benefit: 'Seals & protects the design' },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Organic Cones Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Our Products</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Pure Ingredients. <br />
              <span className="text-brand-text-secondary italic">Beautiful Stain.</span>
            </h2>
            <p className="text-brand-text-secondary mb-8 leading-relaxed font-light text-lg">
              We use only organic cones that are 100% chemical-free, fully natural, and designed to give a dark, beautiful stain. Handcrafted with care for your special occasions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['100% Natural', 'Chemical-Free', 'Freshly Prepared', 'Dark Stain'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-brand-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <WhatsAppButton text="Order Cones" message="Hi, I would like to order organic Mehendi cones." />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-full border border-white/5 p-4 bg-brand-elevated">
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-105 pointer-events-none" />
              <img 
                src={productImg} 
                alt="Organic Mehendi Cones" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-brand-black/60 to-transparent rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Pricing Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif mb-4">Organic Mehendi Cones</h3>
            <p className="text-brand-text-muted">Freshly prepared, chemical-free cones.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16">
            {/* Normal Cones */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 max-w-md border border-white/10 bg-brand-black p-8 rounded-sm hover:border-white/20 transition-colors"
            >
              <h4 className="text-xl font-serif text-white mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                Normal Cones
                <Leaf size={20} className="text-brand-text-muted" />
              </h4>
              <ul className="space-y-4 mb-8">
                {normalCones.map((cone, i) => (
                  <li key={i} className="flex justify-between items-center text-brand-text-secondary">
                    <span>{cone.weight}</span>
                    <span className="font-medium text-white">{cone.price}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton 
                variant="outline" 
                text="Order Now" 
                message="Hi, I would like to order Normal Mehendi Cones." 
                className="w-full py-2.5"
              />
            </motion.div>
            
            {/* Bridal Cones */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/2 max-w-md border border-primary/40 bg-brand-elevated p-8 rounded-sm relative shadow-[0_0_30px_rgba(240,90,145,0.05)]"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-brand text-white text-xs font-bold px-3 py-1 tracking-wider uppercase rounded-sm">
                Recommended
              </div>
              <h4 className="text-xl font-serif text-primary mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                Bridal Cones
                <Leaf size={20} className="text-primary" />
              </h4>
              <ul className="space-y-4 mb-8">
                {bridalCones.map((cone, i) => (
                  <li key={i} className="flex justify-between items-center text-brand-text-secondary">
                    <span>{cone.weight}</span>
                    <span className="font-medium text-white">{cone.price}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton 
                variant="solid" 
                text="Order Now" 
                message="Hi, I would like to order Bridal Mehendi Cones." 
                className="w-full py-2.5"
              />
            </motion.div>
          </div>
        </div>

        {/* After Care Products */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif mb-4">Make Your Stain Last Longer.</h3>
            <p className="text-brand-text-muted">Premium skincare-style after-care products.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {afterCareProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-brand-black border border-white/5 p-6 hover:border-white/20 transition-all duration-300 rounded-sm text-center"
              >
                <div className="w-16 h-16 mx-auto bg-brand-elevated border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Leaf size={24} className="text-brand-text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-lg font-serif text-white mb-2">{product.name}</h4>
                <p className="text-sm text-brand-text-muted mb-4 h-10">{product.benefit}</p>
                <p className="text-xl font-medium text-primary mb-6">{product.price}</p>
                
                <WhatsAppButton 
                  variant="outline" 
                  text="Order" 
                  message={`Hi, I would like to order the ${product.name}.`}
                  className="w-full text-sm py-2"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
