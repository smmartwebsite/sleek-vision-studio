
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const AboutHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      const elements = currentSectionRef.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentSectionRef) {
        const elements = currentSectionRef.querySelectorAll('.fade-in-section');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-16 md:py-32 bg-gradient-to-r from-smmart-blue to-smmart-blue-light text-white"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="fade-in-section text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Smmart
          </h1>
          <p className="fade-in-section text-xl opacity-90 mb-8">
            We are a team of strategic thinkers, market analysts, and industry specialists dedicated to transforming businesses across India.
          </p>
          <div className="fade-in-section">
            <Button className="btn-accent text-lg px-8 py-6" asChild>
              <a href="#mission">Our Mission</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
