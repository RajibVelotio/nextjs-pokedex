import Head from "next/head";
import styles from "@/styles/Home.module.css";
import PokemonListItemProps from "./../components/PokemonListItem";
import { useState } from "react";
import { fetchPokemonList } from "@/apis";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 20;

export async function getStaticProps() {
  const response = await fetchPokemonList(LIMIT, 0);

  return {
    props: {
      initialPokemon: response.results,
    },
  };
}

type HomeProps = {
  initialPokemon: Record<string, string>[];
};

export default function Home({ initialPokemon }: HomeProps) {
  const [pokemonList, setPokemonList] =
    useState<Record<string, string>[]>(initialPokemon);
  const [offset, setOffset] = useState<number>(20);
  const [hasNext, sethasNext] = useState<boolean>(true);

  const fetchNextBatch = async () => {
    const response = await fetchPokemonList(LIMIT, offset);
    setPokemonList([...pokemonList, ...(response?.results || [])]);
    setOffset(offset + LIMIT);
    if (response?.null === null) {
      sethasNext(false);
    }
  };

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={fetchNextBatch}
          hasMore={hasNext}
          loader={<p className={styles.loading}>Loading...</p>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>All pokemon are loaded</b>
            </p>
          }
        >
          <div className={styles.grid}>
            {pokemonList.map((pokemon) => (
              <PokemonListItemProps key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </InfiniteScroll>
      </main>
    </>
  );
}
