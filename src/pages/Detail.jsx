import React, { useState, useEffect } from 'react'
import { useGetDetail } from '../hooks/useGetDetail'
import { Link, useSearchParams } from "react-router-dom"
import YouTube from 'react-youtube'
import { SpanDecorator } from '../components/SpanDecorator/SpanDecorator'

import { GetGenders } from '../helpers/getAnimes'
import { AddToFavorite } from '../components/AddToFavorite/AddToFavorite'

import { Wrapper } from '../layout/Wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Score } from '../components/Score/Score'
import { AsideDetail } from '../components/AsideDetail/AsideDetail'
export const Detail = () => {
    const [detail, setDetail] = useState({})
    const [stars, setStars] = useState([])
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



    const studiosRender = detail && detail?.studios?.map((studio) => {
        return <a key={studio.name} className='text-stone-800 dark:text-slate-100 font-semibold' target="_blank" href={studio.url}><SpanDecorator props="text-blue-300">{studio.name}</SpanDecorator></a>
    })
    const genderAssociated = detail && detail?.genres?.map((gender) => {
        const genderFiltered = genders && genders?.data?.filter(e => e.name === gender.name)
        const newGenderFilteredObject = {}
        for (var i = 0; i < genderFiltered?.length; i++) {
            newGenderFilteredObject.id = genderFiltered[i].mal_id;
        }

        return <Link to={`/search?genres=${newGenderFilteredObject.id}`} key={gender.name} href={gender.url} className='text-sky-400  bg-sky-200/60 dark:bg-sky-200/10 hover:text-slate-100 hover:bg-sky-400 dark:hover:bg-sky-400 shadow-sm  rounded-full min-w-[25px]  px-3 py-1 text-center  text-[13px]  font-bold' target="_blank">{gender.name}</Link>
    })

    const episodes = detail.episodes ? <h4 className='text-md  dark:text-slate-100 text-stone-800 font-semibold '>Episodes: {detail.episodes}</h4> : null

    // If the selected item has the key aired is a tv show and we take a key from from aired/prop, opposite case is a manga so we take the key published and then we take the key  from from published
    const launched =
        detail.aired
            ?
            <h4 className='text-md  dark:text-slate-100 text-stone-800 font-semibold '> Launch: From <SpanDecorator props='text-orange-300 font-semibold'>{detail.aired?.prop.from.day}/{detail.aired?.prop.from.month}/{detail.aired?.prop.from.year}</SpanDecorator> to <SpanDecorator props='text-orange-300 font-semibold'>{detail.aired?.prop.to.day}/{detail.aired?.prop.from.month}/{detail.aired?.prop.from.year}</SpanDecorator>  </h4>
            :
            <h4 className='text-md  dark:text-slate-100 text-stone-800 font-semibold '>Published: From {detail.published?.prop.from.day}/{detail.published?.prop.from.month}/{detail.published?.prop.from.year} to {detail.published?.prop.to.day}/{detail.published?.prop.from.month}/{detail.published?.prop.from.year}</h4>

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
    console.log(detail, "detail")
    return (
        <div className=' flex flex-col pt-[57px]  gap-6 w-full'>
            <div className='   relative w-full dark:bg-slate-200 bg-stone-900 pb-10 px-4 h-80 flex flex-col  justify-end items-center'>

                <div className='flex  md:flex-col md:justify-center md:items-start md:gap-4  gap-2  w-full  items-start '>
                    <div className=' lg-min:basis-2/5'></div>
                    <div className='flex flex-col flex-1 gap-2   xl-min:pl-2  items-start '>
                        <h4 className='text-3xl dark:text-stone-800 text-slate-200 font-bold'>{detail.title}</h4>
                        <Link to={`/search?typeOf=${detail.type}`} className='bg-sky-500 px-6 py-[1px] text-slate-100  rounded-full font-semibold'>{detail.type}</Link>
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




                {/* <div >
                        <h4 className=' dark:text-slate-100 text-stone-800 font-semibold'>Psynosis:</h4>
               
                    </div> */}

            </div>
            <Wrapper >
                <div className='flex gap-5 items-start w-full md:flex-col md:items-center '>
                    <AsideDetail
                        poster={detail?.images?.jpg?.large_image_url}
                        members={detail.members}                 
                        airing={detail.airing}

                    />
                   

                    <main className='w-4/5 md:w-full flex-col px-4 md:px-0'>
                        <div className='w-full dark:bg-stone-900 bg-slate-200 min-h-[250px] shadow-lg p-4 flex flex-col gap-3'>
                            <h2 className='text-lg dark:text-slate-100 text-stone-800 font-bold'>Synopsis</h2>
                            <div className='flex flex-wrap gap-3 w-full'>
                                {genderAssociated}
                            </div>

                            <p className='dark:text-stone-300   text-stone-700 text-[12.5px] font-semibold text-left lett '>{detail.synopsis}</p>
                        </div>

                    </main>

                </div>


            </Wrapper>
        </div >
    )
}
