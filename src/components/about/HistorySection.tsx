
import React, { useEffect, useRef } from 'react';

const milestones = [
  {
    year: '2010',
    title: 'Founded in Mumbai',
    description: 'Smmart was established with a vision to transform how businesses across India approach growth and strategy.',
  },
  {
    year: '2013',
    title: 'Expanded to Delhi and Bangalore',
    description: 'Following early success, Smmart opened new offices to better serve clients across the country.',
  },
  {
    year: '2016',
    title: 'Launched Digital Transformation Division',
    description: 'Recognizing the growing importance of technology, we created a specialized practice area.',
  },
  {
    year: '2019',
    title: 'Introduced Sustainability Consulting',
    description: 'We began helping businesses integrate environmental and social responsibility into their operations.',
  },
  {
    year: '2022',
    title: 'Named Top Consulting Firm in India',
    description: 'Recognized for our client impact and innovative approaches by Business Today magazine.',
  },
];

const HistorySection = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold mb-6 text-smmart-blue">
            Our Journey
          </h2>
          <p className="fade-in-section text-lg text-gray-700 max-w-3xl mx-auto">
            From our humble beginnings to becoming one of India's leading business consulting firms.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-smmart-blue/20"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`fade-in-section relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-smmart-gold text-smmart-blue text-sm font-bold py-1 px-3 rounded-full inline-block mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-smmart-blue mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-smmart-blue z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
