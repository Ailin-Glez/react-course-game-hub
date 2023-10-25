import { useEffect, useState } from "react"
import axios from "axios"
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
        apiClient.get<GamesResponse>('/games')
            .then(res => {
                setGames(res.data.results)
                setError('')
            })
            .catch(err => {
                setError(err.message)
                setGames([])
            })
    }, [])

    return { games, error }
}

export default useGames;