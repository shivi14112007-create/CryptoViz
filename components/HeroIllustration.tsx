"use client";
import {
    Shield,
    Lock,
    Cpu,
    KeyRound,
} from "lucide-react";

export default function HeroIllustration() {
    return (
        <div className="relative flex h-[620px] w-[620px] -my-6 items-center justify-center overflow-visible">
            <div className="absolute -left-24 top-10 h-[500px] w-[500px] rounded-full border border-cyan-500/10" />

            <div className="absolute right-[-120px] top-28 h-[420px] w-[420px] rounded-full border border-violet-500/10" />

            <div className="absolute left-[90px] top-[40px] h-[460px] w-[460px] rotate-12 rounded-full border border-cyan-400/5" />

            {/* Background Glow */}
            <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[170px]" />

            <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[150px]" />

            {/* Main Illustration Area */}
            <div className="relative h-[520px] w-[520px]">

                {/* Light Beam */}
                <div className="absolute bottom-[72px] left-1/2 h-[210px] w-[140px] -translate-x-1/2 bg-gradient-to-t from-cyan-400/25 via-cyan-400/10 to-transparent blur-2xl" />
                {/* Platform */}

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

                    <div className="relative">

                        <div className="h-8 w-56 rounded-full bg-cyan-400/20 blur-xl" />

                        <div className="absolute inset-0 rounded-full border border-cyan-400/50" />

                        <div className="absolute inset-3 rounded-full border border-cyan-400/20" />

                        <div className="absolute -inset-3 rounded-full border border-cyan-400/10" />

                    </div>

                </div>
                {/* Orbit Ring 1 */}
                <div
                    className="absolute left-1/2 top-1/2 h-[420px] w-[420px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full border border-cyan-400/15"
                    style={{
                        transform:
                            "translate(-50%,-50%) rotateX(72deg) rotateZ(18deg)",
                    }}
                />

                {/* Orbit Ring 2 */}
                <div
                    className="absolute left-1/2 top-1/2 h-[330px] w-[330px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full border border-violet-400/20
  animate-spin"
                    style={{
                        animationDuration: "24s",
                        transform:
                            "translate(-50%,-50%) rotateX(72deg) rotateY(25deg)",
                    }}
                />

                {/* Orbit Ring 3 */}
                <div
                    className="absolute left-1/2 top-1/2 h-[470px] w-[470px]
  -translate-x-1/2 -translate-y-1/2
  rounded-full border border-violet-500/15"
                    style={{
                        transform:
                            "translate(-50%,-50%) rotateX(70deg) rotateY(-30deg)",
                    }}
                />

                {/* Orbit Node */}
                <div className="absolute left-[95px] top-[150px] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

                <div className="absolute right-[110px] top-[120px] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_25px_#a855f7]" />

                <div className="absolute left-[140px] bottom-[120px] h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_25px_#14b8a6]" />

                <div className="absolute right-[120px] bottom-[150px] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

                <svg
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    viewBox="0 0 520 520"
                >

                    <path
                        d="M130 170 C220 120 310 120 390 170"
                        stroke="#22d3ee"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                        fill="none"
                    />

                    <path
                        d="M140 350 C240 410 320 410 390 340"
                        stroke="#8b5cf6"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                        fill="none"
                    />

                </svg>

                <div className="absolute left-[110px] top-[140px] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />

                <div className="absolute right-[100px] top-[190px] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_#a855f7]" />

                <div className="absolute left-[150px] bottom-[120px] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />

                {/* Orbit Particles */}

                <div className="absolute left-[120px] top-[240px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee] animate-pulse" />

                <div className="absolute right-[110px] top-[120px] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_#a855f7] animate-pulse" />

                <div className="absolute left-[350px] bottom-[150px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee] animate-pulse" />

                <div className="absolute left-[470px] top-[260px] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_#a855f7] animate-pulse" />

                {/* AES */}
                <div
                    className="absolute left-[70px] top-[90px]
  animate-[float_6s_ease-in-out_infinite]"
                    style={{
                        transform: "perspective(1000px) rotateY(18deg) rotateX(8deg)",
                    }}
                >
                    <div className="rounded-2xl border border-cyan-400/30 bg-zinc-900/80 backdrop-blur-2xl px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,.15)]">

                        <Lock className="mb-3 text-cyan-400" size={20} />

                        <p className="text-xs uppercase tracking-widest text-zinc-500">
                            AES-256
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                            Encryption
                        </h3>

                    </div>
                </div>

                {/* SHA */}
                <div
                    className="absolute right-[40px] top-[140px]
  animate-[float_7s_ease-in-out_infinite]"
                    style={{
                        transform: "perspective(1000px) rotateY(-18deg)",
                    }}
                >
                    <div className="rounded-2xl border border-violet-400/30 bg-zinc-900/80 backdrop-blur-2xl px-6 py-5 shadow-[0_0_45px_rgba(168,85,247,.18)]">

                        <Cpu className="mb-3 text-violet-400" size={20} />

                        <p className="text-xs uppercase tracking-widest text-zinc-500">
                            SHA-512
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                            Hash Function
                        </h3>

                    </div>
                </div>

                {/* RSA */}
                <div
                    className="absolute left-[50px] bottom-[120px]
  animate-[float_8s_ease-in-out_infinite]"
                    style={{
                        transform: "perspective(1000px) rotateY(18deg)",
                    }}
                >
                    <div className="rounded-2xl border border-teal-400/30 bg-zinc-900/80 backdrop-blur-2xl px-6 py-5 shadow-[0_0_45px_rgba(20,184,166,.18)]">

                        <KeyRound className="mb-3 text-teal-400" size={20} />

                        <p className="text-xs uppercase tracking-widest text-zinc-500">
                            RSA
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                            Asymmetric
                        </h3>

                    </div>
                </div>

                {/* ECC */}
                <div
                    className="absolute right-[60px] bottom-[90px]
  animate-[float_9s_ease-in-out_infinite]"
                    style={{
                        transform: "perspective(1000px) rotateY(-18deg)",
                    }}
                >
                    <div className="rounded-2xl border border-purple-400/30 bg-zinc-900/80 backdrop-blur-2xl px-6 py-5 shadow-[0_0_45px_rgba(192,132,252,.18)]">

                        <Shield className="mb-3 text-purple-400" size={20} />

                        <p className="text-xs uppercase tracking-widest text-zinc-500">
                            ECC
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                            Elliptic Curve
                        </h3>

                    </div>
                </div>

                {/* Orbit */}
                <svg
                    className="absolute inset-0 h-full w-full animate-spin"
                    style={{ animationDuration: "35s" }}
                    viewBox="0 0 520 520"
                >
                    <circle
                        cx="260"
                        cy="260"
                        r="150"
                        fill="none"
                        stroke="rgba(34,211,238,.28)"
                        strokeWidth="1.5"
                        strokeDasharray="8 10"
                    />

                    <circle
                        cx="260"
                        cy="260"
                        r="170"
                        fill="none"
                        stroke="rgba(168,85,247,.18)"
                        strokeWidth="1"
                    />
                </svg>

                {/* Shield Glow */}

                <div className="absolute left-1/2 top-[180px] -translate-x-1/2">
                    <div className="absolute left-[55%] top-[42%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[130px]" />

                    {/* Neon Rings */}

                    <div className="absolute left-1/2 top-[230px] h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-cyan-400/10 animate-spin [animation-duration:30s]" />

                    <div className="absolute left-1/2 top-[230px] h-[380px] w-[380px] -translate-x-1/2 rounded-full border border-violet-500/10 animate-spin [animation-duration:45s] [animation-direction:reverse]" />
                    <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[90px]" />

                    <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

                </div>
                <div className="absolute left-1/2 top-[270px] h-20 w-44 -translate-x-1/2 rounded-full bg-black/50 blur-2xl" />
                {/* Floating Shield */}
                <div className="absolute left-1/2 top-[170px] -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">

                    <div
                        className="relative flex h-44 w-44 items-center justify-center rounded-full
               border border-cyan-400/30
               bg-gradient-to-br
               from-cyan-500/15
               via-slate-900/40
               to-indigo-500/15
               backdrop-blur-2xl
               shadow-[0_0_80px_rgba(34,211,238,.18)]"
                        style={{
                            transform: "perspective(1000px) rotateX(18deg) rotateY(-18deg)",
                        }}
                    >

                        <div className="absolute inset-5 rounded-[28px] border border-cyan-400/10" />

                        <div className="absolute inset-8 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent" />

                        <div className="absolute -top-4 left-8 h-10 w-24 rotate-[-18deg] rounded-full bg-white/20 blur-xl" />

                        <Shield
                            size={100}
                            strokeWidth={1.5}
                            className="text-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,.9)]  drop-shadow-[0_0_35px_rgba(59,130,246,.5)]"
                                        />
                        <Lock
                            size={35}
                            strokeWidth={2}
                            className="absolute text-cyan-200 drop-shadow-[0_0_20px_rgba(34,211,238,.9)]"
                        />

                    </div>

                </div>

            </div>


            {/* Platform */}
            <div className="absolute bottom-[45px] left-1/2 -translate-x-1/2">

                {/* Glow */}
                <div className="absolute left-1/2 top-4 h-28 w-52 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-[55px]" />

                {/* Outer Ring */}
                <div className="h-8 w-56 rounded-full border border-cyan-400/40 bg-zinc-950 shadow-[0_0_35px_rgba(34,211,238,.35)]" />

                {/* Inner Ring */}
                <div className="absolute left-1/2 top-2 h-4 w-40 -translate-x-1/2 rounded-full border border-cyan-400/60 bg-cyan-500/10" />

                {/* Center Core */}
                <div className="absolute left-1/2 top-3 h-2 w-20 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_22px_#22d3ee]" />

            </div>
        </div>
    );
}