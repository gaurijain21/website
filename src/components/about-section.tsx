import React from "react";
import { UserRound } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-2xl bg-blue-50 p-3 text-blue-700">
            <UserRound aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            About Me
          </h2>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70 sm:p-9">
          <p className="text-lg leading-8 text-slate-700">
            Hi I'm Gauri Jain, a Computer Science student at UC Santa Cruz who enjoys building
            things, understanding how systems work, and turning ideas into clear,
            well-structured solutions. I like working on projects where I can think through
            problems step by step, write clean and logical code, and see something tangible come
            together. I care strongly about digital accessibility and think about how software
            can be built to work well for a wide range of users! I'm also the co-founder of
            CherryWheels, a women-founded community initiative focused on confidence and
            self-expression for wheelchair users through designer wheel covers.
          </p>
        </div>
      </div>
    </section>
  );
}
