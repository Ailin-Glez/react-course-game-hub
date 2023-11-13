import { HStack, Image, Text, Switch, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './SearchInput'

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <HStack>
            <Image src={logo} boxSize='60px' />
            <SearchInput />
            <HStack>
                <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                <Text fontSize={14} whiteSpace='nowrap'>Dark mode</Text>
            </HStack>
        </HStack>
    );
}

export default NavBar;