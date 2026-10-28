import { useState, type FormEvent } from 'react'
import { MessageCircle, ClipboardCheck, CalendarCheck, HeartPulse, Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import { contato, whatsappLink } from '../data'

const etapas = [
  { icone: MessageCircle, titulo: 'Contato', texto: 'Você chama no WhatsApp ou preenche o formulário.' },
  { icone: ClipboardCheck, titulo: 'Avaliação', texto: 'Entendemos a necessidade do paciente e a prescrição.' },
  { icone: CalendarCheck, titulo: 'Agendamento', texto: 'Definimos dia, horário e o plano mais adequado.' },
  { icone: HeartPulse, titulo: 'Cuidado', texto: 'Atendimento em casa, com registro e acompanhamento.' },
]

const perguntas = [
  { p: 'Quais regiões são atendidas?', r: `Atendo em ${contato.regiao}. Para outras localidades, consulte disponibilidade.` },
  { p: 'Preciso de receita médica?', r: 'Para medicações e alguns procedimentos, sim. Curativos e troca de dispositivos seguem a prescrição ou orientação do profissional responsável.' },
  { p: 'Os materiais estão inclusos?', r: 'Materiais básicos estão inclusos. Medicamentos e coberturas especiais são adquiridos pela família, com orientação.' },
  { p: 'Atende em hospitais?', r: 'Sim, é possível contratar acompanhamento particular durante internações, conforme as regras da instituição.' },
]

export default function Atendimento() {
  const [form, setForm] = useState({ nome: '', telefone: '', servico: 'Curativos', mensagem: '' })

  const enviar = (e: FormEvent) => {
    e.preventDefault()
    const texto = `Olá, Jaqueline! Meu nome é ${form.nome} (${form.telefone}).\nServiço: ${form.servico}\n${form.mensagem}`
    window.open(whatsappLink(texto), '_blank', 'noreferrer')
  }

  const campo = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

  return (
    <>
      <PageHero trilha="Atendimento" titulo="Atendimento" subtitulo="Como funciona, onde atendo e como agendar a sua visita." />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-800">Como funciona</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map(({ icone: Icone, titulo, texto }, i) => (
            <div key={titulo} className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <span className="absolute top-4 right-4 text-4xl font-bold text-brand-100">{i + 1}</span>
              <Icone className="text-accent-500" size={30} />
              <p className="mt-3 font-semibold text-brand-800">{titulo}</p>
              <p className="mt-1 text-sm text-slate-600">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 lg:grid-cols-2">
        <form onSubmit={enviar} className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-brand-800">Solicite um atendimento</h2>
          <p className="mt-1 text-sm text-slate-600">Ao enviar, a conversa abre no WhatsApp com a sua mensagem pronta.</p>
          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium">Nome
              <input required className={campo} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
            </label>
            <label className="block text-sm font-medium">Telefone
              <input required type="tel" className={campo} value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
            </label>
            <label className="block text-sm font-medium">Serviço
              <select className={campo} value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}>
                {['Curativos', 'Medicações e injetáveis', 'Pós-operatório', 'Cuidado ao idoso', 'Monitoramento de saúde', 'Outro'].map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium">Mensagem
              <textarea rows={4} className={campo} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
            </label>
            <button className="w-full rounded-full bg-accent-500 py-3 font-semibold text-white transition hover:bg-accent-600">Enviar pelo WhatsApp</button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-xl bg-brand-700 p-8 text-white">
            <h2 className="text-xl font-bold">Contato</h2>
            <ul className="mt-5 space-y-4 text-brand-100">
              <li className="flex gap-3"><Phone size={20} className="shrink-0" /> {contato.telefone}</li>
              <li className="flex gap-3"><Mail size={20} className="shrink-0" /> {contato.email}</li>
              <li className="flex gap-3"><MapPin size={20} className="shrink-0" /> {contato.regiao}</li>
              <li className="flex gap-3"><Clock size={20} className="shrink-0" /> {contato.horario}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-800">Dúvidas frequentes</h2>
            <div className="mt-4 space-y-3">
              {perguntas.map((q) => (
                <details key={q.p} className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <summary className="cursor-pointer list-none font-semibold text-brand-800 marker:hidden">
                    <span className="mr-2 inline-block text-accent-500 transition group-open:rotate-45">+</span>{q.p}
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">{q.r}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
