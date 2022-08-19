import React from 'react'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import { useFollowersFetch } from '../../hooks/useFollowersFetch'
import { AddToFavorite } from '../AddToFavorite/AddToFavorite'
import { SpanDecorator } from '../SpanDecorator/SpanDecorator'


export const AsideDetail = ({ poster, members, airing, queryType, id }) => {
    const { data, loading } = useFollowersFetch({ type: queryType, id: id })
    console.log(data)
    const followersRender = !loading ? data.newDataSliced?.map((follower) => {
        return (
            <a key={follower.user.username} target="_blank" href={follower.user.url} className='flex'>
                <picture>
                    <img className='w-14 h-14 object-cover' src={follower.user.images.jpg.image_url} alt="" />
                </picture>
            </a>
        )
    }) : <BeatLoader className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' color='#38bdf8' size={12} />


    useEffect(() => {

    }, []);

    return (
        <aside className='flex flex-col gap-4 min-w-[250px] md-min:max-w-[280px] relative lg-min:-top-52   xl-min:left-4 md:w-full'>
            <picture className=' p-1 dark:bg-stone-900  bg-slate-100 rounded-sm md-w-full shadow-lg dark:shadow-slate-600/5 '>
                <img className=' h-full w-full max-h-[500px] min-h-[300px]  min-w-[200px]   object-cover' src={poster} alt="poster_anime" />
            </picture>
            <div className='flex-stats gap-4'>
                <div className='relative basis-2/4 bg-slate-200 hover:bg-rose-500  dark:hover:bg-rose-500 transition-colors dark:bg-stone-900 shadow-lg dark:shadow-slate-600/5 rounded-md h-12 flex  justify-center items-center'>
                    <AddToFavorite />
                </div>
                <div className={`basis-2/4 text-slate-50 font-semibold shadow-lg dark:shadow-slate-600/5 rounded-md h-12 select-none flex text-lg items-center justify-center  ${airing ? "bg-green-400" : "bg-rose-600"} `}> {airing ? <h2> Transmission</h2> : <h2>Finished</h2>} </div>
            </div>

            <div className='min-h-[300px] relative w-full dark:bg-stone-900 bg-slate-200 rounded-md shadow-lg dark:shadow-slate-600/5 '>
                <div className=' p-2   grid gap-3'>
                    <h2 className='dark:text-slate-100 border-b-[1.5px] border-white/80 dark:border-black/60 pb-1 text-stone-800 font-bold text-lg '>Followers: <SpanDecorator props="text-sky-400"> {members}</SpanDecorator> </h2>
                    <div className='flex flex-wrap justify-center items-center  gap-2'>
                        {followersRender}
                    </div>

                </div>
            </div>

        </aside>
    )
}
