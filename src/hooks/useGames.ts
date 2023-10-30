import { useEffect, useState } from "react"
import axios, { CanceledError } from "axios"
import { Game, GamesResponse } from "../models/api-model"

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

interface GamesReturnType {
    games: Game[]; 
    error: string;
    isLoading: boolean;
} 

// setIsLoading to false should done in the finally block, but for some reason, it doesn´t work
// when using the strict mode. That´s why is repeated in the .then and the .catch

function useGames(): GamesReturnType {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {    
        const controller = new AbortController()
        
        setIsLoading(true)
        apiClient.get<GamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
                setError('')
            })
            .catch(err => {
                if (!(err instanceof CanceledError))
                setError(err.message)
                setGames([])
            })
            .finally(() => setIsLoading(false))
        
        return () => controller.abort()
    }, [])

    return { games, error, isLoading }
}

export default useGames;