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
                search: gameQuery.game,
                genres: gameQuery.genre?.slug, 
                parent_platforms: gameQuery.platform?.id, 
                ordering: gameQuery.sort?.slug  
            }
        }, dependencies: [gameQuery]
    })
}