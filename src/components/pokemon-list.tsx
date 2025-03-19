import { Pokemon } from "@/types";
import { PokemonCard } from "./pokemon-card";

export function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={`${pokemon.name}-${i}`} pokemon={pokemon} />
      ))}
    </div>
  );
}
