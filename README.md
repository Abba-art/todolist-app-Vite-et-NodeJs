# Todo List App - Branche Dev

## Description

Ce projet est une application Todo List avec un front-end réalisé en React (Vite) et un back-end en Node.js avec Express et Prisma.

### État actuel

- Le front-end est entièrement développé avec une belle interface utilisateur.
- Le back-end Express avec Prisma est fonctionnel et gère les opérations CRUD (ajout, lecture, suppression).
- **Attention :** Le front-end utilise Vite, mais il ne fait **pas encore de requêtes HTTP** vers le back-end.  
  Les interactions avec l'API REST ne sont pas encore implémentées dans cette branche.

## Technologies utilisées

- Front-end : React, Vite, Tailwind CSS, Lucide-react
- Back-end : Node.js, Express, Prisma, SQLite

## Structure

- `/front-end` : code du front-end React
- `/back-end` : code du back-end Express

## Lancer le projet

1. Lancer le back-end :

```bash
cd back-end
npm install
npm run dev
