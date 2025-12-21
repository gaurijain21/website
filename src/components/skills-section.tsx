import React from 'react';
import { Wrench } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']
    },
    {
      category: 'Web Technologies',
      skills: ['React', 'Node.js', 'HTML/CSS', 'Express.js', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Figma']
    },
    {
      category: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'Agile', 'Testing']
    }
  ];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <Wrench className="text-primary" />
        Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}