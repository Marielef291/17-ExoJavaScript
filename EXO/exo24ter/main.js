import { Voiture } from "./voiture.js"
import { Moto } from "./moto.js";

const display = document.querySelector("#display")


const voiture = new Voiture("BMW", "serie1", 15000, 2000, true)
const moto = new Moto("Yamaha", "MT-07", 8000, 2019);

const nouvelP = document.createElement("p")
nouvelP.innerHTML = voiture.display()
display.appendChild(nouvelP)

const nouvelP2 = document.createElement("p")
nouvelP2.innerHTML = moto.display()
display.appendChild(nouvelP2)