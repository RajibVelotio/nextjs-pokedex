import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { fetchPokemonDetails } from '@/apis';
import Pokeball from '@/public/pokeball';
import { calculatePokeIndex } from '@/utils/pokemonUtil';
import TypeChip from '@/components/TypeChip';
import ProgressBar from '@/components/ProgressBar';

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
      <main className="py-4 px-4 bg-grass-primary min-h-screen">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <p className="text-2xl pb-1 font-semibold text-white">
              {pokemonName}
            </p>
            <div className="flex flex-row gap-3">
              {pokemon.types.map((typeObj: Type) => (
                <TypeChip key={typeObj.type.url} type={typeObj.type.name} />
              ))}
            </div>
          </div>
          <p className="text-2xl font-semibold text-white">#{pokeIndex}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center">
            <Pokeball
              className="z-0 rotate-12"
              primaryFill={'#75c87a'}
              secondaryFill={'#5cbe62'}
              height={'300px'}
              width={'300px'}
            />
            <Image
              className="z-10 absolute"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
              alt={pokemon.name}
              width={260}
              height={260}
            />
          </div>
          <div className="w-full bg-default-primary rounded-xl p-4 max-w-lg">
            <p className="text-xl font-semibold text-white">Stats</p>
            <div className="flex flex-row gap-4">
              <div className="w-60">
                <p className="text-md font-semibold text-text-primary">
                  Height
                </p>
                <p className="text-md font-semibold text-text-primary">
                  Weight
                </p>
                {pokemon.stats.map((statObj) => (
                  <p
                    className="text-md font-semibold text-text-primary"
                    key={statObj.stat.name}
                  >
                    {statObj.stat.name.capitalize()}
                  </p>
                ))}
              </div>
              <div className="w-full">
                <p className="text-md font-semibold text-white">
                  {pokemon.height}
                </p>
                <p className="text-md font-semibold text-white">
                  {pokemon.weight}
                </p>
                {pokemon.stats.map((statObj) => (
                  <ProgressBar
                    key={statObj.stat.url}
                    progress={statObj.base_stat}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
