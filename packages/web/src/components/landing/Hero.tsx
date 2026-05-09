"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-primary border-primary/20 bg-primary/10 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4" />
          <span>The easiest way to turn SVGs into interactive 3D</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl bg-clip-text bg-gradient-to-br from-white to-white/50"
        >
          Bring Your Designs to the Third Dimension
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mb-10 text-lg text-white/60 sm:text-xl"
        >
          Design 3D objects, configure lighting, materials, and animations, and export as 4K images, videos, 3D models, or embed code — right in your browser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all rounded-full bg-primary/80 hover:bg-primary backdrop-blur-md border border-white/10 shadow-[0_0_20px_oklch(0.65_0.25_275/0.3)] hover:shadow-[0_0_40px_oklch(0.65_0.25_275/0.5)] group"
          >
            Start Creating Free
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://github.com/dalchandrana/Imagi3D"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10"
          >
            View on GitHub
          </Link>
        </motion.div>

        {/* Mockup / Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full max-w-5xl mt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl -z-10 rounded-[3rem]" />
          <div className="relative overflow-hidden border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-3xl shadow-2xl aspect-[16/9]">
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="w-full h-full pt-12 flex items-center justify-center relative">
               <div className="absolute inset-0 flex items-center justify-center opacity-50">
                 <div className="w-64 h-64 border-4 border-dashed rounded-full border-primary/30 animate-[spin_20s_linear_infinite]" />
                 <div className="absolute w-48 h-48 border-4 border-dashed rounded-full border-accent/30 animate-[spin_15s_linear_infinite_reverse]" />
               </div>
               <div className="relative text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Imagi3D
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
