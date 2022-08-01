import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ResultItemBySearch } from '../../components/ResultItemBySearch/ResultItemBySearch'
import { useSearch } from '../../hooks/useSearch'
import { Pagination } from "../../components/Pagination/Pagination"
import { BeatLoader, BounceLoader } from 'react-spinners'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { useItemsByFilter } from '../../hooks/useItemsByFilter'
import { FilterOutContext } from '../../Context/FilterOutContext'
import { Spinner } from '../../components/Spinner/Spinner'

export const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([])
  // state with the filtered result  
  const [filteredResult, setFilteredResult] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const { filtersSelected, setFiltersSelected } = useContext(FilterOutContext)
  const { type, keyword } = useParams()
  const { data, pagination, loading } = useSearch({ type: type, keyword: keyword, page: currentPage })
  // use fetch to get data about the filtered info 
  const { filteredData, filteredPagination, filteredLoading } = useItemsByFilter({ type: type, gender: filtersSelected?.gender, typeOf: filtersSelected?.typeOf, status: filtersSelected?.status, order: filtersSelected?.order, page: currentPage })

  // Renders
  const resultsToRender =
    !filtersSelected
      ?
      searchResult.map((e) => <ResultItemBySearch key={e.title + e.mal_id} title={e.title} type={e.type} images={e.images.jpg} id={e.mal_id} />)
      :
      filteredResult.map((e) => <ResultItemBySearch key={e.title + e.mal_id} title={e.title} type={e.type} images={e.images.jpg} id={e.mal_id} />)
  // Sort all animes for type
  if (searchResult) {
    searchResult.sort((a, b) => {

      if (a.type == "TV") {
        return -1
      }
      if (a.type == "OVA") {
        return 2
      }
      if (b.type == "Special") {
        return 3
      }
      if (b.type == "ONA") {
        return 0
      }
      if (b.type == "Movie") {
        return -3
      }

    })
  }


  useEffect(() => {
    if (data) {
      setSearchResult(data)
    }
  }, [data])

  useEffect(() => {
    if (filteredData) {
      setFilteredResult(filteredData)
    }

  }, [filteredData])
  const gendersSelected = filtersSelected ? filtersSelected?.gender?.map((e) => e) : null

  return (
    <div className=' pt-40 flex flex-col gap-6'>
      {/* pagination search - pagination filtered */}
      {!filtersSelected ? <Pagination isLoading={loading} isFiltersLoading={filteredLoading} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <Pagination pagination={filteredPagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />}

      <FilterBar currentPage={currentPage} setCurrentPage={setCurrentPage} SetfilterOut={setFiltersSelected} />
      {filtersSelected ? <div className='flex flex-col md:pt-4'><h2 className='font-semibold text-2xl'>Filters Selected:</h2> <h2 className='capitalize font-semibold text-slate-200'>Type: {filtersSelected.typeOf} / Status: {filtersSelected.status} / Order By: {filtersSelected.order} </h2> </div> : null}
      <div className='relative flex items-start w-full  min-h-[300px] md:pt-8 gap-4 flex-wrap'>
        {
          !loading
            ?
            resultsToRender
            :
            <div className='absolute left-2/4 bottom-2/4  -translate-2/4'>
              <BeatLoader color='#3b82f6' size={24} />

            </div>

        }

      </div>

    </div>
  )
}
