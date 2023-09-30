import usePokemonList from './hooks/usePokemonList'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css'

function App (): JSX.Element {
  const { error, getData, pokemonList, next } = usePokemonList()
  if (error != null) {
    return <div>{JSON.stringify(error)}</div>
  }
  return (
    <>
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
        <div className="grid grid-cols-3 gap-4">
          {

            pokemonList
              .filter((pokemon) => Number(pokemon.id) < 10000)
              .map((pokemon) => (
                <div key={pokemon.name}>

                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <div>
                        <span className="
     float-left  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{pokemon.id !== '' ? pokemon.id : 'missingno'}</span>
                        <img className="w-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id ?? '0'}.png`} alt={pokemon.name} />
                      </div>
                      <div className="font-bold text-xl mb-2">{pokemon.name}</div>
                    </div>
                  </div>
                </div>
              ))

          }
        </div>
      </InfiniteScroll>
    </>
  )
}

export default App
