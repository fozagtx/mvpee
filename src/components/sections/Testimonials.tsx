
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "They didn't just meet our expectations—they redefined what we thought was possible.",
    author: "Sarah Chen",
    company: "Vertex Studios"
  },
  {
    text: "Working with them felt like having a creative partner who truly understood our vision.",
    author: "Marcus Thompson",
    company: "Bloom & Co"
  },
  {
    text: "The attention to detail and creative insight exceeded everything we hoped for.",
    author: "Elena Rodriguez",
    company: "Future Labs"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="relative h-80 flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <blockquote className="font-neue text-2xl md:text-3xl leading-relaxed mb-8 text-gray-800">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-grotesk font-bold text-lg tracking-wider not-italic">
                {testimonial.author}
                <span className="font-neue font-normal text-orange-500 ml-2">
                  {testimonial.company}
                </span>
              </cite>
            </div>
          ))}
        </div>

        {/* Minimal indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
