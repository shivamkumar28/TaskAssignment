import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const allCharaterApi = 'https://rickandmortyapi.com/api/character'
const queryKey = 'allCharacter'

const getAllCharacter = async () => {
    const response = await axios.get(allCharaterApi)
    return response?.data?.results
}

export const useGetAllCharacter = () => {
    const { isLoading, data } = useQuery({
        queryKey: [queryKey],
        queryFn: getAllCharacter
    })
    return { data, isLoading }
}

const charaterByIdApi = 'https://rickandmortyapi.com/api/character/'
const characterById = 'characterById'

const getCharaterById = async (id: string | number) => {
    const response = await axios.get(`${charaterByIdApi}${id}`)
    return response.data
}

export const useGetCharaterById = (id: string | number) => {
    const { data, isLoading } = useQuery({
        queryKey: [characterById],
        queryFn: () => getCharaterById(id)
    })
    return { data, isLoading }
}