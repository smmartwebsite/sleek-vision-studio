
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ContactSection from '@/components/home/ContactSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  useEffect(() => {
    document.title = 'Smmart Business Consulting | Strategic Solutions for Business Growth';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
