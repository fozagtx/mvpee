
import React from 'react';
import { Header } from '@/components/ui/header';
import { MainHero } from '@/components/sections/MainHero';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <Header />
      <MainHero />
    </div>
  );
};

export default Index;
