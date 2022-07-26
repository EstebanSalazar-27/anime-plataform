import { getDetailById } from "../helpers/getAnimes"
import React, { useState, useEffect } from "react"
export const useGetDetail = ({ id, type }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const detailFetch = async ({ id, type }) => {
        setLoading(true)
        const res = await getDetailById({ id: id, type: type })
        setData(res.data)
        setLoading(false)
    }

    useEffect(() => {
        detailFetch({ id: id, type: type })
    }, [id, type]);


    return { data, loading }
}