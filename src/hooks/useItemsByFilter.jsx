import React, { useState, useEffect } from 'react'
import { getItemsByFilter } from '../helpers/getAnimes'

export const useItemsByFilter = ({ type, typeOf, gender, status, order, page }) => {
    const [filteredData, setFilteredData] = useState([])
    const [filteredPagination, setFilteredPagination] = useState({})
    const [filteredLoading, setFilteredLoading] = useState(false)

    const fetchItemsByFilter = async ({ type, typeOf, gender, status, order, page }) => {
        setFilteredLoading(true)
        const res = await getItemsByFilter({ type: type, typeOf: typeOf, gender: gender, status: status, order: order, page: page })
        setFilteredData(res.data)
        setFilteredPagination(res.pagination)
        setFilteredLoading(false)
    }

    useEffect(() => {
        fetchItemsByFilter({ type: type, typeOf: typeOf, gender: gender, status: status, order: order, page: page })
    }, [type, typeOf, gender, status, order, page]);


    return { filteredData, filteredLoading, filteredPagination }
}
