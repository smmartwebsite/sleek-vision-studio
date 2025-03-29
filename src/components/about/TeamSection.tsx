
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Vikram Malhotra',
    position: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'With over 20 years of experience in strategy consulting, Vikram founded Smmart to bring world-class business solutions to the Indian market.',
    linkedin: '#',
    twitter: '#',
    email: 'vikram@smmart.co.in',
  },
  {
    name: 'Priya Sharma',
    position: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Priya leads our strategic consulting practice, helping clients identify growth opportunities and develop actionable roadmaps.',
    linkedin: '#',
    twitter: '#',
    email: 'priya@smmart.co.in',
  },
  {
    name: 'Arjun Patel',
    position: 'Head of Digital Transformation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Arjun specializes in helping traditional businesses leverage technology to improve operations and customer experience.',
    linkedin: '#',
    twitter: '#',
    email: 'arjun@smmart.co.in',
  },
  {
    name: 'Nisha Mehta',
    position: 'Director of Financial Advisory',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'With a background in investment banking, Nisha guides our clients through financial strategy, fundraising, and M&A.',
    linkedin: '#',
    twitter: '#',
    email: 'nisha@smmart.co.in',
  },
];

const TeamSection = () => {
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
            Meet Our Leadership Team
          </h2>
          <p className="fade-in-section text-lg text-gray-700 max-w-3xl mx-auto">
            The experienced professionals guiding our work and shaping our culture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="fade-in-section">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-smmart-blue mb-1">{member.name}</h3>
                  <p className="text-smmart-gold font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      className="text-smmart-blue hover:text-smmart-gold transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="text-smmart-blue hover:text-smmart-gold transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-smmart-blue hover:text-smmart-gold transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
