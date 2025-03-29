
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import MissionSection from '@/components/about/MissionSection';
import HistorySection from '@/components/about/HistorySection';
import ValuesSection from '@/components/about/ValuesSection';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Smmart Business Consulting';
    
    // Smooth scroll to section if hash is present in the URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <div id="mission">
          <MissionSection />
        </div>
        <div id="values">
          <ValuesSection />
        </div>
        <div id="history">
          <HistorySection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
