import { motion } from "framer-motion";
import { Rocket, ExternalLink, Github } from "lucide-react";
import { scaleIn } from "../utils/animations";

import NeonTag from "./NeonTag";

export default function ProjectCard({ p }) {
  return (
    <motion.div variants={scaleIn} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm text-white/70">{p.description}</p>
        </div>
        <Rocket className="size-6 opacity-70" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {p.stack.map((s, i) => (
          <NeonTag key={i}>{s}</NeonTag>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href={p.links.live} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15 transition">
          <ExternalLink className="size-4" /> Live
        </a>
        <a href={p.links.repo} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15 transition">
          <Github className="size-4" /> Code
        </a>
      </div>
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl shadow-[0_0_80px_15px_rgba(56,189,248,0.15)]" />
    </motion.div>
  );
}