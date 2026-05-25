// components/Dots.jsx
export default function Dots({ count, active, onChange, className = "" }) {
  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-2 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Go to page ${i + 1}`}
          aria-current={i === active ? "page" : undefined}
          className={`transition-all rounded-full ${
            i === active
              ? "bg-[#3B82F6] w-20 h-3"
              : "bg-[#171A212E] hover:bg-[#0e1116]/50 w-3 h-3"
          }`}
        />
      ))}
    </nav>
  );
}