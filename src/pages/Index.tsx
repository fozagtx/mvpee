
import React, { useState, useEffect } from 'react';
import { Rocket, Zap, Star, CheckCircle, ArrowRight, PlayCircle, MessageCircle, Calendar, Code, Smartphone, ShoppingCart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const services = [
    { icon: Rocket, title: "SaaS MVP Development", description: "Full-stack web apps that scale from day one" },
    { icon: ShoppingCart, title: "E-commerce Platforms", description: "Sell online, grow online, dominate online" },
    { icon: Target, title: "Landing Page + MVP Combos", description: "Complete market entry package" }
  ];

  const techStack = ["React", "Next.js", "Supabase", "Vercel", "TypeScript", "Tailwind"];

  const faqs = [
    { q: "Will my idea get stolen?", a: "Nope! We sign NDAs and have zero interest in stealing ideas. We're too busy building legendary MVPs." },
    { q: "What if I change my mind?", a: "Happens all the time! We're agile AF and pivot faster than a startup in YC Demo Day." },
    { q: "How fast is 'fast'?", a: "30 days from wireframe to wow. Most agencies take 6 months. We take 4 weeks. Math checks out." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-x-hidden font-sans">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 bg-black/10 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-white font-space">MVPE</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-white/80 hover:text-white transition-colors">Our Work</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <Button 
              className="bg-white text-blue-900 hover:bg-white/90 font-semibold px-6 py-2 rounded-lg transition-all duration-200"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-space">
            From Idea to{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Delightful Product
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            We build MVPs that actually work. Fast, fun, and profitable.
            <br />
            <span className="text-cyan-300 font-medium">Where Ideas Become Reality</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-200"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose MVPE */}
      <section className="relative z-10 px-6 py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-space">
              No BS, Just <span className="text-cyan-300">Results</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <Zap className="h-16 w-16 text-cyan-300 mx-auto mb-6" />
                <CardTitle className="text-2xl text-white font-space">Lightning Speed</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100 text-lg mb-3">30-day launches (not 6 months)</p>
                <p className="text-blue-200/70">While others talk, we ship. Fast execution is our superpower.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <CheckCircle className="h-16 w-16 text-green-300 mx-auto mb-6" />
                <CardTitle className="text-2xl text-white font-space">Production Ready</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100 text-lg mb-3">Production-ready, not prototypes</p>
                <p className="text-blue-200/70">Your MVP can handle real users from day one. No duct tape solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <Star className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
                <CardTitle className="text-2xl text-white font-space">Actually Fun</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100 text-lg mb-3">Enjoy the process, love the outcome</p>
                <p className="text-blue-200/70">Building your MVP should be exciting, not stressful. We make it fun.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-space">
              Our <span className="text-cyan-300">Playground</span>
            </h2>
            <p className="text-xl text-blue-100">What we love building (and what we're damn good at)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group rounded-2xl">
                <CardHeader className="text-center pb-4">
                  <service.icon className="h-20 w-20 text-cyan-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-white font-space">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 px-6 py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-space">
            We Speak Fluent <span className="text-cyan-300">Startup</span>
          </h2>
          <p className="text-xl text-blue-100 mb-16">Our tech stack is modern, battle-tested, and scalable</p>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <Badge key={index} className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 text-lg px-6 py-3 rounded-xl">
                <Code className="h-5 w-5 mr-3" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-space">
            Starting from <span className="text-cyan-300">$6K</span>
          </h2>
          <p className="text-xl text-blue-100 mb-16">
            No hidden fees, no BS. Just clear, honest pricing for production-ready MVPs.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
            onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
          >
            <Calendar className="mr-3 h-5 w-5" />
            Get Custom Quote
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-space">
              The <span className="text-cyan-300">Real Talk</span>
            </h2>
            <p className="text-xl text-blue-100">Honest answers to your burning questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white font-space">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-space">
            Ready to Start Your <span className="text-cyan-300">Legend?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Don't let your idea die in a notes app. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-200"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Tell Us Your Idea
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white font-space">MVPE</span>
          </div>
          <p className="text-blue-200 mb-4">Made with love and lots of coffee</p>
          <p className="text-blue-300/70 text-sm">MVPE - Making startup dreams come true since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
