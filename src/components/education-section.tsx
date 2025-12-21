import React from 'react';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <GraduationCap className="text-primary" />
        Education
      </h2>
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-card-foreground">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-primary font-medium">University of California, Santa Cruz</p>
          <p className="text-muted-foreground">Expected Graduation: June 2027</p>
          <p className="text-muted-foreground">GPA: 3.96/4.0</p>
        </div>
        <div>
          <h4 className="font-semibold text-card-foreground mb-2">Relevant Coursework:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'Data Structures & Algorithms',
              'Computer Systems',
              'Computer Architecture',
              'C programming',
              'Machine Learning',
              'Python',
              'Probability Theory',
              'Applied Discrete Mathematics'
            ].map((course) => (
              <span
                key={course}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}