import { FormControl, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { GameContext } from "context/gameContext";
import { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
    const [gameToSearch, setGameToSearch] = useState('')
    const { gameQuery, setGameQuery } = useContext(GameContext)

    const handleClear = () => {
        setGameToSearch('')
        setGameQuery({...gameQuery, game: '' })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Check if the new value is different that the previous one
        // in order to not search for the same value twice
        if (gameQuery.game !== gameToSearch) {
            setGameQuery({ ...gameQuery, game: gameToSearch })
        }
    }

    return (
        <FormControl as='form' onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement>
                    <BsSearch />
                </InputLeftElement>
                {gameToSearch && 
                    <InputRightElement _hover={{ cursor: 'pointer' }}>
                        <AiFillCloseCircle onClick={handleClear}/>
                    </InputRightElement>
                }
                <Input
                    autoComplete="off"
                    placeholder="Search games..."
                    variant='filled'
                    borderRadius={10}
                    value={gameToSearch}
                    onChange={(e) => setGameToSearch(e.target.value)}
                />
            </InputGroup>
        </FormControl>
    );
}

export default SearchInput;