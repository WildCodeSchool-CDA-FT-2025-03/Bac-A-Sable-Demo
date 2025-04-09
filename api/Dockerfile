# Version légère d'OS pour le Web
FROM node:lts-alpine AS dev

# Création d'un dossier de travail dans le container
WORKDIR /app

# Copie des fichiers de packages, ts config et data
COPY *.json ./

# Mise en place de l'installation des nodes modules
RUN npm install

# Copie les sources de code
COPY src src

# Copie optionnelle si systeme de log mis en place
# Pour améliorer la pertinence, il faudrait en plus mettre en place un volume de sauvegarde lors de la mise en place du docker-compose
COPY log log

RUN npm run build
# Exposition sur le réseau machine (serveur) du port pour le rendre accessible à Nginx (Attention, uniformiser vos ports applicatifs, docker et de votre configuration nginx)
EXPOSE 3000


CMD ["npm", "run", "prod"]