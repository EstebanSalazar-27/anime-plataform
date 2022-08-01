import React from 'react'
import { Link } from "react-router-dom"
import { HeadingH3 } from '../HeadingH3/HeadingH3'
export const TopItem = ({ title, url, episodes, id, status, score, type }) => {

    const episodesRender = episodes ? episodes.map((ep, idx) => {

        return (
            <div key={title + idx} className={`text-center font-sans text-[12px] rounded-md text-orange-300  font-semibold`}>{ep.title}</div>
        )


    })
        : null;

    return (
        <Link to={`detail/${id}`} target="_blank" className=' flex  items-center justify-between w-full gap-3 ' aria-label='as'>
            <h2 className='whitespace-nowrap text-ellipsis hover:text-orange-300 transition-colors overflow-hidden'>{title}</h2>
            <div className={` bg-blue-500 min-w-[60px] text-center px-3 font-sans text-sm  font-semibold rounded-md text-blue-50 decorator-${type}`}>{type}</div>

            {episodesRender}


        </Link>
    )
}
