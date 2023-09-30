import axios from 'axios'
import { type PokemonListResponse, type Pokemon } from '../types/api'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemon = async (id: string): Promise<Pokemon> => {
  const { data: pokemon }: { data: Pokemon } = await api.get(`pokemon/${id}`)
  return pokemon
}

export const getPokemonList = async (limit: number, offset: number): Promise<PokemonListResponse> => {
  const { data: pokemons }: { data: PokemonListResponse } = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
  const result = await Promise.all(pokemons.results.map(async (pokemon) => {
    const id = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const PokemonData = await getPokemon(id)
    return {
      ...pokemon,
      id,
      datos: PokemonData
    }
  }
  ))

  return {
    ...pokemons,
    results: result
  }
}
