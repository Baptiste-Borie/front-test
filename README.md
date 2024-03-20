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

  Je vais expliquer ce que j'ai pensé/ressenti/ comme j'ai aborder chaque aspect. Je précise que j'ai commenter le code à certain endroit pour expliciter le fonctionnement de certaines parties.

  A première vu les taches demandés me semblait toutes plus ou moins abordable. Après avoir pull le projet j'ai direct fait face à ma première difficulte typescript. Je ne conaissais pas du tout mais avec un peu de recherche et conaissant d'autres language typé j'ai réussi à m'adapter.

  Une fois que ca compiler j'ai pris plus ample conaissance de l'architecture 2 choses m'ont "choqués" directement. La première est qu'il n'y a pas de architecure à proprement parler une fois dans le src les choses sont justes la. Seconde chose le fichier "App" est bien trop chargé, notamment avec du code répété. J'ai donc débuté par le plus simple : tout ranger dans des sous-dossier, déplacer le tableau de gens dans un fichier à part (ce qui fut une occasion de découvrir le principe d'interface en typescript), réaliser mon premier composant "BoxPerson" et afficher la moyenne d'age car c'était le plus simple.

J'ai gérer l'affichage du profil en mettant la fonction displayProfile en paramêtre, avec le recul peut être qu'un contexte ou une autre manière de faire aurait était plus adapté. J'ai aussi réaliser le changement du document title au même moment, je ne me rappelais pas quand dans le README vous aviez donné en tips useEffect donc je ne suis pas partie dans cette optique, mais cela fonctionne très bien. Etant donné que j'avais rendu dynamique l'affichage des personnes à l'aide de ma fonction renderCardPeople et de mon composant.

J'ai ensuite débuté l'implémentation d'un context. C'est la partie qui m'as pris le plus du temps. Principalement car au début je ne voyais pas dans quel contexte (sans mauvais jeu de mot) l'implémenter. Après m'être documenté j'ai vu que l'exemple du mode clair/sombre était souvent géré par un context. Je suis partie donc dans cette optique et j'ai rajouté l'icone permettant de changer de mode. C'est aussi ce jour la que j'ai gérer le changement de couleur de fond en fonction de l'age.

Enfin il me restait l'API à implémenter. J'ai eu quelque difficulté avec ca surtout qu'on on ne peut pas afficher le resultat directement vu que le retour de la requete est une Promise<String> et non une string. Bref j'ai opté pour une requete xhr c'est quelque chose que je connaissais et qui ne fut pas trop dur à implémenter. Je sais que j'aurais pu faire avec des fonctions asynchrones directement à base de fetch, await etc. Mais apres quelque essais avec fetch j'ai essayé xhr et cela à fonctionner donc xhr cela sera.

J'en ai profiter pour peaufiner un peu la vue. C'est pas tres beau mais je trouve ca un peu mieux le fait de faire une grille fait plus de sens pour moi quant il s'agit d'afficher des profils. J'ai supprimer les boutons également et rendu les box cliquable directment. Ajuster deux trois choses. Même si le rendu est pas magnifique je trouve ca déjà mieux. J'en ai profité pour changer le logo react qui était fourni pour le remplacer par un plus original ... Je me suis permis de changer les noms et les descriptions également j'espère que cela vous fera au moins sourire.

### Amélioration possible

Déjà première chose ce n'est pas responsive, cela me semble être le plus important. J'aurais pu aussi changer ma requête en fetch et non xhr. Je pense aussi avec le recul pouvoir gérer le profil displayed en contexte et non en la passant en argument de mon composant. C'est un petit projet avec peu de composant donc c'est facile à gérer mais à terme l'utilisation d'un contexte serait peut être plus adapté. J'ai un "bug" ou quand je change d'utilisateur la fonction se lance 2 fois. Je pense que ce n'est pas un bug majeur mais cela pourrait être corrigible. En soi cela ne pause aucun désagrement à l'utilisateur mise à part que je pense que cela consomme le nombre de requête par jour à l'API deux fois plus vite du coup. Enfin je pourrais rendre ca plus beau avec un peu plus de temps.
