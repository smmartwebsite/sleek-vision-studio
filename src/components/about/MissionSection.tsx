
import React, { useEffect, useRef } from 'react';
import { Target } from 'lucide-react';

const MissionSection = () => {
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
    <section id="mission" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-smmart-blue/10 p-1 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target size={32} className="text-smmart-blue" />
            </div>
            <h2 className="fade-in-section text-3xl md:text-4xl font-bold mb-6 text-smmart-blue">
              Our Mission
            </h2>
            <div className="fade-in-section space-y-4 text-gray-700">
              <p>
                At Smmart, we are on a mission to empower businesses across India with the strategic insights, 
                innovative solutions, and operational excellence they need to thrive in today's competitive landscape.
              </p>
              <p>
                We believe that every business, regardless of size or industry, deserves access to world-class 
                consulting services that can transform challenges into opportunities and vision into reality.
              </p>
              <p>
                Through collaborative partnerships, data-driven approaches, and a deep understanding of the 
                Indian market, we aim to be catalysts for sustainable growth and lasting success for our clients.
              </p>
            </div>
          </div>
          <div className="fade-in-section">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team working together at a conference table" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
