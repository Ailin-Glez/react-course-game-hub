import { GameAPI } from "@enums";
import { Game, GameQuery } from "@models";
import useData from "./useData";

interface GameProps {
    gameQuery: GameQuery;
}

export function useGames({ gameQuery }: GameProps) {
    return useData<Game>({ api: GameAPI.games, 
        reqConfig: { params: 
            { 
                genres: gameQuery.genre, 
                parent_platforms: gameQuery.platform?.id, 
                ordering: gameQuery.sort?.slug  
            }
        }, dependencies: [gameQuery]
    })
}