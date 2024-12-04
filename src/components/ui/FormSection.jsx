import React from 'react';

export default function FormSection({ title, subtitle, children, className = '' }) {
  return (
    <section className={`py-4 border-bottom ${className}`}>
      <div className="container">
        <h2 className="h4 fw-semibold text-dark mb-2">{title}</h2>
        {subtitle && <p className="text-muted mb-4">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
