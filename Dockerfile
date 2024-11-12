# Utilise une image de base légère de Node.js
FROM node:18-alpine AS build

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de configuration pour installer les dépendances
COPY package.json package-lock.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code source dans le conteneur
COPY . .

# Construit l'application pour la production
RUN npm run build

# Étape de production - Utilisation de Nginx pour servir les fichiers statiques
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port 80
EXPOSE 80

# Démarre Nginx
CMD ["nginx", "-g", "daemon off;"]