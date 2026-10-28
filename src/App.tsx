import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Inicio from './pages/Inicio'
import Experiencia from './pages/Experiencia'
import Servicos from './pages/Servicos'
import Atendimento from './pages/Atendimento'
import Planos from './pages/Planos'
import { paginas, type PageId } from './data'

const lerHash = (): PageId => {
  const h = window.location.hash.replace('#', '') as PageId
  return paginas.some((p) => p.id === h) ? h : 'inicio'
}

export default function App() {
  const [pagina, setPagina] = useState<PageId>(lerHash)

  useEffect(() => {
    const onHash = () => {
      setPagina(lerHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const conteudo = {
    inicio: <Inicio />,
    experiencia: <Experiencia />,
    servicos: <Servicos />,
    atendimento: <Atendimento />,
    planos: <Planos />,
  }[pagina]

  return (
    <div className="flex min-h-screen flex-col">
      <Header atual={pagina} />
      <main className="flex-1">{conteudo}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
