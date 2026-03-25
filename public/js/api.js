const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchPokemonData = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
        return await response.json();
    } catch (error) {
        console.error(`Error al cargar el pokemon ${id}:`, error);
        return null;
    }
};

const getAllPokemons = async (limit = 151) => {
    const promises = [];
    for (let i = 1; i <= limit; i++) {
        promises.push(fetchPokemonData(i));
    }
    // ejecuta todas los promesas en paralelo
    return await Promise.all(promises);
};