import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import { useGames } from '@hooks';
import { useContext } from 'react';
import { GameContext } from 'context/gameContext';

function GameGrid() {
    const { gameQuery } = useContext(GameContext)
    const { data: games, error, isLoading } = useGames({ gameQuery })

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
                {games.map(g => <GameCard isLoading={isLoading} key={g.id} game={g} />)}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;