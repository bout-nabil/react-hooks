# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_
```
J'ai implémenter une recherche en temps réel avec un debounce. J'ai aussi introduire un hook personnalisé useDebounce pour gérer le délai entre les changements de recherche.
![debounceSearch](https://github.com/user-attachments/assets/e6bff9e7-65fb-4a13-836e-2749b8bc631e)


```

### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_
```
Ajout du LanguageContext 
Sélecteur de langue dans App 
Traduction dynamique dans ProductSearch et ProductList

![LanguageText code](https://github.com/user-attachments/assets/7aa7070a-4eba-4a39-9f7c-78bd1933fb6f)

```

### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
```
J'ajoute useDebounce qui gère le délai avant d’appliquer une mise à jour.
J'ajoute useLocalStorage qui permet de stocker et récupérer des données dans localStorage.

![useDebounce](https://github.com/user-attachments/assets/50e657e9-51f0-40db-b4d1-68a281e98dbe)
![useLocaleStorage](https://github.com/user-attachments/assets/58d08e76-8b06-4003-a5d1-64551fd6ceef)


```

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
J'ai ajouté la pagination en mettant à jour l'URL de l'API avec les paramètres de requête page et limit, et j'ai inclus la page dans les dépendances useEffect.
La fonction reloadProducts réinitialise la page à 1, ce qui permet de recharger les produits à partir de la première page.
Les fonctions nextPage et prevPage vous aident à naviguer dans les pages en ajustant l'état de la page.

![page number](https://github.com/user-attachments/assets/3a3dccba-b32c-4d6e-bfc6-b394ec97edad)
![Reload button](https://github.com/user-attachments/assets/fc136690-2983-4586-9497-75b71013bc4b)

```

## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.
