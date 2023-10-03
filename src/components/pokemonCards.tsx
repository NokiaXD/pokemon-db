import { type Result } from '../types/api'
import { usePalette, useColor } from 'color-thief-react'
import { PokemonTypeColor } from '../types/pokemontypes'
const PokemonCard = ({ pokemon }: { pokemon: Result }): JSX.Element => {
  const { loading, data, error } = usePalette(pokemon.data.sprites.other?.['official-artwork'].front_default ?? '', 4, 'hex', {
    crossOrigin: 'anonymous'
  })

  return <div className="max-w-[150px] min-w-[144px] rounded overflow-hidden shadow-lg"
  style={{
    backgroundColor: data?.at(0) ?? 'GrayText'
  }}
  >
        <div>
            <div className='relative'>

                {
                    (Number(pokemon.id) < 10000) && <span className="absolute text-gray-200 rounded-br pl-3 pr-2 py-1 text-sm font-semibold"
                    style={{
                      backgroundColor: data?.at(0) ?? 'GrayText'
                    }}
                    >#{pokemon.id !== '' ? pokemon.id : 'missingno'}</span>
                }
                <img className="w-32 m-auto mt-2"
                style={
                    {
                      backgroundColor: 'rgba(245, 40, 145, 0.07)'
                    }
                }
                src={pokemon.data.sprites.other?.['official-artwork'].front_default ?? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'} alt={pokemon.name} />
            </div>
             <div className='justify-center mx-auto grid grid-flow-col'>
                {
                    data?.map((color) =>
                        <div className='w-[5px] p-2 mx-1 mt-2'
                        style={
                            {
                              backgroundColor: color
                            }
                        }
                        ></div>
                    )
                }
             </div>
            <div className="font-bold text-xl mb-2 text-center capitalize">{pokemon.name}</div>
            <div className="flex justify-center">
                {
                    pokemon.data.types?.map((type) => (
                        <span key={type.type.name} className="inline-block rounded-full px-2  capitalize text-sm font-semibold text-white mx-2 mb-1"
                            style={{ backgroundColor: PokemonTypeColor[type.type.name as keyof typeof PokemonTypeColor] }}
                        >{type.type.name}</span>
                    ))
                }
            </div>
        </div>
    </div>
}

export default PokemonCard
