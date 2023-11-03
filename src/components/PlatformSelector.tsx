import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "@models";
import { usePlatforms } from "hooks/usePlatforms";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
    selectedPlatform: string | undefined;
    onPlatformSelection: (platform: Platform) => void
}

function PlatformSelector({ selectedPlatform, onPlatformSelection }: Props) {
    const { data: platforms, error } = usePlatforms()
    
    if (error) return null

    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton marginBottom={4} as={Button} rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}>
                        {selectedPlatform ? selectedPlatform : 'Platforms'}
                    </MenuButton>
                    <MenuList>
                        {platforms.map(p => (
                            <MenuItem key={p.id} 
                                backgroundColor={selectedPlatform === p.name ? 'gray.800' : 'transparent'} 
                                onClick={() => onPlatformSelection(p)}
                            >
                                {p.name}
                            </MenuItem>))} 
                    </MenuList>
                </>
            )}
        </Menu>
    );
}

export default PlatformSelector;