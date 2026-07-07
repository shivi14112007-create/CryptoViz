import React from 'react';

interface DocumentationSectionProps {
  title: string;
  children: React.ReactNode;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-mono font-bold text-white tracking-tight mb-4 pb-2 border-b border-zinc-900">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};
