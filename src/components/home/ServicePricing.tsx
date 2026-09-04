import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Sparkles, Heart, PartyPopper, Flower2, Baby } from 'lucide-react';
import WhatsAppButton from '../shared/WhatsAppButton';

const categories = [
  { id: 'normal', name: 'Normal Mehendi', icon: <Flower2 size={20} /> },
  { id: 'bridal', name: 'Bridal Packages', icon: <Crown size={20} /> },
  { id: 'bridesmaid', name: 'Bridesmaid Packages', icon: <Sparkles size={20} /> },
  { id: 'babyshower', name: 'Baby Shower Packages', icon: <Baby size={20} /> },
  { id: 'engagement', name: 'Engagement Packages', icon: <Heart size={20} /> },
  { id: 'puberty', name: 'Puberty Packages', icon: <PartyPopper size={20} /> },
];

const normalMehendiList = [
  { title: 'Palm Length', price: '₹400', detail: '(₹200 per hand)' },
  { title: 'Wrist Length', price: '₹600', detail: '(₹300 per hand)' },
  { title: 'Bangle Length', price: '₹800', detail: '(₹400 per hand)' },
  { title: 'Half Hand', price: '₹1000', detail: '(₹500 per hand)' },
  { title: '3/4 Hand', price: '₹1300', detail: '(₹650 per hand)' },
  { title: 'Full Hand', price: '₹1500', detail: '(₹750 per hand)' },
];

const renderPackageCard = (title: string, elbowPrice: string, aboveElbowPrice: string, customText: string, extraNote: string = 'Both Hands (Front & Back) & Both Legs') => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-brand-elevated border border-white/5 p-6 rounded-sm hover:border-primary/30 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-serif text-white">Elbow Length</h4>
        <span className="text-primary font-medium text-xl">{elbowPrice}</span>
      </div>
      <p className="text-brand-text-secondary text-sm mb-6">{extraNote}</p>
      <WhatsAppButton 
        variant="outline" 
        text="Book Package" 
        message={`Hi, I would like to book the ${title} (Elbow Length) for ${elbowPrice}.`} 
        className="w-full py-2.5 text-sm"
      />
    </div>
    <div className="bg-brand-elevated border border-primary/20 p-6 rounded-sm relative shadow-[0_0_20px_rgba(240,90,145,0.05)] hover:border-primary/50 transition-colors">
      <div className="absolute top-0 right-4 -translate-y-1/2 bg-gradient-brand text-white text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase rounded-sm">Premium</div>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-serif text-primary">Above Elbow Length</h4>
        <span className="text-primary font-medium text-xl">{aboveElbowPrice}</span>
      </div>
      <p className="text-brand-text-secondary text-sm mb-6">{extraNote}</p>
      <WhatsAppButton 
        variant="solid" 
        text="Book Premium Package" 
        message={`Hi, I would like to book the ${title} (Above Elbow Length) for ${aboveElbowPrice}.`} 
        className="w-full py-2.5 text-sm"
      />
    </div>
    <div className="md:col-span-2 bg-brand-dark border border-white/5 p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h4 className="text-lg font-serif text-white mb-2">Customised {title.split(' ')[0]}</h4>
        <p className="text-brand-text-muted text-sm">{customText}</p>
      </div>
      <WhatsAppButton 
        variant="outline" 
        text="Enquire Custom Design" 
        message={`Hi, I would like to enquire about a customised ${title}.`} 
        className="shrink-0 text-sm py-2"
      />
    </div>
  </div>
);

const ServicePricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bridal');

  return (
    <section id="pricing" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Pricing & Packages</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Detailed Packages <br />
            <span className="text-brand-text-secondary italic">For Every Occasion.</span>
          </h2>
          <p className="text-brand-text-muted text-sm bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">
            🚗 Travelling Charges are applicable based on your location.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-sm text-left transition-all duration-300 border ${
                  activeTab === cat.id 
                    ? 'bg-brand-elevated border-primary/30 text-white shadow-[0_0_15px_rgba(240,90,145,0.05)]' 
                    : 'bg-transparent border-transparent text-brand-text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={`${activeTab === cat.id ? 'text-primary' : ''}`}>
                  {cat.icon}
                </div>
                <span className="font-medium tracking-wide">{cat.name}</span>
                {activeTab === cat.id && (
                  <motion.div layoutId="activeTabIndicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {activeTab === 'normal' && (
                <motion.div
                  key="normal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Normal Mehendi Price List</h3>
                  <p className="text-brand-text-muted text-sm mb-8">* Note: Back Side applies the same rate.</p>
                  
                  <div className="space-y-4">
                    {normalMehendiList.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-brand-elevated border border-white/5 rounded-sm hover:border-white/20 transition-colors">
                        <div>
                          <h4 className="text-lg font-medium text-white">{item.title}</h4>
                          <span className="text-sm text-brand-text-muted">{item.detail}</span>
                        </div>
                        <div className="mt-3 sm:mt-0 flex items-center gap-6">
                          <span className="text-primary font-medium text-lg">{item.price}</span>
                          <WhatsAppButton 
                            variant="outline" 
                            text="Book" 
                            message={`Hi, I would like to book a Normal Mehendi design for ${item.title} length.`} 
                            className="px-4 py-1.5 text-sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'bridal' && (
                <motion.div
                  key="bridal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Bridal Packages</h3>
                  {renderPackageCard(
                    'Bridal Package', 
                    '₹4000', 
                    '₹5000', 
                    'Based on customisation. Examples: Elephant/Peacock, Bride/Groom Figures, God Figures, Names & Dates, Marriage Elements.'
                  )}
                </motion.div>
              )}

              {activeTab === 'bridesmaid' && (
                <motion.div
                  key="bridesmaid"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Bridesmaid Packages</h3>
                  {renderPackageCard(
                    'Bridesmaid Package', 
                    '₹3500', 
                    '₹4500', 
                    'Based on customisation. Examples: Elephant/Peacock, God Figures, Names & Dates, Wedding Words.'
                  )}
                </motion.div>
              )}

              {activeTab === 'babyshower' && (
                <motion.div
                  key="babyshower"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Baby Shower Packages</h3>
                  {renderPackageCard(
                    'Baby Shower Package', 
                    '₹3500', 
                    '₹4000', 
                    'Examples: Boy/Girl Figures, Parents, Baby Shower Elements, Elephant/Peacock, God Figures.',
                    'Both Hands (Front & Back)'
                  )}
                  <div className="mt-6 bg-brand-elevated border border-white/5 p-6 rounded-sm flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-serif text-white mb-1">Simple Leg Design</h4>
                      <p className="text-primary font-medium text-lg">₹400</p>
                    </div>
                    <WhatsAppButton 
                      variant="outline" 
                      text="Book Legs" 
                      message="Hi, I would like to book a Simple Leg Design for Baby Shower." 
                      className="px-4 py-2 text-sm"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 'engagement' && (
                <motion.div
                  key="engagement"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Engagement Packages</h3>
                  {renderPackageCard(
                    'Engagement Package', 
                    '₹3500', 
                    '₹4500', 
                    'Based on customisation. Examples: Elephant/Peacock, God Figures, Names & Dates, Wedding Words.'
                  )}
                </motion.div>
              )}

              {activeTab === 'puberty' && (
                <motion.div
                  key="puberty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Puberty Packages</h3>
                  {renderPackageCard(
                    'Puberty Package', 
                    '₹3000', 
                    '₹4000', 
                    'Based on customisation. Examples: Elephant/Peacock, God Figures, Names & Dates, Special Wordings.'
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicePricing;
