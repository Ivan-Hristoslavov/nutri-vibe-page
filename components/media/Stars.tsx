export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.55l-5.9 3.1 1.12-6.57L2.45 9.44l6.6-.96L12 2.5Z"
            fill="var(--brand-coral)"
          />
        </svg>
      ))}
    </div>
  );
}
