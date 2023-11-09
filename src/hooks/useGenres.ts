import { GameAPI } from "@enums";
import useData from "./useData";
import { Genre } from "@models";

export function useGenres() {
    return useData<Genre>({ api: GameAPI.genres })
}