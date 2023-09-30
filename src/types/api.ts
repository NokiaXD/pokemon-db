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
  data: Pokemon
}

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: MoreInfo[]
  game_indices: GameIndex[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_types: PastType[]
  species: MoreInfo
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface PastType {
  generation: MoreInfo
  types: Type[]
}

export interface Ability {
  ability: MoreInfo
  is_hidden: boolean
  slot: number
}

export interface MoreInfo {
  name: string
  url: string
}

export interface GameIndex {
  game_index: number
  version: MoreInfo
}

export interface HeldItem {
  item: MoreInfo
  version_details: VersionDetail[]
}

export interface VersionDetail {
  rarity: number
  version: MoreInfo
}

export interface Move {
  move: MoreInfo
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoreInfo
  version_group: MoreInfo
}

export interface GenerationV {
  'black-white': Sprites
}

export interface GenerationIv {
  'diamond-pearl': Sprites
  'heartgold-soulsilver': Sprites
  platinum: Sprites
}

export interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': Record<string, Home>
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export interface Sprites {
  animated?: Sprites
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
  other?: Other
  versions?: Versions
}

export interface GenerationI {
  'red-blue': RedBlue
  yellow: RedBlue
}

export interface RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

export interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent?: string
}

export interface GenerationIii {
  emerald: OfficialArtwork
  'firered-leafgreen': Gold
  'ruby-sapphire': Gold
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Home {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

export interface GenerationVii {
  icons: DreamWorld
  'ultra-sun-ultra-moon': Home
}

export interface DreamWorld {
  front_default: string
  front_female: null | string
}

export interface GenerationViii {
  icons: DreamWorld
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

export interface Stat {
  base_stat: number
  effort: number
  stat: MoreInfo
}

export interface Type {
  slot: number
  type: MoreInfo
}
