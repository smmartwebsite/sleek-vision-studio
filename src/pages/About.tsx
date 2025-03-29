
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <HistorySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
