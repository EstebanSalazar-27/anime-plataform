import React from 'react'
import { Link } from "react-router-dom"
import { HeadingH3 } from '../HeadingH3/HeadingH3'

export const AnimeCard = ({ aired, background, duration, episodes, images, score, season, status, title, id, trailer }) => {
    return (
        <Link to={`detail/${id}`} className='flex  flex-col w-40  min-w-[10rem]  min-h-[200px] max-h-[300px]  bg-stone-900  flex-shrink-0 '>

            <div><img className='   transition-all h-ful w-full hover:scale-105 min-w-full bg-gray-700   object-cover max-h-60' src={images.jpg.image_url} /></div>

            <div className='p-2 '>
                <h3 className='whitespace-nowrap overflow-hidden text-ellipsis block' fonts="text-sm ">{title}</h3>
            </div>



        </Link>
    )
}
