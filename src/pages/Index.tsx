import React, { useState, useEffect } from 'react';
import { Star, Zap, TrendingUp, ArrowRight, Menu, X, CheckCircle, Target, Users, Clock, Shield, Award, Sparkles, ChevronDown, MousePointer, Search, Link, BarChart3, Rocket, Mail, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleBuyNow = () => {
    window.open('https://buy.polar.sh/polar_cl_xr19Csuoe1KnnHb256iQjEaKPesJQc3MxKgc442QHHz', '_blank');
  };

  const stats = [
    { number: "80K+", label: "Backlinks Generated" },
    { number: "50+", label: "Proven Templates" },
    { number: "67%", label: "Best Success Rate" }
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
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">SEO FAST</span>
                <div className="text-xs text-blue-300 font-medium">50+ Email Templates That Get Backlinks</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Limited Time Access</span>
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
                <span className="text-sm font-semibold text-green-300">Complete Copy-Paste Library • 67% Success Rates</span>
              </div>
              
              <h1 className="mb-8 leading-[0.9] tracking-tight">
                <div className="font-black text-5xl md:text-7xl xl:text-8xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                  50+ Email Templates
                </div>
                <div className="font-black text-5xl md:text-7xl xl:text-8xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
                  That Get Backlinks
                </div>
                <div className="text-xl md:text-3xl font-bold text-slate-300 tracking-wide">
                  The Complete <span className="text-green-400">Copy-Paste Library</span> for Link Building Success
                </div>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              After analyzing <span className="text-white font-semibold">10,000+ successful campaigns</span>, we discovered that 85% of link building success 
              comes down to your email approach. These <span className="text-green-400 font-semibold">proven templates generated 80K+ backlinks</span> with success rates up to 67%.
            </p>

            {/* Buy Now CTA */}
            <div className="max-w-2xl mx-auto mb-12">
              <Button 
                onClick={handleBuyNow}
                size="lg" 
                className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold text-xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border-0 bg-size-200 animate-gradient overflow-hidden whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <Rocket className="mr-3 h-6 w-6" />
                Get All 50+ Templates Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="flex justify-center items-center space-x-8 mt-6 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span>Copy-Paste Ready</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>

            {/* What You Get Section */}
            <div className="max-w-4xl mx-auto mb-16 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">What You Get Instantly</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">50+ proven email templates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">Success rates for each template</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">Follow-up sequences that work</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">Industry-specific variations</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">Psychological triggers guide</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">A/B testing framework</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">Quick start action plan</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-200">Tracking & optimization tips</span>
                  </div>
                </div>
              </div>
            </div>

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
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-black text-white">SEO FAST</span>
              <div className="text-sm text-slate-400">50+ Email Templates That Get Backlinks</div>
            </div>
          </div>
          <p className="text-slate-400 mb-6 text-lg font-light">Stop sending emails that get ignored. Start building backlinks that actually work.</p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-sm text-slate-500">© 2024 SEO FAST. All rights reserved.</div>
            <div className="text-sm text-slate-500">•</div>
            <div className="text-sm text-slate-500">80K+ backlinks generated</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
