
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} 
        />
      </div>
      
      {/* Header */}
      <header className="relative z-20 flex justify-between items-center px-8 py-8">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        <nav className="flex items-center gap-12">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider">DISCOVER</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider">CAREERS</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors tracking-wider">MANIFESTO</a>
        </nav>
      </header>

      {/* Main Hero Section */}
      <section className="relative flex items-center justify-center min-h-[80vh] px-8">
        {/* Central Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-96 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-80 blur-sm" />
          <div className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-white to-transparent opacity-60" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-8">
            Where Millisecond
            <br />
            Means Revenue
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-20 tracking-wider uppercase leading-relaxed">
            Deliver fast digital experiences by optimizing
            <br />
            how your data works across the web
          </p>

          {/* Statistics */}
          <div className="flex items-center justify-center gap-32 md:gap-48">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black mb-2">99%</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">Lower Latency</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black mb-2">12T+</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">Requests Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
