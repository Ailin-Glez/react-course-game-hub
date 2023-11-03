import { Avatar, Button, HStack, Spinner, VStack } from '@chakra-ui/react'
import { useGenres } from '@hooks';
import { getCroppedImageUrl } from '@services';

interface Props {
    selectedGenre: string | null;
    onSelectedGenre: (genre: string) => void
}

function Genres({ selectedGenre, onSelectedGenre }: Props) {
    const { data: genres, isLoading } = useGenres()

    if (isLoading) return <VStack justifyContent='center' alignItems='center' minH={5}> <Spinner minH={5}/> </VStack>
    
    return (
        <VStack alignItems='flex-start'>
            <ul>
                {genres.map(g => {
                    return (
                        <HStack my={2} key={g.id} p={1}>
                            <Avatar size='sm' borderRadius={10} name={g.slug} src={getCroppedImageUrl(g.image_background)}/>
                            <Button variant='link' fontWeight={g.slug === selectedGenre ? 'bold' : 'normal'} onClick={() => onSelectedGenre(g.slug)}>{g.name}</Button>
                        </HStack>
                    )
                })}
            </ul>
        </VStack>

    );
}

export default Genres;