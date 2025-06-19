
import React, { useState, useEffect, useRef } from 'react';
import { Palette, Monitor, Megaphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Visual systems that speak your language"
  },
  {
    icon: Monitor,
    title: "Digital Experiences",
    description: "Interfaces that feel intuitive and alive"
  },
  {
    icon: Megaphone,
    title: "Creative Strategy",
    description: "Ideas that cut through the noise"
  },
  {
    icon: Zap,
    title: "Art Direction",
    description: "Vision that guides every detail"
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 
            className={`font-grotesk font-black text-4xl md:text-6xl tracking-tighter mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            WHAT WE DO
          </h2>
          <p 
            className={`font-neue text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We don't just create. We transform ideas into experiences that resonate, 
            inspire, and drive meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const rotation = Math.sin((scrollY * 0.001) + (index * 0.5)) * 5;
            
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-grotesk font-bold text-xl mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="font-neue text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
