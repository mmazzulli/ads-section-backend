Section Ads API

API REST desenvolvida com Node.js, Express, Prisma ORM e MySQL para gerenciamento de anúncios (Ads).

🚀 Tecnologias utilizadas
Node.js
Express
Prisma ORM
MySQL
Nodemon
Dotenv
📁 Estrutura do projeto
src/
├── controllers/
├── routes/
├── database/
└── server.js

prisma/
├── schema.prisma
└── migrations/
⚙️ Instalação
Clone o repositório
git clone <url-do-repositorio>
Acesse a pasta
cd section-ads
Instale as dependências
npm install
🔐 Configuração do ambiente

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
🗄️ Banco de dados

Execute as migrations do Prisma:

npx prisma migrate dev

Gerar Prisma Client:

npx prisma generate
▶️ Executando o projeto
npm run dev

Servidor disponível em:

http://localhost:3000
📌 Endpoints da API
Criar anúncio
POST /ads
Body:
{
  "titulo": "Título",
  "subtitulo": "Subtítulo",
  "descricao": "Descrição"
}
Listar anúncios
GET /ads
Buscar anúncio por ID
GET /ads/:id
Atualizar anúncio
PUT /ads/:id
Remover anúncio
DELETE /ads/:id
📚 Objetivo do projeto

Projeto desenvolvido para estudos de:

API REST
CRUD
Express
Prisma ORM
Integração com MySQL
Estruturação de backend Node.js