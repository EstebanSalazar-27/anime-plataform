import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HeadingH3 } from '../HeadingH3/HeadingH3'

export const Pagination = ({ isFiltersLoading, isLoading, pagination, currentPage, setCurrentPage }) => {

    const [totalPages, setTotalPages] = useState(Number)
    const [paginationData, setPaginationData] = useState({})
    const [currentPath, setCurrentPath] = useState("")
    const [oldPath, setOldPath] = useState("")

    const buttonIsDisabled = isLoading === true ? "disabled" : ""

    const location = useLocation()

    function nextPage() {
        if (paginationData?.has_next_page) {
            setCurrentPage(currentPage + 1)
        }
    }

    function previouslyPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    useEffect(() => {
        setPaginationData(pagination)
    }, [pagination])

    useEffect(() => {
        setOldPath(currentPath)
    }, [])

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        if (oldPath !== currentPath) {
            setCurrentPage(1)
        }
    }, [currentPath])

    useEffect(() => {
        if (paginationData?.items?.total) {
            setTotalPages(Math.ceil(parseInt(paginationData?.items?.total) / parseInt(paginationData?.items?.per_page)))
        }
    }, [paginationData])

    return (
        <nav className='flex gap-2 items-end'>
            <button disabled={buttonIsDisabled || currentPage === 1 } onClick={previouslyPage} className="text-slate-50 disabled:opacity-50 transition-colors bg-orange-400/80 font-semibold px-2 py-1 rounded-sm">Previously</button>
            <button disabled={buttonIsDisabled || paginationData?.has_next_page === false } onClick={nextPage} className="text-slate-50 disabled:opacity-50 bg-orange-400/80 font-semibold px-2 py-1 rounded-sm">Next</button>
            {totalPages ? <HeadingH3 fonts="text-sm  dark:text-slate-100 text-stone-800 font-semibold" >Page: {currentPage} of {totalPages} </HeadingH3> : null}
        </nav>
    )
}
