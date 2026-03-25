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

document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('load-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    loadBtn.addEventListener('click', async () => {
        // 1. Cambiamos las clases (Clean Code, nada de .style)
        welcomeScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');

        // 2. Ejecutamos tu lógica de carga
        await initPokedex();
    });
});