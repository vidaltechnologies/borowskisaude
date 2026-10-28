import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contato, paginas } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo className="h-16 w-auto" escuro />
          <p className="mt-4 text-sm leading-relaxed">
            Atendimento de enfermagem domiciliar com ética, segurança e acolhimento, seguindo o Código de Ética dos
            Profissionais de Enfermagem.
          </p>
          <p className="mt-3 text-sm font-semibold text-white">Técnica de Enfermagem · {contato.coren}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {paginas.map((p) => (
              <li key={p.id}><a href={`#${p.id}`} className="hover:text-white">{p.titulo}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Contato</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> {contato.telefone}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> {contato.email}</li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {contato.regiao}</li>
            <li className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0" /> {contato.horario}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-800">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-brand-200">
          © {new Date().getFullYear()} Borowski Saúde. Todos os direitos reservados. As informações deste site não
          substituem avaliação profissional.
        </p>
      </div>
    </footer>
  )
}
