<p align="center">
  <img src="docs/logo.png" alt="Borowski Saúde" width="320" />
</p>

<h1 align="center">Borowski Saúde — sitio de cuidados de enfermería</h1>

<p align="center">
  Sitio de <strong>Borowski Saúde</strong>, servicio de enfermería a domicilio y ambulancia en Curitiba (Brasil) y alrededores,
  a cargo de la Técnica de Enfermería Jaqueline (COREN-PR 001.032.628).<br />
  README disponible en portugués, inglés y español.
</p>

<p align="center">
  <a href="README.md">Português</a> · <a href="README.en.md">English</a> · <strong>Español</strong>
</p>

<p align="center">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
</p>

![Página de inicio del sitio de Borowski Saúde](docs/screenshots/inicio.png)

## Sobre el proyecto

Este repositorio contiene el sitio de Borowski Saúde. Su objetivo es presentar los
cuidados de enfermería a domicilio y los servicios de ambulancia de forma clara y
confiable, mostrar la experiencia de la profesional y facilitar la reserva por WhatsApp.

El diseño se inspiró en portales institucionales de salud, con tonos de azul, tarjetas de
acceso rápido y navegación por pestañas.

El sitio está en portugués, ya que atiende a pacientes en Brasil.

### Objetivos

- Presentar los servicios de enfermería a domicilio y de ambulancia en pocas páginas.
- Transmitir confianza, con el registro en el COREN (consejo regional de enfermería)
  visible en todo el sitio.
- Mostrar los planes de atención de forma sencilla.
- Llevar al visitante a WhatsApp en pocos clics.

## Funcionalidades

- **Cinco pestañas:** Início (Inicio), Experiência (Experiencia), Serviços (Servicios),
  Atendimento (Atención) y Planos (Planes), con navegación por enlaces (`#inicio`,
  `#servicos` etc.) sin recargar la página.
- **Servicios de enfermería:** medicación, curaciones, monitoreo de salud, posoperatorio,
  cuidados de sondas, cuidado de personas mayores y cobertura de turnos (huecos,
  vacaciones y ausencias), dentro de las funciones que el COFEN (Consejo Federal de
  Enfermería de Brasil) define para la Técnica de Enfermería.
- **Ambulancia:** emergencias médicas, traslado de pacientes y guardias en eventos como
  partidos de fútbol, hípica, conciertos y rodeos.
- **Formulario de atención:** el visitante completa nombre, teléfono y servicio, y la
  conversación se abre en WhatsApp con el mensaje listo. No necesita servidor.
- **Botón fijo de WhatsApp** en todas las páginas.
- **Preguntas frecuentes** en la pestaña Atención.
- **Responsivo:** diseño pensado para computadora y celular, con menú desplegable.
- **Identidad visual propia:** azul oscuro `#003b73`, azul claro `#2a9fdf` y verde
  azulado `#00a19a`, logo con línea de latido cardíaco y fuente Figtree.

## Pantallas

### Computadora

| Experiencia | Servicios |
| --- | --- |
| ![Experiencia](docs/screenshots/experiencia.png) | ![Servicios](docs/screenshots/servicos.png) |

| Atención | Planes |
| --- | --- |
| ![Atención](docs/screenshots/atendimento.png) | ![Planes](docs/screenshots/planos.png) |

### Celular

| Inicio | Servicios | Atención |
| --- | --- | --- |
| <img src="docs/screenshots/celular-inicio.png" alt="Inicio en el celular" width="260" /> | <img src="docs/screenshots/celular-servicos.png" alt="Servicios en el celular" width="260" /> | <img src="docs/screenshots/celular-atendimento.png" alt="Atención en el celular" width="260" /> |

## Tecnologías

| Tecnología | Para qué sirve |
| --- | --- |
| [Vite](https://vite.dev/) | Servidor de desarrollo y generación de la versión final |
| [React](https://react.dev/) | Componentes de la interfaz |
| [TypeScript](https://www.typescriptlang.org/) | Código tipado, más seguro de mantener |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y diseño responsivo |
| [Lucide](https://lucide.dev/) | Íconos |
| SVG | Logo e ícono de la pestaña del navegador |

El sitio no usa base de datos ni inicio de sesión. La versión final está formada solo por
archivos estáticos (HTML, CSS y JavaScript), lo que hace que el sitio sea rápido, barato
de alojar y sin servidor que mantener. Se puede publicar gratis en Vercel, Netlify o
GitHub Pages.

## Cómo ejecutarlo en tu computadora

Necesitarás [Node.js](https://nodejs.org/) 20 o más reciente.

```bash
git clone https://github.com/vidaltechnologies/borowskisaude.git
cd borowskisaude
npm install
npm run dev
```

Después, abre http://localhost:5173.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera la versión final del sitio en la carpeta `dist/` |
| `npm run build:single` | Genera todo el sitio en un único `index.html`, en la carpeta `dist-single/` |
| `npm run preview` | Ejecuta la versión final generada por `build` |
| `npm run lint` | Revisa el código |

## Cómo editar el contenido

| Qué cambiar | Dónde está |
| --- | --- |
| Teléfono, WhatsApp, correo, COREN, región y horario | `src/data.ts` |
| Precios e ítems de los planes | `src/pages/Planos.tsx` |
| Trayectoria y calificaciones | `src/pages/Experiencia.tsx` |
| Lista de servicios y ambulancia | `src/pages/Servicos.tsx` |
| Colores | bloque `@theme` en `src/index.css` |

## Estructura del código

```
src/
├── App.tsx                 # Cambia de pestaña según la dirección (#inicio, #servicos...)
├── main.tsx                # Punto de entrada
├── index.css               # Tailwind y colores del tema
├── data.ts                 # Contactos y lista de pestañas
├── components/
│   ├── Header.tsx          # Barra superior, logo y pestañas
│   ├── Footer.tsx
│   ├── Logo.tsx            # Logo de Borowski Saúde en SVG
│   ├── PageHero.tsx        # Franja de título de las páginas internas
│   └── WhatsAppButton.tsx  # Botón fijo de WhatsApp
└── pages/
    ├── Inicio.tsx
    ├── Experiencia.tsx
    ├── Servicos.tsx
    ├── Atendimento.tsx     # Cómo funciona, formulario y preguntas frecuentes
    └── Planos.tsx
public/                     # Íconos para celular y navegador
docs/                       # Logo e imágenes usadas en este README
```

---

© Vidal Technologies. Todos los derechos reservados.
