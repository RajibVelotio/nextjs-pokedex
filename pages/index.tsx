import React, { useState } from 'react';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchPokemonList } from '@/apis';
import styles from '@/styles/Home.module.css';
import PokemonListItem from '@/components/PokemonListItem';
import Layout from '@/components/Layout';

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
  initialPokemon: NameUrl[];
};

export default function Home({ initialPokemon }: HomeProps) {
  const [pokemonList, setPokemonList] = useState<NameUrl[]>(initialPokemon);
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
    <Layout>
      <Head>
        <meta name="description" content="Find details of each pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Pokemon</title>
      </Head>
      <main className="flex flex-col justify-between min-h-screen pt-4">
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={fetchNextBatch}
          hasMore={hasNext}
          loader={
            <p className="text-center py-4 font-semibold text-xl">Loading...</p>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>All pokemon are loaded</b>
            </p>
          }
        >
          <div className={styles.grid}>
            {pokemonList.map((pokemon) => (
              <PokemonListItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </InfiniteScroll>
      </main>
    </Layout>
  );
}
