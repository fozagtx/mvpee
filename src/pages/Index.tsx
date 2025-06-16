
import React, { useState, useEffect } from 'react';
import { Star, Zap, TrendingUp, ArrowRight, Menu, X, CheckCircle, Target, Users, Clock, Shield, Award, Sparkles, ChevronDown, MousePointer, Search, Link, BarChart3, Rocket, Mail, FileText, Globe, MessageSquare, Users2, Trophy } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-36 md:w-72 h-36 md:h-72 bg-emerald-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div 
          className="absolute w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full opacity-30 transition-all duration-500 ease-out blur-sm hidden md:block"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: 'translate3d(0, 0, 0)'
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 md:w-2 h-1 md:h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Premium Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-10 md:w-14 h-10 md:h-14 bg-gradient-to-br from-cyan-500 via-violet-500 to-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Zap className="h-5 md:h-7 w-5 md:w-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl md:text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-violet-200 bg-clip-text text-transparent">beta-seo</span>
                <div className="text-xs text-cyan-300 font-medium tracking-wide hidden md:block">Unlock Your Link Building Potential</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-cyan-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Ready to Transform Your SEO</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Main Headline */}
            <div className="mb-8 md:mb-12">
              <div className="inline-flex items-center px-4 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-violet-500/20 border border-white/20 mb-8 md:mb-12 backdrop-blur-xl">
                <Trophy className="h-4 md:h-5 w-4 md:w-5 text-emerald-400 mr-2 md:mr-3" />
                <span className="text-xs md:text-sm font-bold text-emerald-300 tracking-wide">THE SECRET WEAPON OF TOP SEO AGENCIES</span>
              </div>
              
              <h1 className="mb-8 md:mb-12 leading-[0.85] tracking-tight">
                <div className="font-black text-4xl md:text-6xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-white via-cyan-200 to-violet-200 bg-clip-text text-transparent mb-4 md:mb-8 drop-shadow-2xl">
                  Stop Getting
                </div>
                <div className="font-black text-4xl md:text-6xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent mb-8 md:mb-12 drop-shadow-2xl">
                  Ignored
                </div>
              </h1>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
              While others struggle with 2-5% response rates, you'll be closing deals and building relationships 
              that actually <span className="text-cyan-400 font-semibold">move the needle</span> for your business.
            </p>

            {/* Enhanced CTA */}
            <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              <Button 
                onClick={handleBuyNow}
                size="lg" 
                className="relative group bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-violet-500 text-white font-bold text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 hover:scale-110 border-0 bg-size-200 animate-gradient overflow-hidden w-full md:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000"></div>
                <Rocket className="mr-3 md:mr-4 h-6 md:h-8 w-6 md:w-8" />
                Get Your Unfair Advantage
                <ArrowRight className="ml-3 md:ml-4 h-6 md:h-8 w-6 md:w-8 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mt-6 md:mt-8 text-sm md:text-base text-slate-300">
                <div className="flex items-center group">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-emerald-400 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">Instant Access</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-emerald-400 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">Copy & Deploy</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-emerald-400 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">Start Today</span>
                </div>
              </div>
            </div>

            {/* Enhanced What You Get Section */}
            <div className="max-w-5xl mx-auto mb-12 md:mb-16 p-6 md:p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl mx-4">
              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Your Complete Arsenal
                </h3>
                <p className="text-lg md:text-xl text-slate-300">Everything you need to dominate outreach, delivered instantly</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Battle-tested email templates</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Psychology trigger breakdowns</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Follow-up sequences that convert</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Industry-specific variations</span>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Personalization frameworks</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">A/B testing strategies</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Implementation roadmap</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 md:h-5 w-3 md:w-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-base md:text-lg group-hover:text-white transition-colors duration-300">Performance tracking guide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 md:h-10 w-8 md:w-10 text-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative px-4 md:px-6 py-16 md:py-24 bg-gradient-to-t from-slate-900 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-10 group">
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 rounded-xl md:rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-cyan-500 via-violet-500 to-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Zap className="h-6 md:h-8 w-6 md:w-8 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-violet-200 bg-clip-text text-transparent">beta-seo</span>
              <div className="text-sm md:text-base text-slate-400 font-medium">Your Link Building Success Partner</div>
            </div>
          </div>
          <p className="text-slate-300 mb-6 md:mb-8 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4">
            Stop playing the waiting game. Start building the relationships and backlinks that will transform your business.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-12 mb-8 md:mb-10 text-xs md:text-sm text-slate-500">
            <div>© 2024 beta-seo. All rights reserved.</div>
            <div className="hidden md:block">•</div>
            <div>Transform your outreach today</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
