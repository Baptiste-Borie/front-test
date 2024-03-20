## LE TEST

### Les libs

- https://chakra-ui.com/getting-started

### A faire

- clean de l'application (fait ce qui te parait nécessaire pour optimiser l'application et la lisibilité du code)
- Implémenter un tri par âge (croissant/décroissant)
- Implémenter un background color différent entre les ages : plus c'est vieux plus c'est sombre
- Fait un truc qui te parait agréable à l'oeil (tu as carte blanche, mais te prends pas trop la tête non plus)
- Intégrer cette api https://api.genderize.io pour obtenir des infos sup de la personne en fonction de son prénom (on est d'accord que c'est un peu sexiste c'est pas fou... mais j'ai pas trouvé mieux en rapport avec le prénom, don't judge me)
- le titre de la page (document.title) doit prendre le nom de la personne sélectionnée (tips : useEffect)
- Afficher la moyenne d'âge de toutes les personnes en haut de la page

- Choses que je veux voir absolument dans le code :

  - un Context (https://reactjs.org/docs/context.html) (tips: ça implique de découper ton code en plusieurs fichiers/composants)
  - un peu de typage avec Typescript

  ### Debrief de mon ressenti

  A première vu les taches demandés me semblait toutes plus ou moins abordable. Après avoir pull le projet j'ai direct fait face à ma première difficulte typescript. Je ne conaissais pas du tout mais avec un peu de recherche et conaissant d'autres language typé j'ai réussi à m'adapter.

  Une fois que ca compiler j'ai pris plus ample conaissance de l'architecture 2 choses m'ont "choqués" directement. La première est qu'il n'y a pas de architecure à proprement parler une fois dans le src les choses sont justes la. Seconde chose le fichier "App" est bien trop chargé, notamment avec du code répété. J'ai donc débuté par le plus simple : tout ranger dans des sous-dossier, déplacer le tableau de gens dans un fichier à part (ce qui fut une occasion de découvrir le principe d'interface en typescript), réaliser mon premier composant "BoxPerson" et afficher la moyenne d'age car c'était le plus simple.
