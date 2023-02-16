import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./pokemonListItem.module.css";
import Image from "next/image";

type PokemonListItemProps = {
  pokemon: Record<string, any>;
};

export default function PokemonListItem({
  pokemon,
}: PokemonListItemProps): React.ReactElement {
  const urlArr = pokemon?.url.split("/");
  const pokeIndex = useMemo(() => {
    if (urlArr[6] >= 1000) {
      return urlArr[6];
    } else {
      return ("000" + urlArr[6]).slice(-3);
    }
  }, [pokemon]);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.name}>{pokemon.name}</p>
          <p className={styles.entryIndex}>#{pokeIndex}</p>
        </div>
        <Image
          className={styles.image}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
          alt={pokemon.name}
          width={180}
          height={180}
        />
      </div>
    </Link>
  );
}
