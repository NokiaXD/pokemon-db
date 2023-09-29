export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string
  results: Result[]
}

export interface Result {
  name: string
  url: string
  id?: string
}
