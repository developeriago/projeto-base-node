### Base para criação de API usando o ORM sequelize

Projeto espelho para os próximo a serem criados, com intuito de otimizar o processo de criação.

### Bibliotecas instaldas

sudo npm install dotenv express pg pg-hstore sequelize validator

### Instalar o TypeScript

tsc --init

### Descomentar as seguintes linhas no arquivo tsconfig.json

"rootDir": "./src", -- definir pasta raiz
"moduleResolution": "node"
"outDir": "./dist", -- definir pasta de biuld

### Instalar as tipagens do typescript

sudo npm install -D @types/node @types/express @types/sequelize @types/validator

### Instalar o cors e a tipagem

npm instal cors
npm install -D @types/cors
