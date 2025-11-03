# Portfólio — Isadora Sousa

Portfólio profissional desenvolvido com **React + Vite + Styled-Components**, com foco em acessibilidade, performance e componentização.  
Seções: Sobre, Projetos, Habilidades e Contato.

> Deploy: _    _

---

## 🧭 Sumário
- [Stack e decisões](#-stack-e-decisões)
- [Como rodar localmente](#-como-rodar-localmente)
- [Build e produção](#-build-e-produção)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Projetos apresentados](#-projetos-apresentados)
- [Acessibilidade](#-acessibilidade)
- [Responsividade](#-responsividade)
- [Como publicar (Deploy)](#-como-publicar-deploy)
  - [Vercel (recomendado)](#vercel-recomendado)
  - [GitHub Pages (alternativa)](#github-pages-alternativa)
- [Melhorias futuras](#-melhorias-futuras)
- [Contato](#-contato)

---

## 🛠️ Stack e decisões
- **React + Vite** para DX rápida e build otimizado.
- **Styled-Components** (estilização modular, sem vazamento de escopo).
- **React Icons** para ícones leves.
- Sem dependências desnecessárias. Código organizado por responsabilidade (components, sections, data, styles).
- Acessibilidade: foco visível, landmarks semânticos (`header`, `main`, `section`, `footer`), `aria-label` e navegação por teclado.

---

## ▶️ Como rodar localmente

```bash
# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev

Abra a URL exibida que o Vite mostrar.

🏗️ Build e produção
npm run build
npm run preview
O build final é gerado em dist/.

🗂️ Estrutura de pastas
src/
  assets/
    perfil.png
  components/
    Footer.jsx
    Header.jsx
    ProjectCard.jsx
    Section.jsx
    SkillTag.jsx
  data/
    projects.js
  sections/
    About.jsx
    Contact.jsx
    Home.jsx
    Projects.jsx
    Skills.jsx
  styles/
    GlobalStyles.js
    theme.js
  App.jsx
  main.jsx
index.html

🚀 Projetos apresentados

Diário de Bordo — CRUD com LocalStorage (JS/HTML/CSS).
Repositório: https://github.com/isadorasous-a11y/diario-de-bordo

Tarefas EBAC — React + TypeScript + Vite.
Repositório: https://github.com/isadorasous-a11y/tarefas-ebac

Mini-Poke API — FastAPI + PostgreSQL + Docker.
Repositório: https://github.com/isadorasous-a11y/mini-pokeapi

Performance Web — Dashboard de métricas (JS + Chart.js).
Repositório: https://github.com/isadorasous-a11y/perfomance-web


♿ Acessibilidade

Foco visível (:focus-visible) com alto contraste.

Navegação por teclado em todas as seções.

Estrutura semântica com landmarks e aria-label nos grupos de navegação e listas.

Texto alternativo em imagens.

Tamanhos de fonte responsivos com clamp().

Checklist rápido:

 Navegação completa via Tab / Shift+Tab

 Contraste mínimo WCAG AA

 Headings em ordem lógica

 aria-label descritivos em links de ícones

📱 Responsividade

Grid fluido (breakpoint ~900px), uso de clamp() e flex-wrap.

Testado em 360–1200px.

🌐 Como publicar (Deploy)
Vercel (recomendado)

Crie conta em vercel.com e conecte seu GitHub.

Importe o repositório do portfólio.

Framework preset: Vite

Build Command: npm run build

Output Directory: dist

Finalize o deploy e copie a URL pública.

Volte aqui e edite o campo “Deploy” no topo do README.

GitHub Pages (alternativa)

npm run build

Ative Settings → Pages e aponte para branch com a pasta dist (você pode usar uma Action como peaceiris/actions-gh-pages para subir o conteúdo de dist para a branch gh-pages).

Atualize a URL de deploy no README.

🔭 Melhorias futuras

Modo Dark/Light automático (prefers-color-scheme).

Página de detalhes para cada projeto (ex.: react-router-dom).

i18n (pt-BR/en-US).

Métricas de Lighthouse no README.

Testes de componentes com Vitest + React Testing Library.

📩 Contato

E-mail: isadorasous@gmail.com

LinkedIn: https://www.linkedin.com/in/isadorasols/

GitHub: https://github.com/isadorasous-a11y
