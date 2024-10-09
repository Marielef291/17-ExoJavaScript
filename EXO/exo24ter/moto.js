import { Vehicule } from "./vehicule.js";

export class Moto extends Vehicule{

    display(){
        return `<b>Moto </b>: ${super.display()}`;
    }
}