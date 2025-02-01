# Utiliser une image officielle Node.js optimisée pour la production
FROM node:20-alpine

# Créer et définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copier les fichiers de package.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances en mode production (minimise les vulnérabilités)
RUN npm install --omit=dev --audit=false

# Copier le reste de l'application dans le conteneur
COPY . .

# Compiler l'application React
RUN npm run build

# Exposer le port par défaut de React (3000)
EXPOSE 3000

# Commande pour lancer l'application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
