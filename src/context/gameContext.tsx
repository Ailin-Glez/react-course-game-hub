import { GameQuery } from "@models";
import { SORT_VALUES } from "constants/sortValues";
import { ReactNode, createContext, useState } from "react";

interface Props {
    children: ReactNode
}

interface GameContextInterface {
    gameQuery: GameQuery;
    setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>
}

export const GameContext = createContext<GameContextInterface>({} as GameContextInterface)

function GameContextProvider({ children }: Props) {
    const [gameQuery, setGameQuery] = useState<GameQuery>({
        game: null,
        genre: null,
        platform: null,
        sort: SORT_VALUES[0]
    })

    return (
        <GameContext.Provider value={{ gameQuery, setGameQuery }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameContextProvider;
