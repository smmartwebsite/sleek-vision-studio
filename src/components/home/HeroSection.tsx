
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      const elements = currentHeroRef.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentHeroRef) {
        const elements = currentHeroRef.querySelectorAll('.fade-in-section');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-smmart-blue">
        <div className="absolute inset-0 bg-gradient-to-r from-smmart-blue via-smmart-blue-light to-smmart-blue opacity-90"></div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="fade-in-section text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Strategic Solutions for <span className="text-smmart-gold">Business Growth</span>
            </h1>
            <p className="fade-in-section text-lg md:text-xl mb-8 opacity-90 delay-100">
              Empowering businesses with innovative strategies and expert consulting to achieve sustainable growth and success in today's competitive landscape.
            </p>
            <div className="fade-in-section flex flex-col sm:flex-row gap-4 delay-200">
              <Button asChild className="btn-accent">
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl fade-in-section delay-300">
              <h3 className="text-xl font-bold text-white mb-4">Request a Callback</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md placeholder-white/70 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md placeholder-white/70 text-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md placeholder-white/70 text-white"
                  />
                </div>
                <Button className="w-full bg-smmart-gold text-smmart-blue hover:bg-opacity-90">
                  Request Callback
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
