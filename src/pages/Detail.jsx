import React, { useState, useEffect } from 'react'
import { useGetDetail } from '../hooks/useGetDetail'
import { Link, useParams, useSearchParams } from "react-router-dom"
import YouTube from 'react-youtube'
import { SpanDecorator } from '../components/SpanDecorator/SpanDecorator'
import { HeadingH3 } from '../components/HeadingH3/HeadingH3'
import { GetGenders } from '../helpers/getAnimes'
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
    console.log(genders)

    const studiosRender = detail && detail?.studios?.map((studio) => {
        return <a key={studio.name} className='text-stone-800 dark:text-slate-100' target="_blank" href={studio.url}><SpanDecorator props="text-blue-300">{studio.name}</SpanDecorator></a>
    })
    const genderAssociated = detail && detail?.genres?.map((gender) => {
        const genderFiltered = genders && genders?.data?.filter(e => e.name === gender.name)
        const newGenderFilteredObject = {}
        for (var i = 0; i < genderFiltered?.length; i++) {
            newGenderFilteredObject.id = (genderFiltered[i].mal_id);
        }

        console.log(newGenderFilteredObject)
        return <Link to={`/search?genres=${newGenderFilteredObject.id}`} key={gender.name} href={gender.url} className='text-stone-800 dark:text-slate-100' target="_blank"><SpanDecorator props="text-blue-300">{gender.name}</SpanDecorator></Link>
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
    return (
        <div className=' flex flex-col pt-32 gap-8  w-full'>

            <div className='flex lg:flex-wrap gap-4 items-start w-full'>

                <picture className=''>
                    <img className='w-full h-full max-h-[500px]  min-w-[320px] object-contain' src={detail?.images?.jpg?.large_image_url} alt="" />
                </picture>

                <div className='flex flex-col gap-2 w-full max-w-[500px] shrink-0 '>
                    <h2 className='text-3xl dark:text-slate-50 text-stone-800 font-semibold'>{detail.title}</h2>
                    <h4 className='text-md dark:text-slate-100 text-stone-800 font-semibold'>Rating: {detail.score} of 10 <SpanDecorator props='text-orange-300 font-semibold'>Scored by  {detail.scored_by}</SpanDecorator> </h4>
                    {episodes}
                    {launched}
                    <div className='flex gap-2'>
                        <span className='text-stone-800 dark:text-slate-100'>Studios:</span>  {studiosRender}
                    </div>
                    <div className='flex-stats gap-2'>
                        <span className='text-stone-800 dark:text-slate-100'>Genders:</span>  {genderAssociated}
                    </div>

                    <h4 className='text-md  dark:text-slate-100 text-stone-800 font-semibold '>Type: <SpanDecorator props='text-orange-300 font-semibold'>{detail.type}</SpanDecorator> </h4>

                    <div >
                        <h4 className=' dark:text-slate-100 text-stone-800 font-semibold'>Psynosis:</h4>
                        <p className='dark:text-stone-200 text-stone-800 text-sm font-medium text-left lett '>{detail.synopsis}</p>
                    </div>
                </div>
            </div>

            <div className='mb-32'>
                {detail.trailer?.youtube_id ? <>
                    <h2 className='text-3xl  dark:text-slate-100 text-stone-800 font-semibold font-sans mb-2'>Teaser</h2>  <YouTube videoId={detail.trailer?.youtube_id} opts={opts} id={detail.trailer?.youtube_id} /></> : null}
            </div>

        </div >
    )
}
