
import React, { useEffect, useRef } from 'react';
import { Check, Heart, Lightbulb, Shield, Gem, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and ethical standards in all our client relationships.',
    icon: Shield,
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in our work, constantly raising the bar for ourselves and the industry.',
    icon: Gem,
  },
  {
    title: 'Innovation',
    description: 'We embrace creative thinking and cutting-edge approaches to solve complex business challenges.',
    icon: Lightbulb,
  },
  {
    title: 'Client Focus',
    description: 'We put our clients' needs first, developing customized solutions that address their unique situations.',
    icon: Heart,
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both within our organization and with our clients.',
    icon: Users,
  },
  {
    title: 'Accountability',
    description: 'We take responsibility for our recommendations and stand behind our work with measurable results.',
    icon: Check,
  },
];

const ValuesSection = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-smmart-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold mb-6 text-smmart-blue">
            Our Core Values
          </h2>
          <p className="fade-in-section text-lg text-gray-700 max-w-3xl mx-auto">
            These principles guide everything we do, from how we serve our clients to how we grow our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="fade-in-section border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-smmart-blue/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-smmart-blue" size={24} />
                </div>
                <CardTitle className="text-xl text-smmart-blue">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
