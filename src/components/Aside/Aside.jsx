import { ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { getRecommendations } from '../../helpers/getAnimes'
import { useTopFetch } from '../../hooks/useTopFetch'
import { TopItem } from '../TopItem/TopItem'
import "./aside.scss"
export const Aside = () => {
    const [topAnimes, setTopAnimes] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const { type } = useParams()
    const { dataTop, loading } = useTopFetch({ type: type || "anime" })



    // To render 
    const topRender = topAnimes?.data?.map((el, idx) => {
        return (
            <TopItem key={el.title} type={el.type} url={el.url} id={el.mal_id} title={el.title} score={el.score} status={el.status} />
        )

    })

    const recommendationsRender = recommendations?.map((el, idx) => {

        return (
            <TopItem key={el.entry.mal_id + el.entry.title} episodes={el.episodes} id={el.entry.mal_id} title={el.entry.title} status={el.status} />
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
    }, [type]);


    return (
        <aside className=' p-4  overflow-y-scroll  lg-min:sticky lg-min:top-20 bg-stone-900 shadow-lg  max-h-[500px]   min-w-[300px] min-h-[400px] max-w-[350px] md:w-full flex flex-col justify-between gap-3  shrink-0'>
            <div className=' relative w-full'><h2 className='mb-1 text-lg text-sky-300'>Top {type || "anime"}</h2> <hr className='w-full border-sky-100' /></div>
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
            <div className='w-full'><h2 className='mb-1 text-lg text-sky-300'>Recent Episodes</h2> <hr className='w-full border-sky-100' /></div>


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
