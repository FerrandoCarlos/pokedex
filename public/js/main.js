const initPokedex = async () => {
    console.log("Iniciando Pokédex....");
    let allPokemons = [];
    // pedimos los datos 
    allPokemons = await getAllPokemons(151);

    // los mandamos a dibujar
    renderPokedex(allPokemons);

    const searchInput = document.getElementById('poke-search');
    searchInput.addEventListener('input', e => {
        const term = e.target.value.toLowerCase().trim();

        const filtered = allPokemons.filter(p =>
            p.name.includes(term)
        );

        renderPokedex(filtered);
    })
    console.log("¡Pokédex Cargada!");

};

document.addEventListener('DOMContentLoaded', initPokedex);