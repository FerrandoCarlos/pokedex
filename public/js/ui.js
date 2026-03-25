/**
 * Crea el HTML de una card de Pokémon
 * @param {Object} pokemon
 */

const createPokemonCard = (pokemon) => {
    // Extraemos lo que necesitamos (Destructuring)
    const { id, name, sprites, types } = pokemon;

    // El tipo principal para el color de fondo
    const mainType = pokemon.types[0].type.name;

    // Creamos el div de la card

    const cardElement = document.createElement('div');
    cardElement.classList.add('pokemon-card', mainType);

    // Armamos el interior de la card
    cardElement.innerHTML = `
        <div class="img-container">
            <img src="${sprites.other['official-artwork'].front_default}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name.toUpperCase()}</h3>
            <div class="types">
                ${types.map(t => `<span class="type-badge ${t.type.name}">${t.type.name}</span>`).join('')}
            </div>
        </div>
    `;
    return cardElement;
};

/**
 * Renderiza la lista completa en el contenedor
 * @param {Array} pokemonList 
 */

const renderPokedex = (pokemonList) => {
    const container = document.getElementById('pokedex-container');
    container.innerHTML = '';

    pokemonList.forEach(pokemon => {
        if (pokemon) {
            const card = createPokemonCard(pokemon);
            container.appendChild(card);
        }
    });
};