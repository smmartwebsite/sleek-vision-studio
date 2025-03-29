
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Retail Chain Expansion Strategy',
    category: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1581097543550-5e73d24dae79?ixlib=rb-4.0.3',
    description:
      'Helped a retail chain expand to 15 new locations with a data-driven market analysis and strategic growth plan.',
    result: '42% revenue increase within the first year.',
    link: '/case-studies/retail-chain-expansion',
  },
  {
    id: 2,
    title: 'Tech Startup Financial Restructuring',
    category: 'Financial Advisory',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3',
    description:
      'Restructured finances for a struggling tech startup, optimizing cash flow and securing new investment.',
    result: 'Achieved profitability within 6 months.',
    link: '/case-studies/tech-startup-restructuring',
  },
  {
    id: 3,
    title: 'Manufacturing Process Optimization',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1565343976898-4099c7f2e4fb?ixlib=rb-4.0.3',
    description:
      'Redesigned production workflows for a manufacturing company to reduce waste and improve efficiency.',
    result: '30% reduction in operational costs.',
    link: '/case-studies/manufacturing-optimization',
  },
];

const CaseStudiesSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-smmart-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold text-smmart-blue mb-4">
            Success Stories
          </h2>
          <p className="fade-in-section text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped businesses across industries overcome challenges and achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className="fade-in-section bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-smmart-blue text-white py-1 px-3 rounded-full text-sm">
                  {study.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-smmart-blue mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="mb-4 py-2 px-3 bg-green-50 border-l-4 border-green-500 text-green-800">
                  <span className="font-medium">Result:</span> {study.result}
                </div>
                <Link 
                  to={study.link}
                  className="text-smmart-blue font-medium hover:text-smmart-blue-light flex items-center transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-section text-center mt-10">
          <Button asChild className="btn-primary">
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
