const initPokedex = async () => {
    console.log("Iniciando Pokédex....");
    let allPokemons = [];
    // pedimos los datos 
    allPokemons = await getAllPokemons(151);

    // los mandamos a dibujar
    renderPokedex(allPokemons);

    const searchInput = document.getElementById('poke-search');
    searchInput.addEventListener('input', e => {

        let rawValue = e.target.value;
        let sanitizedValue = rawValue.replace(/[^a-zA-Z0-9]/g, '');

        if (sanitizedValue.length > 20) {
            sanitizedValue = sanitizedValue.substring(0, 20);
        }

        const term = sanitizedValue.toLowerCase().trim();

        if (rawValue !== sanitizedValue) {
            e.target.value = sanitizedValue;
        }

        const filtered = allPokemons.filter(p => {
            const name = p.name.toLowerCase();
            return name.startsWith(term);
        });

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