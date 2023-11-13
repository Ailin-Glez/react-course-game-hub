import { List, Spinner, VStack } from '@chakra-ui/react'
import { useGenres } from '@hooks';
import { GameContext } from 'context/gameContext';
import { useContext } from 'react';
import GenreList from './generic/GenreList';

function Genres() {
    const { data: genres, isLoading } = useGenres()
    const { gameQuery, setGameQuery } = useContext(GameContext)

    if (isLoading) return <VStack justifyContent='center' alignItems='center' minH={5}> <Spinner minH={5}/> </VStack>
    
    return (
        <VStack alignItems='flex-start'>
            <List>
                {genres.map(g => {
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