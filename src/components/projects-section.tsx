import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Website Accessibility Compliance Web Application',
      description: 'Full-stack web application with user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Stripe API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Navigation App for Visually Impaired Users',
      description: 'CNN model for image classification with 95% accuracy on test dataset.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Jupyter'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Digital Accessibility for All Research project',
      description: 'Cross-platform mobile app for task management with real-time synchronization.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <Code className="text-primary" />
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-card-foreground mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">Code</span>
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}