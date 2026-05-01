import React from "react";
import { Briefcase } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logoAlt: string;
  initials: string;
  logoTone: string;
};

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Software Engineer Intern",
      company: "Overture Maps Foundation (Project Terraforma)",
      period: "April 2026 -Present",
      description:
        "Developed geospatial data pipelines to link POIs with buildings and addresses using spatial joins and nearest-neighbor matching. Implemented confidence scoring, failure analysis, and validation systems to improve accuracy on large-scale, noisy real-world map data.",
      technologies: ["Python", "Pandas", "GeoPandas", "Shapely", "Geospatial Analysis", "Data Engineering"],
      logoAlt: "Overture Maps Foundation logo placeholder",
      initials: "OM",
      logoTone: "bg-sky-100 text-sky-700 ring-sky-200",
    },
    {
      title: "Engineering Team",
      company: "CruzHacks @ UC Santa Cruz",
      period: "September 2025 - Present",
      description:
        "Developed and maintained production web features for the CruzHacks website, supporting UCSC's largest hackathon with 600+ participants. Shipped responsive UI updates and live fixes under real-time constraints for HackDays and the hackathon.",
      technologies: ["TypeScript", "React", "HTML", "Tailwind CSS", "Git"],
      logoAlt: "CruzHacks logo placeholder",
      initials: "CH",
      logoTone: "bg-sky-100 text-sky-700 ring-sky-200",
    },
    {
      title: "Undergrad Researcher",
      company: "Artificial Intelligence Lab @ UC Santa Cruz",
      period: "January 2026 - Present",
      description:
        "Working on Touching Space, an accessibility-focused project building an audio–haptic map system to help blind and low-vision users understand and navigate spatial environments.",
      technologies: ["Prolog", "LLMs", "AI", "Reasoning"],
      logoAlt: "Artificial Intelligence Lab logo placeholder",
      initials: "AI",
      logoTone: "bg-violet-100 text-violet-700 ring-violet-200",
    },
    {
      title: "Co-founder",
      company: "CherryWheels.com (Social Venture)",
      period: "June 2024 - Present",
      description:
        "Built and scaled CherryWheels.com, a designer wheel cover venture for wheelchair users. Sold 100+ wheel covers and partnered with Ms. Wheelchair America, Help Hope Live, and other accessibility organizations.",
      technologies: ["Entrepreneurship", "Accessibility", "Women Empowerment", "Inclusion"],
      logoAlt: "Cherry Wheels logo placeholder",
      initials: "CW",
      logoTone: "bg-rose-100 text-rose-700 ring-rose-200",
    },
    {
      title: "Adobe Student Ambassador",
      company: "Adobe",
      period: "September 2024 - Present",
      description:
        "Tested new Adobe product features and workflows pre-launch, identified usability issues, and provided product feedback. Acted as a student liaison by translating student needs into actionable product recommendations.",
      technologies: ["Adobe Express", "Creativity", "Workshops", "Pre-launch testing"],
      logoAlt: "Adobe logo placeholder",
      initials: "AD",
      logoTone: "bg-red-100 text-red-700 ring-red-200",
    },
    {
      title: "Research Intern",
      company: "Readability Research Group, Adobe",
      period: "Jan 2023 - Jan 2024",
      description:
        "Analyzed and summarized 70+ research papers about reading genre and legibility across dyslexic and non-impaired readers. Generated design recommendations to improve digital readability and support ML tool exploration.",
      technologies: ["Readability", "Research Papers", "Adobe", "Varied User Groups"],
      logoAlt: "Adobe Readability Research Group logo placeholder",
      initials: "AR",
      logoTone: "bg-red-100 text-red-700 ring-red-200",
    }
    // {
    //   title: "President, Adobe Club",
    //   company: "UC Santa Cruz",
    //   period: "January 2026 - Present",
    //   description:
    //     "Led and scaled the student organization, driving campus-wide engagement with Adobe Creative Cloud tools through workshops, events, and student outreach.",
    //   technologies: ["Adobe", "Workshops", "Adobe Express", "Adobe Firefly", "Leadership"],
    //   logoAlt: "Adobe Club logo placeholder",
    //   initials: "AC",
    //   logoTone: "bg-amber-100 text-amber-700 ring-amber-200",
    // },
  ];

  return (
    <section id="experience" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          <span className="rounded-2xl bg-blue-50 p-3 text-blue-700">
            <Briefcase aria-hidden="true" />
          </span>
          Experience
        </h2>
        <div className="space-y-5">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ring-1 ${exp.logoTone}`}
                  aria-label={exp.logoAlt}
                  title={exp.logoAlt}
                >
                  {exp.initials}
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{exp.title}</h3>
                      <p className="mt-1 font-semibold text-blue-700">{exp.company}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-500 sm:text-right">{exp.period}</p>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{exp.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
