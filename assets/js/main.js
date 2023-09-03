const pokemonList = document.getElementById('pokemons');
const buttonLoadMore = document.getElementById('loadMoreButton');

const limit = 10;
let offset = 0;

loadPokemonItems(offset, limit);

function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit) 
    .then((pokemons = []) => {   
        pokemonList.innerHTML += pokemons.map((pokemon) => {
            return `<li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <div class="pokemonBackground"></div>
        </li>`
        }).join('');
    })
}

buttonLoadMore.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
})