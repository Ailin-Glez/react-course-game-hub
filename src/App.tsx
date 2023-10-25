import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return (
    <Grid padding='15px' templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside section"`
    }} as='main'>
      <GridItem area={'nav'} as='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} as='aside'>
          Aside
        </GridItem>
      </Show>
      <GridItem area={'section'} as='section'>
       <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
