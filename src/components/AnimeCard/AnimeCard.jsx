import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { HeadingH3 } from '../HeadingH3/HeadingH3'
import "./animeCard.scss"
// handles visibility

export const AnimeCard = ({ aired, background, type, duration, episodes, images, score, season, status, title, id, trailer }) => {
    const [detailBtnIsVisible, setDetailBtnIsVisible] = useState(false)
    const isVisible = detailBtnIsVisible === true ? " isVisible" : "isHidden"


     const handleMouseOver = () => {
        setDetailBtnIsVisible(true)
    }
     const handleMouseOut = () => {
        setDetailBtnIsVisible(false)
    }

    return (
        <Link
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            id='anime-card'
            to={`detail/${id}`}
            className={` flex select-none flex-col w-40 hover:-translate-y-2    hover:shadow-2xl  transition-all min-w-[10rem]  min-h-[200px] max-h-[300px]  md:basis-full bg-stone-900  flex-shrink-0 `}>

            <div id='card-image' className='relative min-h-[200px]'>
                <img className=' transition-all  w-full min-w-full min-h-full h-60 bg-gray-700   object-cover ' src={images.jpg.image_url} />
                <span id='bourble-type' className={` text-slate-50 text-[12px] min-w-[60px] py-[2px] px-2 font-bold rounded-full    text-center  absolute bottom-1 left-1 decorator-${type}`}>{type}</span>

                <div id='detail-span' className={` ${isVisible} absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4  opacity-0 transition-all px-4 py-[1px] rounded-full  `}>
                    <span className={` text-white font-bold text-lg  `}>Detail</span>
                </div>
            </div>

            <div className='p-2 '>
                <h3 className='whitespace-nowrap overflow-hidden text-ellipsis block' fonts="text-sm ">{title}</h3>
            </div>

        </Link>
    )
}
