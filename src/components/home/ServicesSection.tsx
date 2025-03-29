
import { useEffect, useRef } from 'react';
import { TrendingUp, BarChart, Briefcase, Search, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Business Strategy',
    description:
      'Develop comprehensive business strategies aligned with your vision and goals for sustainable growth.',
    icon: TrendingUp,
    link: '/services/business-strategy',
  },
  {
    id: 2,
    title: 'Market Research',
    description:
      'Gain valuable insights into market trends, customer behavior, and competitive landscapes.',
    icon: Search,
    link: '/services/market-research',
  },
  {
    id: 3,
    title: 'Financial Advisory',
    description:
      'Expert financial planning, analysis, and management to optimize your business finances.',
    icon: BarChart,
    link: '/services/financial-advisory',
  },
  {
    id: 4,
    title: 'Operations Optimization',
    description:
      'Streamline operations, enhance efficiency, and reduce costs while maintaining quality.',
    icon: Settings,
    link: '/services/operations-optimization',
  },
  {
    id: 5,
    title: 'Leadership Development',
    description:
      'Cultivate strong leadership skills and build high-performing teams within your organization.',
    icon: Users,
    link: '/services/leadership-development',
  },
  {
    id: 6,
    title: 'Business Transformation',
    description:
      'Guide your business through change and transformation to adapt to evolving markets.',
    icon: Briefcase,
    link: '/services/business-transformation',
  },
];

const ServicesSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold text-smmart-blue mb-4">
            Our Services
          </h2>
          <p className="fade-in-section text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive business consulting services to help your organization achieve its goals and thrive in today's competitive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="fade-in-section bg-smmart-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-smmart-blue/10 p-3 rounded-full w-fit mb-4">
                <service.icon className="text-smmart-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-smmart-blue mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <Link 
                to={service.link}
                className="text-smmart-blue font-medium hover:text-smmart-blue-light flex items-center transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="fade-in-section text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
