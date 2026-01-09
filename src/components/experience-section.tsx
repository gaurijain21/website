import React from 'react';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Engineering Team',
      company: 'CruzHacks @ UC Santa Cruz',
      period: 'September 2025 - Present',
      description: 'Developed and maintained production web features for the CruzHacks website, supporting UCSC’s largest hackathon with 600+ participants. Shipped responsive UI updates and live fixes under real-time contraints for HackDays and Hackathon',
      technologies: ['TypeScript', 'React', 'HTML', 'Tailwind CSS', 'Git']
    },
    {
      title: 'Undergrad Researcher',
      company: 'Artificial Intelligence Lab @ UC Santa Cruz',
      period: 'January 2026 - Present',
      description: 'Working on LLM logic project focused on translating natural-language legal documents into Prolog to enable structured reasoning.',
      technologies: ['Prolog', 'LLMs', 'AI', 'Reasoning']
    },
    {
      title: 'Co-founder',
      company: 'CherryWheels.com (Social Venture)',
      period: 'June 2024 - Present',
      description: 'Built and scaled my startup CherryWheels.com (designer wheel covers for wheelchair users), sold 100+ wheel covers, partnered with Ms. Wheelchair America, Help Hope Live and other Accessibility organizations',
      technologies: ['Entrepreneurship', 'Accessibility', 'Women Empowerment', 'Inclusion']
    },
    {
      title: 'Adobe Student Ambassador',
      company: 'Adobe',
      period: 'September 2024 - Present',
      description: 'Tested new Adobe product features and workflows pre-launch, identifying usability issues and providing feedback to product teams to improve user experience. Acted as a student liaison, gathering user insights and translating student needs into actionable product recommendations.',
      technologies: ['Adobe Express', 'Creativity', 'Workshops', 'Pre-launch testing']
    },
    {
      title: 'Research Intern',
      company: 'Readability Research Group, Adobe',
      period: 'Jan 2023 - Jan 2024',
      description: 'Analyzed & summarized 70+ research papers (genre of reading & legibility), spread across dyslexic & non- impaired readers with respect to their reading speed, accuracy, & comprehension across digital surfaces. Generated design recommendations to improve digital redability which were algorithmically programmed to explore the creation of ML tools.',
      technologies: ['Readability', 'Research Papers', 'Adobe', 'Varied User Groups']
    },
    {
      title: 'President, Adobe Club',
      company: 'UC Santa Cruz',
      period: 'January 2026 - Present',
      description: 'Led and scaled the student organization, driving campus-wide engagement with Adobe Creative Cloud tools.',
      technologies: ['Adobe', 'Workshops', 'Adobe Express', 'Adobe Firefly', 'Creativity', 'Leadership']
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