
import React, { useState, useEffect } from 'react';
import { Star, Zap, TrendingUp, ArrowRight, Menu, X, Play, CheckCircle, Rocket, Target, Users, Clock, Shield, Award, Sparkles, ChevronDown, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  const features = [
    { 
      icon: Target, 
      title: "Strategic Planning", 
      description: "Deep market analysis and MVP scoping that validates core assumptions without overbuilding.",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Zap, 
      title: "Lightning Development", 
      description: "14-day delivery with battle-tested frameworks and SEO optimization built-in from day one.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: TrendingUp, 
      title: "Scale-Ready Architecture", 
      description: "Enterprise-grade foundation designed to handle explosive growth from the first user to millions.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: "Get discovered by customers from day one" },
    { icon: Zap, text: "Launch faster than building in-house" },
    { icon: Target, text: "Focus on validation & growth, not code" },
    { icon: Shield, text: "Save 6+ months of development costs" }
  ];

  const stats = [
    { number: "127+", label: "MVPs Launched", icon: Rocket },
    { number: "14", label: "Day Delivery", icon: Clock },
    { number: "98%", label: "Success Rate", icon: Award }
  ];

  const testimonials = [
    {
      quote: "From idea to $10K MRR in 6 weeks. The MVP was so polished, investors thought we'd been building for months.",
      author: "Sarah Chen",
      role: "Founder, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "Best investment we ever made. The SEO optimization alone brought us 2,000 organic users in month one.",
      author: "Marcus Rodriguez",
      role: "CEO, DataVault",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    }
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
                  <Rocket className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">mvpee</span>
                <div className="text-xs text-blue-300 font-medium">Premium MVP Development</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
              <Button 
                className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border-0 text-lg bg-size-200 animate-gradient overflow-hidden"
                onClick={() => window.open('https://calendly.com/your-link', '_blank')}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <Sparkles className="mr-3 h-5 w-5" />
                Start Your MVP
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-slate-700">
                <div className="flex flex-col space-y-8 mt-12">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl"
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
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-12 mb-16 opacity-70">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-blue-400 mr-2" />
                    <div className="text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <div className="mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-8 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm font-semibold text-blue-300">Enterprise-Grade MVP Development</span>
              </div>
              
              <h1 className="mb-8 leading-[0.9] tracking-tight">
                <div className="font-black text-6xl md:text-8xl xl:text-9xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                  Build Your
                </div>
                <div className="font-black text-6xl md:text-8xl xl:text-9xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
                  $1M MVP
                </div>
                <div className="text-2xl md:text-4xl font-bold text-slate-300 tracking-wide">
                  In Just <span className="text-green-400">14 Days</span>
                </div>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Skip months of development hell. Get a <span className="text-white font-semibold">launch-ready product</span> with 
              built-in SEO, premium design, and enterprise-grade architecture that scales to millions of users.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-left p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200 font-medium text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold text-2xl px-20 py-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border-0 bg-size-200 animate-gradient overflow-hidden"
                onClick={() => window.open('https://calendly.com/your-link', '_blank')}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <Play className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                Book Strategy Call
                <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="text-center">
                <div className="text-slate-400 text-sm mb-2">✓ Free consultation</div>
                <div className="text-slate-400 text-sm">✓ No commitment required</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative px-6 py-24 bg-gradient-to-r from-slate-900/50 to-indigo-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Trusted by <span className="text-green-400">127+ Founders</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-slate-200 leading-relaxed mb-6 font-light italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">mvpee</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              Our battle-tested process combines strategic thinking with lightning-fast execution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-700 rounded-3xl group hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{
                  background: `linear-gradient(135deg, ${feature.gradient.split(' ')[0].replace('from-', '')} 0%, ${feature.gradient.split(' ')[1].replace('to-', '')} 100%)`
                }}></div>
                <CardContent className="relative p-10 text-center h-full flex flex-col">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed flex-grow font-light text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 py-32 bg-gradient-to-br from-slate-800/50 to-indigo-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-20 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Your MVP in <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">3 Steps</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "01", 
                title: "Strategy Deep-Dive", 
                desc: "We dissect your vision, validate assumptions, and architect the perfect MVP scope that maximizes market impact.",
                icon: Target,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                step: "02", 
                title: "Lightning Build", 
                desc: "Our elite team crafts your MVP using premium tech stack with SEO optimization and conversion-focused UX.",
                icon: Zap,
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                step: "03", 
                title: "Launch & Scale", 
                desc: "Deploy your battle-tested MVP with enterprise infrastructure ready to handle viral growth from day one.",
                icon: Rocket,
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500" style={{
                  background: `linear-gradient(135deg, ${item.gradient.split(' ')[0].replace('from-', '')} 0%, ${item.gradient.split(' ')[1].replace('to-', '')} 100%)`
                }}></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 group-hover:bg-white/10 transition-all duration-500">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-6xl font-black text-white/10 mb-6 group-hover:text-white/20 transition-colors duration-500">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed font-light text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-6 py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-12">
            <MousePointer className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-semibold">Limited Spots Available</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white drop-shadow-2xl">
            Ready to <span className="text-yellow-300">Dominate</span> Your Market?
          </h2>
          <p className="text-xl text-blue-100 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            Join the elite group of founders who chose speed over perfection and built million-dollar businesses with our MVPs.
          </p>
          
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 mb-16 border border-white/20">
            <div className="flex items-center justify-center mb-8">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 border-3 border-white flex items-center justify-center shadow-xl">
                    <Star className="h-5 w-5 text-white fill-current" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white text-2xl font-bold mb-4">
              "The fastest way to go from idea to paying customers. Absolutely game-changing!"
            </p>
            <p className="text-blue-200 text-lg">- Sarah M., TechFlow (Now valued at $2.3M)</p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="relative group bg-white text-blue-600 hover:bg-blue-50 font-black text-2xl px-20 py-8 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:scale-105 border-0 overflow-hidden"
              onClick={() => window.open('https://calendly.com/your-link', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <Clock className="mr-4 h-7 w-7" />
              Claim Your Spot Now
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          <p className="text-blue-200 mt-8 text-lg font-light">
            Free strategy session • Zero risk • Maximum impact
          </p>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative px-6 py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-300">
                <Rocket className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-black text-white">mvpee</span>
              <div className="text-sm text-slate-400">Premium MVP Development</div>
            </div>
          </div>
          <p className="text-slate-400 mb-6 text-lg font-light">Building tomorrow's unicorns, today</p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-sm text-slate-500">© 2024 mvpee. All rights reserved.</div>
            <div className="text-sm text-slate-500">•</div>
            <div className="text-sm text-slate-500">Enterprise-grade quality guaranteed</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
