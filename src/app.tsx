import React from "react";

import { Navigation } from "./components/navigation";
import { ProfileSection } from "./components/profile-section";
import { AboutSection } from "./components/about-section";
import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { CertificationsSection } from "./components/certifications-section";
import { SkillsSection } from "./components/skills-section";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />

      <main>
        <ProfileSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
      </main>
    </div>
  );
}
