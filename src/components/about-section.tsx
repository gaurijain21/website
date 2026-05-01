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
            Hi, I’m Gauri Jain, a Computer Science student at UC Santa Cruz. Welcome to my website!
            <br /><br />

            I’m interested in building software that is practical, thoughtful, and easy to use. I enjoy working across both the technical and user-facing sides of a project: designing features, writing structured code, debugging problems, and improving how an application feels for the people using it.
            <br /><br />

            I also care deeply about digital accessibility and believe software should be built to work well for a wide range of users. I’m interested in creating solutions that are not just technically strong, but also inclusive and user-centered.
          </p>
        </div>
      </div>
    </section>
  );
}
