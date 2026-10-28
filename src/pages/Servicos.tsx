import { Syringe, Bandage, Activity, Stethoscope, Pill, Droplets, HeartHandshake, ClipboardList, Check, Ambulance, Siren, Truck, Ticket, CalendarClock } from 'lucide-react'
import PageHero from '../components/PageHero'
import { whatsappLink } from '../data'

const ambulancia = [
  { icone: Siren, titulo: 'Emergências médicas', texto: 'Atendimento com ambulância em situações de urgência e emergência.' },
  { icone: Truck, titulo: 'Remoção de pacientes', texto: 'Transporte seguro entre residência, hospitais, clínicas e exames.' },
  { icone: Ticket, titulo: 'Plantões em eventos', texto: 'Ambulância de prontidão em jogos de futebol, hípica, shows, rodeios e outros eventos.' },
]

const servicos = [
  { icone: Syringe, titulo: 'Administração de medicamentos', itens: ['Injeções intramusculares e subcutâneas', 'Medicação endovenosa', 'Soroterapia em domicílio'] },
  { icone: Bandage, titulo: 'Curativos e feridas', itens: ['Curativos simples', 'Curativos pós-cirúrgicos', 'Troca de curativos conforme prescrição'] },
  { icone: Activity, titulo: 'Monitoramento de saúde', itens: ['Pressão arterial e glicemia', 'Saturação e temperatura', 'Relatórios para o médico'] },
  { icone: Stethoscope, titulo: 'Pós-operatório', itens: ['Acompanhamento da recuperação', 'Retirada de pontos', 'Orientação à família'] },
  { icone: Droplets, titulo: 'Cuidados com sondas', itens: ['Cuidados com sonda vesical', 'Dieta e cuidados com sonda nasoenteral', 'Cuidados com gastrostomia'] },
  { icone: Pill, titulo: 'Gestão de medicação', itens: ['Organização de horários', 'Conferência de prescrições', 'Prevenção de erros'] },
  { icone: HeartHandshake, titulo: 'Cuidado ao idoso', itens: ['Higiene e conforto', 'Prevenção de quedas', 'Cuidados paliativos'] },
  { icone: CalendarClock, titulo: 'Cobertura de escalas', itens: ['Furos de escala', 'Férias da equipe', 'Faltas de última hora'] },
  { icone: ClipboardList, titulo: 'Coleta e orientação', itens: ['Coleta de exames em domicílio', 'Educação em saúde', 'Treinamento de cuidadores'] },
]

export default function Servicos() {
  return (
    <>
      <PageHero trilha="Serviços" titulo="Serviços" subtitulo="Procedimentos de enfermagem em domicílio, cobertura de escalas e serviços de ambulância." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icone: Icone, titulo, itens }) => (
            <article key={titulo} className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-brand-200">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><Icone size={26} /></span>
              <h2 className="mt-4 font-semibold text-brand-800">{titulo}</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {itens.map((i) => (
                  <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" />{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-14 overflow-hidden rounded-2xl bg-brand-700 text-white">
          <div className="flex items-center gap-4 border-b border-white/10 px-8 py-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-red-600"><Ambulance size={32} /></span>
            <div>
              <h2 className="text-2xl font-bold">Ambulância</h2>
              <p className="text-brand-100">Emergências, remoções e cobertura médica para eventos.</p>
            </div>
          </div>
          <div className="grid gap-6 px-8 py-8 md:grid-cols-3">
            {ambulancia.map(({ icone: Icone, titulo, texto }) => (
              <div key={titulo} className="rounded-xl bg-white/10 p-5">
                <Icone className="text-accent-500" size={28} />
                <p className="mt-3 font-semibold">{titulo}</p>
                <p className="mt-1 text-sm text-brand-100">{texto}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 bg-brand-800 px-8 py-5">
            <p className="text-sm text-brand-100">Vai organizar um evento? Solicite um orçamento de plantão com ambulância.</p>
            <a href={whatsappLink('Olá, Jaqueline! Gostaria de um orçamento de ambulância para um evento.')} target="_blank" rel="noreferrer" className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-accent-600">
              Pedir orçamento
            </a>
          </div>
        </div>
        <p className="mt-10 rounded-xl border-l-4 border-brand-600 bg-brand-50 p-5 text-sm text-slate-700">
          Os cuidados são realizados dentro das atribuições da Técnica de Enfermagem definidas pelo Conselho Federal de
          Enfermagem. Medicações e procedimentos são feitos mediante prescrição, e procedimentos privativos do enfermeiro
          ou do médico não são oferecidos.
        </p>
        <div className="mt-10 text-center">
          <a href={whatsappLink('Olá, Jaqueline! Gostaria de saber mais sobre os serviços.')} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition hover:bg-accent-600">
            Tirar dúvidas sobre um serviço
          </a>
        </div>
      </section>
    </>
  )
}
