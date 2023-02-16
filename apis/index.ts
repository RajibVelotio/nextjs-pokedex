const basePath = `https://pokeapi.co/api/v2/pokemon`;

const fetchPokemonList = async (limit: number, offset: number) => {
  const response = await fetch(`${basePath}?limit=${limit}&offset=${offset}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response?.json();
};

const fetchPokemonDetails = async (pokemonName: string) => {
  const response = await fetch(`${basePath}/${pokemonName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response?.json();
};

export { fetchPokemonList, fetchPokemonDetails };
