import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Genres from './components/Genres'
import GameGrid from './components/GameGrid'
import PlatformSelector from 'components/PlatformSelector'
import SortSelector from 'components/SortSelector'
import GameHeading from 'components/GameHeading'

function App() {
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
        <GameHeading />
        <HStack spacing={8} marginBottom={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} as='aside' marginRight={2} p={2} maxHeight='87vh' overflowY='scroll'>
          <Genres />
        </GridItem>
      </Show>
    </Grid>
  )
}

export default App
