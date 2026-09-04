
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import TrustHighlights from './components/home/TrustHighlights';
import AboutArtist from './components/home/AboutArtist';
import DesignGallery from './components/home/DesignGallery';
import Services from './components/home/Services';
import ServicePricing from './components/home/ServicePricing';
import Products from './components/home/Products';
import WhyChooseUs from './components/home/WhyChooseUs';
import StainResult from './components/home/StainResult';
import InstagramShowcase from './components/home/InstagramShowcase';
import CTA from './components/home/CTA';
import Contact from './components/home/Contact';
import WhatsAppButton from './components/shared/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <TrustHighlights />
        <AboutArtist />
        <DesignGallery />
        <Services />
        <ServicePricing />
        <Products />
        <WhyChooseUs />
        <StainResult />
        <InstagramShowcase />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
      
      <WhatsAppButton variant="floating" />
    </div>
  );
}

export default App;
