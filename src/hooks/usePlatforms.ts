import { Platform } from "@models";
import useData from "./useData";
import { GameAPI } from "@enums";

export function usePlatforms() {
    return useData<Platform>({ api: GameAPI.platforms });
}