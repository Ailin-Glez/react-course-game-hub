import { Avatar, Button, HStack, ListItem } from "@chakra-ui/react";
import { GameQuery, Genre } from "@models";
import { getCroppedImageUrl } from "@services";

interface Props {
    genre: Genre;
    gameQuery: GameQuery;
    onSelectListItem: (gameQuery: GameQuery) => void;
}

function GenreList({ genre, gameQuery, onSelectListItem }: Props) {
    return (
        <ListItem>
            <HStack my={2} key={genre.id} p={1}>
                <Avatar size='sm' borderRadius={10} name={genre.slug} src={getCroppedImageUrl(genre.image_background)}/>
                <Button 
                    variant='link' 
                    fontWeight={genre.slug === gameQuery.genre?.slug ? 'bold' : 'normal'} 
                    onClick={() => onSelectListItem({ ...gameQuery, genre })}
                >
                    {genre.name}
                </Button>
            </HStack>
        </ListItem>
    );
}

export default GenreList;