import React from "react";
import { Code, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  whatItIs: string;
  whyItMatters: string;
  technologies: string[];
  demo?: string;
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Accessibility Checker Web App (Live)",
      whatItIs:
        "Full-stack accessibility scanner that audits URLs with Axe-core and organizes issues by severity.",
      whyItMatters:
        "Accessibility issues are often hard to identify and prioritize; this tool surfaces them clearly and enables faster, actionable fixes for real usability barriers.",
      technologies: ["HTML", "CSS", "JavaScript", "Axe-core", "Vercel", "Render"],
      demo: "https://a11ywebcheck.vercel.app/",
    },
    {
      title: "ML Sign Language Recognition [In progress]",
      whatItIs:
        "Communication between signing and non-signing users is often limited; this model enables more natural interaction by translating gestures into understandable outputs.",
      whyItMatters:
        "Explores how ML can reduce communication barriers and support more accessible interaction between signing and non-signing users.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Deep Learning"],
      demo:
        "https://www.linkedin.com/feed/update/urn:li:activity:7432535551771279360/?originTrackingId=6k3E%2B3ZAALdOxuXvUQWV5Q%3D%3D",
    },
    {
      title: "AI Navigation App for Visually Impaired Users (CalHacks)",
      whatItIs:
        "Real-time navigation prototype using video streaming, computer vision, and AI agents to describe nearby surroundings.",
      whyItMatters:
        "Visually impaired users often lack real-time environmental context; this system converts surroundings into actionable audio guidance for independent navigation.",
      technologies: ["Python", "TensorFlow", "OpenCV", "LiveKit AI Agents", "Computer Vision"],
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7389786940994293760/",
    },
    {
      title: "World's Largest Digital Collage for Accessibility Community (Live)",
      whatItIs:
        "Community web page collecting accessibility advocates, organizations, and allies into a shared digital collage.",
      whyItMatters:
        "Accessibility efforts are often scattered and hard to discover; this platform centralizes voices and resources to improve visibility and collaboration.",
      technologies: ["HTML", "Accessibility", "Community", "Accessible Features"],
      demo: "https://tinyurl.com/Collage25",
    },
    {
      title: "Hybrid Note [In progress]",
      whatItIs:
        "OCR pipeline that processes scanned handwritten notes, extracts text, and structures it for digital storage and search.",
      whyItMatters:
        "Handwritten notes are difficult to search and reuse; this system converts them into structured digital text for easier retrieval and integration into workflows.",
      technologies: ["OCR", "Accessibility Research", "Evaluation", "Assistive Technology"],
    },
    // {
    //   title: "Corporate Comic Lab [In progress]",
    //   whatItIs:
    //     "Small front-end platform for publishing workplace-themed comics with a clean browsing experience.",
    //   whyItMatters:
    //     "Shows range beyond technical tools by combining UI polish, storytelling, and lightweight web publishing.",
    //   technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "Comics"],
    // },
  ];

  return (
    <section id="projects" className="bg-blue-50/55 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            <span className="rounded-2xl bg-white p-3 text-blue-700 shadow-sm">
              <Code aria-hidden="true" />
            </span>
            Projects
          </h2>
          {/* <p className="max-w-xl text-sm leading-6 text-slate-600">
            A mix of accessibility, AI, mobile, and data projects with practical user impact.
          </p> */}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/80 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold leading-7 text-slate-950">{project.title}</h3>

              <div className="mt-4 flex-1 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    What it is
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{project.whatItIs}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                    Why it matters
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{project.whyItMatters}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Demo
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400"
                  >
                    Demo
                    <ExternalLink size={15} aria-hidden="true" />
                  </span>
                )}

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
