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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
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
