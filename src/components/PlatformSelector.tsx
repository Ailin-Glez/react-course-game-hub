import { usePlatforms } from "@hooks";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { GameContext } from "context/gameContext";

function PlatformSelector() {
    const { data: platforms, error } = usePlatforms()
    const { gameQuery, setGameQuery } = useContext(GameContext)
    
    if (error) return null

    return (
        <Dropdown 
            btnName={gameQuery.platform?.name || 'All Platforms'} 
            items={platforms} 
            itemSelected={gameQuery.platform?.name} 
            onItemSelection={(platform) => setGameQuery({ ...gameQuery, platform })} 
        />
    );
}

export default PlatformSelector;