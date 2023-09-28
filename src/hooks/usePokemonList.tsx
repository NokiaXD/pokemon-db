import { useEffect, useCallback, useState, useRef } from 'react'
import { getPokemonList } from '../api/pokemonList'
import { type Result as PokemonResponse } from '../types/api'

const usePokemonList = (): {
  pokemonList: PokemonResponse[]
  error: object | null
  next: React.MutableRefObject<boolean>
  getData: (limit?: number, offset?: number) => Promise<void> } => {
  const [pokemonList, setPokemonList] = useState([] as PokemonResponse[])
  const offset = useRef(0)
  const next = useRef(true)
  const [error, setError] = useState<object | null>(null)
  const getData = useCallback(async (limit = 20) => {
    try {
      if (!next.current) {
        return
      }
      const data = await getPokemonList(limit, offset.current)
      setPokemonList((list) => [...list, ...data.results])
      next.current = data.next != null
      offset.current += limit
    } catch (error: unknown) {
      setError(error as object)
    }
  }
  , [])
  useEffect(() => {
    getData().catch((error: unknown) => {
      setError(error as object)
    }
    )
  }
  , [])
  return {
    pokemonList,
    error,
    getData,
    next
  }
}

export default usePokemonList
