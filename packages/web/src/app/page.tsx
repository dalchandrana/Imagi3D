"use client";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { FeatureCards } from "@/components/landing/FeatureCards";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30">
      {/* Dynamic ambient background grid */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Header />
      <Hero />
      <FeatureCards />
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20 py-10 text-center">
        <p className="text-white/40">© {new Date().getFullYear()} Imagi3D. Built with Next.js and Three.js.</p>
      </footer>
    </main>
  );
}
