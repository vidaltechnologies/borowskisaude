// Logo Borowski Saúde: nome em Figtree 800 com linha de batimento cardíaco embaixo
export default function Logo({ className = 'h-14 w-auto', escuro = false }: { className?: string; escuro?: boolean }) {
  const nome = escuro ? '#ffffff' : '#003b73'
  const destaque = escuro ? '#8fd0f5' : '#2a9fdf'
  return (
    <svg viewBox="0 0 540 140" className={className} role="img" aria-label="Borowski Saúde">
      <text x="270" y="78" fontFamily="Figtree, 'Segoe UI', Arial, sans-serif" fontWeight="800" fontSize="66" letterSpacing="-0.5" textAnchor="middle">
        <tspan fill={nome}>Borowski</tspan>
        <tspan fill={destaque} dx="14">Saúde</tspan>
      </text>
      <path d="M24 112 H252 l8 -16 l10 32 l9 -24 l6 8 H516" fill="none" stroke={destaque} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
