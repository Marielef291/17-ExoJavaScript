import { Vehicule } from "./vehicule.js";

export class Voiture extends Vehicule{
    constructor(marque, modele, kilometrage, annee, climatise) {
        super(marque, modele, kilometrage, annee);
        this.clim = climatise
    }
    

    display(){
        return `<b>Voiture </b>: ${super.display()}${this.clim ? " - climatisée" : ""}`
    }
}