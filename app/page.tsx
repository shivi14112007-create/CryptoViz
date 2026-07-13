"use client";
import HeroIllustration from "@/components/HeroIllustration";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/layout/Navbar";
import Typewriter from "../components/layout/typewriter";
import SkeletonCard from "../components/ui/SkeletonCard";
import {
  Shield,
  Lock,
  KeyRound,
  Cpu,
} from "lucide-react";
import { Zap, ShieldCheck, BookOpen } from "lucide-react";

import Footer from "../components/layout/footer";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  const categories = [
    {
      title: "Classical Ciphers",
      description:
        "Explore the foundations of cryptography: Caesar, ROT13, Vigenère, Playfair, and Rail Fence transposition ciphers.",
      icon: (
        <svg
          className="h-6 w-6 text-teal-600 dark:text-teal-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "/visualizer/caesar/",
      glowClass: "hover:shadow-[0_0_25px_rgba(13,148,136,0.15)] dark:hover:shadow-[0_0_25px_rgba(20,184,166,0.15)]"
    },
    {
      title: "Symmetric Cryptosystems",
      description:
        "Watch block and stream ciphers like XOR, One-Time Pad, DES, Triple-DES, and standard AES expand keys and encrypt blocks.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      link: "/visualizer/aes/",
      glowClass: "hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]"
    },
    {
      title: "Secure Hash Functions",
      description:
        "Analyse compression, round constants, and padding structures of MD5, SHA-256, SHA-512, HMAC, and Bcrypt derivation.",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "/visualizer/sha256/",
      glowClass: "hover:shadow-[0_0_25px_rgba(5,150,105,0.15)] dark:hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
    },
    {
      title: "Asymmetric Cryptography",
      description:
        "Demystify RSA encryption, Diffie-Hellman key exchanges (featuring paint mixing), and ECDSA P-256 elliptic signatures.",
      icon: (
        <svg
          className="h-6 w-6 text-rose-600 dark:text-rose-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      ),
      link: "/visualizer/rsa/",
      glowClass: "hover:shadow-[0_0_25px_rgba(225,29,72,0.15)] dark:hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]"
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans transition-colors duration-300">
      <Navbar />

      <Analytics />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-50 dark:bg-[#060816]">

        {/* Full Hero Ambient Glow */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Left Cyan */}
          <div className="absolute -left-72 top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[180px] animate-[ambientGlow_10s_ease-in-out_infinite]"></div>

          {/* Right Purple */}
          <div className="absolute -right-72 top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full bg-violet-500/20 blur-[180px] animate-[ambientGlow_12s_ease-in-out_infinite_reverse]" />

          {/* Center Blue */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[150px]" />

        </div>

        {/* Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-cyan-500/10 shadow-[0_0_120px_rgba(34,211,238,0.12)]" />
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[220px] animate-pulse" />

          {/* Left Glow */}
          <div className="absolute -left-56 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[180px]" />

          {/* Right Glow */}
          <div className="absolute -right-56 top-0 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[180px]" />

          {/* Bottom Glow */}
          <div className="absolute left-1/2 bottom-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[160px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
        `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-20 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_520px]">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                ⚡ Interactive Cryptography Playground
              </div>

              <div className="absolute left-10 top-24 h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              <div className="absolute left-72 top-40 h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />

              <div className="absolute left-56 top-80 h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

              <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight text-zinc-900 dark:text-white lg:text-5xl">

                Interact with

                <span className="block mt-2">
                  Modern
                </span>

                <span className="block w-fit bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(56,189,248,.35)]">
                  Cryptography
                </span>

              </h1>

              <div className="mt-3 flex min-h-[30px] text-2xl font-semibold">
                <Typewriter
                  words={[
                    "Visualised in Real-Time.",
                    "Learn by Experimenting.",
                    "Explore Modern Algorithms."
                  ]}
                />
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Learn encryption, hashing and secure communication through
                beautiful interactive visualisations designed for students,
                developers and security enthusiasts.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/visualizer/caesar/"
                  className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:scale-105"
                >
                  Open Playground →
                </Link>

                <a
                  href="/docs"
                  className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:border-cyan-500 hover:bg-zinc-800"
                >
                  Documentation
                </a>

              </div>

              <div className="mt-14 grid grid-cols-3 gap-4">

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,.18)]">
                  <h3 className="text-lg font-semibold text-white"><Zap className="mb-4 text-cyan-400" size={22} /> Interactive</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    Live playground
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,.18)]">
                  <h3 className="text-lg font-semibold text-white"><ShieldCheck className="mb-4 text-cyan-400" size={22} /> Secure</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    Modern algorithms
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,.18)]">
                  <h3 className="text-lg font-semibold text-white"><BookOpen className="mb-4 text-cyan-400" size={22} /> Learn</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    Step-by-step
                  </p>
                </div>

              </div>

            </div>
            {/* RIGHT  */}
            <div className="relative -translate-y-8 flex items-center justify-center">

              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      < section className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8" >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)
            : categories.map((cat, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 dark:border-zinc-850 dark:bg-zinc-900/40 ${cat.glowClass}`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-950/50">
                    {cat.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-3 border-t border-zinc-100 pt-4 dark:border-zinc-850">
                  <Link
                    href={cat.link}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Explore Category
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section >

      {/* Tech Stack Info Banner */}
      < section className="mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8 text-center" >
        <div className="rounded-2xl border border-zinc-200/60 bg-zinc-50 p-6 dark:border-zinc-850 dark:bg-zinc-900/10">
          <span className="text-2xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Performance & Security Stack
          </span>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Next.js
              15 Static Export
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Web
              Worker Parallel Threading
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Tailwind
              v4 CSS Engine
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Zero
              Server Overhead
            </span>
          </div>
        </div>
      </section >
      <Footer />


    </div >
  );
}