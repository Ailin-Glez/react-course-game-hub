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
        <Card borderRadius={10} overflow='hidden'>
            {isLoading 
                ? <Skeleton height='220px' /> 
                : <Image src={getCroppedImageUrl(background_image)} maxWidth='320px' minHeight='160'></Image>
            }
            <CardBody>
                {isLoading
                    ? <SkeletonText />
                    : <>
                        <HStack justifyContent='space-between' mb={1}>
                            <HStack>
                                <PlatformItems platforms={parent_platforms.map(p => p.platform)} />
                            </HStack>
                            <Badge colorScheme={badgeColor} fontSize={12} paddingX={2}>{metacritic}</Badge>
                        </HStack>
                        <Heading fontSize='xl' mt={4} minHeight='50px'>{name}</Heading>
                    </>
                }
            </CardBody>
        </Card>
    );
}

export default GameCard;