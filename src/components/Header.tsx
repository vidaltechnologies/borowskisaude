import { useState } from 'react'
import { Menu, X, Phone, Mail, Clock } from 'lucide-react'
import { contato, paginas, whatsappLink, type PageId } from '../data'
import Logo from './Logo'

export default function Header({ atual }: { atual: PageId }) {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Barra superior institucional */}
      <div className="hidden bg-brand-900 text-xs text-brand-100 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <span>Técnica de Enfermagem · {contato.coren}</span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Clock size={13} /> {contato.horario}</span>
            <span className="flex items-center gap-1.5"><Phone size={13} /> {contato.telefone}</span>
            <span className="flex items-center gap-1.5"><Mail size={13} /> {contato.email}</span>
          </div>
        </div>
      </div>

      {/* Marca */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <Logo className="h-14 w-auto sm:h-16" />
            <p className="hidden border-l border-slate-200 pl-3 text-sm leading-tight text-slate-500 lg:block">
              Cuidado humanizado
              <br />
              com responsabilidade técnica
            </p>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-600 md:inline-block"
          >
            Agendar atendimento
          </a>
          <button
            onClick={() => setAberto(!aberto)}
            className="rounded-md p-2 text-brand-700 md:hidden"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
          >
            {aberto ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Abas */}
      <nav className={`bg-brand-700 ${aberto ? 'block' : 'hidden'} md:block`} aria-label="Navegação principal">
        <ul className="mx-auto flex max-w-6xl flex-col px-4 md:flex-row">
          {paginas.map((p) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                onClick={() => setAberto(false)}
                aria-current={atual === p.id ? 'page' : undefined}
                className={`block border-b-4 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition md:py-3.5 ${
                  atual === p.id
                    ? 'border-accent-500 bg-brand-800 text-white'
                    : 'border-transparent text-brand-100 hover:bg-brand-600 hover:text-white'
                }`}
              >
                {p.titulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
