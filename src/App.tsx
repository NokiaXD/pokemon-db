import usePokemonList from './hooks/usePokemonList'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css'
import PokemonCard from './components/pokemonCards'

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
        <div className="
          grid xl:grid-cols-5
          sm:grid-cols-1
          md:grid-cols-3
          gap-4">
          {

            pokemonList
              .map((pokemon) => (
                <div key={pokemon.name} className='m-auto'>

                  <PokemonCard pokemon={pokemon}></PokemonCard>

                </div>
              ))
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default App
