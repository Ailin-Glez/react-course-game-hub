import { useEffect, useState } from "react"
import axios, { AxiosRequestConfig, CanceledError } from "axios"
import { GameAPI } from "@enums";

// Generic custom hook to get the data from the API
// Receives a Type and as argument an enum to indicate wich endpoint do we need

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

interface FetchResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[]
}

interface ReturnDataType<T> {
    data: T[]; 
    error: string;
    isLoading: boolean;
}

function useData<T>(api: GameAPI, reqConfig?: AxiosRequestConfig, dependencies?: any[]): ReturnDataType<T> {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const deps = dependencies ? [...dependencies] : []

    useEffect(() => {    
        const controller = new AbortController()
        
        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(api, { signal: controller.signal, ...reqConfig })
            .then(res => {
                setData(res.data.results)
                setError('')
            })
            .catch(err => {
                if (!(err instanceof CanceledError))
                setError(err.message)
                setData([])
            })
            .finally(() => setIsLoading(false))
        
        return () => controller.abort()
    }, deps)

    return { data, error, isLoading }
}

export default useData;