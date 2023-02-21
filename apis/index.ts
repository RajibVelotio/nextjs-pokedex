import CallApi from './apiUtil';

const fetchPokemonList = async (limit: number, offset: number) => {
  return CallApi({
    url: `${process.env.BASE_URL}`,
    method: 'GET',
    queryParams: {
      limit,
      offset,
    },
  });
};

const fetchPokemonDetails = (pokemonName: string) => {
  return CallApi({
    url: `${process.env.BASE_URL}/${pokemonName}`,
    method: 'GET',
  });
};

export { fetchPokemonList, fetchPokemonDetails };
