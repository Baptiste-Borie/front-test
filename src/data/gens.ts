// type Person qui permet de définir la structure de notre array gens.
export interface Person {
    name: string;
    age: string;
    description: string;
    hasBeenManager?: boolean; // "?" permet que cet attribut soit optionnel
  }

// Pour les ages je me suis basé sur le site https://theoffice.fandom.com/wiki/Main_Page. J'ai pris la libérté d'enlever 10 ans a chaque personnage vu que la dernière saison de la série date de 2012. Le but étant de donné un age cohérent pour chaque personnage .
export const gens: Person[] = [
    {
        name: "Jim Halpert",
        age: "36",
        description: "Jim Halpert, alias Big Tuna, est un personnage fictif de la version américaine de la série télévisée The Office, interprété par John Krasinski. Le personnage est basé sur Tim Canterbury de la version originale de The Office. Le personnage est très populaire et est connu pour ses farces envers Dwight Schrute. Il s'est également distingué pour sa relation amoureuse avec Pam Beesly, avec qui il se marie et a des enfants. Jim est connu pour son amour du sport, en particulier le golf et le basketball.",
        hasBeenManager: true
    },
    {
        name: "Pam Beesly",
        age: "34",
        description: "Pamela Morgan Halpert (née Beesly ; née le 25 mars 1979) est un personnage fictif de la série télévisée américaine The Office, interprété par Jenna Fischer. Son homologue dans la série originale britannique The Office est Dawn Tinsley. Pam est la réceptionniste de la succursale de Scranton de la société de papier Dunder Mifflin. Elle est connue pour sa relation amoureuse avec Jim Halpert, avec qui elle se marie et a des enfants. Pam est également connue pour son talent artistique et son ambition de devenir une artiste professionnelle. Elle est souvent considérée comme la voix de la raison parmi ses collègues et est appréciée pour sa gentillesse et sa compassion."
    },
    {
        name: "Michael Scott",
        age: "48",
        description: "Le directeur régional de la succursale de Scranton de la société de distribution de papier Dunder Mifflin, Michael Scott, est connu pour son comportement inapproprié, son manque de bon sens et son incompétence, mais il est aussi bienveillant et bon. Il est le patron de la succursale de Scranton, qui comprend le représentant commercial Jim Halpert, la réceptionniste Pam Beesly et le temporaire Ryan Howard. Michael Scott est un fan de comédie improvisée, et il se considère comme un artiste talentueux. Il est connu pour son utilisation de l'expression 'C'est ce qu'elle a dit'.",
        hasBeenManager: true
    },
    {
        name: "Dwight Schrute",
        age: "44",
        description: "L'adjoint (au) directeur régional de Dunder Mifflin, Dwight Schrute, est un survivaliste et un agriculteur de betteraves socialement maladroit. Il est connu pour son manque de compétences sociales et de bon sens, son amour pour les arts martiaux, le système judiciaire et la ferme de betteraves. Il est également connu pour sa rivalité avec son collègue vendeur Jim Halpert.",
        hasBeenManager: true
    },
    {
        name: "Angela Martin",
        age: "39",
        description: "Angela Noelle Schrute (née Martin, anciennement Lipton) est un personnage fictif de la série télévisée américaine The Office, interprété par l'actrice Angela Kinsey. Elle est un personnage original et n'a pas de pendant dans la version britannique de la série. Angela est la responsable du service de comptabilité de la succursale de Scranton de la société de papier Dunder Mifflin. Elle est présentée comme une chrétienne conservatrice et est souvent vue comme prude et moralisatrice. Elle est connue pour sa relation amoureuse avec Dwight Schrute, qu'elle tente de garder secrète par rapport au reste du bureau. Elle est également connue pour son amour des chats."
    },
    {
        name: "Kevin Malone",
        age: "45",
        description: "Kevin Jaye Malone est un personnage fictif de la série télévisée américaine The Office. Il est joué par Brian Baumgartner. Le pendant de Kevin dans la série britannique est Keith Bishop. Kevin est l'un des rares personnages mineurs de The Office à être directement basé sur un personnage de la version originale britannique. Il est basé sur Keith Bishop, qui partage son manque de compétences en communication, son talent musical et sa grande taille. Kevin est l'attachant mais simple d'esprit comptable chez Dunder Mifflin. Il est souvent la cible de blagues au bureau et est connu pour son amour de la nourriture et son comportement enfantin."
    },
    {
        name: "Oscar Martinez",
        age: "41",
        description: "Oscar Martinez est un personnage de la série télévisée américaine 'The Office', interprété par Oscar Nunez. Il est comptable à la succursale de Scranton de la société de papier Dunder Mifflin, connu pour son intelligence, son esprit et pour être souvent la voix de la raison parmi ses collègues. Oscar est ouvertement gay et fait parfois face à des situations de discrimination ou d'inconfort en raison de son orientation sexuelle, mais il les gère avec grâce et humour. Il est généralement pondéré et rationnel, fournissant des commentaires judicieux sur les absurdités de la vie de bureau et servant de confident à certains de ses collègues. Dans l'ensemble, Oscar est un membre respecté et intégral de l'ensemble du bureau."
    },
    {
        name: "Stanley Hudson",
        age: "62",
        description: "Stanley Hudson est un personnage fictif de la série télévisée américaine The Office, joué par Leslie David Baker. Stanley est un vendeur à la succursale de Scranton de la société de papier Dunder Mifflin. Il est connu pour sa livraison impassible et son amour des mots croisés. Stanley est souvent considéré comme un personnage grincheux, apathique et cynique, mais il est également connu pour son intelligence et son humour sec. Il est également connu pour son amour des bretzels et sa liaison avec Cynthia."
    },
    {
        name: "Meredith Palmer",
        age: "54",
        description: "Meredith Elizabeth Palmer est un personnage fictif de la série télévisée comique américaine, The Office. Elle est interprétée par Kate Flannery. Meredith est l'alcoolique amusante et promiscueuse du bureau, souvent vue en train de boire ou de s'exposer. Elle est connue pour son attitude décontractée envers son travail et est souvent considérée comme la carte sauvage du groupe. Elle est également connue pour son amour de la boisson et sa promiscuité."
    },
    {
        name : "Creed Bratton",
        age : "88", // Personne ne sait vraiment.
        description : "Creed Bratton est un personnage fictif de la série télévisée américaine The Office, interprété par l'acteur du même nom. Creed est le directeur régional adjoint de Dunder Mifflin, bien qu'il soit rarement vu en train de travailler. Il est connu pour son comportement excentrique, ses anecdotes bizarres et son manque de bon sens. Creed est souvent considéré comme un personnage mystérieux et imprévisible, avec une histoire personnelle obscure et des antécédents criminels présumés. Il est également connu pour son talent musical et son attitude détachée envers la vie de bureau. Creed apporte une touche de folie et de mystère à l'ensemble du bureau."
    },
    {
        name : "Toby Flenderson",
        age : "51",
        description : "Toby Flenderson est un personnage fictif de la série télévisée américaine The Office, interprété par Paul Lieberstein. Il est le responsable des ressources humaines de la succursale de Scranton de la société de papier Dunder Mifflin. Toby est souvent considéré comme un personnage malchanceux et impopulaire, souvent la cible de blagues et de mépris de la part de ses collègues. Il est également connu pour son comportement passif et sa propension à éviter les conflits. Malgré sa nature timide et réservée, Toby est souvent la voix de la raison parmi ses collègues, offrant des conseils judicieux et une perspective équilibrée sur les situations de bureau. Il est également connu pour son amour des documentaires et sa relation compliquée avec le directeur régional Michael Scott. Toby apporte une touche de réalisme et de compassion à l'ensemble du bureau."
    },
    {
        name : "Ryan Howard",
        age : "34",
        description : "Ryan Howard  est un personnage fictif de la série télévisée américaine The Office, interprété par B.J. Novak. Il est un représentant commercial à la succursale de Scranton de la société de papier Dunder Mifflin. Ryan est connu pour son ambition, son arrogance et son manque de compétences professionnelles, ainsi que pour sa relation tumultueuse avec sa collègue Kelly Kapoor. Il est également connu pour ses tentatives de lancer des start-ups et de gravir les échelons de l'entreprise, malgré ses échecs répétés et son manque de maturité. Ryan apporte une touche de cynisme et de réalisme à l'ensemble du bureau, illustrant les défis et les échecs de la vie professionnelle."
    },
    {
        name : "Kelly Kapoor",
        age : "34",
        description :"Kelly Kapoor est un personnage fictif de la série télévisée américaine The Office, interprété par Mindy Kaling. Elle est la représentante clientèle de la succursale de Scranton de la société de papier Dunder Mifflin. Kelly est connue pour son comportement exubérant, son amour de la mode et sa personnalité narcissique. Elle est également connue pour sa relation tumultueuse avec son collègue Ryan Howard, ainsi que pour ses intérêts variés, allant de la pop culture à la spiritualité. Kelly apporte une touche de dynamisme et de drame à l'ensemble du bureau, illustrant les défis et les excès de la vie professionnelle."
    },
    {
        name : "Phyllis Vance",
        age : "48",
        description : "Phyllis Vance est un personnage fictif de la série télévisée américaine The Office, interprété par Phyllis Smith. Elle est la représentante clientèle de la succursale de Scranton de la société de papier Dunder Mifflin. Phyllis est connue pour son attitude maternelle, sa gentillesse et son amour des traditions. Elle est également connue pour sa relation amoureuse avec son mari Bob Vance, propriétaire de Vance Refrigeration, ainsi que pour sa capacité à naviguer dans les dynamiques de pouvoir au bureau. Phyllis apporte une touche de chaleur et de stabilité à l'ensemble du bureau, offrant un soutien et une sagesse bienveillante à ses collègues."
    },
    {
        name : "Andy Bernard",
        age : "41",
        description : "Andy Bernard est un personnage fictif de la série télévisée américaine The Office, interprété par Ed Helms. Il est un représentant commercial à la succursale de Scranton de la société de papier Dunder Mifflin. Andy est connu pour son comportement exubérant, son amour de la musique et son manque de compétences professionnelles, ainsi que pour sa relation amoureuse avec sa collègue Erin Hannon. Il est également connu pour ses tentatives de gravir les échelons de l'entreprise, malgré ses échecs répétés et son manque de maturité. Andy apporte une touche de dynamisme et de drame à l'ensemble du bureau, illustrant les défis et les excès de la vie professionnelle. ",
        hasBeenManager : true   
    },
    {
        name : "Erin Hannon",
        age : "27",
        description :"Erin Hannon est un personnage fictif de la série télévisée américaine The Office, interprété par Ellie Kemper. Elle est la réceptionniste de la succursale de Scranton de la société de papier Dunder Mifflin. Erin est connue pour son comportement exubérant, son amour de la musique et son manque de compétences professionnelles, ainsi que pour sa relation amoureuse avec son collègue Andy Bernard. Elle est également connue pour sa personnalité douce et sa capacité à naviguer dans les dynamiques de pouvoir au bureau. Erin apporte une touche de dynamisme et de drame à l'ensemble du bureau, illustrant les défis et les excès de la vie professionnelle."
    },
    {
        name : "Cecelia Marie Halpert",
        age : "3",
        description :"Cececila Marie Halpert est la fille de Jim et Pam Halpert. Elle est née le 4 mars 2010. Elle a une petite soeur, Phillip Halpert, qui est née le 1er février 2012. Elle est apparue pour la première fois dans l'épisode de la saison 6, 'Niagara'. Elle est interprétée par Mia Cavolicci et Eva Cavolicci."
    },
    {
        name : "Phillip Halpert",
        age : "1",
        description :"Phillip Halpert est le fils de Jim et Pam Halpert. Il est né le 1er février 2012. Il a une grande soeur, Cecelia Marie Halpert, qui est née le 4 mars 2010. Il est apparu pour la première fois dans l'épisode de la saison 8, 'Jury Duty'. Il est interprété par Jake et Joe Cavolicci."
    }
];