"use client";

import { motion } from "framer-motion";
import { PenTool, Palette, Play, DownloadCloud } from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "4 Input Methods",
    description: "Create from Text with Google Fonts, draw in the Pixel Editor, paste SVG code, or simply drag and drop a file.",
  },
  {
    icon: Palette,
    title: "10 Material Presets",
    description: "Instantly apply professional PBR materials like Glass, Chrome, Gold, Holographic, Plastic, and more.",
  },
  {
    icon: Play,
    title: "7 Animations",
    description: "Bring your design to life with Spin, Float, Pulse, Wobble, Swing, or Spin+Float animations.",
  },
  {
    icon: DownloadCloud,
    title: "Export Anywhere",
    description: "Download as transparent PNG, 60fps MP4/WebM video, 3D models (GLB, STL), or get the React embed code.",
  },
];

export function FeatureCards() {
  return (
    <section className="relative py-24 z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">Everything You Need</h2>
        <p className="text-lg text-white/60">A complete toolset to build and export interactive 3D elements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
              <feature.icon className="w-32 h-32 text-primary" />
            </div>
            
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
