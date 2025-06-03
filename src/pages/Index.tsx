import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Zap, Star, CheckCircle, ArrowRight, PlayCircle, MessageCircle, Calendar, BarChart3, Target, Brain, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const features = [
    { icon: Brain, title: "AI-Powered SEO Analysis", description: "Smart recommendations tailored to your startup's niche" },
    { icon: TrendingUp, title: "Growth-Focused Strategies", description: "SEO tactics that actually move the needle for MVPs" },
    { icon: Target, title: "Startup-Specific Tips", description: "Curated advice for early-stage companies and limited budgets" }
  ];

  const seoCategories = [
    { icon: Search, title: "Keyword Research", description: "Find the right keywords for your MVP launch", tips: "47 tips" },
    { icon: BarChart3, title: "Technical SEO", description: "Backend optimizations that boost rankings", tips: "32 tips" },
    { icon: Users, title: "Content Strategy", description: "Create content that converts visitors to users", tips: "28 tips" },
    { icon: Lightbulb, title: "Local SEO", description: "Dominate local search for location-based startups", tips: "19 tips" }
  ];

  const faqs = [
    { q: "Is this really free?", a: "Yes! We believe every startup deserves access to quality SEO knowledge. Our core repository is completely free." },
    { q: "How often do you update the tips?", a: "We add new SEO strategies weekly and update existing ones based on the latest algorithm changes and startup feedback." },
    { q: "Can I submit my own SEO tips?", a: "Absolutely! We love community contributions. Submit your proven SEO tactics and help other startups grow." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-space">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MVPE</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#repository" className="text-gray-600 hover:text-gray-900 transition-colors">SEO Repository</a>
            <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
            <Button 
              className="bg-purple-500 text-white hover:bg-purple-600 font-medium px-6 py-2 rounded-lg"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
            Smart SEO for{' '}
            <span className="text-purple-500">
              Startup MVPs
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            The ultimate repository of SEO tips, strategies, and tools designed specifically for early-stage startups.
            <br />
            <span className="text-purple-500 font-medium">Build organic growth from day one.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-purple-500 text-white hover:bg-purple-600 font-semibold text-lg px-10 py-4 rounded-lg"
              onClick={() => window.open('#repository', '_self')}
            >
              Explore SEO Tips
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Startups Choose <span className="text-purple-500">MVPE</span>
            </h2>
            <p className="text-xl text-gray-600">AI-powered SEO insights that actually work for early-stage companies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg rounded-xl bg-white">
                <CardHeader className="text-center pb-4">
                  <feature.icon className="h-16 w-16 text-purple-500 mx-auto mb-6" />
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Repository */}
      <section id="repository" className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              SEO <span className="text-purple-500">Repository</span>
            </h2>
            <p className="text-xl text-gray-600">Curated SEO strategies organized by category and startup stage</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoCategories.map((category, index) => (
              <Card key={index} className="border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg cursor-pointer group rounded-xl bg-white">
                <CardHeader className="text-center pb-4">
                  <category.icon className="h-12 w-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">{category.tips}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked <span className="text-purple-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our SEO repository</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:border-purple-200 transition-all duration-300 rounded-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Dominate <span className="text-purple-200">Search Results?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12">
            Join thousands of startups using our SEO repository to build sustainable organic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Start Free Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-10 py-4 rounded-lg"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
              <Search className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MVPE</span>
          </div>
          <p className="text-gray-600 mb-4">Empowering startups with smart SEO strategies</p>
          <p className="text-gray-400 text-sm">MVPE - Making startup SEO simple since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
