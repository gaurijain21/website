import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import gauriImg from "./Gauri.png";

export function ProfileSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 to-cyan-700">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.22),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="text-center md:text-left">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 shadow-sm backdrop-blur">
            Computer Science BS @ UC Santa Cruz
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm Gauri Jain
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
            Computer Science student building accessibility-focused software and AI systems.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-blue-100 md:justify-start">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              San Jose, California | iamgaurijain@gmail.com
            </span>
            {/* <span className="hidden h-1 w-1 rounded-full bg-blue-200 sm:inline-block" />
            {/* <a
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-indigo-900"
              href="mailto:iamgaurijain@gmail.com"
            >
              iamgaurijain@gmail.com
            </a> */} 
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="https://www.linkedin.com/in/gaurijain21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/gaurijain21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href="mailto:iamgaurijain@gmail.com"
              aria-label="Email Gauri Jain"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
            >
              <Mail size={18} aria-hidden="true" />

            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-full border border-white/20 bg-white/10 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <img
              src={gauriImg}
              alt="Gauri Jain"
              width={420}
              height={420}
              className="aspect-square w-full rounded-full object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
