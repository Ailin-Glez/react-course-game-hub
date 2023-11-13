import { Heading } from "@chakra-ui/react";
import { GameContext } from "context/gameContext";
import { useContext } from "react";

function GameHeading() {
    const { gameQuery } = useContext(GameContext)
    const label = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading fontSize='2.6rem' my={6}>{label}</Heading>
    );
}

export default GameHeading;