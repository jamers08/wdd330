const basePokemonURL = "https://pokeapi.co/api/v2/pokemon";
const pokemonEvolution = "https://pokeapi.co/api/v2/evolution-chain";

//const resultsBox = 
//const pokemonDetailsBox = 

async function fetchPokemon(url)
{
    response = await fetch(url);
    if(response.ok){
        const pokemon = await response.json();
        console.log(pokemon);
        return pokemon;
    };
}

function getPokemon(url) {
    return fetchPokemon(url);
    
}

getPokemon();