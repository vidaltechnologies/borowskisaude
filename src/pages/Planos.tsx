import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import { whatsappLink } from '../data'

// EDITAR: valores de referência; ajuste conforme a sua tabela
const planos = [
  {
    nome: 'Visita avulsa',
    preco: 'R$ 120',
    unidade: '/visita',
    descricao: 'Para procedimentos pontuais.',
    itens: ['1 visita domiciliar', 'Aplicação de medicação ou curativo', 'Aferição de sinais vitais', 'Orientações à família'],
  },
  {
    nome: 'Pacote Cuidado',
    preco: 'R$ 900',
    unidade: '/mês',
    descricao: 'Ideal para curativos e tratamentos contínuos.',
    destaque: true,
    itens: ['Até 10 visitas no mês', 'Curativos e medicações', 'Relatório semanal de evolução', 'Atendimento prioritário no WhatsApp', 'Contato com a equipe médica'],
  },
  {
    nome: 'Plantão',
    preco: 'Sob consulta',
    unidade: '',
    descricao: 'Acompanhamento de 6h, 12h ou 24h.',
    itens: ['Plantões diurnos ou noturnos', 'Pós-operatório e cuidados intensivos', 'Cuidado ao idoso', 'Acompanhamento hospitalar', 'Escala personalizada'],
  },
]

export default function Planos() {
  return (
    <>
      <PageHero trilha="Planos" titulo="Planos" subtitulo="Escolha o formato que melhor se adapta à rotina do paciente e da família." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`relative flex flex-col rounded-2xl p-8 ${p.destaque ? 'bg-brand-700 text-white shadow-xl md:-my-4' : 'bg-white shadow-sm ring-1 ring-slate-200'}`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Mais procurado
                </span>
              )}
              <h2 className={`text-xl font-bold ${p.destaque ? '' : 'text-brand-800'}`}>{p.nome}</h2>
              <p className={`mt-1 text-sm ${p.destaque ? 'text-brand-100' : 'text-slate-600'}`}>{p.descricao}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold">{p.preco}</span>
                <span className={p.destaque ? 'text-brand-100' : 'text-slate-500'}>{p.unidade}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.itens.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check size={18} className={`shrink-0 ${p.destaque ? 'text-accent-500' : 'text-accent-600'}`} />{i}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Olá, Jaqueline! Tenho interesse no plano "${p.nome}".`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 block rounded-full py-3 text-center font-semibold transition ${
                  p.destaque ? 'bg-white text-brand-700 hover:bg-brand-50' : 'bg-brand-700 text-white hover:bg-brand-800'
                }`}
              >
                Quero este plano
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-slate-500">
          Valores de referência. O orçamento final depende da avaliação do paciente, da região e da complexidade dos cuidados.
        </p>
      </section>
    </>
  )
}
