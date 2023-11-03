import { GameAPI } from "@enums";
import { Game } from "@models";
import useData from "./useData";

interface GameProps {
    selectedGenre: string | null;
    platformId: number | undefined
}

export function useGames({ selectedGenre, platformId }: GameProps) {
    return useData<Game>(GameAPI.games, 
        { params: { genres: selectedGenre, parent_platforms: platformId }}, [selectedGenre, platformId]
    )
}