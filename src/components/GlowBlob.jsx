

export default function GlowBlob({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute blur-3xl opacity-60 mix-blend-screen  ${className}`}
      aria-hidden
    />
  );
}
