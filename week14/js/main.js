const pokemonURL = "https://pokeapi.co/api/v2/pokemon";
const drawCard = document.querySelector('#pokemonCard')
const chooseType = document.querySelector('#types');
const drawButton = document.querySelector('#drawBtn');

let pokeData = [];
let shuffle = 0;

const normalURL = 'https://pokeapi.co/api/v2/type/1/';
const fightingURL = 'https://pokeapi.co/api/v2/type/2/';
const flyingURL = 'https://pokeapi.co/api/v2/type/3/';
const poisonURL = 'https://pokeapi.co/api/v2/type/4/';
const groundURL = 'https://pokeapi.co/api/v2/type/5/';
const rockURL = 'https://pokeapi.co/api/v2/type/6/';
const bugURL = 'https://pokeapi.co/api/v2/type/7/';
const ghostURL = 'https://pokeapi.co/api/v2/type/8/';
const steelURL = 'https://pokeapi.co/api/v2/type/9/';
const fireURL = 'https://pokeapi.co/api/v2/type/10/';
const waterURL = 'https://pokeapi.co/api/v2/type/11/';
const grassURL = 'https://pokeapi.co/api/v2/type/12/';
const electricURL = 'https://pokeapi.co/api/v2/type/13/';
const psychicURL = 'https://pokeapi.co/api/v2/type/14/';
const iceURL = 'https://pokeapi.co/api/v2/type/15/';
const dragonURL = 'https://pokeapi.co/api/v2/type/16/';
const darkURL = 'https://pokeapi.co/api/v2/type/17/';
const fairyURL = 'https://pokeapi.co/api/v2/type/18/';

async function fetchPokemon(url) {
    await fetch(url)
    .then(function(response) {
        if(response.ok){
            return response.json();
        };
    })
    .then(function(getPokemon) {
        getPokemon.results.forEach(function(pokemon){
            displayPokemonCard(pokemon);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
};

async function getPokemonData(pokemon) {
    await fetch(pokemon.url)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        };
    })
    .then(function(results){
        pokeData.push(results);
    })
    .catch(function(error) {
        console.log(error);
    });
};

fetchPokemon(normalURL);

function changeType() {
    pokeData = [];
    
    if(chooseType.value == 'normal') {
        fetchPokemon(normalURL);
    } else if (chooseType.value == 'fighting') {
        fetchPokemon(fightingURL);
    } else if (chooseType.value == 'flying') {
        fetchPokemon(flyingURL);
    } else if (chooseType.value == 'poison') {
        fetchPokemon(poisonURL);
    } else if (chooseType.value == 'ground') {
        fetchPokemon(groundURL);
    } else if (chooseType.value == 'rock') {
        fetchPokemon(rockURL);
    } else if (chooseType.value == 'bug') {
        fetchPokemon(bugURL);
    } else if (chooseType.value == 'ghost') {
        fetchPokemon(ghostURL);
    } else if (chooseType.value == 'steel') {
        fetchPokemon(steelURL);
    } else if (chooseType.value == 'fire') {
        fetchPokemon(fireURL);
    } else if (chooseType.value == 'water') {
        fetchPokemon(waterURL);
    } else if (chooseType.value == 'grass') {
        fetchPokemon(grassURL);
    } else if (chooseType.value == 'electric') {
        fetchPokemon(electricURL);
    } else if (chooseType.value == 'psychic') {
        fetchPokemon(psychicURL);
    } else if (chooseType.value == 'ice') {
        fetchPokemon(iceURL);
    } else if (chooseType.value == 'dragon') {
        fetchPokemon(dragonURL);
    } else if (chooseType.value == 'dark') {
        fetchPokemon(darkURL);
    } else if (chooseType.value == 'fairy') {
        fetchPokemon(fairyURL);
    } 
};

function displayPokemonCard() {
    let card = document.createElement('div');
    shuffle = Math.floor(Math.random() * pokeData.length);
    let pic = document.createElement('img');
    pic.setAttribute('src', `${pokeData[shuffle].sprites.front_default}`);
    pic.setAttribute('alt', `${pokeData[shuffle].name}`);
    let name = document.createElement('h2');
    name.textContent = `${pokeData[shuffle].name}`;

    card.appendChild(pic);
    card.appendChild(name);

    drawCard.appendChild(card);
};

drawBtn.addEventListener('click', displayPokemonCard);
chooseType.addEventListener('change', changeType);
