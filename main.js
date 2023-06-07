import Pokemon, { FirePokemon, GrassPokemon, ElectricPokemon, IcePokemon, PsychicPokemon } from './pokemon.js';
import { getRandomPokemonByType } from './api.js';

    async function createPokemonArray() {
        const pokemonArray = [];
        const types = ['fire', 'grass', 'electric', 'ice', 'psychic'];
        for (const type of types) {
          const pokemonData = await getRandomPokemonByType(type);
          const { name, weight, base_experience, stats } = pokemonData;
          const speed = stats.find((stat) => stat.stat.name === 'speed').base_stat;
          switch (type) {
            case 'fire':
              pokemonArray.push(new FirePokemon(name, weight, base_experience, speed));
              break;
            case 'grass':
              pokemonArray.push(new GrassPokemon(name, weight, base_experience, speed));
              break;
            case 'electric':
              pokemonArray.push(new ElectricPokemon(name, weight, base_experience, speed));
              break;
            case 'ice':
              pokemonArray.push(new IcePokemon(name, weight, base_experience, speed));
              break;
            case 'psychic':
              pokemonArray.push(new PsychicPokemon(name, weight, base_experience, speed));
              break;
            default:
              break;
          }
        }
        return pokemonArray;
      }
      
      createPokemonArray().then((pokemonArray) => {
        for (const pokemon of pokemonArray) {
          console.log(pokemon.getInfo());
          pokemon.feedBerries(10);
          console.log(`After feeding berries: ${pokemon.getInfo()}`);
        }
      
        console.log("Info about all pokemons before competition:");
        for (const pokemon of pokemonArray) {
          console.log(pokemon.getInfo());
        }
      
        let winner = null;
        let highestScore = -Infinity;
        for (const pokemon of pokemonArray) {
          const score = pokemon.experience + pokemon.weight / pokemon.speed;
          if (score > highestScore) {
            highestScore = score;
            winner = pokemon;
          }
        }
        
        console.log(`Winner: ${winner.getInfo()}`);
      });