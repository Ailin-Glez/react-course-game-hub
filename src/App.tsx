import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Genres from './components/Genres'
import GameGrid from './components/GameGrid'
import PlatformSelector from 'components/PlatformSelector'
import { GameQuery } from '@models'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid padding={4} as='main'templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside section"`
      }} 
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area={'nav'} as='nav'>
        <NavBar />
      </GridItem>
      <GridItem area={'section'} as='section'>
        <PlatformSelector 
          selectedPlatform={gameQuery.platform?.name} 
          onPlatformSelection={(platform) => setGameQuery({ ...gameQuery, platform })} 
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} as='aside' p={2}>
          <Genres selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
    </Grid>
  )
}

export default App
