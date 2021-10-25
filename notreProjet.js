"use strict"

function jouer() {
    let joueurs = [];
    let positionDesJoueurs = [];
    let joueur;
    let gagnant;
    let nombreDeJouers = +prompt("Combien y a t'il de joueurs?");
    while (isNaN(nombreDeJouers)) {
    	nombreDeJouers = +prompt("Combien y a t'il de joueurs? Veillez introduire un nombre !");
    }
    for (let i = 0; i < nombreDeJouers; i++) {
        joueur = prompt("Quel est le nom du jouer: " + (i + 1) + " ?");
        joueurs[i] = joueur;
        console.log(joueurs);
        positionDesJoueurs[i] = 0;
        console.log(positionDesJoueurs);
    }
    let nombreDeTours = +prompt("Combien de tours souhaitez vous jouer ?");
    while (isNaN(nombreDeTours)) {
    	nombreDeTours = +prompt("Combien de tours souhaitez vous jouer ? Veillez introduire un nombre !");
    }
    //console.log(nombreDeTours);
    let toursEcoule = 0;
    let cible = (Math.floor(Math.random() * 200) + 1);
    //console.log(cible);
    let messageProximiteCible = [];
    let messageFinDePartieUnGagnant;
    let messageFinDePartiePlusieursGagnants;
    let positionDeDepart = 0;
    for (let j = 0; j < nombreDeTours; j++) {
        for (let k = 0; k < nombreDeJouers; k++) {
            let avancement = +prompt(joueurs[k] + " tu es en position " + positionDesJoueurs[k] + ", choisit de combien tu veux avancer?");
            while(isNaN(avancement)) {
                avancement = +prompt(joueurs[k] + " tu es en position " + positionDesJoueurs[k] + ", choisit de combien tu veux avancer? Veillez intoduire un nombre !");
            }
            positionDesJoueurs[k] += avancement;
            if(positionDesJoueurs[k] == cible) {
                let messageGagnant = " a atteint la cible, il a gagné";
                alert(joueurs[k] + messageGagnant);
                j = nombreDeTours
                break;
            }
            else if (positionDesJoueurs[k] > cible) {
                positionDesJoueurs[k] = 0
                messageProximiteCible[k] = (joueurs[k] + " a dépassé la cible donc il a été réinitialisé à 0");
            }
        	else if (positionDesJoueurs[k] >= (3*cible/4) && positionDesJoueurs[k] <= cible-1) {
        	    messageProximiteCible[k] = (joueurs[k] + " n'est plus loin de la cible !");
        	}
        	else if (positionDesJoueurs[k] >= (cible/2) && positionDesJoueurs[k] < (3*cible/4)) {
        	    messageProximiteCible[k] = (joueurs[k] + " a fait plus de la moitié du trajet !");
        	}
        	else if (positionDesJoueurs[k] >= (cible/4) && positionDesJoueurs[k] < (cible/2)) {
        	    messageProximiteCible[k] = (joueurs[k] + " est presque arrivé à la moitié !");
        	}
      		else if  (positionDesJoueurs[k] >= (positionDeDepart + 1) && positionDesJoueurs[k] < (cible/4)) {
        	    messageProximiteCible[k] = (joueurs[k] + " n'a pas énormement progrèssé !");
        	}
        	else {
        	    alert("Une erreur s'est produite !");
        	}
        }
        if (j != nombreDeTours) {
            for (let n = 0; n < messageProximiteCible.length; n++) {
                alert(messageProximiteCible[n]);
            }
            toursEcoule++
        }
        //console.log(positionDesJoueurs);
    }
    if (toursEcoule == nombreDeTours) {
        let plusGrandAvancement = 0;
        let positionJouersLePlusAvance = 0;
        for (let l = 0; l < nombreDeJouers; l++) {
            if(positionDesJoueurs[l] > plusGrandAvancement) {
            	gagnant = []
                gagnant.push(" " + joueurs[l]);
                plusGrandAvancement = positionDesJoueurs[l];
                positionJouersLePlusAvance = positionDesJoueurs[l];
            }
            else if (positionDesJoueurs[l] == plusGrandAvancement) {
                if (gagnant[0] == 0) {
                    gagnant.shift();
                }
            	gagnant.push(" " + joueurs[l]);
                positionJouersLePlusAvance = positionDesJoueurs[l];
            }
        }
        console.log(gagnant);
        if (gagnant.length == 1) {
        	messageFinDePartieUnGagnant = ("La partie est finie tous les tours ont été joué " + gagnant + " a gagné la parti car il est le plus proche de la cible, il est arrivé en position : " + positionJouersLePlusAvance + "!");
        	alert(messageFinDePartieUnGagnant);
        }
        else if (gagnant.length > 1) {
        	for(let m = 0; m < gagnant.length; m++) {
        		messageFinDePartiePlusieursGagnants = ("Il y a plusieurs jours qui sont arrivé à la même distance donc ils ont gagné ensemble. Il y a " + gagnant.length + " gagnants, il s'agit de" + gagnant + " ils sont arrivé en position " + positionJouersLePlusAvance + " !");
        	}
        alert(messageFinDePartiePlusieursGagnants);
        }
    }
}


