import { Badge, Card, CardBody, HStack, Heading, Image, Skeleton, SkeletonText } from "@chakra-ui/react";
import PlatformItems from "./PlatformItems";
import { Game } from "@models";
import { getCroppedImageUrl } from "@services";

interface Props {
    game: Game;
    isLoading: boolean;
}

function GameCard({ game, isLoading }: Props) {
    const { name, background_image, metacritic, parent_platforms } = game
    const badgeColor = metacritic > 85 ? 'green' : metacritic < 65 ? 'red' : 'yellow'
    
    return (
        <Card borderRadius={10} overflow='hidden' width='250px'>
            {isLoading ? <Skeleton height='220px' /> : <Image src={getCroppedImageUrl(background_image)} maxWidth='320px' minHeight='160'></Image>}
            <CardBody>
                {isLoading
                ? <SkeletonText />
                : <>
                    <Heading fontSize='xl' minHeight='50px'>{name}</Heading>
                    <HStack justifyContent='space-between' my={3}>
                        <HStack>
                            <PlatformItems platforms={parent_platforms.map(p => p.platform)} />
                        </HStack>
                        <Badge colorScheme={badgeColor} fontSize={12} paddingX={2}>{metacritic}</Badge>
                    </HStack>
                </>
                }
            </CardBody>
        </Card>
    );
}

export default GameCard;