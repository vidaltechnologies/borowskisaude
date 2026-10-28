import { HeartPulse, ShieldCheck, Home, Clock, Syringe, Bandage, Activity, Ambulance, ArrowRight } from 'lucide-react'
import { whatsappLink } from '../data'

const acessoRapido = [
  { icone: Syringe, titulo: 'Medicações e injetáveis', texto: 'Aplicação segura em domicílio, com prescrição.', href: '#servicos' },
  { icone: Bandage, titulo: 'Curativos', texto: 'Curativos simples e pós-cirúrgicos.', href: '#servicos' },
  { icone: Activity, titulo: 'Sinais vitais', texto: 'Pressão, glicemia e acompanhamento contínuo.', href: '#servicos' },
  { icone: Ambulance, titulo: 'Ambulância', texto: 'Emergências, remoções e plantões em eventos.', href: '#servicos' },
]

const diferenciais = [
  { icone: ShieldCheck, titulo: 'Registro no COREN', texto: 'Profissional habilitada e com responsabilidade técnica.' },
  { icone: HeartPulse, titulo: 'Cuidado humanizado', texto: 'Escuta, respeito e atenção à rotina de cada família.' },
  { icone: Home, titulo: 'No conforto de casa', texto: 'Menos deslocamentos e mais tranquilidade para o paciente.' },
  { icone: Clock, titulo: 'Agenda flexível', texto: 'Visitas avulsas, pacotes e plantões sob demanda.' },
]


export default function Inicio() {
  return (
    <>
      {/* Banner principal */}
      <section className="relative overflow-hidden bg-brand-700 text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-600 opacity-60" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-accent-500 opacity-20" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
              Enfermagem domiciliar
            </span>
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Cuidado profissional, com carinho, onde você estiver.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-brand-100">
              Atendimento de enfermagem em domicílio para adultos e idosos: medicações, curativos, pós-operatório e
              acompanhamento contínuo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="rounded-full bg-accent-500 px-6 py-3 font-semibold transition hover:bg-accent-600">
                Agendar pelo WhatsApp
              </a>
              <a href="#servicos" className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10">
                Ver serviços
              </a>
            </div>
          </div>
          <div className="hidden justify-center md:flex">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
              <div className="flex h-60 w-60 items-center justify-center rounded-full bg-white text-brand-700 shadow-2xl">
                <HeartPulse size={120} strokeWidth={1.4} />
              </div>
              <div className="absolute -bottom-2 -left-4 rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-lg">
                <p className="text-2xl font-bold text-brand-700">+10 anos</p>
                <p>de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso rápido, no estilo dos portais institucionais */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {acessoRapido.map(({ icone: Icone, titulo, texto, href }) => (
            <a key={titulo} href={href} className="group rounded-xl border-t-4 border-accent-500 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <Icone className="text-brand-600" size={30} />
              <p className="mt-3 font-semibold text-brand-800">{titulo}</p>
              <p className="mt-1 text-sm text-slate-600">{texto}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Saiba mais <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-800">Por que escolher a Jaqueline</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Segurança técnica e acolhimento em cada visita.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map(({ icone: Icone, titulo, texto }) => (
            <div key={titulo} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icone size={30} />
              </div>
              <p className="mt-4 font-semibold text-brand-800">{titulo}</p>
              <p className="mt-2 text-sm text-slate-600">{texto}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Chamada final */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-700 px-8 py-10 text-white md:flex-row">
          <div>
            <p className="text-2xl font-bold">Precisa de cuidados de enfermagem em casa?</p>
            <p className="mt-2 text-brand-100">Fale agora e receba uma avaliação inicial sem compromisso.</p>
          </div>
          <a href="#atendimento" className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">
            Como funciona o atendimento
          </a>
        </div>
      </section>
    </>
  )
}
