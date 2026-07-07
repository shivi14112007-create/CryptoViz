import React from 'react';
import Link from 'next/link';

interface PlaygroundCardProps {
  link: string;
}

export const PlaygroundCard: React.FC<PlaygroundCardProps> = ({ link }) => {
  return (
    <div className="mt-10 p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/30 rounded-lg flex flex-col sm:flex-row gap-4 items-center justify-between shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 text-center sm:text-left">
        <h3 className="text-white font-mono font-bold text-lg mb-1 tracking-tight">Interactive Playground</h3>
        <p className="text-zinc-400 text-sm font-sans">Experiment with this cipher in real-time, visualizing transformations step-by-step.</p>
      </div>
      
      <Link href={link} className="relative z-10 shrink-0">
        <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold px-6 py-2.5 rounded transition-all shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95 flex items-center gap-2">
          Try this cipher
          <span className="text-lg leading-none">→</span>
        </button>
      </Link>
    </div>
  );
};
