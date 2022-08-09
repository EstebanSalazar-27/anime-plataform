import { ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { getRecommendations } from '../../helpers/getAnimes'
import { useTopFetch } from '../../hooks/useTopFetch'
import { TopItem } from '../TopItem/TopItem'
import "./aside.scss"
export const Aside = () => {
    const [topAnimes, setTopAnimes] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [querys] = useSearchParams()
    const queryType = querys.get("type") ? querys.get("type") : "anime"
    const { dataTop, loading } = useTopFetch({ type: queryType })



    // To render 
    const topRender = topAnimes?.data?.map((el, idx) => {
        return (
            <TopItem key={el.title} type={el.type} url={el.url} queryType={queryType}  id={el.mal_id} title={el.title} score={el.score} status={el.status} />
        )

    })

    const recommendationsRender = recommendations?.map((el, idx) => {
        return (
            <TopItem key={el.entry.mal_id + el.entry.title} queryType={queryType} episodes={el.episodes} id={el.entry.mal_id} title={el.entry.title} status={el.status} />
        )

    })


    const fetchRecommendations = () => {
        try {
            const res = getRecommendations({ type: "episodes" })
            return res

        } catch (error) {
            if (error.code === 404) {
                console.log("not found ")
            }
            console.log(ErrorMessage)
        }
    }

    useEffect(() => {
        if (dataTop) {
            setTopAnimes(dataTop)
        }
    }, [dataTop]);


    useEffect(() => {
        fetchRecommendations().then((res) => {
            if (res.data) {
                const limitRecommendations = res.data.slice(0, 10)
                setRecommendations(limitRecommendations)
            }

        })
    }, [queryType]);


    return (
        <aside className=' p-4  overflow-y-scroll  lg-min:sticky lg-min:top-20 bg-slate-200 dark:bg-stone-900 shadow-lg  transition-colors max-h-[500px]   min-w-[300px] min-h-[400px] max-w-[350px] md:w-full flex flex-col justify-between gap-3  shrink-0'>
            <div className=' relative w-full'><h2 className='mb-1 text-lg text-sky-400 font-bold dark:text-sky-300'>Top {queryType}</h2> <hr className='w-full border-sky-400 dark:border-sky-100' /></div>
            {
                !loading && topAnimes
                    ?
                    topRender
                    :
                    <div className='absolute left-2/4 bottom-2/4 -translate-x-2/4  '>
                        <BeatLoader
                            color="#1fa9ff"
                            size={12}
                        />
                    </div>

            }
            <div className='w-full'><h2 className='mb-1 text-lg text-sky-400 dark:text-sky-300 font-bold'>Recent Episodes</h2> <hr className='w-full border-sky-400 dark:border-sky-100' /></div>


            {
                !loading && recommendations
                    ?
                    recommendationsRender
                    :
                    <div className='absolute left-2/4 bottom-2/4 -translate-x-2/4  '>
                        <BeatLoader
                            color="#1fa9ff"
                            size={12}
                        />
                    </div>

            }

        </aside>
    )
}
