import { useState, useEffect } from "react"
import { getAllAnimes } from "../helpers/getAnimes"




export const useAnimesFetch = ({ query, limit, page }) => {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({})
    const [loading, setLoading] = useState()


    const AnimesFetch = async (queryId, limite, page) => {
        setLoading(true)
        const res = await getAllAnimes({ query: queryId, limit: limite, page: page })
        const { data } = await res
        const { pagination } = await res
        setData(data)
        setPagination(pagination)
        setLoading(false)
    }

    useEffect(() => {
        AnimesFetch(query, limit, page)
    }, [page]);

    return { data, pagination, loading }
}