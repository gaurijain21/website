import React from 'react';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Engineering Team',
      company: 'CruzHacks @ UC Santa Cruz',
      period: 'September 2025 - Present',
      description: 'Developed web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Git']
    },
    {
      title: 'Auditor',
      company: 'AIEA Lab @ UC Santa Cruz',
      period: 'January 2026 - Present',
      description: '',
      technologies: ['Java', 'Python', 'Teaching', 'Mentoring']
    },
    {
      title: 'Co-founder',
      company: 'CherryWheels.com (Social Venture)',
      period: 'June 2024 - Present',
      description: '',
      technologies: ['Java', 'Python', 'Teaching', 'Mentoring']
    },
    {
      title: 'Adobe Student Ambassador',
      company: 'Adobe',
      period: 'September 2024 - Present',
      description: '',
      technologies: ['Java', 'Python', 'Teaching', 'Mentoring']
    },
    {
      title: 'Research intern',
      company: 'Readability Research Group, Adobe',
      period: 'June 2024 - Present',
      description: '',
      technologies: ['Java', 'Python', 'Teaching', 'Mentoring']
    }
  ];

  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <Briefcase className="text-primary" />
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-muted-foreground">{exp.period}</p>
            </div>
            <p className="text-card-foreground mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}