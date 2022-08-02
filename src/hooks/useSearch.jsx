import React, { useState, useEffect } from 'react'
import { getSearchByKeyword } from '../helpers/getAnimes'

export const useSearch = ({ type, query, page }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({})

    
    const seachFetch = async ({ type, query, page }) => {
        setLoading(true)
        const res = await getSearchByKeyword({ type: type, query: query, page: page })
        const { data } = res
        const { pagination } = res
        setData(data)
        setPagination(pagination)
        setLoading(false)
    }

    useEffect(() => {
        seachFetch({ type: type, query: query, page: page })
    }, [type, query, page]);


    return { data, pagination, loading }

}
