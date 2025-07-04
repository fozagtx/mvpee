
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/ui/header';
import Hero from '@/components/sections/Hero';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-white text-black font-neue overflow-x-hidden">
      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-orange-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cursor Follower */}
      <div 
        className="fixed w-1 h-1 bg-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />

      <Header />
      <Hero />
      <ProjectShowcase />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
