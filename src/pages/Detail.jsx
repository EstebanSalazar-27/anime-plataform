import React, { useState, useEffect } from 'react'
import { useGetDetail } from '../hooks/useGetDetail'
import { useParams } from "react-router-dom"
import YouTube from 'react-youtube'
import { SpanDecorator } from '../components/SpanDecorator/SpanDecorator'
export const Detail = () => {
    const [detail, setDetail] = useState({})
    const { id, type } = useParams()
   
    const { data } = useGetDetail({ type: type, id: id, })
    console.log(useParams())


    const episodes = detail.episodes ? <h4 className='text-md '>Episodes: {detail.episodes}</h4> : null

    // If the selected item has the key aired is a tv show and we take a key from from aired/prop, opposite case is a manga so we take the key published and then we take the key  from from published
    const launched =
        detail.aired
            ?
            <h4 className='text-md '> Launch: From <SpanDecorator props='text-orange-300 font-semibold'>{detail.aired?.prop.from.day}/{detail.aired?.prop.from.month}/{detail.aired?.prop.from.year}</SpanDecorator> to <SpanDecorator props='text-orange-300 font-semibold'>{detail.aired?.prop.to.day}/{detail.aired?.prop.from.month}/{detail.aired?.prop.from.year}</SpanDecorator>  </h4>
            :
            <h4 className='text-md '>Published: From {detail.published?.prop.from.day}/{detail.published?.prop.from.month}/{detail.published?.prop.from.year} to {detail.published?.prop.to.day}/{detail.published?.prop.from.month}/{detail.published?.prop.from.year}</h4>

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

    return (
        <div className=' flex flex-col pt-32 gap-8  w-full'>

            <div className='flex lg:flex-wrap gap-4 items-start w-full'>

                <picture className=''>
                    <img className='w-full h-full max-h-[500px]  min-w-[320px] object-contain' src={detail?.images?.jpg?.large_image_url} alt="" />
                </picture>

                <div className='flex flex-col gap-2 w-full max-w-[500px] shrink-0 '>
                    <h2 className='text-3xl text-slate-100'>{detail.title}</h2>
                    <h4 className='text-md '>Rating: {detail.score} of 10 <SpanDecorator props='text-orange-300 font-semibold'>Scored by  {detail.scored_by}</SpanDecorator> </h4>
                    {episodes}
                    {launched}
                    <h4 className='text-md '>Type: <SpanDecorator props='text-orange-300 font-semibold'>{detail.type}</SpanDecorator> </h4>

                    <div >
                        <h4>Psynosis:</h4>
                        <p className='text-stone-200 text-sm lett '>{detail.synopsis}</p>
                    </div>
                </div>
            </div>

            <div className='mb-32'>
                {detail.trailer?.youtube_id ? <>
                    <h2 className='text-3xl text-slate-100 font-semibold font-sans mb-2'>Teaser</h2>  <YouTube videoId={detail.trailer?.youtube_id} opts={opts} id={detail.trailer?.youtube_id} /></> : null}
            </div>

        </div >
    )
}
