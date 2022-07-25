import { useState, useEffect } from "react"
import { getTopAnimes } from "../helpers/getAnimes"

export const useTopFetch = ({ type }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const topFetch = async ({ type }) => {
        setLoading(true)
        const res = await getTopAnimes({ type: type })
        setData(res)
        setLoading(false)
    }

    useEffect(() => {
        topFetch({ type: type })
    }, [type]);


    return { data, loading }
}