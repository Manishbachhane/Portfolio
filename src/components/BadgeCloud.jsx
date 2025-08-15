import { motion } from "framer-motion";
import { container, fadeUp } from "../utils/animations";


export default function BadgeCloud({ items }) {

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
    >
      {items.map((t, i) => (
        <motion.div key={i} variants={fadeUp} className="relative">
          <div className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm shadow-[0_0_40px_rgba(56,189,248,0.12)]">
            {t}
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
        </motion.div>
      ))}
    </motion.div>
  );
}
