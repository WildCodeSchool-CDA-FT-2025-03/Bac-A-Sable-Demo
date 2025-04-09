# Version légère d'OS pour le Web
FROM node:lts-alpine AS runner

# Création d'un dossier de travail dans le container
WORKDIR /app

# Copie des fichiers de packages, ts config
COPY *.json ./

# Mise en place de l'installation des nodes modules
RUN npm install

# Copie l'intégralité pour le build
COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]