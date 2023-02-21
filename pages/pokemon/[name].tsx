import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { fetchPokemonDetails } from '@/apis';
import Pokeball from '@/public/pokeball';
import { calculatePokeIndex } from '@/utils/pokemonUtil';

String.prototype.capitalize = function () {
  const strArr = this.split(' ');
  return strArr
    .map((subStr) => subStr.charAt(0).toUpperCase() + subStr.slice(1))
    .join(' ');
};

export async function getServerSideProps(context: any) {
  const response = await fetchPokemonDetails(context.query.name);
  return {
    props: {
      pokemon: response,
    },
  };
}

type PokemonDetailsProps = {
  pokemon: Pokemon;
};

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const pokeIndex = calculatePokeIndex(pokemon.id);

  const pokemonName = (pokemon?.name || '').capitalize();
  return (
    <>
      <Head>
        <title>Pokemon | {pokemonName}</title>
      </Head>
      <main className="py-4 px-1 bg-bug-primary">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <p>{pokemonName}</p>
            <div className="flex flex-row gap-3">
              {pokemon.types.map((typeObj: Type) => (
                <span
                  key={typeObj.type.url}
                  className="px-3 py-1 text-white bg-bug-secondary rounded-3xl"
                >
                  {typeObj.type.name}
                </span>
              ))}
            </div>
          </div>
          <p>#{pokeIndex}</p>
        </div>
        <div className="flex justify-center items-center">
          <Pokeball
            className="z-0 rotate-12"
            primaryFill={'#75c87a'}
            secondaryFill={'#5bba61'}
          />
          <Image
            className="z-10 absolute"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
            alt={pokemon.name}
            width={180}
            height={180}
          />
        </div>
      </main>
    </>
  );
}
