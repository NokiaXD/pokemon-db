import axios from 'axios'
import { type PokemonListResponse } from '../types/api'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemonList = async (limit: number, offset: number): Promise<PokemonListResponse> => {
  const { data: pokemons }: { data: PokemonListResponse } = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
  const result = pokemons.results.map((pokemon) => {
    const url = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    return {
      ...pokemon,
      id: url
    }
  }
  )

  return {
    ...pokemons,
    results: result
  }
}
