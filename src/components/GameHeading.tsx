import { Heading } from "@chakra-ui/react";
import { GameContext } from "context/gameContext";
import { useContext } from "react";

function GameHeading() {
    const { gameQuery } = useContext(GameContext)
    const label = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading fontSize='2.6rem' m='5px 0 1.2rem'>{label}</Heading>
    );
}

export default GameHeading;