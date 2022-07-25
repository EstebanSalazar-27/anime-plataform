import react, { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { useAnimesFetch } from '../../hooks/useAnimesFetch'
import { AnimeCard } from '../AnimeCard/AnimeCard'
import { HeadingH3 } from '../HeadingH3/HeadingH3'
import { Spinner } from '../Spinner/Spinner'

export const ListOfAnimes = () => {
    const [paginationData, setPaginationData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(Number)
    const { data, pagination, loading } = useAnimesFetch({ query: "anime", limit: 25, page: currentPage })


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
            setTotalPages(Math.floor(parseInt(paginationData.items?.total) / parseInt(paginationData.items?.per_page)))


        }
    }, [paginationData])


    return (
        <div className='flex flex-col  gap-3'>
            <nav className='flex gap-2 items-end'>
                <button onClick={previouslyPage} className="text-slate-50 bg-orange-500/90 font-semibold px-2 py-1 rounded-md">Previusly</button>
                <button onClick={nextPage} className="text-slate-50 bg-orange-500/90 font-semibold px-2 py-1 rounded-md">Next</button>
                {totalPages ? <HeadingH3 fonts="text-sm" >Page: {currentPage} of {totalPages} </HeadingH3> : null}
            </nav>

            <section className=' relative w-full md-min:min-w-[600px] min-w-[300px] min-h-[300px] flex-stats flex-wrap gap-4'>
                {
                    !loading && data
                        ?
                        data.map(({ aired, background, duration, episodes, images, score, season, status, title, trailer }) => {
                            return <AnimeCard
                                key={title}
                                aired={aired}
                                plot={background}
                                duration={duration}
                                episodes={episodes}
                                images={images}
                                score={score}
                                season={season}
                                status={status}
                                title={title}
                                trailer={trailer} />
                        })
                        :
                        <div className='relative left-2/4  '>
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
