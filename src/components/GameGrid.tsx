import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import { useGames } from '@hooks';
import { GameQuery } from '@models';

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { data: games, error, isLoading } = useGames({ gameQuery }); 

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
                {games.map(g => <GameCard isLoading={isLoading} key={g.id} game={g} />)}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;