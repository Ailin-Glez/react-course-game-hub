import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from "../hooks/useGames"
import GameCard from './GameCard'

function GameGrid() {
    const { games, error, isLoading }= useGames()
    
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding='10px'>
                {games.map(g => <GameCard isLoading={isLoading} key={g.id} game={g} />)}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;