import React from 'react'
import { AddToFavorite } from '../AddToFavorite/AddToFavorite'
import { SpanDecorator } from '../SpanDecorator/SpanDecorator'

export const AsideDetail = ({ poster, members, airing }) => {
    return (
        <aside className='flex flex-col gap-4 min-w-[250px] relative lg-min:-top-52   xl-min:left-4 md:w-full'>
            <picture className=' p-1 dark:bg-stone-900  bg-slate-100 rounded-sm md-w-full shadow-lg dark:shadow-slate-600/5 '>
                <img className=' h-full max-h-[500px]    min-w-[200px] w-full md-w-full object-cover' src={poster} alt="poster_anime" />
            </picture>
            <div className='flex-stats gap-4'>
                <div className='relative basis-2/4 bg-slate-200 dark:bg-stone-900 shadow-lg dark:shadow-slate-600/5 rounded-md h-12 flex  justify-center items-center'>
                    <AddToFavorite />
                </div>
                <div className={`basis-2/4 text-slate-50 font-semibold shadow-lg dark:shadow-slate-600/5 rounded-md h-12 select-none flex text-lg  justify-center items-center ${airing ? "bg-green-400" : "bg-rose-600"} `}> {airing ? <h2>In Transmission</h2> : <h2>Finished</h2>} </div>
            </div>

            <div className='h-[300px] w-full dark:bg-stone-900 bg-slate-200 rounded-md shadow-lg dark:shadow-slate-600/5'>
                <div className='border-b-[1.5px] p-2 border-white/80 dark:border-black/60'>
                    <h2 className='dark:text-slate-100 text-stone-800 font-bold text-lg '>Followers: <SpanDecorator props="text-sky-400"> {members}</SpanDecorator> </h2>
                </div>
            </div>

        </aside>
    )
}
