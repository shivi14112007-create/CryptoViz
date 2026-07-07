import React from 'react';

interface MathBlockProps {
  formula: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({ formula }) => {
  return (
    <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-900 shadow-inner my-4 flex items-center justify-center overflow-x-auto">
      <code className="text-emerald-400 font-mono text-lg break-words whitespace-pre-wrap text-center">
        {formula}
      </code>
    </div>
  );
};
