import { useState, useEffect } from "react"
import { getTopAnimes } from "../helpers/getAnimes"

export const useTopFetch = ({ type }) => {
    const [dataTop, setDataTop] = useState([])
    const [loading, setLoading] = useState(false)


    const topFetch = async ({ type }) => {
        setLoading(true)
        const resTop = await getTopAnimes({ type: type })
        setDataTop(resTop)
        setLoading(false)
    }

    useEffect(() => {
        topFetch({ type: type })
    }, [type]);

    return { dataTop, loading }
}