import React from "react";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const courses = [
    "Data Structures & Algorithms",
    "Computer Systems",
    "Computer Architecture",
    "C programming",
    "Machine Learning",
    "Python",
    "Web Development",
    "Automation",
    "AI & LLM Pipeline",
    "Cloud Computing",
    "Accessibility in Technology",
    "Applied Discrete Mathematics",
  ];

  return (
    <section id="education" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          <span className="rounded-2xl bg-blue-100 p-3 text-blue-700">
            <GraduationCap aria-hidden="true" />
          </span>
          Education
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/80 transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold text-slate-950">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mt-2 text-lg font-semibold text-blue-700">
              University of California, Santa Cruz
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-black-500">
              <span>Expected Graduation: June 2027</span>
              <span>GPA: 3.96/4.0</span>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-slate-900">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-inset ring-blue-100"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
