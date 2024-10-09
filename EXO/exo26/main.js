import { Contact } from "./class/contact.js";

const form = document.querySelector("#formContact");
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const dateNaissance = document.querySelector("#dateNaissance");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const tableau = document.querySelector("#result");

const contacts = []; 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titre = document.querySelector('input[name="titre"]:checked').value;
     
    const newContact = new Contact(titre, nom.value, prenom.value, dateNaissance.value, phone.value, email.value); 
    contacts.push(newContact);
    console.log(newContact);
    

    const ligne = document.createElement("tr");
    ligne.innerHTML = `
        <td>${newContact.titre}</td>
        <td>${newContact.nom}</td>
        <td>${newContact.prenom}</td>
        <td>${newContact.dateNaissance}</td>
        <td>${newContact.phone}</td>
        <td>${newContact.email}</td>
    `;

    tableau.appendChild(ligne);

    // Réinitialiser le formulaire après soumission
    e.target.reset();
});
