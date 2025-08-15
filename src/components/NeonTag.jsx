export default function NeonTag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.35)] backdrop-blur">
      {children}
    </span>
  );
}
