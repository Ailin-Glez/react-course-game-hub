import { Avatar, Button, HStack, Spinner, VStack } from '@chakra-ui/react'
import { useGenres } from '@hooks';
import { getCroppedImageUrl } from '@services';
import { GameContext } from 'context/gameContext';
import { useContext } from 'react';

function Genres() {
    const { data: genres, isLoading } = useGenres()
    const { gameQuery, setGameQuery } = useContext(GameContext)

    if (isLoading) return <VStack justifyContent='center' alignItems='center' minH={5}> <Spinner minH={5}/> </VStack>
    
    return (
        <VStack alignItems='flex-start'>
            <ul>
                {genres.map(g => {
                    return (
                        <HStack my={2} key={g.id} p={1}>
                            <Avatar size='sm' borderRadius={10} name={g.slug} src={getCroppedImageUrl(g.image_background)}/>
                            <Button 
                                variant='link' 
                                fontWeight={g.slug === gameQuery.genre?.slug ? 'bold' : 'normal'} 
                                onClick={() => setGameQuery({ ...gameQuery, genre: g })}
                            >
                                {g.name}
                            </Button>
                        </HStack>
                    )
                })}
            </ul>
        </VStack>
    );
}

export default Genres;