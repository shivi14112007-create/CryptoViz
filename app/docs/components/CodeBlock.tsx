"use client";

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-900 shadow-inner my-4 overflow-hidden group">
      {language && (
        <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-900 flex justify-between items-center">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{language}</span>
          <button 
            onClick={handleCopy}
            className="text-[10px] bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 px-2 py-1 rounded border border-zinc-800 transition-all font-mono opacity-0 group-hover:opacity-100"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto relative">
        {!language && (
          <button 
            onClick={handleCopy}
            className="absolute top-2 right-2 text-[10px] bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 px-2 py-1 rounded border border-zinc-800 transition-all font-mono opacity-0 group-hover:opacity-100"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
        <code className="text-emerald-400/90 font-mono text-xs whitespace-pre">
          {code}
        </code>
      </div>
    </div>
  );
};
