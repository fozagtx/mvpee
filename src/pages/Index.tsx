import React, { useState, useEffect } from 'react';
import { Star, Zap, TrendingUp, ArrowRight, Menu, X, CheckCircle, Target, Users, Clock, Shield, Award, Sparkles, ChevronDown, MousePointer, Search, Link, BarChart3, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would integrate with your email service
      console.log('Email submitted:', email);
    }
  };

  const benefits = [
    { icon: TrendingUp, text: "Rank #1 for your target keywords" },
    { icon: Link, text: "Get DR 70+ backlinks that actually work" },
    { icon: Users, text: "10x your organic traffic in 90 days" },
    { icon: Shield, text: "White-hat strategies that last" }
  ];

  const stats = [
    { number: "500+", label: "Keywords Ranked #1" },
    { number: "10M+", label: "Organic Clicks Generated" },
    { number: "2,847", label: "Businesses Scaled" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div 
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: 'translate3d(0, 0, 0)'
          }}
        ></div>
      </div>

      {/* Premium Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">SEO Mastery</span>
                <div className="text-xs text-blue-300 font-medium">Premium SEO & Backlinks Course</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Early Access Available</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Social Proof Stats */}
            <div className="flex justify-center items-center space-x-8 mb-12 opacity-70">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <div className="mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-white/10 mb-8 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-sm font-semibold text-green-300">Limited Early Access • 67% Off</span>
              </div>
              
              <h1 className="mb-8 leading-[0.9] tracking-tight">
                <div className="font-black text-5xl md:text-7xl xl:text-8xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                  Master SEO &
                </div>
                <div className="font-black text-5xl md:text-7xl xl:text-8xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
                  Backlinks
                </div>
                <div className="text-xl md:text-3xl font-bold text-slate-300 tracking-wide">
                  From <span className="text-red-400 line-through">Zero to 100K+</span> <span className="text-green-400">Monthly Visitors</span>
                </div>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              The <span className="text-white font-semibold">exact system</span> I used to rank 500+ keywords #1 and generate 
              10M+ organic clicks. Get the complete blueprint that 2,847 businesses used to <span className="text-green-400 font-semibold">dominate Google.</span>
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200 font-medium text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* Waitlist Form */}
            {!isSubmitted ? (
              <div className="max-w-2xl mx-auto mb-12">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Input
                    type="email"
                    placeholder="Enter your email for early access..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-white placeholder:text-slate-400 text-lg px-6 py-4 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold text-xl px-12 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border-0 bg-size-200 animate-gradient overflow-hidden whitespace-nowrap"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <Rocket className="mr-3 h-6 w-6" />
                    Get Early Access
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
                
                <div className="flex justify-center items-center space-x-8 mt-6 text-sm text-slate-400">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span>67% Early Bird Discount</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span>No Spam, Ever</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto mb-12 p-8 bg-green-500/10 backdrop-blur-xl rounded-2xl border border-green-500/20">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">You're In! 🎉</h3>
                  <p className="text-green-200 text-lg mb-4">
                    Welcome to the SEO Mastery early access list. You'll be the first to know when we launch!
                  </p>
                  <p className="text-slate-400">
                    Check your email for exclusive bonuses and updates.
                  </p>
                </div>
              </div>
            )}

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative px-6 py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-300">
                <Search className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-black text-white">SEO Mastery</span>
              <div className="text-sm text-slate-400">The Ultimate SEO & Backlinks Course</div>
            </div>
          </div>
          <p className="text-slate-400 mb-6 text-lg font-light">Dominate Google. Scale your traffic. Build your empire.</p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-sm text-slate-500">© 2024 SEO Mastery. All rights reserved.</div>
            <div className="text-sm text-slate-500">•</div>
            <div className="text-sm text-slate-500">Premium training guaranteed</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
