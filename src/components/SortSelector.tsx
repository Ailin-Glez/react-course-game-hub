import { Sort } from "@models";
import Dropdown from "./Dropdown";
import { SORT_VALUES } from "constants/sortValues";

interface Props {
    selectedOrder: Sort | undefined;
    onSortSelection: (sort: Sort) => void;
}

function SortSelector({ selectedOrder, onSortSelection }: Props) {
    return (
        <Dropdown 
            btnName={`Order by: ${selectedOrder?.name}`} 
            items={SORT_VALUES} 
            itemSelected={selectedOrder?.name} 
            onItemSelection={onSortSelection} 
        />
    );
}

export default SortSelector;