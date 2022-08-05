import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { HeadingH3 } from '../HeadingH3/HeadingH3'
import "./resultItem.css"
export const ResultItemBySearch = ({ title, type, images, id }) => {

    const [querys] = useSearchParams()
    const queryType = querys.get("type") ? querys.get("type") : "anime"
 

    return (
        <Link to={`/${queryType}/detail/${id}`} className='relative select-none flex flex-col w-[185px] bg-slate-300 dark:bg-stone-800 sm:w-full gap-2 rounded-sm justify-center items-center mb-2 shadow-lg'>
            <div id="card-image" className='relative  w-full bg-slate-200 dark:bg-stone-700 p-1.5 rounded-sm'>
                <img src={images.large_image_url} className=" w-full h-full  min-h-[250px] min-w-[150px] bg-slate-600  max-h-[250px] block bg-center bg-no-repeat bg-cover" alt={title} />
                <span id='bourble-type' className={`text-slate-50 text-[12px] min-w-[70px] py-[2px] px-2 font-bold rounded-full text-center absolute left-2 bottom-2 decorator-${type}`}>{type}</span>
            </div>

            <div>
                <HeadingH3 fonts="whitespace-nowrap overflow-hidden text-ellipsis  flex flex-col justify-center pb-2  w-[160px]">{title}</HeadingH3>
            </div>

        </Link>
    )
}
