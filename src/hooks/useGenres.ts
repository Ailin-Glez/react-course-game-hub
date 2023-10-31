import { GameAPI } from "@enums";
import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
} 

export function useGenres() {
    return useData<Genre>(GameAPI.genres)
}