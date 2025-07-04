import React from 'react';

export function MainHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
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
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-16 tracking-wider uppercase">
          Deliver fast digital experiences by optimizing
          <br />
          how your data works across the web
        </p>

        {/* Statistics */}
        <div className="flex items-center justify-center gap-32 md:gap-48">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-black mb-2">99%</div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">Lower Latency</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-black mb-2">12T+</div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">Requests Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}