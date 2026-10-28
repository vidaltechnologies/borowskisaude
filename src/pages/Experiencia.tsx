import { GraduationCap, Hospital, Award, Users, CalendarClock } from 'lucide-react'
import PageHero from '../components/PageHero'

const numeros = [
  { valor: '+10', rotulo: 'anos de enfermagem' },
  { valor: '+500', rotulo: 'pacientes atendidos' },
  { valor: '+3.000', rotulo: 'visitas domiciliares' },
  { valor: '100%', rotulo: 'compromisso ético' },
]

const trajetoria = [
  { ano: '2014', titulo: 'Curso Técnico em Enfermagem', texto: 'Formação técnica e registro no COREN-PR nº 001.032.628.' },
  { ano: '2015 a 2019', titulo: 'Enfermagem hospitalar', texto: 'Atuação em clínica médica, cirúrgica e unidade de terapia intensiva.' },
  { ano: '30 dias', titulo: 'Cuidadora de idosas na Divas House', texto: 'Cuidado diário de idosas em residência: higiene, alimentação, medicação, conforto e companhia.' },
  { ano: '2020 até hoje', titulo: 'Atendimento domiciliar', texto: 'Cuidados a idosos, pós-operatório e pacientes crônicos em casa.' },
]

const qualificacoes = [
  { icone: GraduationCap, texto: 'Técnica de Enfermagem · COREN-PR 001.032.628' },
  { icone: Award, texto: 'Cuidados com curativos e feridas' },
  { icone: Hospital, texto: 'Suporte Básico de Vida (BLS) atualizado' },
  { icone: Users, texto: 'Cuidados paliativos e gerontologia' },
]

export default function Experiencia() {
  return (
    <>
      <PageHero trilha="Experiência" titulo="Experiência" subtitulo="Uma trajetória dedicada ao cuidado, do hospital ao lar dos pacientes." />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map((n) => (
            <div key={n.rotulo} className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-4xl font-bold text-brand-700">{n.valor}</p>
              <p className="mt-1 text-sm text-slate-600">{n.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-brand-800">Trajetória profissional</h2>
          <ol className="mt-8 space-y-8 border-l-2 border-brand-200 pl-8">
            {trajetoria.map((t) => (
              <li key={t.ano} className="relative">
                <span className="absolute top-1 -left-[41px] h-4 w-4 rounded-full border-4 border-white bg-accent-500 ring-2 ring-brand-200" />
                <p className="text-sm font-semibold text-accent-600">{t.ano}</p>
                <p className="mt-1 text-lg font-semibold text-brand-800">{t.titulo}</p>
                <p className="mt-1 text-slate-600">{t.texto}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="lg:col-span-2">
          <div className="rounded-xl bg-brand-700 p-8 text-white">
            <h2 className="text-xl font-bold">Qualificações</h2>
            <ul className="mt-6 space-y-4">
              {qualificacoes.map(({ icone: Icone, texto }) => (
                <li key={texto} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10"><Icone size={20} /></span>
                  {texto}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 rounded-xl border-l-4 border-accent-500 bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="flex items-center gap-2 font-semibold text-brand-800"><CalendarClock size={20} className="text-accent-500" /> Cobertura de escalas</p>
            <p className="mt-2 text-sm text-slate-600">
              Disponível para cobrir furos de escala, férias e faltas em residências, casas de repouso e clínicas.
            </p>
          </div>
          <p className="mt-6 rounded-xl bg-brand-50 p-6 text-sm text-slate-700">
            "Acredito que cuidar é unir conhecimento técnico e empatia. Cada paciente tem uma história, e o meu trabalho é
            respeitá-la." <span className="mt-2 block font-semibold text-brand-700">Jaqueline</span>
          </p>
        </aside>
      </section>
    </>
  )
}
