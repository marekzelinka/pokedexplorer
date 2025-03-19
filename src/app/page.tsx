import { PokemonWrapper } from "@/components/pokemon-wrapper";
import { fetchPokemonList } from "@/lib/pokemon";

export default async function Home() {
  const pokemons = await fetchPokemonList();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-600">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-white md:text-6xl">
          PokédExplorer
        </h1>
        <PokemonWrapper pokemons={pokemons} />
      </div>
    </div>
  );
}
