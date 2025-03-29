
import { useEffect, useRef, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    position: 'CEO, TechInnovate Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    rating: 5,
    quote:
      'Partnering with Smmart Business Consulting was a game-changer for our company. Their strategic insights and tailored solutions helped us navigate a challenging market transition and achieve 40% growth within a year. Highly recommended!',
  },
  {
    id: 2,
    name: 'Priya Patel',
    position: 'Founder, EcoGreen Ventures',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    rating: 5,
    quote:
      'As a startup founder, I needed guidance on scaling my business sustainably. The Smmart team provided exceptional support, from market analysis to operational strategy. Their expertise was invaluable to our success.',
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    position: 'CFO, GlobalTrade Industries',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
    rating: 5,
    quote:
      'Smmart delivered beyond our expectations. Their financial advisory services helped us optimize our cash flow and identify key investment opportunities. Their team's professionalism and attention to detail are truly exceptional.',
  },
  {
    id: 4,
    name: 'Ananya Singh',
    position: 'Director, Horizon Healthcare',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3',
    rating: 5,
    quote:
      'In the complex healthcare sector, finding consultants who understand our unique challenges is difficult. Smmart not only understood our needs but provided actionable strategies that improved our service delivery and patient satisfaction.',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section ref={sectionRef} className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="fade-in-section text-lg opacity-90 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform and grow.
          </p>
        </div>

        <div className="fade-in-section relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-8 md:p-10">
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="flex mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-smmart-gold fill-smmart-gold" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-light mb-6 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">{testimonials[activeIndex].name}</div>
                  <div className="opacity-80 text-sm">{testimonials[activeIndex].position}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-smmart-gold w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white text-smmart-blue p-2 rounded-full shadow-lg hover:bg-smmart-gold transition-colors md:block hidden"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white text-smmart-blue p-2 rounded-full shadow-lg hover:bg-smmart-gold transition-colors md:block hidden"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
