
import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Zap, Star, CheckCircle, ArrowRight, PlayCircle, MessageCircle, Calendar, BarChart3, Target, Brain, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
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
    <div className="min-h-screen bg-white text-gray-900 font-space">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MVPE</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Quick Wins</a>
            <a href="#repository" className="text-gray-600 hover:text-gray-900 transition-colors">Fast SEO</a>
            <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Results</a>
            <Button 
              className="bg-purple-500 text-white hover:bg-purple-600 font-medium px-6 py-2 rounded-lg"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              Launch Faster
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
            Build <span className="text-purple-500">MVPs Faster</span>{' '}
            with Smart SEO
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Skip months of SEO research. Get your MVP discovered from day one with our curated repository of quick-win strategies.
            <br />
            <span className="text-purple-500 font-medium">Launch faster. Grow faster. Succeed faster.</span>
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-purple-500 text-white hover:bg-purple-600 font-semibold text-lg px-10 py-4 rounded-lg"
              onClick={() => window.open('#repository', '_self')}
            >
              <Zap className="mr-3 h-5 w-5" />
              Get Quick SEO Wins
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Startups Build <span className="text-purple-500">Faster</span> with MVPE
            </h2>
            <p className="text-xl text-gray-600">Speed-focused SEO that accelerates your MVP launch timeline</p>
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
              Fast-Track Your <span className="text-purple-500">MVP Launch</span>
            </h2>
            <p className="text-xl text-gray-600">Quick-implementation SEO strategies organized for maximum speed</p>
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
              Build Faster with <span className="text-purple-500">Confidence</span>
            </h2>
            <p className="text-xl text-gray-600">Common questions about accelerating your MVP with SEO</p>
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
            Ready to <span className="text-purple-200">Launch Faster?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12">
            Join thousands of startups building MVPs faster with our speed-focused SEO strategies.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg"
              onClick={() => window.open('https://cal.com/fawuzanth/mvpee', '_blank')}
            >
              <Zap className="mr-3 h-5 w-5" />
              Accelerate My MVP
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MVPE</span>
          </div>
          <p className="text-gray-600 mb-4">Helping startups build MVPs faster with smart SEO</p>
          <p className="text-gray-400 text-sm">MVPE - Build faster, launch sooner since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
