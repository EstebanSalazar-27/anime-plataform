import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as RegularHeart, faPlayCircle, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"

import "./animeCard.scss"
import { FavoritesContext } from '../../Context/FavoritesContext'
// handles visibility

export const AnimeCard = ({ aired, background, type, duration, episodes, images, score, season, status, title, id, trailer }) => {
    const [detailBtnIsVisible, setDetailBtnIsVisible] = useState(false)
    const isVisible = detailBtnIsVisible === true ? " isVisible" : "isHidden"

    // Params
    const [querys] = useSearchParams()
    const queryType = querys.get("type") ? querys.get("type") : "anime"
    // Take type params to do search 

    // Favorites Context 
    const { addToFavorite } = useContext(FavoritesContext)

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
            to={`/detail?id=${id}&type=${queryType}`}
            className={` flex select-none flex-col w-40    hover:shadow-2xl  transition-all min-w-[10rem]  min-h-[200px] max-h-[300px]  md:basis-full  dark:bg-stone-900 bg-slate-200  flex-shrink-0 rounded-sm `}>

            <div id='card-image' className='relative min-h-[200px]'>
                <img className=' transition-all  w-full min-w-full min-h-full h-60 dark:bg-gray-700  bg-slate-300  object-cover ' src={images.jpg.image_url} />
                <span id='bourble-type' className={` text-slate-50 text-[12px] min-w-[60px] py-[2px] px-2 font-bold rounded-full    text-center  absolute bottom-1 left-1 decorator-${type}`}>{type}</span>

                <button id='detail-span' onClick={addToFavorite} className={` z-[200] ${isVisible} absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  p-1 transition-all px-4 py-[1px] rounded-full  `}>
                    <FontAwesomeIcon className='text-pink-500 text-2xl   overflow-hidden ' icon={faPlayCircle} />
                </button>
            </div>

            <div className='p-2 '>
                <h3 className='whitespace-nowrap overflow-hidden text-ellipsis block dark:text-slate-100 text-stone-800 font-semibold' fonts="text-sm ">{title}</h3>
            </div>

        </Link>
    )
}
