// Dados de contato e conteúdo editável do site. Troque os valores marcados com "EDITAR".
export const contato = {
  nome: 'Jaqueline',
  coren: 'COREN-PR 001.032.628',
  whatsapp: '5541997411796',
  telefone: '(41) 99741-1796',
  email: 'jaquelinelange@gmail.com',
  regiao: 'Curitiba e região',
  horario: 'Segunda a sábado, 7h às 19h · Plantões sob agendamento',
}

export const whatsappLink = (texto = 'Olá, Jaqueline! Gostaria de agendar um atendimento.') =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`

export type PageId = 'inicio' | 'experiencia' | 'servicos' | 'atendimento' | 'planos'

export const paginas: { id: PageId; titulo: string }[] = [
  { id: 'inicio', titulo: 'Início' },
  { id: 'experiencia', titulo: 'Experiência' },
  { id: 'servicos', titulo: 'Serviços' },
  { id: 'atendimento', titulo: 'Atendimento' },
  { id: 'planos', titulo: 'Planos' },
]
