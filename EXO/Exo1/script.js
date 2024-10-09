console.log("Hello word !");

// EXERCIE 1
// let nom = prompt("Votre Nom : ")
// let prenom = prompt("Votre Prenom : ")


// alert("Bonjour "+nom +" "+prenom)
// console.log("Bonjour "+nom +" "+prenom);

//EXERCICE 2
// let nb1 = prompt("Donnez un premier nombre : ")
// let nb2 = prompt("Donnez un deuxième nombre : ")

// let result = parseInt(nb1)+parseInt(nb2);
// alert(nb1 +" + " + nb2 +" = "+result)

//EXERCICE 3
// let r = prompt("Donnez la valeur du rayon : ")
// let h = prompt("Donnez la hauteur : ")

// let vol = ((Math.PI * (parseInt(r)**2))*parseInt(h))/3
// alert (vol)
// console.log(vol.toFixed(2));


// //Exercice 4
// let age = Number(prompt("Quest ets votre age ? : "))
// console.log(age<18 ?  "Vous êtes mineur" :"Vous êtes majeur" );

// Exo5
// let temp = Number(prompt("Quelle est la température de l'eau ? : "))
// console.log("Température = "+temp +"°C");

// if ( temp < 0 || isNaN(temp)){
//     console.log("l'eau est à l'état solide")
// }else if(temp < 100) {
//     console.log("l'eau est à l'état liquide")
// }else{
//     console.log("l'eau est à l'état gazeux")
// }

// //AVEC TERNAIRE

// console.log(temp<0 ?  "l'eau est à l'état solide" :(temp<100 ?  "l'eau est à l'état liquide" :"l'eau est à l'état gazeux") );



//EXO6
// let age = Number(prompt("Quest ets votre age ? : "))
// let salaire = Number(prompt("Quel est votre salaire maximun ? : "))
// let annneXp = Number(prompt("Nombre d'années d'expérience ? : "))

// if (age < 30){
//     console.log("Vous devez avoir au minimum 30 ans");
// }
// if (salaire>40000){
//     console.log("Votre salaire minimum est trop haut");
// }

// if (annneXp<5){
//     console.log("Vous n'avez pas assez d'expérience");
// }

// if (age < 30 || salaire>40000 || annneXp<5 ){
//     console.log("Vous ne pouvez pas être engagé !");
    
// }else{
//     console.log("Vous pouvez être engagé !");
// }


//Exo7
// console.log("Je commence à compter");

// for(let cpt = 1;cpt < 11; cpt++){
//     console.log(cpt)
// }

// console.log("Fin du compte !");

// let nombre =1
// console.log("Je commence à compter");
// while(nombre < 11){
//     console.log(nombre);
//     ++nombre;
// }
// console.log("Fin du compte !");

//Exo8
// console.log("Table des matières :");
// for(let i = 1;i < 4; i++){
//         console.log("Chapitre "+i)
//         for(let j = 1;j < 4; j++){
//             console.log("\t - partie "+i+"."+j);
//         }
//     }


// Ex9
// let N = prompt("Donnez un premier nombre : ")

// for (let index = 1; index < N; index++) {
//     console.log("Table des " + index );
//     for (let j = 1; j <= 10; j++) {
//        console.log(j + " x " + index + " = "+ index*j)
//     }
//     console.log("");
// }


//EXO 14

// function nomEtPrenom(prenom, nom){
//     return prenom +" " +nom
// }

// console.log(nom("Toto", "tata"))

//EXO 15

// function soustraire( a, b){
//     console.log(`Je soustrais ${a} et ${b}`)
//     return a-b
// }
// console.log(soustraire(2,1));

// exo 16
// function quelleHeure(heure = "12h00"){
//     console.log(`Il est ${heure}`);
// }

// quelleHeure()
// quelleHeure("14h00")

// exo 17
// const ask = (question, yes, no) =>{
//     if (confirm(question)) // affiche une boite de dialogue avec la possibilité d'accepter ou refuser
//         yes();
//     else 
//         no();
// }

// ask(
//     "Do you agree?",
//     () => {
//         alert("You agreed.");
//     },
//     () => {
//         alert("You canceled the execution.");
//     }
// );


//EXO 18

// function palindrome(chaine) {

    
    
// }

// palindrome("touot")
// palindrome("pierre")

// EXO19
// function compterLettreA(chaine){
//     let compte = 0
//     chaine = chaine.toLowerCase()
//     for (let i = 0; i < chaine.length-1; i++) {
//         if (chaine[i] == "a"){
//             compte ++
//         }
//     }
//     console.log(`Resultat : ${compte}`);

// }

// compterLettreA("abba")
// compterLettreA("mixer")

// EXO20
// function affichage(tableau){
//     let stringTableau =""
//     for (let i = 0; i < tableau.length; i++) {
//         stringTableau += "    ".repeat(1 * i )+tableau[i]+"\n"
//     }
//     console.log(stringTableau);
// }

// let tab = []
// for (let i = 0; i < 10; i++) {
//     let number = Number(prompt("un nombre ? : "))
//     tab.push(number)
// }


// let tab2 = []
// for (let i = 0; i < 10; i++) {
//     let number = Math.floor(Math.random() * 10)
//     tab2.push(number)
// }


// affichage(tab)
// affichage(tab2)


// exo21
// let number = Number(prompt("Combien de chiffre que comportera le tableau? : "))
// let tab = []

// for (let i = 0; i < number-1; i++) {
//     let number = Math.floor(Math.random() * 10)
//     tab.push(number)
//     let stringRetour = `Le nombre ${number} est `
//     if (number % 2 == 0){
//         stringRetour+="pair "
//     }else{
//         stringRetour+="impair"
//     }
//     console.log(stringRetour);
//     stringRetour = ""
    
// }
// console.table(tab);


// exo22
// let tab = []
// let choix = prompt("Choisir un mode de saisie : \n 1 : Saisie fixe \n 2 : Saisie jusqu'à note négative")


// if (choix == "1"){
//     let number = Number(prompt("Combien de notes ? : "))
//     console.log("Début de Saisie !");
    
//     for (let i = 0; i < number; i++) {
//         let note = Number(prompt("Veuillez entrer une note entre 0 et 20 compris : "))
//         do {           
//             if (note<0 || note >21) {
//                 note = Number(prompt("ERREUR, veuillez réessayer :"))
//             }
//         }while(note<0 || note >21)
        
//         tab.push(note)
        
//     }
//     console.log("Fin de Saisie !");
//     console.table(tab)
// }else{
//     console.log("Début de Saisie !");
//     let note
//     do{
//         note = Number(prompt("Veuillez entrer une note entre 0 et 20 compris : "))
//         do {           
//             if (note >= 0 && note <= 20) {
//                 tab.push(note);
//             } else if (note > 21) {
//                 note = Number(prompt("ERREUR, veuillez réessayer :"))
//             }
//         }while(note >21)
        
//     }while (note >= 0)
//     console.log("Fin de Saisie !");
//     console.table(tab)
// }

// console.log(tab);

// console.log(`La note maximale est de ${Math.max(...tab)}/20`);
// console.log(`La note minimale est de ${Math.min(...tab)}/20`);
// console.log(`La moyenne est de ${average(...tab)}/20`);


//EXO 23

// let etudiants = [ 
//     { 
//         prenom: "José", 
//         nom: "Garcia", 
//         matieres: { 
//             francais: 16, 
//             anglais: 7, 
//             humour: 14 
//         }  
//     }, 
//     { 
//         prenom: "Antoine", 
//         nom: "De Caunes", 
//         matieres: { 
//             francais: 15, 
//             anglais: 6, 
//             humour: 16, 
//             informatique: 4, 
//             sport: 10 
//         } 
//     } 
// ]; 

// const [etudiant1, etudiant2] = etudiants
// console.log(etudiant1);

// for (const student of etudiants) {
//     console.log("######### DEBUT Etudiant #########");

//     console.log(`Etudiant : ${student.nom} ${student.prenom}`);

//     const listMatieres = student.matieres
//     let noteTotal=0
//     let compteNote =0
//     for (let matiere in listMatieres) {
//         console.log(`\t${matiere} : ${listMatieres[matiere]}/20`);
//         noteTotal += listMatieres[matiere]
//         compteNote ++
//     }
//     console.log("La moyenne est de "+ (noteTotal/compteNote).toFixed(2) +"/20");
    

//     console.log("######### FIN Etudiant #########");
// }

//EXO24

const nbrNotesElements = document.querySelectorAll(".nbrNotes");
const liste = document.querySelector("#liste")
const textmax = document.querySelector("#meilleur")
const textmin = document.querySelector("#bad")
const textmoy = document.querySelector("#moyenne")

let tab = []

let number = Number(prompt("Combien de notes ? : "))
let noteTotal =0

for (let i = 0; i < number; i++) {
    let note = Number(prompt("Veuillez entrer une note entre 0 et 20 compris : "))
    do {           
        if (note<0 || note >21) {
            note = Number(prompt("ERREUR, veuillez réessayer :"))
        }
    }while(note<0 || note >21)
    noteTotal += note
    tab.push(note)
}
let mean = (noteTotal/number).toFixed(2)


nbrNotesElements.forEach(span => {
    span.textContent = tab.length;
});

for (let i =1; i < tab.length+1; i++){
    const nouvelLi = document.createElement("li")
    nouvelLi.innerHTML = "En note <b>"+ i + ",</b> vous avez saisi <b>"+tab[i-1]+"/20</b>"
    liste.appendChild(nouvelLi)
}
meilleur.textContent =Math.max(...tab)
bad.textContent =Math.min(...tab)
moyenne.textContent =mean

