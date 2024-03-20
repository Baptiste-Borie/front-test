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

  ### Debrief

Je vais expliquer ce que j'ai pensé/ressenti/ comment j'ai abordé chaque aspect. Je précise que j'ai commenté le code à certain endroit pour expliciter le fonctionnement de certaines parties.

A première vue les tâches demandées me semblaient toutes plus ou moins abordables. Après avoir pull le projet, j'ai directement fait face à ma première difficulté typescript. Je ne conaissais pas du tout mais avec un peu de recherche et connaissant d'autres langages typés j'ai réussi à m'adapter.

Une fois que ça compiler j'ai pris plus ample conaissance de l'architecture. Deux choses m'ont interpelée. La première est qu'il n'y a pas d'architecure à proprement parler une fois dans le src les fichiers ne sont pas rangés. Seconde chose le fichier "App" est bien trop chargé, notamment avec du code répété. J'ai donc débuté par le plus simple : tout classer dans des sous-dossiers, déplacer le tableau de gens dans un fichier à part (ce qui fut une occasion de découvrir le principe d'interface en typescript), réaliser mon premier composant "BoxPerson" et afficher la moyenne d'âge car c'était le plus simple.

J'ai géré l'affichage du profil en mettant la fonction displayProfile en paramètre, avec le recul peut être qu'un context ou une autre manière de faire aurait était plus adaptée. J'ai aussi réalisé le changement du document.title au même moment, je ne me rappelais pas que dans le README vous aviez donné en tips useEffect donc je ne suis pas parti dans cette optique, mais cela fonctionne très bien. Etant donné que j'avais rendu dynamique l'affichage des personnes à l'aide de ma fonction renderCardPeople et de mon composant.

J'ai ensuite débuté l'implémentation d'un context. C'est la partie qui m'as pris le plus du temps. Principalement car au début je ne voyais pas dans quel contexte l'implémenter. Après m'être documenté j'ai vu que l'exemple du mode clair/sombre était souvent géré par un context. Je suis parti donc dans cette optique et j'ai rajouté l'icône permettant de changer de mode. C'est aussi à ce moment la que j'ai géré le changement de couleur de fond en fonction de l'âge.

Enfin il me restait l'API à implémenter. J'ai rencontré quelques difficultés, principalement car ne peut pas afficher le resultat directement vu que le retour de la requête est une Promise<String> et non une string. Bref j'ai opté pour une requête xhr c'est un procédé qui m'est plus familier et qui ne fut pas trop dur à implémenter. J'aurais pu faire avec des fonctions asynchrones directement à base de fetch, await etc. Mais apràs quelques essais infructueux avec fetch j'ai essayé xhr et cela a fonctionné.

J'en ai profité pour peaufiner un peu la vue. Ce n'est pas très agréable à l'oeil mais je trouve c'est un peu mieux. Pour ma part l'ajout d'une grille fait plus sens quant il s'agit d'afficher des profils. J'ai supprimé les boutons également et rendu les box cliquable directement. J'ai encore ajusté quelques points. Même si le rendu n'est pas magnifique, il me semble meilleur. J'en ai profité pour changer le logo react qui était fourni pour le remplacer par un plus original ... Je me suis permis de changer les noms et les descriptions également j'espère que cela vous fera au moins sourire.

### Amélioration possible

Première chose ce n'est pas responsive, cela me semble être le plus important. J'aurais pu aussi changer ma requête en fetch et non xhr. Je pense aussi avec le recul pouvoir gérer le profil displayed en context et non en la passant en argument de mon composant. C'est un petit projet avec peu de composants donc c'est facile à gérer mais à terme l'utilisation d'un context serait peut être plus adapté. J'ai un "bug" quand je change d'utilisateur la fonction se lance 2 fois. Je pense que ce n'est pas un bug majeur mais cela est corrigible. En soi cela ne pose aucun désagrement à l'utilisateur mise à part peut-être que cela consomme le nombre de requête par jour à l'API deux fois plus vite. Enfin je pourrais améliorer l'aspect global de l'application avec un peu plus de temps.
