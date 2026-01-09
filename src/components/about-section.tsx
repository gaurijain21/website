import React from 'react';


export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-bold text-card-foreground mb-4">🙋‍♀️About Me</h2>
        <p className="text-card-foreground leading-relaxed">
          Hi I’m Gauri Jain, a Computer Science student at UC Santa Cruz who enjoys building things, understanding how systems work, and turning ideas into clear, well-structured solutions. 
          I like working on projects where I can think through problems step by step, write clean and logical code, and see something tangible come together. 
          I care strongly about digital accessibility and think about how software can be built to work well for a wide range of users!
          I’m also the co-founder of CherryWheels, a women-founded community initiative focused on confidence and self-expression for wheelchair users through designer wheel covers. 
          
        </p>
      </div>
    </section>
  );
}