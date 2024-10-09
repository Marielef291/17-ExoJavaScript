console.log("hello wordl !");

const divEditable = document.querySelector("#reponseExo")

class Voiture {
    constructor(marque, modele, vitesse){
        this.marque = marque
        this.modele = modele
        this.vitesse = vitesse
    }

    get _vitesse(){
        return this.vitesse
    }

    set _vitesse(v){
        this.vitesse = v
        return this.vitesse
    }

    accelerer (){
        this.vitesse = this.vitesse + 10
        this.afficherVitesse()
    }
    
    tourner(){
        this.vitesse= this.vitesse - 5
        this.afficherVitesse()
    }
    afficherVitesse() {
        const nouvelP = document.createElement("p");
        nouvelP.innerHTML = `La voiture <b>${this.marque} ${this.modele}</b> avance desormais à <b>${this.vitesse} km/h</b>.`;
        divEditable.appendChild(nouvelP);
    }

}

const voiture1 = new Voiture("BMW", "Serie 1", 80)
const voiture2 = new Voiture("Mercedes", "GLB", 100)


// Voiture 1 accélère 3 fois
voiture1.accelerer();
voiture1.accelerer();
voiture1.accelerer();

// Voiture 2 accélère 2 fois et tourne 2 fois
voiture2.accelerer();
voiture2.accelerer();
voiture2.tourner();
voiture2.tourner();