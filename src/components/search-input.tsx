"use client";

import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function SearchInput({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(search);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, onSearch]);

  return (
    <div className="relative mx-auto max-w-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon aria-hidden className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-red-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
