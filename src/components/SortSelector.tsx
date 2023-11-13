import Dropdown from "./Dropdown";
import { SORT_VALUES } from "constants/sortValues";
import { useContext } from "react";
import { GameContext } from "context/gameContext";

function SortSelector() {
    const { gameQuery, setGameQuery } = useContext(GameContext)

    return (
        <Dropdown 
            btnName={`Order by: ${gameQuery.sort?.name}`} 
            items={SORT_VALUES} 
            itemSelected={gameQuery.sort?.name} 
            onItemSelection={(sort) => setGameQuery({ ...gameQuery, sort })} 
        />
    );
}

export default SortSelector;