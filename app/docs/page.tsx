"use client";

import React, { useState } from 'react';
import { docCategories, DocCategory, CipherDocCategory } from './data';
import { DocumentationSection } from './components/DocumentationSection';
import { MathBlock } from './components/MathBlock';
import { CodeBlock } from './components/CodeBlock';
import { ExampleCard } from './components/ExampleCard';
import { PlaygroundCard } from './components/PlaygroundCard';
import { ReferenceList } from './components/ReferenceList';

export default function DocumentationPage() {
  // Active state to track which category is clicked in the left sidebar
  const [activeSection, setActiveSection] = useState<DocCategory>(docCategories[0]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generalDocs = docCategories.filter(c => c.type === 'general');
  const cipherDocs = docCategories.filter(c => c.type === 'cipher');

  const handleCopy = (text: string, index: number) => {
    const cleanText = text.replace(/^\d+\.\s*/, '');
    navigator.clipboard.writeText(cleanText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const renderGeneralContent = () => {
    if (activeSection.type === 'cipher') return null;
    
    return (
      <div className="text-zinc-300 space-y-4 text-sm font-sans leading-relaxed">
        {activeSection.content.split('\n').map((paragraph, idx) => {
          
          // Bullet lists
          if (paragraph.startsWith('•')) {
            return (
              <div key={idx} className="flex items-center gap-3 pl-2 py-1 text-zinc-300 font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span>{paragraph.replace('• ', '')}</span>
              </div>
            );
          }

          // Terminal interactive commands with built-in clipboard copying
          if (paragraph.includes('git clone') || paragraph.includes('npm install') || paragraph.includes('npm run')) {
            return (
              <div key={idx} className="bg-zinc-950 rounded-lg p-4 border border-zinc-900 font-mono text-xs text-emerald-400 flex justify-between items-center group shadow-inner my-4">
                <code className="break-all">{paragraph}</code>
                <button 
                  onClick={() => handleCopy(paragraph, idx)}
                  className="text-xs bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 px-2.5 py-1 rounded border border-zinc-800 transition-all font-mono"
                >
                  {copiedIndex === idx ? 'Copied!' : 'Copy'}
                </button>
              </div>
            );
          }

          return <p key={idx} className="whitespace-pre-line">{paragraph}</p>;
        })}
      </div>
    );
  };

  const renderCipherContent = () => {
    if (activeSection.type !== 'cipher') return null;
    const cipher = activeSection as CipherDocCategory;
    
    return (
      <div className="text-zinc-300 space-y-8 text-sm font-sans leading-relaxed">
        <DocumentationSection title="Overview">
          <p><strong>History:</strong> {cipher.overview.history}</p>
          <p>{cipher.overview.description}</p>
        </DocumentationSection>

        <DocumentationSection title="Mathematics">
          <p className="text-zinc-400 mb-2">Encryption Formula:</p>
          <MathBlock formula={cipher.mathematics.encryptionFormula} />
          <p className="text-zinc-400 mt-6 mb-2">Decryption Formula:</p>
          <MathBlock formula={cipher.mathematics.decryptionFormula} />
          <ul className="list-disc list-inside space-y-2 mt-4 text-zinc-400">
            {cipher.mathematics.explanation.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        </DocumentationSection>

        <DocumentationSection title="Worked Example">
          <ExampleCard 
            plaintext={cipher.workedExample.plaintext}
            parameters={cipher.workedExample.parameters}
            steps={cipher.workedExample.steps}
            finalCiphertext={cipher.workedExample.finalCiphertext}
          />
        </DocumentationSection>

        <DocumentationSection title="Complexity & Security">
          <p><strong>Complexity:</strong> {cipher.complexity}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-lg p-4">
              <h4 className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest mb-3">Advantages</h4>
              <ul className="space-y-2">
                {cipher.securityAnalysis.advantages.map((adv, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span className="text-zinc-400 text-xs">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-4">
              <h4 className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest mb-3">Weaknesses</h4>
              <ul className="space-y-2">
                {cipher.securityAnalysis.weaknesses.map((weak, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span className="text-zinc-400 text-xs">{weak}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DocumentationSection>
        
        <DocumentationSection title="Real-world Applications">
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            {cipher.realWorldApplications.map((app, idx) => (
              <li key={idx}>{app}</li>
            ))}
          </ul>
        </DocumentationSection>

        <DocumentationSection title="Implementation Snippets">
          <p className="text-zinc-400 mb-2">Python:</p>
          <CodeBlock code={cipher.codeSnippets.python} language="python" />
          
          <p className="text-zinc-400 mt-6 mb-2">JavaScript:</p>
          <CodeBlock code={cipher.codeSnippets.javascript} language="javascript" />
        </DocumentationSection>

        <DocumentationSection title="Interactive Playground">
          <PlaygroundCard link={cipher.playgroundLink} />
        </DocumentationSection>

        <DocumentationSection title="References">
          <ReferenceList references={cipher.references} />
        </DocumentationSection>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black flex flex-col">
      
      {/* 🟢 TOP MINIMAL NAV BAR (Matches the top header bar in image_1b06be.png) */}
      <div className="w-full h-14 bg-zinc-950 border-b border-zinc-900 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
            CryptoViz // Docs
          </span>
          <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
            v1.0.0
          </span>
        </div>
        <div className="text-xs text-zinc-500 font-mono hidden md:block">
          Press <kbd className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">Ctrl</kbd> + <kbd className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">K</kbd> to search
        </div>
      </div>

      {/* 🧭 THREE-COLUMN HORIZONTAL WORKSPACE LAYOUT */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row">
        
        {/* 1️⃣ LEFT SIDEBAR: Structural Menu Panel */}
        <aside className="w-full md:w-64 bg-black border-b md:border-b-0 md:border-r border-zinc-900 p-6 md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] overflow-y-auto shrink-0 flex flex-col gap-8">
          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">
              Overview
            </h3>
            <nav className="space-y-1">
              {generalDocs.map((category) => {
                const isSelected = activeSection.title === category.title;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveSection(category)}
                    className={`w-full text-left px-3 py-2 rounded text-xs font-mono transition-all relative ${
                      isSelected
                        ? 'bg-zinc-900/80 text-emerald-400 font-semibold border-l-2 border-emerald-500 pl-4'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                    }`}
                  >
                    {category.title}
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">
              Ciphers
            </h3>
            <nav className="space-y-1">
              {cipherDocs.map((category) => {
                const isSelected = activeSection.title === category.title;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveSection(category)}
                    className={`w-full text-left px-3 py-2 rounded text-xs font-mono transition-all relative ${
                      isSelected
                        ? 'bg-zinc-900/80 text-emerald-400 font-semibold border-l-2 border-emerald-500 pl-4'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                    }`}
                  >
                    {category.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* 2️⃣ CENTER PANEL: Focused Main Documentation Reader */}
        <main className="flex-1 p-6 md:p-10 max-w-3xl overflow-y-auto">
          {/* Breadcrumb pathing layer */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
            <span>Docs</span>
            <span>/</span>
            <span>Architecture</span>
            <span>/</span>
            <span className="text-emerald-500">{activeSection.title}</span>
          </div>

          {/* Section Main Header Title */}
          <h1 className="text-3xl font-mono font-bold text-white tracking-tight mb-2">
            {activeSection.title}
          </h1>
          <p className="text-sm font-sans text-zinc-400 border-b border-zinc-900 pb-6 mb-6 leading-relaxed">
            {activeSection.description}
          </p>

          {/* Interactive Document Content Splitting */}
          {activeSection.type === 'cipher' ? renderCipherContent() : renderGeneralContent()}

          {/* Core contextual hint card */}
          <div className="mt-10 p-4 bg-zinc-950 border border-zinc-900 rounded flex gap-3 items-start">
            <span className="text-emerald-400 font-mono text-xs font-bold mt-0.5">[!]</span>
            <p className="text-xs text-zinc-500 font-sans leading-relaxed">
              Ensure you review corresponding module logic criteria contained inside your local project workspace repository within the <code className="text-zinc-300 font-mono">tests/unit/</code> directory.
            </p>
          </div>
        </main>

        {/* 3️⃣ RIGHT SIDEBAR: "On This Page" Quick-Jump Track Outline */}
        <aside className="hidden xl:block w-56 p-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
            On This Page
          </h4>
          <ul className="space-y-2.5 text-xs font-mono text-zinc-500">
            <li className={`cursor-pointer transition-colors ${activeSection.type === 'general' ? 'text-emerald-400/80 hover:text-emerald-400' : 'hover:text-zinc-300'}`}>Overview</li>
            <li className={`cursor-pointer transition-colors ${activeSection.type === 'cipher' ? 'text-emerald-400/80 hover:text-emerald-400' : 'hover:text-zinc-300'}`}>Ciphers</li>
          </ul>
        </aside>

      </div>
    </div>
  );
}