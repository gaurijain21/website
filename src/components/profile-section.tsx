import React from 'react';

export function ProfileSection() {
  return (
    <section className="text-center py-12">
      <div className="mb-6">
        <img
          src="https://tryeasel.dev/placeholder.svg?width=200&height=200"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4 border-border shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-2">
        Gauri Jain
      </h1>
      <p className="text-xl text-muted-foreground">
        Computer Science BS @ UC Santa Cruz
      </p>
    </section>
  );
}