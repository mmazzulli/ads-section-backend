# 🚀 Section Ads API

API REST desenvolvida com **Node.js**, **Express**, **Prisma ORM** e **MySQL** para gerenciamento de anúncios (Ads).

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- MySQL
- Nodemon
- Dotenv

---

## 📁 Estrutura do projeto

```txt
src/
├── controllers/
├── routes/
├── database/
└── server.js

prisma/
├── schema.prisma
└── migrations/


📦 Instalação

Clone o repositório
git clone <url-do-repositorio>

Acesse a pasta
cd section-ads

Instale as dependências
npm install


🔐 Configuração do ambiente
Crie um arquivo .env na raiz do projeto:

DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"


🗄️ Banco de dados (Prisma)

Executar migrations:
npx prisma migrate dev

Gerar Prisma Client:
npx prisma generate

▶️ Executando o projeto
npm run dev

Servidor rodando em:
http://localhost:3000

📌 Endpoints da API
➕ Criar anúncio
POST /ads

Body:
{
  "titulo": "Título",
  "subtitulo": "Subtítulo",
  "descricao": "Descrição"
}


📄 Lista / Edita / Cria / Exclui


🎯 Objetivo do projeto

Este projeto foi desenvolvido com fins de estudo para praticar:

Criação de APIs REST
CRUD completo
Express.js
Prisma ORM
Integração com MySQL
Estruturação de backend Node.js












