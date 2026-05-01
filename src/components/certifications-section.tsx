import React from "react";
import { Award, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "August 2025 - August 2028",
      certificateUrl: "https://www.credly.com/badges/da0ca2a5-346b-4b6d-97c9-9db1d50fc47a",
    },
    {
      name: "Dean's Honors",
      issuer: "UC Santa Cruz",
      date: "Fall 2025, Winter 2025, Spring 2025",
    },
    {
      name: "Artificial Intelligence and Machine Learning by NVIDIA",
      issuer: "id Tech",
      date: "November 2023",
    },
    {
      name: "Leadership and Strategies powered by Harvard",
      issuer: "id Tech",
      date: "November 2023",
    },
    {
      name: "Intro to Generative AI",
      issuer: "Adobe",
      date: "February 2025",
      certificateUrl: "https://www.credly.com/badges/e30301c0-d700-490d-ac38-2cae3aea2391",
    },
    {
      name: "Small Biz Social Media Marketing",
      issuer: "Adobe",
      date: "February 2025",
      certificateUrl: "https://www.credly.com/badges/cb8ed200-4f8f-44bc-9a18-0034739b6aa6",
    },
  ];

  return (
    <section id="certifications" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          <span className="rounded-2xl bg-blue-100 p-3 text-blue-700">
            <Award aria-hidden="true" />
          </span>
          Certifications
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={`${cert.name}-${cert.issuer}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/80 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold leading-7 text-slate-950">{cert.name}</h3>
              <p className="mt-2 font-semibold text-blue-700">{cert.issuer}</p>
              <p className="mt-1 text-sm text-slate-500">{cert.date}</p>

              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Certificate
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
