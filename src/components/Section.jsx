import { motion } from "framer-motion";

import { container, fadeUp } from "../utils/animations";

export default function Section({ id, title, icon: Icon, children, subtitle }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 flex items-end justify-between gap-4"
       >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 drop-shadow"
          >
            <span className="inline-flex items-center gap-3">
              {Icon && <Icon className="size-6 sm:size-7" />}
              {title}
            </span>
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="text-sm text-white/60 max-w-md"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
      {/* subtle divider */}
      <div className="pointer-events-none mx-auto mt-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
