import { List, VStack } from '@chakra-ui/react'
import { GameContext } from 'context/gameContext';
import { useContext } from 'react';
import GenreList from './generic/GenreList';
import { GENRES } from 'data/genres';

function Genres() {
    const { gameQuery, setGameQuery } = useContext(GameContext)

    return (
        <VStack alignItems='flex-start'>
            <List>
                {GENRES.map(g => {
                    return (
                        <GenreList 
                            genre={g} 
                            gameQuery={gameQuery} 
                            onSelectListItem={() => setGameQuery({ ...gameQuery, genre: g })} 
                        />
                    )
                })}
            </List>
        </VStack>
    );
}

export default Genres;