
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-smmart-blue text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-in-section flex justify-center mb-6">
            <div className="bg-white/20 p-3 rounded-full">
              <Mail size={28} className="text-smmart-gold" />
            </div>
          </div>
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="fade-in-section text-lg opacity-90 mb-8">
            Stay updated with the latest business insights, industry trends, and exclusive content delivered directly to your inbox.
          </p>
          <form className="fade-in-section flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-smmart-gold"
              required
            />
            <Button className="bg-smmart-gold text-smmart-blue hover:bg-opacity-90 whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
          <p className="fade-in-section text-sm opacity-70 mt-4">
            By subscribing, you agree to our Privacy Policy. We promise not to spam your inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
