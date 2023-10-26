import { useEffect, useState } from "react"
import axios, { CanceledError } from "axios"
import { Game, GamesResponse } from "../models/api-model"

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

function useGames():{ games: Game[], error: string } {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {    
        const controller = new AbortController()

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
        
        return () => controller.abort()
    }, [])

    return { games, error }
}

export default useGames;