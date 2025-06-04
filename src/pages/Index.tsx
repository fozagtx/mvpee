import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Zap, Star, CheckCircle, ArrowRight, PlayCircle, MessageCircle, Calendar, BarChart3, Target, Brain, Users, Lightbulb, Menu, X } from 'lucide-react';
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
    { icon: Brain, title: "AI-Powered SEO Analysis", description: "Smart recommendations that get your MVP discovered faster" },
    { icon: Zap, title: "Rapid Implementation", description: "Quick-win SEO tactics you can implement in minutes, not months" },
    { icon: Target, title: "MVP-Focused Strategies", description: "Skip the complexity - get essential SEO tactics for faster launches" }
  ];

  const seoCategories = [
    { icon: Search, title: "Quick Keyword Wins", description: "Find high-impact keywords for faster MVP validation", tips: "47 tips" },
    { icon: BarChart3, title: "Speed-First Technical SEO", description: "Essential optimizations that accelerate your MVP's visibility", tips: "32 tips" },
    { icon: Users, title: "Rapid Content Strategy", description: "Content frameworks that drive faster user acquisition", tips: "28 tips" },
    { icon: Lightbulb, title: "Fast Local Presence", description: "Quick local SEO setup for location-based MVPs", tips: "19 tips" }
  ];

  const faqs = [
    { q: "How fast can I see results with my MVP?", a: "Our quick-win strategies are designed for immediate implementation. Most startups see initial SEO improvements within 2-4 weeks of launch." },
    { q: "Is this suitable for pre-launch MVPs?", a: "Absolutely! Many of our strategies help you build SEO foundation before launch, giving you a head start on organic visibility." },
    { q: "Can I implement these while building my MVP?", a: "Yes! Our tips are designed to integrate seamlessly into your development process without slowing down your launch timeline." }
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
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white drop-shadow-sm">MVPE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-gray-200 hover:text-white transition-colors font-medium">Quick Wins</a>
              <a href="#repository" className="text-gray-200 hover:text-white transition-colors font-medium">Fast SEO</a>
              <a href="#community" className="text-gray-200 hover:text-white transition-colors font-medium">Results</a>
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
                  <a href="#features" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">Quick Wins</a>
                  <a href="#repository" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">Fast SEO</a>
                  <a href="#community" className="text-gray-200 hover:text-white transition-colors text-lg font-medium">Results</a>
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
                Build <span className="text-purple-400">MVPs Faster</span>
              </div>
              <div className="font-light text-6xl md:text-7xl xl:text-[5.25rem] italic text-white drop-shadow-lg">
                with Smart SEO
              </div>
            </h1>
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Skip months of SEO research. Get your MVP discovered from day one with our curated repository of quick-win strategies.
              <br />
              <span className="text-purple-300 font-medium">Launch faster. Grow faster. Succeed faster.</span>
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-purple-500 text-white hover:bg-purple-600 font-semibold text-lg px-10 py-4 rounded-lg animate-fade-in shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.open('#repository', '_self')}
              >
                <Zap className="mr-3 h-5 w-5" />
                Get Quick SEO Wins
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-20 px-6 py-24 bg-black/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              Why Startups Build <span className="text-purple-400">Faster</span> with MVPE
            </h2>
            <p className="text-xl text-gray-200 drop-shadow-sm">Speed-focused SEO that accelerates your MVP launch timeline</p>
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

      {/* SEO Repository */}
      <section id="repository" className="relative z-20 px-6 py-24 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Fast-Track Your <span className="text-purple-600">MVP Launch</span>
            </h2>
            <p className="text-xl text-gray-700 font-medium">Quick-implementation SEO strategies organized for maximum speed</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoCategories.map((category, index) => (
              <Card key={index} className="border border-gray-300 hover:border-purple-300 transition-all duration-300 hover:shadow-xl cursor-pointer group rounded-xl bg-white shadow-md">
                <CardHeader className="text-center pb-4">
                  <category.icon className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg text-gray-900 font-semibold">{category.title}</CardTitle>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 font-medium">{category.tips}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-sm font-medium">{category.description}</p>
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
              Build Faster with <span className="text-purple-600">Confidence</span>
            </h2>
            <p className="text-xl text-gray-700 font-medium">Common questions about accelerating your MVP with SEO</p>
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

      {/* CTA Section */}
      <section className="relative z-20 px-6 py-24 bg-gradient-to-r from-purple-600/90 to-purple-700/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-md">
            Ready to <span className="text-purple-200">Launch Faster?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 font-medium drop-shadow-sm">
            Join thousands of startups building MVPs faster with our speed-focused SEO strategies.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              <Zap className="mr-3 h-5 w-5" />
              Accelerate My MVP
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-16 bg-black/90 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center shadow-md">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white drop-shadow-sm">MVPE</span>
          </div>
          <p className="text-gray-200 mb-4 font-medium">Helping startups build MVPs faster with smart SEO</p>
          <p className="text-gray-400 text-sm">MVPE - Build faster, launch sooner since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
