
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ETHEREAL",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    description: "Luxury fashion brand reimagined for the digital age"
  },
  {
    id: 2,
    title: "MOMENTUM",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
    description: "Interactive platform for creative professionals"
  },
  {
    id: 3,
    title: "NEXUS",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop",
    description: "Revolutionary fintech application interface"
  },
  {
    id: 4,
    title: "AURORA",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop",
    description: "Immersive exhibition design and curation"
  }
];

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 
            className={`font-grotesk font-black text-4xl md:text-6xl tracking-tighter mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            SELECTED WORKS
          </h2>
          <div 
            className={`w-24 h-0.5 bg-orange-500 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredProject === project.id ? 'scale-110 blur-none' : 'scale-100 blur-sm'
                  }`}
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-60' : 'opacity-30'
                  }`}
                />

                {/* Content */}
                <div 
                  className={`absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8 transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h3 className="font-grotesk font-black text-3xl md:text-4xl tracking-tighter mb-2">
                    {project.title}
                  </h3>
                  <p className="font-neue text-sm uppercase tracking-wider mb-4 text-orange-500">
                    {project.category}
                  </p>
                  <p className="font-neue text-lg max-w-xs leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ExternalLink className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
