# Floritech Dashboard

Dashboard web responsivo desenvolvido para o teste técnico da Flori Tech. O projeto foi construído com foco em boas práticas de programação, responsividade e alta qualidade de código, utilizando React e TailwindCSS.

---

## Tecnologias Utilizadas

- **React 19** — Biblioteca principal para construção da interface.
- **TailwindCSS 4** — Framework utilitário para estilização rápida e responsiva.
- **Vite** — Bundler e servidor de desenvolvimento ultra rápido.
- **React Router Dom** — Gerenciamento das rotas do frontend.
- **React Hook Form + Zod** — Controle e validação de formulários.
- **Chart.js + react-chartjs-2** — Gráficos interativos para visualização de dados mockados.
- **Zustand** — Gerenciamento leve de estado para contexto global.
- **Heroicons** — Ícones SVG para interface.
- **TypeScript** — Tipagem estática para maior segurança e manutenção do código.
- **ESLint + plugins React** — Linter para manter o código limpo e padronizado.

---

## Funcionalidades Implementadas

- **Tela Dashboard**  
  Visão geral com gráficos de dispersão, pizza e colunas, usando dados mockados.

- **Tela My Profile**  
  Visualização dos dados do perfil do usuário.

- **Tela de Edição de Usuário**  
  Formulário para editar dados do usuário armazenados no LocalStorage, controlado via contexto React.

- **Tela de Ajuda**  
  Área dedicada para orientações e suporte ao usuário.

- **Componentes reutilizáveis**  
  - `InputLabel`: componente customizado para inputs com label e mensagens de erro.  
  - `Button`: componente de botão estilizado e reutilizável.  

- **Navegação**  
  - Navbar e Sidebar responsivos e funcionais, otimizados para desktop e mobile (mobile-first).

---

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão recomendada >= 18.x)
- npm ou yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasMeyble/FLORITECH-teste.git
   cd floritech-dashboard
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```
   O número da porta pode variar, confirme no terminal.

---

## Scripts Disponíveis

- `dev` — inicia o servidor de desenvolvimento com hot reload.
- `build` — gera a build de produção.
- `preview` — roda a build gerada localmente para preview.
- `lint` — executa ESLint para análise estática do código.

---

## Considerações Finais

Este projeto foi desenvolvido respeitando os padrões modernos de desenvolvimento frontend, com organização modular e escalável. O foco principal foi garantir responsividade, boa usabilidade e componentes reutilizáveis.

Para dúvidas, sugestões ou contribuições, sinta-se à vontade para abrir issues ou pull requests no repositório.
