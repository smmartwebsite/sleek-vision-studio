
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
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

  const benefits = [
    'Experienced team of business consultants',
    'Tailored solutions for your unique challenges',
    'Data-driven approach to strategic planning',
    'Proven track record of success with diverse clients',
    'Ongoing support throughout implementation',
    'Regular performance monitoring and adjustments',
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-smmart-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="fade-in-section text-3xl md:text-4xl font-bold text-smmart-blue mb-4">
              About Smmart Business Consulting
            </h2>
            <p className="fade-in-section text-lg text-gray-600 mb-6">
              At Smmart, we are dedicated to helping businesses of all sizes navigate the complexities of today's business landscape and achieve sustainable growth. With years of industry experience and a team of skilled consultants, we provide strategic solutions tailored to your unique challenges and goals.
            </p>
            <p className="fade-in-section text-lg text-gray-600 mb-8">
              Our mission is to empower businesses through innovative strategies, actionable insights, and dedicated support to reach their full potential and thrive in competitive markets.
            </p>
            <div className="fade-in-section mb-8">
              <h3 className="text-xl font-bold text-smmart-blue mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-smmart-gold mr-2 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button asChild className="fade-in-section btn-primary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="fade-in-section relative">
            <div className="bg-white rounded-lg p-6 shadow-lg relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-smmart-blue mb-2">15+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-smmart-blue mb-2">200+</h3>
                  <p className="text-gray-600">Clients Served</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-smmart-blue mb-2">95%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-smmart-blue mb-2">50+</h3>
                  <p className="text-gray-600">Industry Experts</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-smmart-gold rounded-lg -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
