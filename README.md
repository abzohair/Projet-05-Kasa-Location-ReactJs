# Projet-05-Kasa-Kasa-Application-de-location-immobilière

Projet réalisé dans le cadre de ma formation Développeur Web chez OpenClassrooms.
Kasa est une application React permettant de consulter des annonces immobilières avec navigation, galeries photos, éléments déroulants et gestion des erreurs.

# Objectifs du projet
- Développer l'application à partir de maquettes Figma en utilisant React.

- Structurer l'interface en composants réutilisables.

- Gérer la navigation avec React Router.

- Implémenter les fonctionnalités interactives (carrousel, éléments déroulants, pages dynamiques).

- Assurer un affichage responsive fidèle à la maquette.

# Stack technique
- React (Vite)

- React Router Dom

- Sass (pour le style)

- JavaScript ES6

- Données en JSON

# Fonctionnalités principales
- Page d'accueil : liste des logements.

- Page de logement : galerie photo (boucle infinie), collapses d'informations, tags, note.

- Carrousel : navigation circulaire, boutons et numérotation masqués si une seule image.

- Élément déroulant (Collapse) : ouverture/fermeture au clic avec animation CSS.

- Page À propos avec plusieurs sections Collapse.

- Page d’erreur 404 pour les routes inexistantes ou ID invalide.

- Routage dynamique avec redirection en cas d’erreur.

# Installation et lancement
* Cloner le dépôt
git clone https://github.com/abzohair/Projet-05-Kasa-Location-ReactJs.git

* Accéder au projet
cd Projet-05-Kasa-Location-ReactJs

* Installer les dépendances
npm install

* Lancer l'application en mode développement
npm run dev

# Scénario de développement
- Initialisation avec Vite.

- Mise en place du routage et création des pages.

- Création des composants UI (Banner, Card, Collapse, Gallery...).

- Intégration des données JSON et affichage dynamique.

- Gestion des erreurs avec une page 404.

- Responsive design et conformité avec la maquette Figma.