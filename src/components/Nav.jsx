
import React, { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const items = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
        <nav className="flex items-center gap-1 p-1">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="group rounded-xl px-3 py-1.5 text-sm text-white/80 hover:text-white transition"
            >
              <span className="inline-flex items-center gap-2">
                <span>{it.label}</span>
                <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}