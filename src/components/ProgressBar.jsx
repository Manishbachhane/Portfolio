
import { motion, useScroll, useSpring } from "framer-motion";
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400"
    />
  );
}
