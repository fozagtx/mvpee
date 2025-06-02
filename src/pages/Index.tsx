
import React, { useState, useEffect } from 'react';
import { Rocket, Zap, Star, CheckCircle, ArrowRight, PlayCircle, MessageCircle, Calendar, Code, Smartphone, ShoppingCart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [mvpCount, setMvpCount] = useState(47);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMvpCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Rocket, title: "SaaS MVP Development", description: "Full-stack web apps that scale from day one" },
    { icon: Smartphone, title: "Mobile App Prototypes", description: "Native feel, cross-platform power" },
    { icon: ShoppingCart, title: "E-commerce Platforms", description: "Sell online, grow online, dominate online" },
    { icon: Target, title: "Landing Page + MVP Combos", description: "Complete market entry package" }
  ];

  const testimonials = [
    { name: "Sarah Chen", company: "TaskFlow", quote: "MVPE turned my napkin sketch into a $50K MRR SaaS in 30 days. Unreal.", avatar: "🚀" },
    { name: "Marcus Rodriguez", company: "FitTracker Pro", quote: "From idea to 10K downloads in 6 weeks. These guys don't mess around.", avatar: "💪" },
    { name: "Elena Vasquez", company: "LocalEats", quote: "Best investment ever. My MVP is now processing $100K+ monthly.", avatar: "🍕" }
  ];

  const techStack = ["React", "Next.js", "Python", "Supabase", "Vercel", "TypeScript", "Tailwind", "FastAPI"];

  const faqs = [
    { q: "Will my idea get stolen?", a: "Nope! We sign NDAs and have zero interest in stealing ideas. We're too busy building legendary MVPs." },
    { q: "What if I change my mind?", a: "Happens all the time! We're agile AF and pivot faster than a startup in YC Demo Day." },
    { q: "How fast is 'fast'?", a: "30 days from wireframe to wow. Most agencies take 6 months. We take 4 weeks. Math checks out." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Rocket className="h-8 w-8 text-emerald-400 animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">MVPE</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-emerald-400 transition-colors">Our Work</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 font-bold">
              Let's Talk 🚀
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-emerald-400/10 text-emerald-400 border-emerald-400/20 mb-4">
              ⚡ {mvpCount} MVPs launched this month
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Million-Dollar Idea
            </span>
            <br />Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We build MVPs that actually work. Fast, fun, and profitable.
            <br />
            <span className="text-emerald-400 font-semibold">Where Ideas Become Reality</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 font-bold text-lg px-8 py-4 transition-all duration-300 hover:scale-105">
              Let's Make It Happen 🚀
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 font-bold text-lg px-8 py-4">
              <PlayCircle className="mr-2 h-5 w-5" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose MVPE */}
      <section className="relative z-10 px-6 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              No BS, Just <span className="text-emerald-400">Results</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Zap className="h-12 w-12 text-emerald-400 mb-4" />
                <CardTitle className="text-2xl text-white">Lightning Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">30-day launches (not 6 months)</p>
                <p className="text-sm text-gray-400 mt-2">While others talk, we ship. Fast execution is our superpower.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-red-400 mb-4" />
                <CardTitle className="text-2xl text-white">Production Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Production-ready, not prototypes</p>
                <p className="text-sm text-gray-400 mt-2">Your MVP can handle real users from day one. No duct tape solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Star className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle className="text-2xl text-white">Actually Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">Enjoy the process, love the outcome</p>
                <p className="text-sm text-gray-400 mt-2">Building your MVP should be exciting, not stressful. We make it fun.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-emerald-400">Playground</span>
            </h2>
            <p className="text-xl text-gray-300">What we love building (and what we're damn good at)</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center">
                  <service.icon className="h-16 w-16 text-emerald-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 px-6 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We Speak Fluent <span className="text-emerald-400">Startup</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Our tech stack is modern, battle-tested, and scalable</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge key={index} className="bg-gray-700 text-white border-gray-600 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 text-lg px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing That Makes <span className="text-emerald-400">Sense</span>
            </h2>
            <p className="text-xl text-gray-300">No hidden fees, no BS. Just clear, honest pricing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Test the Waters</CardTitle>
                <div className="text-4xl font-bold text-blue-400">$12K</div>
                <CardDescription className="text-gray-300">Perfect for validating your idea</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />MVP in 30 days</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Core features only</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Basic design</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Launch support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-emerald-400/10 to-cyan-400/10 border-emerald-400 scale-105 hover:scale-110 transition-all duration-300">
              <CardHeader>
                <Badge className="bg-emerald-400 text-gray-900 w-fit">Most Popular</Badge>
                <CardTitle className="text-2xl text-white">Go Big</CardTitle>
                <div className="text-4xl font-bold text-emerald-400">$22K</div>
                <CardDescription className="text-gray-300">For serious entrepreneurs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />Full MVP in 30 days</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />Advanced features</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />Custom design</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />User analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />30-day support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-red-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Dominate</CardTitle>
                <div className="text-4xl font-bold text-red-400">$35K</div>
                <CardDescription className="text-gray-300">Enterprise-grade MVP</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-400 mr-2" />Premium MVP in 30 days</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-400 mr-2" />All features included</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-400 mr-2" />Premium design</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-400 mr-2" />Advanced analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-400 mr-2" />90-day support</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-400 mr-2" />Priority updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Happy <span className="text-emerald-400">Founders</span>
            </h2>
            <p className="text-xl text-gray-300">Real results from real entrepreneurs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-emerald-400/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-emerald-400">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-emerald-400">Real Talk</span>
            </h2>
            <p className="text-xl text-gray-300">Honest answers to your burning questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-emerald-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-emerald-400">Legend?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't let your idea die in a notes app. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 font-bold text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Fun Call
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-bold text-lg px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Tell Us Your Crazy Idea
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="h-6 w-6 text-emerald-400" />
            <span className="text-xl font-bold text-white">MVPE</span>
          </div>
          <p className="text-gray-400 mb-4">Made with 💚 and lots of coffee</p>
          <p className="text-gray-500 text-sm">MVPE - Making startup dreams come true since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
