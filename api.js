export async function getRandomPokemonByType(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.pokemon.length);
    const pokemonName = data.pokemon[randomIndex].pokemon.name;
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await pokemonResponse.json();
    return pokemonData;
  }