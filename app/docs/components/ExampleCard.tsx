import React from 'react';

interface Step {
  description: string;
  result: string;
}

interface ExampleCardProps {
  plaintext: string;
  parameters: string;
  steps: Step[];
  finalCiphertext: string;
}

export const ExampleCard: React.FC<ExampleCardProps> = ({ plaintext, parameters, steps, finalCiphertext }) => {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden my-6 shadow-xl">
      {/* Header */}
      <div className="bg-zinc-900/40 p-4 border-b border-zinc-900 flex justify-between items-center">
        <div>
          <span className="text-xs text-zinc-500 font-mono block mb-1">Plaintext</span>
          <span className="text-white font-mono font-bold tracking-widest">{plaintext}</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-zinc-500 font-mono block mb-1">Parameters</span>
          <span className="text-emerald-400 font-mono text-sm">{parameters}</span>
        </div>
      </div>

      {/* Steps */}
      <div className="p-4 space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-mono pb-3 border-b border-zinc-900/50 last:border-0 last:pb-0">
            <span className="text-zinc-600 min-w-[24px]">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-zinc-400 flex-1">{step.description}</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              {step.result}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-emerald-500/5 p-4 border-t border-emerald-500/20 flex justify-between items-center">
        <span className="text-xs text-emerald-500/70 font-mono font-bold uppercase tracking-widest">Final Ciphertext</span>
        <span className="text-emerald-400 font-mono font-bold text-lg tracking-widest">{finalCiphertext}</span>
      </div>
    </div>
  );
};
