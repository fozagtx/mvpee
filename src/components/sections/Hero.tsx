
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Main Headline */}
        <div className="mb-12">
          <h1 
            className={`font-grotesk font-black text-5xl md:text-7xl lg:text-9xl leading-[0.85] tracking-tighter transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            I BUILD COOL
            <br />
            <span 
              className="relative inline-block cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              STUFF
              <div 
                className={`absolute bottom-0 left-0 h-1 bg-orange-500 transition-all duration-500 ease-out ${
                  isHovered ? 'w-full' : 'w-0'
                }`}
              />
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p 
          className={`font-neue text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          I build cool stuff for fun.
        </p>

        {/* CTA Button */}
        <div 
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <Button 
            size="lg"
            className="group bg-black text-white hover:bg-orange-500 px-12 py-6 text-lg font-grotesk font-bold tracking-wider transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              START PROJECT
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;
