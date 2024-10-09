import { chien } from "./script/class/chien.js";

console.log("hello!!!!");

const form = document.querySelector("#monform");
const select = document.querySelector("#dog-select");
const chiens = []; 
const choixSelect = document.querySelector("#selectOutput")

// Input pour récupérer ultérieurement les valeurs
const nom = document.querySelector("#dog-name");
const race = document.querySelector("#dog-breed");
const age = document.querySelector("#dog-age")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newChien = new chien(nom.value, race.value, age.value);
    chiens.push(newChien);
    
    // select
    const option = document.createElement("option");
    option.value = newChien.id;
    option.textContent = `${newChien.nom}`;
    select.appendChild(option);

    // Réinitialiser le formulaire après soumission
    e.target.reset();
});


select.addEventListener('change', function () {
    choixSelect.textContent = `Vous avez sélectionné le chien avec l'ID ${this.value}`

    const selectedChien = chiens.find(chien => chien.id === parseInt(this.value));
    console.log(selectedChien);

    //pour réaficher les informations
    nom.value=selectedChien.nom
    race.value=selectedChien.race
    age.value=selectedChien.age
})