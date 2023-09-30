import usePokemonList from './hooks/usePokemonList'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css'

function App (): JSX.Element {
  const { error, getData, pokemonList, next } = usePokemonList()
  if (error != null) {
    return <div>{JSON.stringify(error)}</div>
  }
  return (
    <div className='container mx-auto'>
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={getData}
        hasMore={next.current}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen all pokemons</b>
          </p>
        }
      >
        <div className=" grid xl:grid-cols-5
         sm:grid-cols-1
          md:grid-cols-3
          gap-4">
          {

            pokemonList
              .map((pokemon) => (
                <div key={pokemon.name} className='m-auto'>

                  <div className="max-w-[150px] min-w-[144px] rounded overflow-hidden shadow-lg">
                    <div>
                      <div className='relative'>
                       {
                        (Number(pokemon.id) < 10000) && <span className="absolute bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{pokemon.id !== '' ? pokemon.id : 'missingno'}</span>
                        }
                        <img className="w-32 m-auto" src={pokemon.data.sprites?.other?.['official-artwork'].front_default ?? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'} alt={pokemon.name} />
                      </div>
                      <div className="font-bold text-xl mb-2 text-center">{pokemon.name}</div>
                      <div className="flex justify-center">
                        {
                          pokemon.data.types?.map((type) => (
                            <span key={type.type.name} className="inline-block bg-gray-200 rounded-full px-2 text-sm font-semibold text-gray-700 mx-2 mb-1">{type.type.name}</span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))

          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default App
