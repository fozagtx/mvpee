
import React, { useState, useEffect } from 'react';
import { Lightbulb, Gift, Sparkles, Code, Zap, Users, ArrowRight, Menu, X } from 'lucide-react';
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

  const features = [
    { 
      icon: Code, 
      title: "Real Building Experience", 
      description: "Authentic lessons from building actual projects during my teenage years, not just theoretical advice." 
    },
    { 
      icon: Zap, 
      title: "Practical Strategies", 
      description: "Actionable tips and frameworks that delivered real results, refined through trial and error." 
    },
    { 
      icon: Users, 
      title: "Community Impact", 
      description: "Stories and insights designed to inspire and guide the next generation of young builders." 
    }
  ];

  const faqs = [
    { 
      q: "Why should I listen to a teenager's advice?", 
      a: "Because these aren't theories—they're battle-tested strategies from someone who's navigated the same challenges you're facing, with fresh perspectives on modern building approaches." 
    },
    { 
      q: "What kind of tips do you share?", 
      a: "Everything from project planning and execution to overcoming creative blocks, finding resources without budget, and staying motivated through setbacks." 
    },
    { 
      q: "How can I support your work?", 
      a: "If my content helps you on your building journey, you can show appreciation through the gift link. It helps me continue creating valuable content for fellow builders!" 
    }
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
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">mvpe.me</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#story" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-105 transition-transform duration-200">My Story</a>
              <a href="#support" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-105 transition-transform duration-200">Support</a>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10 border border-white/20">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-white/10">
                <div className="flex flex-col space-y-6 mt-8">
                  <a href="#story" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">My Story</a>
                  <a href="#support" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">Support</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm mb-8 group hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">Real experiences, real impact</span>
            </div>

            <h1 className="mb-8 leading-tight">
              <div className="font-black text-6xl md:text-7xl xl:text-8xl bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                From Teen Dreams
              </div>
              <div className="font-black text-6xl md:text-7xl xl:text-8xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                to Real Results
              </div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              I started building things as a teenager with big dreams and zero budget. Here are the strategies, 
              mistakes, and breakthroughs that shaped my journey into something meaningful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0 group"
                onClick={() => window.open('#story', '_self')}
              >
                <Lightbulb className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Discover My Journey
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 border border-white/20 group"
                onClick={() => window.open('https://paystack.shop/pay/mvpe', '_blank')}
              >
                <Gift className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Send a Gift
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative z-20 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why I'm Sharing My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">The real strategies that transformed my teenage building dreams into impactful results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 rounded-3xl group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 font-light leading-relaxed flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-20 px-6 py-32 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Questions About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">My Journey</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">Common questions about my building experiences and approach</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 rounded-3xl group hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">{faq.q}</h3>
                  <p className="text-gray-300 font-light leading-relaxed text-lg">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="relative z-20 px-6 py-32 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Love What You're <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            If my strategies and insights are helping you on your building journey, consider supporting my work 
            so I can continue sharing valuable content with fellow builders around the world.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-xl px-16 py-8 rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 border-0 group"
              onClick={() => window.open('https://paystack.shop/pay/mvpe', '_blank')}
            >
              <Gift className="mr-4 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Send a Gift
              <Sparkles className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">mvpe.me</span>
          </div>
          <p className="text-gray-300 mb-4 font-light">Sharing real strategies from a teenage building journey</p>
          <p className="text-gray-500 text-sm">From teen dreams to real impact — building since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
