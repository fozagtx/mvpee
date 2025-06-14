
import React, { useState, useEffect } from 'react';
import { Star, Zap, TrendingUp, ArrowRight, Menu, X, Play, CheckCircle, Rocket, Target, Users, Clock } from 'lucide-react';
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
      icon: Target, 
      title: "Strategic Planning", 
      description: "We analyze your market and define the perfect MVP scope that validates your core assumptions without overbuilding." 
    },
    { 
      icon: Zap, 
      title: "Rapid Development", 
      description: "Our streamlined process delivers a fully functional MVP in just 2 weeks, complete with SEO optimization from day one." 
    },
    { 
      icon: TrendingUp, 
      title: "Built to Scale", 
      description: "Every MVP we build is designed with growth in mind, ensuring smooth scaling as your user base expands." 
    }
  ];

  const benefits = [
    "📈 Get discovered by customers from day one",
    "⚡ Launch faster than building in-house",
    "🎯 Focus on what matters: validation & growth",
    "💰 Save months of development costs"
  ];

  const stats = [
    { number: "50+", label: "MVPs Launched" },
    { number: "2", label: "Week Delivery" },
    { number: "95%", label: "Client Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">mvpee</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://calendly.com/your-link', '_blank')}
              >
                Start Your MVP
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-gray-900 hover:bg-gray-100">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200">
                <div className="flex flex-col space-y-6 mt-8">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
                    onClick={() => window.open('https://calendly.com/your-link', '_blank')}
                  >
                    Start Your MVP
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Stats Bar */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="mb-8 leading-tight">
              <div className="font-black text-5xl md:text-7xl xl:text-8xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
                Build Your MVP
              </div>
              <div className="font-black text-5xl md:text-7xl xl:text-8xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                In 2 Weeks
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              From idea to launch-ready product with built-in SEO. We handle the technical complexity 
              so you can focus on growing your business.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-left text-gray-700 text-lg">
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xl px-16 py-8 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0 group"
                onClick={() => window.open('https://calendly.com/your-link', '_blank')}
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Book Your Strategy Call
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Free consultation • No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build Smart</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our proven process turns your idea into a market-ready MVP in just 14 days</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-500 rounded-3xl group hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Your MVP in <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We understand your vision, validate the concept, and define the MVP scope" },
              { step: "02", title: "Build & Optimize", desc: "Our team develops your MVP with SEO optimization and user experience in mind" },
              { step: "03", title: "Launch Ready", desc: "Receive your fully functional MVP ready to acquire customers and validate your market" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-black text-blue-200 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            Ready to <span className="text-yellow-300">Launch?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join 50+ founders who've successfully launched their MVPs and started building their dream businesses.
          </p>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 border-2 border-white flex items-center justify-center">
                    <Star className="h-4 w-4 text-white fill-current" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white text-lg font-semibold">
              "The fastest way to go from idea to paying customers. Highly recommended!"
            </p>
            <p className="text-blue-200 mt-2">- Sarah M., SaaS Founder</p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl px-16 py-8 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 border-0 group"
              onClick={() => window.open('https://calendly.com/your-link', '_blank')}
            >
              <Clock className="mr-4 h-6 w-6" />
              Start Building Today
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          <p className="text-blue-200 mt-6">
            Free strategy call • Risk-free consultation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">mvpee</span>
          </div>
          <p className="text-gray-400 mb-4">Building tomorrow's products, today</p>
          <p className="text-gray-500 text-sm">© 2024 mvpee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
