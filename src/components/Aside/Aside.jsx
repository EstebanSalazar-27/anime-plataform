import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { useTopFetch } from '../../hooks/useTopFetch'
import { TopItem } from '../TopItem/TopItem'
export const Aside = () => {
    const [topAnimes, setTopAnimes] = useState([])
    const { type } = useParams()
    const { data, loading } = useTopFetch({ type: type || "anime" })

    console.log(topAnimes)

    useEffect(() => {
        if (data) {
            setTopAnimes(data)
        }
    }, [data]);

    return (
        <aside className=' p-4  lg-min:sticky lg-min:top-20 bg-stone-900 shadow-lg  min-w-[300px] min-h-[400px] lg-min:max-w-[300px] md:w-full flex flex-col justify-between gap-3  shrink-0'>
            <div className='w-full'><h2 className='mb-1'>Top {type || "anime"}</h2> <hr className='w-full border-blue-400' /></div>
            {
                !loading && topAnimes
                    ?
                    topAnimes?.data?.map((el) => {
                        return (
                            <TopItem key={el.title} url={el.url} id={el.mal_id} title={el.title} score={el.score} status={el.status} />
                        )

                    })
                    :
                    <div className='absolute left-2/4 bottom-2/4 -translate-x-2/4  '>
                        <BeatLoader
                            color="#1fa9ff"
                            size={12}
                        />
                    </div>

            }
            <div className='w-full'><h2 className='mb-1'>Categories</h2> <hr className='w-full border-blue-400' /></div>



        </aside>
    )
}
