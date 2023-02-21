import React from 'react';
import Link from 'next/link';
import styles from './pokemonListItem.module.css';
import Image from 'next/image';
import { calculatePokeIndex } from '@/utils/pokemonUtil';

type PokemonListItemProps = {
  pokemon: NameUrl;
};

export default function PokemonListItem({
  pokemon,
}: PokemonListItemProps): React.ReactElement {
  const urlArr = pokemon?.url.split('/');
  const pokeIndex = calculatePokeIndex(urlArr[6] as unknown as number);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className={styles.container}>
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl text-white font-semibold capitalize">
            {pokemon.name}
          </p>
          <p className="text-lg font-semibold text-default-secondary">
            #{pokeIndex}
          </p>
        </div>
        <Image
          className="mx-auto my-0"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
          alt={pokemon.name}
          width={180}
          height={180}
        />
      </div>
    </Link>
  );
}
