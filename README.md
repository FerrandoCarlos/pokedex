# 🚀 Pokédex Profesional - Web 2

Una aplicación web moderna que consume la **PokeAPI** para mostrar los primeros 151 Pokémon. Este proyecto fue desarrollado como práctica de integración de APIs, asincronía y manipulación del DOM.

## 🛠️ Tecnologías Utilizadas

- **HTML5 & CSS3**: Estructura semántica y diseño responsivo con CSS Grid.
- **JavaScript (ES6+)**:
  - `fetch` con `async/await` para el consumo de datos.
  - `Promise.all` para carga optimizada en paralelo.
  - Filtros de arrays en tiempo real para el buscador.
- **PokeAPI**: Fuente de datos oficial de Pokémon.

## 🌟 Características Principales

- **Carga Paralela**: Se obtienen los 151 Pokémon simultáneamente para minimizar el tiempo de espera.
- **Buscador en Vivo**: Filtrado instantáneo por nombre mientras el usuario escribe.
- **Diseño Dinámico**: Las tarjetas cambian su color de borde según el tipo principal del Pokémon.
- **Responsive Design**: Adaptable a móviles, tablets y escritorio.

## 📂 Estructura del Proyecto

```text
pokedex/
├── css/
│   └── styles.css      # Estilos y variables de colores por tipo
├── js/
│   ├── api.js         # Lógica de peticiones a la API
│   ├── ui.js          # Componentes de interfaz y renderizado
│   └── main.js        # Orquestador y lógica de eventos
└── index.html         # Punto de entrada de la aplicación
```

## 🚀 Cómo ejecutarlo

- 1 Clona este repositorio o descarga los archivos.

- 2 Abrí el archivo index.html con la extensión Live Server en VS Code.

- 3 ¡Disfrutá de la experiencia!
