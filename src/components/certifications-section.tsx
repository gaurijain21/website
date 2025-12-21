import React from 'react';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'ABC123456'
    },
    {
      name: 'Google IT Support Professional Certificate',
      issuer: 'Google',
      date: 'January 2024',
      credentialId: 'DEF789012'
    },
    {
      name: 'Oracle Java SE 11 Developer',
      issuer: 'Oracle',
      date: 'November 2023',
      credentialId: 'GHI345678'
    }
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
            <p className="text-muted-foreground text-sm">
              Credential ID: {cert.credentialId}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}