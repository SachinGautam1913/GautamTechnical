'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4198f5156?w=500&h=300&fit=crop',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and progress with real-time analytics and social features.',
    category: 'App Development',
    tags: ['React Native', 'Firebase', 'Redux', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=500&h=300&fit=crop',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'Enterprise dashboard for team collaboration with real-time updates, project management, and reporting tools.',
    category: 'Web Development',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'AI-powered platform for generating marketing content with customizable templates and brand voice.',
    category: 'Web Development',
    tags: ['Next.js', 'OpenAI', 'Vercel', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d7f1a436ebdb1b31c944b4a4?w=500&h=300&fit=crop',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search, virtual tours, and buyer-seller communication tools.',
    category: 'eCommerce',
    tags: ['React', 'Express', 'PostgreSQL', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Healthcare Booking App',
    description: 'Patient management system with appointment scheduling, prescription tracking, and telemedicine integration.',
    category: 'App Development',
    tags: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31c74?w=500&h=300&fit=crop',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />

      {/* Page Title */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Our Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Portfolio of <span className="text-accent">Exceptional Projects</span>
            </h1>
            <p className="text-lg text-foreground/70 text-balance">
              Explore our latest projects across web development, mobile apps, and digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gold-btn'
                    : 'border border-border bg-transparent text-foreground/80 hover:text-accent hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="service-card group flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-lg mb-6 bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent text-primary rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={20} />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-accent text-primary rounded-full hover:scale-110 transition-transform"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-2">{project.title}</h3>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-medium text-accent border border-accent rounded hover:bg-accent hover:text-primary transition-all duration-300 text-center"
                  >
                    View Live
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm font-medium text-accent border border-accent rounded hover:bg-accent hover:text-primary transition-all duration-300 text-center"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing. Get in touch with our team today.
            </p>
            <a href="/contact" className="gold-btn inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
