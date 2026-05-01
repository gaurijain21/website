import React from "react";
import { BrainCircuit, Cloud, Code2, HeartHandshake, Layout, Wrench } from "lucide-react";

const iconMap = {
  Languages: Code2,
  Frontend: Layout,
  "Backend/Cloud": Cloud,
  "AI/Computer Vision": BrainCircuit,
  Tools: Wrench,
  "Soft Skills": HeartHandshake,
};

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "SQL", "HTML", "CSS", "RISC-V Assembly"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Responsive Design", "Accessibility"],
    },
    {
      category: "Backend/Cloud",
      skills: ["Node.js", "Flask", "Firebase", "Render", "Vercel", "AWS", "REST APIs", "Stripe"],
    },
    {
      category: "AI/Computer Vision",
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Figma", "Jetson Nano", "Adobe Express", "Adobe Firefly"],
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Research", "Product Feedback", "Public Speaking", "Inclusion", "Agile Development"],
    },
  ];

  return (
    <section id="skills" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          <span className="rounded-2xl bg-blue-50 p-3 text-blue-700">
            <Wrench aria-hidden="true" />
          </span>
          Skills
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.category as keyof typeof iconMap];
            return (
              <article
                key={category.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-xl bg-blue-50 p-2 text-blue-700">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-950">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
