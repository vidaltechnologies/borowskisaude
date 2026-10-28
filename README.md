<p align="center">
  <img src="docs/logo.png" alt="Borowski Saúde" width="320" />
</p>

<h1 align="center">Borowski Saúde — site de cuidados de enfermagem</h1>

<p align="center">
  Site da <strong>Borowski Saúde</strong>, serviço de enfermagem domiciliar e ambulância em Curitiba e região,
  com a Técnica de Enfermagem Jaqueline (COREN-PR 001.032.628).<br />
  README disponível em português, inglês e espanhol.
</p>

<p align="center">
  <strong>Português</strong> · <a href="README.en.md">English</a> · <a href="README.es.md">Español</a>
</p>

<p align="center">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
</p>

![Página inicial do site da Borowski Saúde](docs/screenshots/inicio.png)

## Sobre o projeto

Este repositório contém o site da Borowski Saúde. O objetivo é apresentar os cuidados
de enfermagem em domicílio e os serviços de ambulância de forma clara e confiável,
mostrar a experiência da profissional e facilitar o agendamento pelo WhatsApp.

O visual foi inspirado em portais institucionais de saúde, com tons de azul, cartões de
acesso rápido e navegação por abas.

### Objetivos

- Apresentar os serviços de enfermagem domiciliar e de ambulância em poucas páginas.
- Passar confiança, com o registro no COREN visível em todo o site.
- Mostrar os planos de atendimento de forma simples.
- Levar o visitante ao WhatsApp com poucos cliques.

## Funcionalidades

- **Cinco abas:** Início, Experiência, Serviços, Atendimento e Planos, com navegação por
  links (`#inicio`, `#servicos` etc.), sem recarregar a página.
- **Serviços de enfermagem:** medicações, curativos, monitoramento, pós-operatório,
  cuidados com sondas, cuidado ao idoso e cobertura de escalas (furos, férias e faltas),
  dentro das atribuições da Técnica de Enfermagem definidas pelo COFEN.
- **Ambulância:** emergências médicas, remoção de pacientes e plantões em eventos, como
  jogos de futebol, hípica, shows e rodeios.
- **Formulário de atendimento:** o visitante preenche nome, telefone e serviço, e a
  conversa abre no WhatsApp com a mensagem pronta. Não precisa de servidor.
- **Botão de WhatsApp fixo** em todas as páginas.
- **Dúvidas frequentes** na aba Atendimento.
- **Responsivo:** layout pensado para computador e celular, com menu recolhível.
- **Identidade visual própria:** azul escuro `#003b73`, azul claro `#2a9fdf` e verde-água
  `#00a19a`, logo com linha de batimento cardíaco e fonte Figtree.

## Telas

### Computador

| Experiência | Serviços |
| --- | --- |
| ![Experiência](docs/screenshots/experiencia.png) | ![Serviços](docs/screenshots/servicos.png) |

| Atendimento | Planos |
| --- | --- |
| ![Atendimento](docs/screenshots/atendimento.png) | ![Planos](docs/screenshots/planos.png) |

### Celular

| Início | Serviços | Atendimento |
| --- | --- | --- |
| <img src="docs/screenshots/celular-inicio.png" alt="Início no celular" width="260" /> | <img src="docs/screenshots/celular-servicos.png" alt="Serviços no celular" width="260" /> | <img src="docs/screenshots/celular-atendimento.png" alt="Atendimento no celular" width="260" /> |

## Tecnologias

| Tecnologia | Para que serve |
| --- | --- |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e geração da versão final |
| [React](https://react.dev/) | Componentes da interface |
| [TypeScript](https://www.typescriptlang.org/) | Código com tipagem, mais seguro de manter |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos e layout responsivo |
| [Lucide](https://lucide.dev/) | Ícones |
| SVG | Logo e ícone da aba do navegador |

O site não usa banco de dados nem login. A versão final é formada apenas por arquivos
estáticos (HTML, CSS e JavaScript), o que deixa o site rápido, barato de hospedar e sem
servidor para manter. Ele pode ser publicado de graça na Vercel, Netlify ou GitHub Pages.

## Como rodar no seu computador

Você vai precisar do [Node.js](https://nodejs.org/) 20 ou mais recente.

```bash
git clone https://github.com/vidaltechnologies/borowskisaude.git
cd borowskisaude
npm install
npm run dev
```

Depois, abra http://localhost:5173.

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão final do site na pasta `dist/` |
| `npm run build:single` | Gera o site inteiro em um único `index.html`, na pasta `dist-single/` |
| `npm run preview` | Roda a versão final gerada pelo `build` |
| `npm run lint` | Verifica o código |

## Como editar o conteúdo

| O que mudar | Onde fica |
| --- | --- |
| Telefone, WhatsApp, e-mail, COREN, região e horário | `src/data.ts` |
| Preços e itens dos planos | `src/pages/Planos.tsx` |
| Trajetória e qualificações | `src/pages/Experiencia.tsx` |
| Lista de serviços e ambulância | `src/pages/Servicos.tsx` |
| Cores | bloco `@theme` em `src/index.css` |

## Estrutura do código

```
src/
├── App.tsx                 # Troca de abas pelo endereço (#inicio, #servicos...)
├── main.tsx                # Ponto de entrada
├── index.css               # Tailwind e cores do tema
├── data.ts                 # Contatos e lista de abas
├── components/
│   ├── Header.tsx          # Barra superior, logo e abas
│   ├── Footer.tsx
│   ├── Logo.tsx            # Logo Borowski Saúde em SVG
│   ├── PageHero.tsx        # Faixa de título das páginas internas
│   └── WhatsAppButton.tsx  # Botão fixo de WhatsApp
└── pages/
    ├── Inicio.tsx
    ├── Experiencia.tsx
    ├── Servicos.tsx
    ├── Atendimento.tsx     # Como funciona, formulário e dúvidas frequentes
    └── Planos.tsx
public/                     # Ícones para celular e navegador
docs/                       # Logo e imagens usadas neste README
```

---

© Borowski Saúde. Todos os direitos reservados.
