"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Box } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto max-w-7xl"
    >
      <div className="absolute inset-0 max-w-5xl mx-auto mt-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_oklch(0_0_0/0.4)] pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-between w-full max-w-5xl mx-auto px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 text-primary group-hover:bg-primary/30 transition-colors">
            <Box className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            Imagi3D
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/editor"
            className="px-5 py-2 text-sm font-medium text-white transition-all rounded-full bg-primary/80 hover:bg-primary backdrop-blur-md border border-white/10 shadow-[0_0_20px_oklch(0.65_0.25_275/0.3)] hover:shadow-[0_0_30px_oklch(0.65_0.25_275/0.5)]"
          >
            Open Editor
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
