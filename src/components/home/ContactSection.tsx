
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
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
        <div className="text-center mb-12">
          <h2 className="fade-in-section text-3xl md:text-4xl font-bold text-smmart-blue mb-4">
            Let's Discuss Your Business Needs
          </h2>
          <p className="fade-in-section text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact us today for a consultation with our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in-section rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 md:p-8 bg-smmart-blue text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 text-smmart-gold" size={20} />
                  <div>
                    <p className="font-medium">Our Office</p>
                    <p className="opacity-80">123 Business Avenue, Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 text-smmart-gold" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+911234567890" 
                      className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 text-smmart-gold" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:info@smmart.co.in" 
                      className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                    >
                      info@smmart.co.in
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="opacity-80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="opacity-80">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="opacity-80">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="fade-in-section rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 md:p-8 bg-white">
              <h3 className="text-2xl font-bold text-smmart-blue mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smmart-blue"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smmart-blue"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smmart-blue"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smmart-blue"
                    placeholder="Message Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smmart-blue"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
