import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform, Sort } from "@models";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

interface Props {
    btnName: string;
    items: Platform[] | Sort[];
    itemSelected: string | undefined;
    onItemSelection: (p: Platform | Sort) => void
}

function Dropdown({ btnName, items, itemSelected, onItemSelection }: Props) {
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton as={Button} rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}>
                        {btnName}
                    </MenuButton>
                    <MenuList>
                        {items.map(item => (
                            <MenuItem 
                                key={item.id} 
                                backgroundColor={itemSelected === item.name ? 'gray.800' : 'transparent'}
                                _hover={{ backgroundColor: 'gray.600' }}
                                onClick={() => onItemSelection(item)}
                            >
                                {item.name}
                            </MenuItem>
                        ))} 
                    </MenuList>
                </>
            )}
        </Menu>
    );
}

export default Dropdown;