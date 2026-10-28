# Borowski Saúde

Site institucional de enfermagem domiciliar, com as abas Início, Experiência, Serviços, Atendimento e Planos.

**Stack:** Vite + React + TypeScript + Tailwind CSS v4 + ícones Lucide.

## Rodar

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # site de produção em dist/
npm run build:single # um único index.html em dist-single/
```

## Editar conteúdo

- Contatos (WhatsApp, telefone, e-mail, COREN, região, horário): `src/data.ts`
- Preços dos planos: `src/pages/Planos.tsx`
- Trajetória e números: `src/pages/Experiencia.tsx`
- Depoimentos: `src/pages/Inicio.tsx`
- Cores: bloco `@theme` em `src/index.css`

O formulário de Atendimento abre o WhatsApp com a mensagem preenchida, então não precisa de servidor.
O site é estático e pode ser publicado de graça na Vercel, Netlify ou GitHub Pages.
