import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from "react-router-dom"

// Helpers 
import { GetGenders } from '../helpers/getAnimes'
import { useGetDetail } from '../hooks/useGetDetail'
// Layout
import { Wrapper } from '../layout/Wrapper'
//Components
import { Score } from '../components/Score/Score'
import { AsideDetail } from '../components/AsideDetail/AsideDetail'
import { MainDetail } from '../components/MainDetail/MainDetail'
import { useGetCapitules } from '../hooks/useGetCapitules'


export const Detail = () => {
    const [detail, setDetail] = useState({})
    const [genders, setGenders] = useState([])
    const [querys] = useSearchParams()
    const queryType = querys.get("type") ? querys.get("type") : "anime"
    const id = querys.get("id")

    // Take type params to do search 
    const { data } = useGetDetail({ type: queryType, id: id, })



    const fetchGenders = async () => {
        const res = await GetGenders({ type: queryType })
        setGenders(res)
    }

    // If the selected item has the key aired is a tv show and we take a key from from aired/prop, opposite case is a manga so we take the key published and then we take the key  from from published

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: false,
        },
    }


    useEffect(() => {
        if (data) {
            setDetail(data)
        }
    }, [data]);

    useEffect(() => {
        if (detail) {
            document.title = `Detail ${detail.title}`
        }
        return () => {
            document.title = "AnimeDV"
        };
    }, [detail]);

    useEffect(() => {
        fetchGenders()
    }, []);

    return (
        <div className=' flex flex-col pt-[57px]  gap-6 w-full'>
            <div className='   relative w-full dark:bg-slate-200 bg-stone-900 pb-10 px-4 h-80 flex flex-col  justify-end items-center'>
                <div className='flex  md:flex-col md:justify-center md:items-start md:gap-4  gap-2  w-full  items-start '>
                    <div className=' lg-min:basis-2/5'></div>
                    <div className='flex flex-col flex-1 gap-2   xl-min:pl-2  items-start '>
                        <h4 className='text-3xl dark:text-stone-800 text-slate-200 font-bold'>{detail.title}</h4>
                        <Link to={`/anime-plataform/search?typeOf=${detail.type}`} className='bg-sky-500 px-6 py-[1px] text-slate-100  rounded-full font-semibold'>{detail.type}</Link>
                        <div className='flex gap-2'>
                            <h4 className='text-sm font-serif dark:text-stone-800 text-stone-100 dark:bg-slate-300 bg-stone-700 font-medium px-2 p-[3px] rounded-md '>{detail.title_english} </h4>
                            <h4 className='text-sm font-serif dark:text-stone-800 text-stone-100 dark:bg-slate-300 bg-stone-700 font-medium px-2 p-[3px] rounded-md '>{detail.title_japanese} </h4>
                        </div>
                    </div>

                    <div className='basis-1/5  '>
                        <div className='flex max-w-[200px] min-w-[200px] rounded-sm overflow-hidden'>
                            <div className='w-2/5 flex  items-center justify-center  text-center bg-sky-500 text-slate-100  font-bold text-lg  capitalize p-2'>{detail.score / 2}</div>
                            <div className='w-3/5 dark:bg-stone-800 bg-slate-200 font-bold p-[2px] text-center'> <Score score={detail.score} scoreBy={detail.scored_by} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Wrapper >
                <div className='flex gap-5 items-start w-full md:flex-col md:items-center '>
                    <AsideDetail
                        poster={detail?.images?.jpg?.large_image_url}
                        members={detail.members}
                        airing={detail.airing}
                        queryType={queryType}
                        id={id}

                    />
                    <MainDetail id={id} queryType={queryType} genders={genders} detail={detail} synopsis={detail.synopsis} />


                </div>


            </Wrapper>
        </div >
    )
}
