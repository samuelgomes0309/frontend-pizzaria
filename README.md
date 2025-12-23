frontend-pizzaria 🚀 Visão Geral do Projeto

O frontend-pizzaria é a interface web administrativa desenvolvida para gerenciar os dados de uma pizzaria, como produtos, pedidos e usuários. O projeto é construído com uma stack moderna de desenvolvimento web, utilizando React e TypeScript para o frontend, e o Vite como ferramenta de build rápida. A aplicação conta com um sistema de autenticação e rotas protegidas para garantir a segurança dos dados.

✨ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

| Categoria | Tecnologia | Descrição |
| --- | --- | --- |
| **Framework** | React | Biblioteca JavaScript para construção da interface de usuário. |
| **Linguagem** | TypeScript | Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a qualidade do código. |
| **Build Tool** | Vite | Ferramenta de *build* rápida e moderna para desenvolvimento frontend. |
| **Estilização** | Tailwind CSS | Framework CSS *utility-first* para construção rápida de designs customizados. |
| **Roteamento** | React Router | Gerenciamento de rotas e navegação na aplicação. |
| **Formulários** | React Hook Form & Zod | Solução eficiente para gerenciamento de estado de formulários e validação de esquema. |
| **Comunicação** | Axios | Cliente HTTP baseado em Promises para requisições assíncronas à API. |
| **Notificações** | React Toastify | Biblioteca para exibir notificações de sucesso, erro e informação. |
| **Ícones** | Lucide React | Biblioteca de ícones simples e consistentes. |



⚙️ Funcionalidades Principais

O sistema oferece as seguintes funcionalidades:

•
Autenticação de Usuário: Login e persistência de sessão para acesso à área administrativa.

•
Dashboard: Visão geral e painel de controle para a gestão da pizzaria.

•
Gestão de Produtos: Funcionalidade para listar, criar produtos (pizzas, bebidas, etc.).

•
Rotas Protegidas: Separação de rotas públicas e privadas (autenticadas).

🛠️ Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter o Node.js (versão 18+) e o yarn (ou npm/pnpm) instalados em sua máquina.

1. Clonar o Repositório

Bash


git clone https://github.com/samuelgomes0309/frontend-pizzaria.git
cd frontend-pizzaria


2. Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência:

Bash


# Usando yarn (recomendado pelo lock file )
yarn install

# Ou usando npm
npm install

# Ou usando pnpm
pnpm install


3. Configuração da API

A URL base da API está hardcoded no arquivo src/services/api/axios.ts como http://localhost:3333. Se o seu backend estiver rodando em uma porta ou endereço diferente, você precisará alterar manualmente este arquivo.

4. Rodar a Aplicação

Inicie o servidor de desenvolvimento:

Bash


yarn dev

# ou npm run dev

# ou pnpm dev


A aplicação estará acessível em http://localhost:5173 (ou outra porta indicada pelo Vite ).

