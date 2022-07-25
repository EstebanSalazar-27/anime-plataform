import React from 'react'
import { Link } from "react-router-dom"
import { HeadingH3 } from '../HeadingH3/HeadingH3'

export const AnimeCard = ({ aired, background, duration, episodes, images, score, season, status, title, trailer }) => {

    return (
        <Link to='#' className='flex flex-col w-40  min-w-[10rem]  min-h-[200px]  max-w-lg  bg-stone-900  flex-shrink-0 '>

            <div><img className='  w-full h-full bg-cover min-w-full  object-cover max-h-60' src={images.jpg.image_url} /></div>

            <div className='p-2 '>
                <h3 className='whitespace-nowrap overflow-hidden text-ellipsis block' fonts="text-sm ">{title}</h3>
            </div>



        </Link>
    )
}
