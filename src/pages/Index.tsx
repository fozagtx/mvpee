
import React, { useState, useEffect } from 'react';
import { Lightbulb, Gift, Sparkles, Search, Zap, TrendingUp, ArrowRight, Menu, X, Play, CheckCircle } from 'lucide-react';
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
    "You're tired of generic SEO advice that doesn't actually rank your content",
    "You want actionable SEO strategies, not just theoretical knowledge",
    "You need proven techniques that actually work in today's search landscape",
    "You're looking for authentic SEO experiences, not outdated tactics"
  ];

  const benefits = [
    { 
      icon: CheckCircle, 
      title: "Battle-Tested SEO Strategies", 
      description: "Real SEO frameworks I used to rank content successfully - no theory, just what actually works in search engines." 
    },
    { 
      icon: CheckCircle, 
      title: "Avoid SEO Penalties", 
      description: "Learn from my SEO mistakes so you don't have to repeat them. Save months of lost rankings and traffic." 
    },
    { 
      icon: CheckCircle, 
      title: "Zero-Budget SEO Solutions", 
      description: "Discover how to rank without expensive tools - smart SEO tactics beat expensive software every time." 
    }
  ];

  const socialProof = [
    { stat: "50+", label: "SEO Projects" },
    { stat: "100%", label: "Authentic Experience" },
    { stat: "3+", label: "Years in SEO" }
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
                <Search className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">mvpee</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#story" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-105 transition-transform duration-200">My SEO Story</a>
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
                  <a href="#story" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">My SEO Story</a>
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
              <span className="text-sm font-bold text-red-200 uppercase tracking-wider">Finally Revealed</span>
            </div>

            {/* Big Promise Headline */}
            <h1 className="mb-8 leading-tight">
              <div className="font-black text-4xl md:text-6xl xl:text-7xl bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                The EXACT SEO Strategies I Used
              </div>
              <div className="font-black text-4xl md:text-6xl xl:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                to Rank 50+ Projects
              </div>
              <div className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">Zero Budget.</span> Real Rankings. Proven SEO Methods.
              </div>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              What if I told you that the biggest obstacle to your SEO success isn't lack of money, tools, or even technical skills... 
              <span className="text-purple-300 font-semibold"> it's following outdated SEO advice from people who never actually ranked anything recently?</span>
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
                Discover The SEO Strategies
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              👆 Click above to see the EXACT SEO methods that changed everything
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-20 px-6 py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Are You Tired of <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Generic SEO Advice?</span>
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
              Here's What You'll <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Actually Get</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Real SEO strategies that transformed my content into 50+ ranking projects</p>
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
            Don't Wait Another Day to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Start Ranking</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Every day you delay is another day of missed organic traffic. While others struggle with outdated SEO tactics, 
            you could be implementing the exact strategies that work in 2024.
          </p>
          
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8 mb-8">
            <p className="text-lg text-yellow-200 font-semibold">
              ⚡ These aren't just SEO tips - they're the EXACT step-by-step methods I wish someone had shared with me when I started my SEO journey.
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
            If these SEO strategies help you avoid even ONE major algorithm penalty or land your first top ranking, 
            they'll pay for themselves 100x over in organic traffic value.
          </p>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">What happens when you support my work:</h3>
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-200">You help me create even more valuable SEO content</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-200">You become part of a community of real SEO practitioners</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-200">You invest in authentic, tested SEO strategies</span>
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
              YES! Support Real SEO Value
              <Sparkles className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            💝 Your support helps me continue sharing real, tested SEO strategies with the community
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">mvpee</span>
          </div>
          <p className="text-gray-300 mb-4 font-light">Real SEO strategies from real ranking experiences</p>
          <p className="text-gray-500 text-sm">Authentic. Tested. Proven since day one.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
