import React from "react";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-center overflow-x-auto py-3">
          <div className="flex min-w-max gap-2 sm:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
