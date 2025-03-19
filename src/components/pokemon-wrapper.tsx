"use client";

import { Pokemon } from "@/types";
import { useState } from "react";
import { PokemonList } from "./pokemon-list";
import { SearchInput } from "./search-input";

export function PokemonWrapper({
  pokemons: initialPokemons,
}: {
  pokemons: Pokemon[];
}) {
  const [filteredPokemons, setFilteredPokemons] = useState(initialPokemons);

  const handleSearch = (search: string) => {
    const filtered = initialPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredPokemons(filtered);
  };

  return (
    <div className="space-y-8">
      <SearchInput onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
