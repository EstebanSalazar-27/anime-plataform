import react, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAnimesFetch } from '../../hooks/useAnimesFetch'

// Components 
import { BeatLoader } from 'react-spinners'
import { AnimeCard } from '../AnimeCard/AnimeCard'
import { Pagination } from '../Pagination/Pagination'


export const ListOfAnimes = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { type } = useParams()
    const { data, pagination, loading } = useAnimesFetch({ query: type || "anime", limit: 25, page: currentPage })


    return (
        <div className='flex flex-col  gap-3'>

            <div className=' '>
                <Pagination isLoading={loading} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

            <section className=' relative w-full md-min:min-w-[600px] min-w-[300px] min-h-[300px]  flex-stats flex-wrap gap-4'>
                {
                    !loading && data
                        ?
                        data.map(({ aired, background, mal_id, duration, episodes, images, score, type, season, status, title, trailer }) => {
                            return <AnimeCard
                                key={title}
                                aired={aired}
                                id={mal_id}
                                plot={background}
                                duration={duration}
                                episodes={episodes}
                                images={images}
                                score={score}
                                season={season}
                                status={status}
                                title={title}
                                trailer={trailer}
                                type={type}
                            />
                        })
                        :
                        <div className='absolute left-2/4  -translate-x-2/4 '>
                            <BeatLoader
                                color="#1fa9ff"
                                size={20}
                            />
                        </div>

                }
            </section>

        </div>
    )
}
