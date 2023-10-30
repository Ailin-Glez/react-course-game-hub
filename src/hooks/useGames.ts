import { GameAPI } from "../enums/game-enums";
import { Game } from "../models/api-model";
import useData from "./useData";

function useGames() {
    return useData<Game>(GameAPI.games)
}

export default useGames;