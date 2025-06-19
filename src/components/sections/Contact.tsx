
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', values);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 opacity-50" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-grotesk font-black text-4xl md:text-6xl tracking-tighter mb-6">
            START SOMETHING
            <br />
            <span className="text-orange-500">EXTRAORDINARY</span>
          </h2>
          <p className="font-neue text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something that moves people.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          {/* Floating label inputs */}
          <div className="relative">
            <Input
              type="text"
              value={values.name}
              onChange={(e) => setValues(prev => ({ ...prev, name: e.target.value }))}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg font-neue focus:border-orange-500 transition-colors duration-300"
              placeholder=" "
            />
            <label 
              className={`absolute left-0 transition-all duration-300 pointer-events-none font-neue ${
                focused === 'name' || values.name
                  ? '-top-6 text-sm text-orange-500'
                  : 'top-4 text-lg text-gray-500'
              }`}
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <Input
              type="email"
              value={values.email}
              onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg font-neue focus:border-orange-500 transition-colors duration-300"
              placeholder=" "
            />
            <label 
              className={`absolute left-0 transition-all duration-300 pointer-events-none font-neue ${
                focused === 'email' || values.email
                  ? '-top-6 text-sm text-orange-500'
                  : 'top-4 text-lg text-gray-500'
              }`}
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea
              value={values.project}
              onChange={(e) => setValues(prev => ({ ...prev, project: e.target.value }))}
              onFocus={() => setFocused('project')}
              onBlur={() => setFocused(null)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg font-neue focus:border-orange-500 transition-colors duration-300 resize-none h-24"
              placeholder=" "
            />
            <label 
              className={`absolute left-0 transition-all duration-300 pointer-events-none font-neue ${
                focused === 'project' || values.project
                  ? '-top-6 text-sm text-orange-500'
                  : 'top-4 text-lg text-gray-500'
              }`}
            >
              Tell us about your project
            </label>
          </div>

          <div className="text-center pt-8">
            <Button 
              type="submit"
              size="lg"
              className="bg-black text-white hover:bg-orange-500 px-12 py-4 text-lg font-grotesk font-bold tracking-wider transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              SEND MESSAGE
            </Button>
          </div>
        </form>

        {/* Final CTA */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <p className="font-neue text-gray-600 mb-4">
            Or just say hello —
          </p>
          <a 
            href="mailto:hello@agency.com" 
            className="font-grotesk font-bold text-2xl text-orange-500 hover:text-black transition-colors duration-300"
          >
            hello@agency.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
