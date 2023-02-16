import React from 'react';
import { fetchPokemonDetails } from './../../apis';

export async function getServerSideProps(context) {
    const response = await fetchPokemonDetails(context.query.name);
    return {
        props: {
            pokemon: response,
        }
    }
};

export default function pokemonDetails({pokemon}) {
    return <p>{pokemon.name}</p>
}