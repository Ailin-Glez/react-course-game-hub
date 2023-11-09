import { Platform } from "@models";
import { usePlatforms } from "@hooks";
import Dropdown from "./Dropdown";

interface Props {
    selectedPlatform: string | undefined;
    onPlatformSelection: (platform: Platform) => void
}

function PlatformSelector({ selectedPlatform, onPlatformSelection }: Props) {
    const { data: platforms, error } = usePlatforms()
    
    if (error) return null

    return (
        <Dropdown 
            btnName={selectedPlatform || 'All Platforms'} 
            items={platforms} 
            itemSelected={selectedPlatform} 
            onItemSelection={onPlatformSelection} 
        />
    );
}

export default PlatformSelector;