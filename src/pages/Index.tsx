
import React, { useState, useEffect } from 'react';
import { Lightbulb, Gift, Sparkles, Search, Zap, TrendingUp, ArrowRight, Menu, X, Play, CheckCircle, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const painPoints = [
    "You're tired of paying thousands for backlinks that don't move the needle",
    "You want quality backlinks for your SaaS, not spammy directory links",
    "You need simple backlink strategies without confusing technical terms",
    "You're looking for authentic link building methods that actually work"
  ];

  const benefits = [
    { 
      icon: Link, 
      title: "Quality Backlink Strategies", 
      description: "Simple, proven methods to get high-quality backlinks for your SaaS without breaking the bank or using confusing tech speak." 
    },
    { 
      icon: CheckCircle, 
      title: "No-Nonsense Approach", 
      description: "Skip the technical jargon and complex tools. Learn straightforward backlink tactics that any SaaS founder can implement." 
    },
    { 
      icon: CheckCircle, 
      title: "Real Relationship Building", 
      description: "Discover how to build genuine connections that lead to quality backlinks, not just transactional link exchanges." 
    }
  ];

  const socialProof = [
    { stat: "Quality", label: "Over Quantity" },
    { stat: "Simple", label: "No Tech Jargon" },
    { stat: "Real", label: "Proven Methods" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                <Link className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">mvpee</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#story" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-105 transition-transform duration-200">My Backlink Story</a>
              <a href="#support" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-105 transition-transform duration-200">Support</a>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10 border border-white/20">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-white/10">
                <div className="flex flex-col space-y-6 mt-8">
                  <a href="#story" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">My Backlink Story</a>
                  <a href="#support" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">Support</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section - VSL Style */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Attention Grabber */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600/30 to-orange-600/30 border border-red-500/50 backdrop-blur-sm mb-8 group hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
              <span className="text-sm font-bold text-red-200 uppercase tracking-wider">SaaS Backlink Secrets</span>
            </div>

            {/* Big Promise Headline */}
            <h1 className="mb-8 leading-tight">
              <div className="font-black text-4xl md:text-6xl xl:text-7xl bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                Get Quality Backlinks
              </div>
              <div className="font-black text-4xl md:text-6xl xl:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                For Your SaaS
              </div>
              <div className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">Simple strategies.</span> No tech jargon. Real results.
              </div>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              What if I told you that getting quality backlinks for your SaaS doesn't require expensive tools, complex outreach campaigns, or understanding technical SEO... 
              <span className="text-purple-300 font-semibold"> it's about building real relationships the right way?</span>
            </p>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {socialProof.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {item.stat}
                  </div>
                  <div className="text-gray-400 font-medium mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0 group"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Learn The Backlink Strategies
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              👆 Click above to discover simple backlink methods that actually work
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-20 px-6 py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Tired of <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Expensive Backlink Tactics?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            If any of these sound familiar, you're in the right place...
          </p>
          
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="border-0 bg-red-500/10 backdrop-blur-xl hover:bg-red-500/20 transition-all duration-500 rounded-2xl group hover:scale-[1.02]">
                <CardContent className="p-6 flex items-center">
                  <X className="h-6 w-6 text-red-400 mr-4 flex-shrink-0" />
                  <p className="text-lg text-gray-200 text-left">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="story" className="relative z-20 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Here's What You'll <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Actually Learn</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Simple backlink strategies that help your SaaS get noticed by the right people</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 rounded-3xl group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 font-light leading-relaxed flex-grow">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency/Scarcity Section */}
      <section className="relative z-20 px-6 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Don't Wait to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Build Authority</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Every day you delay building quality backlinks is another day your competitors are getting ahead. 
            While others struggle with expensive link building agencies, you could be implementing simple relationship-based strategies.
          </p>
          
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8 mb-8">
            <p className="text-lg text-yellow-200 font-semibold">
              ⚡ These aren't just backlink tips - they're the EXACT relationship-building methods that get your SaaS noticed by industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section - Strong CTA */}
      <section id="support" className="relative z-20 px-6 py-32 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Support Real Value?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            If these backlink strategies help you land even ONE quality link from an industry leader, 
            they'll pay for themselves 100x over in authority and organic traffic.
          </p>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">What happens when you support my work:</h3>
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-200">You help me create even more valuable backlink strategies</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-200">You become part of a community of SaaS founders building authority</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-200">You invest in simple, relationship-based link building methods</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-xl px-16 py-8 rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 border-0 group"
              onClick={() => window.open('https://paystack.shop/pay/mvpe', '_blank')}
            >
              <Gift className="mr-4 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              YES! Support Quality Backlink Education
              <Sparkles className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            💝 Your support helps me continue sharing simple, effective backlink strategies for SaaS founders
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Link className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">mvpee</span>
          </div>
          <p className="text-gray-300 mb-4 font-light">Simple backlink strategies for smart SaaS founders</p>
          <p className="text-gray-500 text-sm">No tech jargon. Just real relationships and quality links.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
