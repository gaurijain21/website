import React from 'react';
import { Linkedin, Github } from 'lucide-react';


export function ProfileSection() {
  return (
    <section className="text-center py-12">
      <div className="mb-6">
        <img
          src="https://tryeasel.dev/placeholder.svg?width=200&height=200"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4 border-border shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-2">
        Gauri Jain
      </h1>
      <p className="text-xl text-muted-foreground">
        Computer Science BS @ UC Santa Cruz
      </p> 
      <p> San Jose, California  |  iamgaurijain@gmail.com</p>
      <div className="flex justify-center gap-5 mt-4">
        
        
        <a
          href="https://www.linkedin.com/in/gaurijain21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="https://github.com/gaurijain21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
        >
          <Github size={22} /> 
        </a>
      </div>
      <p className="text-xl text-muted-foreground">
      
      </p>
    </section>
  );
}