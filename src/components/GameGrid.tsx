import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import useData from '../hooks/useData';
import { Game } from '../models/api-model';
import { GameAPI } from '../enums/game-enums';

function GameGrid() {
    const { data: games, error, isLoading }= useData<Game>(GameAPI.games)
    
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