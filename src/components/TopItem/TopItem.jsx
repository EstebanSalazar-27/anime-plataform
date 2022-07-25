import React from 'react'
import { Link } from "react-router-dom"
import { HeadingH3 } from '../HeadingH3/HeadingH3'
export const TopItem = ({ title, url, episodes, status, score, type }) => {
    console.log(title, "title")
    return (
        <a href={url} target="_blank" className=' flex  items-center justify-between w-full gap-3 ' aria-label='as'>
            <h2 className='whitespace-nowrap text-ellipsis overflow-hidden'>{title}</h2>
            <div className='bg-blue-500 px-3 font-sans text-sm flex-stats-col rounded-md text-blue-50'>Anime</div>
        </a>
    )
}
