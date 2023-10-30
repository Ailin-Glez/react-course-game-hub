import { GameAPI } from "../enums/game-enums";
import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
} 

function useGenres() {
    return useData<Genre>(GameAPI.genres)
}

export default useGenres;