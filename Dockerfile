# Use a imagem oficial do Node.js com uma versão específica (14 neste caso)
FROM node:18-alpine3.18 as build
 
# Crie e defina o diretório de trabalho na imagem
WORKDIR /website
 
# Copie os arquivos da aplicação para a imagem
COPY . .
 
# Instale as dependências do projeto
RUN npm install
 
# Construa a aplicação Next.js
RUN npm run build
 
# Exponha a porta em que a aplicação será executada
EXPOSE 3000
EXPOSE 80
 
# Defina o comando padrão para iniciar a aplicação
#CMD ["npm", "run", "start"]