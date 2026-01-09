import React from 'react';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'August 2025 - August 2028',
      certificateUrl: 'https://www.credly.com/badges/da0ca2a5-346b-4b6d-97c9-9db1d50fc47a'
    },
    {
      name: "Dean's Honors",
      issuer: 'UC Santa Cruz',
      date: 'Fall 2025, Winter 2025, Spring 2025'
      
    },
    {
      name: 'Artificial Intelligence and Machine Learning by NVIDIA',
      issuer: 'id Tech',
      date: 'November 2023'
    },
    {
      name: 'Leadership and Strategies powered by Harvard',
      issuer: 'id Tech',
      date: 'November 2023'
    },
    {
      name: 'Intro to Generative AI',
      issuer: 'Adobe',
      date: 'February 2025',
      certificateUrl: 'https://www.credly.com/badges/e30301c0-d700-490d-ac38-2cae3aea2391'
    },
    {
      name: 'Small Biz Social Media Marketing',
      issuer: 'Adobe',
      date: 'February 2025',
      certificateUrl: 'https://www.credly.com/badges/cb8ed200-4f8f-44bc-9a18-0034739b6aa6'
    },
    
  ];

  return (
    <section id="certifications" className="py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <Award className="text-primary" />
        Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {cert.name}
            </h3>
            <p className="text-primary font-medium">{cert.issuer}</p>
            <p className="text-muted-foreground text-sm">{cert.date}</p>
            
            {cert.certificateUrl && (
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
              >
                View Certificate →
              </a>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
}