import { POKEMON_TYPE_COLORS } from "@/utils/pokemon-type-colors";
import Image from "next/image";

export function PokemonCard({
  pokemon,
}: {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    imageUrl: string;
  };
}) {
  return (
    <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <div className="p-4 pb-6">
        <div className="relative mb-4 aspect-square">
          <Image
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="h-full w-full object-contain"
            width={250}
            height={250}
          />
        </div>
        <div className="text-center">
          <p className="mb-1 text-sm text-gray-500">
            #{String(pokemon.id).padStart(3, "0")}
          </p>
          <h2 className="mt-1 text-xl font-bold capitalize">{pokemon.name}</h2>
          <div className="mt-3 flex justify-center gap-2">
            {pokemon.types.map((type) => {
              const bgColor =
                POKEMON_TYPE_COLORS[type as keyof typeof POKEMON_TYPE_COLORS];

              return (
                <span
                  key={type}
                  className={`rounded-full px-3 py-1 text-sm capitalize text-white ${bgColor}`}
                >
                  {type}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
