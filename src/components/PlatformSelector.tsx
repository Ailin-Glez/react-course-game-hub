import Dropdown from "./generic/Dropdown";
import { useContext } from "react";
import { GameContext } from "context/gameContext";
import { PLATFORMS } from "data/platforms";

function PlatformSelector() {
    const { gameQuery, setGameQuery } = useContext(GameContext)

    return (
        <Dropdown 
            btnName={gameQuery.platform?.name || 'All Platforms'} 
            items={PLATFORMS} 
            itemSelected={gameQuery.platform?.name} 
            onItemSelection={(platform) => setGameQuery({ ...gameQuery, platform })} 
        />
    );
}

export default PlatformSelector;