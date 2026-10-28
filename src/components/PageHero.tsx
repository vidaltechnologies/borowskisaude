import type { ReactNode } from 'react'

export default function PageHero({ titulo, subtitulo, trilha }: { titulo: string; subtitulo: ReactNode; trilha: string }) {
  return (
    <section className="bg-gradient-to-r from-brand-800 to-brand-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <p className="text-xs text-brand-200">
          <a href="#inicio" className="hover:underline">Início</a> / {trilha}
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{titulo}</h1>
        <p className="mt-3 max-w-2xl text-brand-100">{subtitulo}</p>
      </div>
    </section>
  )
}
