import axios from 'axios'
import { type PokemonListResponse } from '../types/api'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 1000
})

export const getPokemonList = async (limit: number, offset: number): Promise<PokemonListResponse> => {
  const { data: pokemons }: { data: PokemonListResponse } = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
  return pokemons
}


