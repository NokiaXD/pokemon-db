import { type Result } from '../types/api'
import { useMemo } from 'react'
import { PokemonTypeColor } from '../types/pokemontypes'
import { hasBadContrast } from 'color2k'
const PokemonCard = ({ pokemon }: { pokemon: Result }): JSX.Element => {
  const types = pokemon.data.types.map((type) => type.type.name)

  const isMonotype = useMemo(() => types.length === 1, [types])
  const background = isMonotype ? PokemonTypeColor[types[0] as keyof typeof PokemonTypeColor] : `linear-gradient(315deg, ${PokemonTypeColor[types[0] as keyof typeof PokemonTypeColor]} 50%, ${PokemonTypeColor[pokemon.data.types[1].type.name as keyof typeof PokemonTypeColor]} 50%)`
  const pokedexNumberBg = !isMonotype ? PokemonTypeColor[types[1] as keyof typeof PokemonTypeColor] : background
  const TextColor = hasBadContrast('#fdfdff', 'decorative', PokemonTypeColor[types[0] as keyof typeof PokemonTypeColor]) ? '#02040f' : '#fdfdff'

  const pokedexNumberTextColor = isMonotype ? TextColor : hasBadContrast('#fdfdff', 'decorative', PokemonTypeColor[types[1] as keyof typeof PokemonTypeColor]) ? '#02040f' : '#fdfdff'
  return <div className="max-w-[150px] min-w-[144px] rounded overflow-hidden shadow-lg"
  style={{
    background,
    color: TextColor
  }}
  >
        <div>
            <div className='relative'>
                {
                    (Number(pokemon.id) < 10000) && <span className="absolute rounded-br pl-3 pr-2 py-1 text-sm font-semibold"
                    style={{
                      color: pokedexNumberTextColor,
                      background: pokedexNumberBg
                    }}
                    >#{pokemon.id !== '' ? pokemon.id : 'missingno'}</span>
                }
                <img className="w-32 m-auto mt-2 rounded"
                style={
                    {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }
                }
                src={pokemon.data.sprites.other?.['official-artwork'].front_default ?? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'} alt={pokemon.name} />
            </div>
            <div className="font-bold text-xl mb-2 text-center capitalize">{pokemon.name}</div>
            <div className="flex justify-center">
            {
                   types.map((type) => (
                        <span key={type} className={'inline-block rounded-full px-2  capitalize text-sm font-semibold text-white mx-1 mb-1 border'}
                            style={{ backgroundColor: PokemonTypeColor[type as keyof typeof PokemonTypeColor] }}
                        >{type}</span>
                   ))
                }
            </div>
        </div>
    </div>
}

export default PokemonCard
