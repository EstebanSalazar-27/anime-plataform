import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { getAllEpisodesById } from '../../helpers/getAnimes'

import { SpanDecorator } from '../SpanDecorator/SpanDecorator'


export const MainDetail = ({ synopsis, genders, detail, queryType, id }) => {
    const [episodes, setEpisodes] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    episodes.sort((a, b) => {
        return a.mal_id - b.mal_id
    })

    const genderAssociated = detail && detail?.genres?.map((gender) => {
        const genderFiltered = genders && genders?.data?.filter(e => e.name === gender.name)
        const newGenderFilteredObject = {}
        for (var i = 0; i < genderFiltered?.length; i++) {
            newGenderFilteredObject.id = genderFiltered[i].mal_id;
        }

        return <Link
            to={`/anime-plataform/search?genres=${newGenderFilteredObject.id}`}
            key={gender.name}
            href={gender.url}
            className='text-sky-400  bg-sky-200/60 dark:bg-sky-200/10 hover:text-slate-100 hover:bg-sky-400 dark:hover:bg-sky-400 shadow-sm  rounded-full min-w-[25px]  px-3 py-1 text-center  text-[13px]  font-bold'
            target="_blank">{gender.name}
        </Link>
    })
    const capitulesRender = episodes?.map((cap) => {
        return (
            <a
                key={cap.mal_id + cap.title}
                href={cap.url}
                target="_blank"
                className='bg-slate-300/40 dark:bg-stone-800  dark:text-slate-200 text-sm text-stone-700 hover:text-orange-400 dark:hover:text-orange-300  font-semibold shadow-md rounded-full px-3 py-[6px]'>
                <SpanDecorator props='bg-sky-400 text-slate-100 px-3 py-[1.5px] mr-2 rounded-full '> {cap.mal_id}</SpanDecorator>    {cap.title}
            </a>
        )
    })
    const fetchCapitules = async () => {
        setLoading(true)
        const res = await getAllEpisodesById({ type: queryType, id: id, page: currentPage })
        if (res.data === 0 || res.data.length < 20) {
            setHasMore(false)
        }
        setEpisodes((prevEpisodes => [...prevEpisodes, ...res.data]))
        setLoading(false)
    }
    const loadMoreEpisodes = () => {
        if (hasMore) {
            setTimeout(() => {
                setCurrentPage((prevPage) => prevPage + 1)
            }, 1500)
        }
    }
    useEffect(() => {
        fetchCapitules()
    }, [currentPage]);



    return (
        <main className='w-4/5 md:w-full flex-col px-4 md:px-0 '>

            <div className='w-full dark:bg-stone-900 bg-slate-200 min-h-[250px] mb-4 shadow-lg p-4 flex flex-col gap-3'>
                <h2 className='text-2xl dark:text-slate-100 text-stone-800 font-bold'>Synopsis</h2>
                <div className='flex flex-wrap gap-3 w-full'>
                    {genderAssociated}
                </div>
                <p className='dark:text-stone-300   text-stone-700 text-[12.5px] font-semibold text-left lett '>{synopsis}</p>
            </div>

            <div id='scrollableDiv' className='  w-full dark:bg-stone-900 bg-slate-200 min-h-[350px] max-h-[250px] overflow-y-auto  shadow-lg p-4 flex flex-col gap-3'>
                <h2 className='text-2xl dark:text-slate-100 text-stone-800 font-bold'>Episodes List</h2>
                <InfiniteScroll
                    scrollableTarget="scrollableDiv"
                    dataLength={currentPage * 10}
                    next={loadMoreEpisodes}
                    hasMore={hasMore}
                    loader={hasMore && <BeatLoader size={14} color="#38bdf8" className='relative p-2' />}
                    endMessage={<h2 className='text-orange-400 font-bold'>There haven't  more episodes!</h2>}
                    className=" relative flex flex-col gap-2"
                >
                    {capitulesRender}
                </InfiniteScroll>


            </div>

        </main>
    )
}
