import React from 'react';
import { Wrench } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'SQL', 'HTML', 'CSS','Risc-V Assembly']
    },
    {
      category: 'Frameworks & Backend',
      skills: ['React', 'Node.js', 'Next.js', 'Expo', 'Flask', 'SQL', 'Firebase', 'Render']
    },
    {
      category: 'Libraries and ML',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'OpenCV', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'AWS', 'VS Code', 'Figma', 'Vercel', 'Jetson Nano', 'Stripe']
    },
    {
      category: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'REST APIs', 'Testing', 'Agile Development', 'Accessibile website']
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