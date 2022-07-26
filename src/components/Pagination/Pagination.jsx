import React, { useEffect, useState } from 'react'
import { HeadingH3 } from '../HeadingH3/HeadingH3'

export const Pagination = ({ pagination, currentPage, setCurrentPage }) => {

    const [totalPages, setTotalPages] = useState(Number)
    const [paginationData, setPaginationData] = useState({})


    function nextPage() {
        if (paginationData.has_next_page) {
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
        if (paginationData.items?.total) {
            setTotalPages(Math.floor(parseInt(paginationData?.items?.total) / parseInt(paginationData?.items?.per_page)))
        }
    }, [paginationData])
    return (
        <nav className='flex gap-2 items-end'>
            <button onClick={previouslyPage} className="text-slate-50 bg-orange-500/90 font-semibold px-2 py-1 rounded-md">Previously</button>
            <button onClick={nextPage} className="text-slate-50 bg-orange-500/90 font-semibold px-2 py-1 rounded-md">Next</button>
            {totalPages ? <HeadingH3 fonts="text-sm" >Page: {currentPage} of {totalPages} </HeadingH3> : null}
        </nav>
    )
}
