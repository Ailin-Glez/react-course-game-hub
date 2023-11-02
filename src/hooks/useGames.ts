import { GameAPI } from "@enums";
import { Game } from "@models";
import useData from "./useData";

export function useGames(selectedGenre: string | null) {
    return useData<Game>(GameAPI.games, { params: { genres: selectedGenre }}, [selectedGenre])
}