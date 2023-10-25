import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

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
       Main
      </GridItem>
    </Grid>
  )
}

export default App
