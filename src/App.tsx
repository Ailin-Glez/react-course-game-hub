import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Genres from './components/Genres'
import GameGrid from './components/GameGrid'
import PlatformSelector from 'components/PlatformSelector'
import { Platform } from '@models'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<null | string>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | undefined>()

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
          selectedPlatform={selectedPlatform?.name} 
          onPlatformSelection={(platform) => setSelectedPlatform(platform)} 
        />
        <GameGrid selectedGenre={selectedGenre} platformId={selectedPlatform?.id} />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} as='aside' p={2}>
          <Genres selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
    </Grid>
  )
}

export default App
