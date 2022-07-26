import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HeadingH3 } from '../../components/HeadingH3/HeadingH3'
import { ResultItemBySearch } from '../../components/ResultItemBySearch/ResultItemBySearch'
import { useSearch } from '../../hooks/useSearch'
import { Pagination } from "../../components/Pagination/Pagination"
import { BeatLoader, BounceLoader } from 'react-spinners'

export const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { type, keyword } = useParams()
  const { data, pagination, loading } = useSearch({ type: type, keyword: keyword, page: currentPage })

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
  return (
    <div className=' pt-40 flex flex-col gap-6'>
      <Pagination pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <HeadingH3 fonts="text-3xl">Filters bar is not finished yet so i put anything here :) {keyword} </HeadingH3>

      <div className='relative flex items-start w-full  min-h-[300px] gap-4 flex-wrap'>
        {
          !loading
            ?
            searchResult.map((e) => <ResultItemBySearch key={e.title + e.mal_id} title={e.title} type={e.type} images={e.images.jpg} id={e.mal_id} />)
            :
            <BeatLoader
              className='absolute left-2/4 bottom-2/4 -translate-x-2/4'
              color="#1fa9ff"
              size={30}
            />
        }

      </div>

    </div>
  )
}
