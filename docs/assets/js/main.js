const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
const imgPoke = "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/";
const inputSearch = document.querySelector("#search-input");
const pokeName = document.querySelector("#pokemon-name");
const pokeWeight = document.querySelector("#pokemon-weight");
const pokeHeight = document.querySelector("#pokemon-height");
const pokemonImage = document.getElementById("pokemon-picture");
const pokemontypes = document.getElementById("pokemon-type");
const pokemoncapacity = document.getElementById("pokemon-capacity");

let pokeID = 0;


const getPosts = async () => {
    const urlget = pokeApi + inputSearch.value.toLowerCase();
    
    try {
        const response = await fetch(urlget); // Requête GET pour récupérer les données du Pokémon
        const data = await response.json();  // Conversion de la réponse en format JSON
        
        displayResult(data);
    } catch (error) {
        console.log({ error: "Erreur lors de la récupération des données" }); // Gestion des erreurs
    }
};

const displayResult = (data) => {
    pokeName.value = data.name.charAt(0).toUpperCase() + data.name.slice(1).toLowerCase() +" - n°"+data.id;
    pokeWeight.value = (data.weight * 0.1).toFixed(1) + " Kg";  
    pokeHeight.value = (data.height * 10) + " cm";  
    // pokemonImage.src = imgPoke + data.id + "/regular.png";
    pokeID = data.id;
      
    let textTypes = ''; 
    for (let i = 0; i < data.types.length; i++) {
        textTypes += data.types[i].type.name.charAt(0).toUpperCase() + data.types[i].type.name.slice(1) + " ";    }
    pokemontypes.value = textTypes


    let textCapacitys = ''; 
    for (let i = 0; i < data.abilities.length; i++) {
        textCapacitys += data.abilities[i].ability.name.charAt(0).toUpperCase() + data.abilities[i].ability.name.slice(1) + " ";    
    }
        
    pokemoncapacity.value = textCapacitys

    // EN GIF
    pokemonImage.src = "https://projectpokemon.org/images/normal-sprite/" + data.name.replace('-', '_') + ".gif";

};

const nextPoke = async () => {
    if (pokeID >= 1025) {
        pokeID = 1; 
    } else {
        pokeID++;
    }
    inputSearch.value = pokeID;
    getPosts();
};

const precPoke = async () => {
    if (pokeID <= 1) {
        pokeID = 1025; 
    } else {
        pokeID--;
    }
    inputSearch.value = pokeID; 
    getPosts();
};


document.getElementById("search-btn").addEventListener("click", getPosts);


document.getElementById("pokemon-next").addEventListener("click", nextPoke);
document.getElementById("pokemon-previous").addEventListener("click", precPoke);
