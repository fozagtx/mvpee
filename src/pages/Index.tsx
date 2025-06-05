
import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Zap, Star, CheckCircle, ArrowRight, PlayCircle, MessageCircle, Calendar, BarChart3, Target, Brain, Users, Lightbulb, Menu, X, Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

  useEffect(() => {
    // Load UnicornStudio background
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstu/embed@latest/dist/uembed.js';
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  const features = [
    { icon: Brain, title: "Real Teen Experiences", description: "Authentic stories and lessons from building projects during my teenage years" },
    { icon: Zap, title: "Practical Strategies", description: "Actionable tips that actually worked - no fluff, just real results" },
    { icon: Target, title: "From Failure to Success", description: "Learn from my mistakes and discoveries that led to breakthrough moments" }
  ];

  const faqs = [
    { q: "Why should I listen to a teenager's advice?", a: "Because I'm sharing real experiences, not theory. These are strategies that actually worked for me while navigating the same challenges you might be facing." },
    { q: "Are these tips only for teenagers?", a: "Not at all! While my journey started as a teen, these strategies work for anyone starting their building journey, regardless of age." },
    { q: "How can I support your work?", a: "If my content helps you, you can show your appreciation through my gift link. It helps me continue sharing and creating more valuable content!" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter relative">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div 
          data-us-project="ndlofXfA4Iv9m0F1CeF2" 
          style={{ width: '100vw', height: '100vh' }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/20' 
          : 'bg-black/50 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white drop-shadow-sm">mvpe.me</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#story" className="text-gray-200 hover:text-white transition-colors font-medium">My Story</a>
              <a href="#support" className="text-gray-200 hover:text-white transition-colors font-medium">Support</a>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/20">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 backdrop-blur-md border-white/20">
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
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="mb-8 leading-tight">
              <div className="font-light text-6xl md:text-7xl xl:text-[5.25rem] text-white drop-shadow-lg">
                From <span className="text-purple-400">Teen Dreams</span>
              </div>
              <div className="font-light text-6xl md:text-7xl xl:text-[5.25rem] italic text-white drop-shadow-lg">
                to Real Results
              </div>
            </h1>
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              I started building things as a teenager with big dreams and no money. Here are the strategies, mistakes, and breakthroughs that shaped my journey.
              <br />
              <span className="text-purple-300 font-medium">Real experiences. Real results. Real impact.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-purple-500 text-white hover:bg-purple-600 font-semibold text-lg px-10 py-4 rounded-lg animate-fade-in shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.open('#story', '_self')}
              >
                <Lightbulb className="mr-3 h-5 w-5" />
                Discover My Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-purple-700 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-white"
                onClick={() => window.open('https://paystack.shop/pay/mvpe', '_blank')}
              >
                <Gift className="mr-3 h-5 w-5" />
                Send a Gift
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative z-20 px-6 py-24 bg-black/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              Why I'm Sharing <span className="text-purple-400">My Journey</span>
            </h2>
            <p className="text-xl text-gray-200 drop-shadow-sm">The strategies that changed everything for me as a young builder</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-600 hover:border-purple-400 transition-all duration-300 hover:shadow-xl rounded-xl bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <feature.icon className="h-16 w-16 text-purple-400 mx-auto mb-6 drop-shadow-lg" />
                  <CardTitle className="text-xl text-white font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-20 px-6 py-24 bg-gray-50/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Questions About <span className="text-purple-600">My Journey</span>
            </h2>
            <p className="text-xl text-gray-700 font-medium">Common questions about my building experiences</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-300 hover:border-purple-300 transition-all duration-300 rounded-xl bg-white shadow-md hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 font-semibold">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="relative z-20 px-6 py-24 bg-gradient-to-r from-purple-600/90 to-purple-700/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-md">
            Love What You're <span className="text-purple-200">Learning?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 font-medium drop-shadow-sm">
            If my tips and strategies are helping you on your building journey, consider supporting my work so I can continue sharing valuable content with the world.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://paystack.shop/pay/mvpe', '_blank')}
            >
              <Gift className="mr-3 h-5 w-5" />
              Send a Gift
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-16 bg-black/90 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center shadow-md">
              <Lightbulb className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white drop-shadow-sm">mvpe.me</span>
          </div>
          <p className="text-gray-200 mb-4 font-medium">Sharing real strategies from a teenage building journey</p>
          <p className="text-gray-400 text-sm">From teen dreams to real impact - building since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
