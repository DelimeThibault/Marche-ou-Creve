Règle du jeu :

    On demande au départ :
        - Le nombre de joueur pour la partie (qui sera ajouter dans un array)
        - Un certain nombre de tour

    La ligne d'arrivé est défini aléatoirement (entre 1 et 200) et reste inconnu.
    Chacun à leur tour en démarant de 0, les joueurs choisissent un chiffre qui s'additionne à leur total personnel. Essayant d'arriver au chiffre d'arrivé.
    Si on arrive au nombre d'arriver (exacte) le joueur a gagné et la partie est finie.
    Si on dépasse le point d'arriver, on revient à 0.
    Si on arrive à la fin des tours, le joueur le plus proche du nombre d'arrivé est celui qui gagne.
    En cas d'égalité pour les gagnants => il y a plusieurs gagnants.

Détails pour le code :

    Un message est afficher afin d'indiquer à quel point nous sommes proche/loin du nombre d'arriver.
        - Si on est dans le 1er quart (0-25%) => message;
        - Si on est dans le 2ème quart (25-50%) => message;
        - Si on est dans le 3ème quart (50-75%) => message;
        - Si on est dans le 4ème quart (75-99%) => message;
        - 100% => message pour le gagnant(s) et arrête la partie.
        - Si on dépasse la cible et qu'on est remis à 0.
        - On affiche un message de la position actuelle du jouer à chaque tour.
