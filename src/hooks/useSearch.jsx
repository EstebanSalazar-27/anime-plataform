import React, { useState, useEffect } from 'react'
import { getSearchByKeyword } from '../helpers/getAnimes'

export const useSearch = ({ type, keyword, page }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({})


    const seachFetch = async ({ type, keyword, page }) => {
        setLoading(true)
        const res = await getSearchByKeyword({ type: type, keyword: keyword, page: page })
        const { data } = res
        const { pagination } = res
        setData(data)
        setPagination(pagination)
        setLoading(false)
    }

    useEffect(() => {
        seachFetch({ type: type, keyword: keyword, page: page })
    }, [type, keyword, page]);


    return { data, pagination, loading }

}
