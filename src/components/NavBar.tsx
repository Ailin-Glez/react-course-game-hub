import { HStack, Image, Text, Switch, useColorMode, Box } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <HStack justifyContent='space-between'>
            <Image src={logo} boxSize='60px' />
            <HStack>

            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Dark mode</Text>
            </HStack>
        </HStack>
    );
}

export default NavBar;