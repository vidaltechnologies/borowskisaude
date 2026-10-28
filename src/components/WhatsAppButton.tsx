import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  )
}
