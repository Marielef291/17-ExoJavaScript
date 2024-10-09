const pokeApi = "https://pokeapi.co/api/v2/pokemon/"
const inputSearch = document.querySelector("search-input")

const getPosts = async () => {
    const urlget = pokeApi+inputSearch.value
    console.log(urlget);
    
    try {
        const response = await fetch(apiUrl); // Requête GET pour récupérer tous les posts
        const data = await response.json();  // Conversion de la réponse en format JSON
        displayResult(data); // Affichage de tous les posts
        console.log(data[39])
    } catch (error) {
        displayResult({ error: "Erreur lors de la récupération des posts" }); // Gestion des erreurs
    }
};

document.getElementById("getAllBtn").addEventListener("click", getPosts);