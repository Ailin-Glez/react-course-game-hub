import { GameAPI } from "@enums";
import { Game } from "@models";
import useData from "./useData";

export function useGames() {
    return useData<Game>(GameAPI.games)
}