import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'A11yWebCheck: Website Accessibility Compliance Checker (Live)',
      description: 'Full-stack web application that checks website accessibility and ADA compliance, categorizes issues by severity, and shows actionable fixes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Axe-core', 'Vercel', 'Render', 'Accessible Features'],
      demo: 'https://a11ywebcheck.vercel.app/'
    },
    {
      title: 'AI Navigation App for Visually Impaired Users',
      description: 'Built an AI-powered navigation app for visually impaired users using real-time video streaming and computer vision to detect and describe surroundings.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'LiveKit AI Agents', 'Computer Vision'],
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7389786940994293760/'
      
    },
    {
      title: "World's Largest Digital Collage for Accessibility Community (Live)",
      description: 'A digital initiative to bring together individuals, organizations, and allies from the global accessibility community together on one page.',
      technologies: ['HTML', 'Accessibility', 'Accessible Features'],
      demo: 'https://tinyurl.com/Collage25'
    },
    {
      title: 'Digital Accessibility for All Research project',
      description: 'Conducted Digital Accessibility evaluation for UCSC website. Granted funding from UCSC Student Project funds. Showcased in Baskin Engineering ACM Conference 2025.',
      technologies: ['Research Paper', 'Accessibility', 'Conference'],
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
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Demo</span>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}