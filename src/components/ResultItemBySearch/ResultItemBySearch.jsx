import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { HeadingH3 } from '../HeadingH3/HeadingH3'
import "./resultItem.css"
export const ResultItemBySearch = ({ title, type, images, id }) => {
    const params = useParams()

    return (
        <Link to={`/${params.type}/detail/${id}`} className='relative flex flex-col w-[185px] gap-2 justify-center items-center mb-2 shadow-lg'>
            <div id="card-image" className='relative bg-slate-100/95 p-1.5 rounded-sm'>
                <img src={images.large_image_url} className=" w-full h-full min-h-[250px] min-w-[150px] bg-slate-600  max-h-[250px] block object-cover " alt={title} />
                <span id='bourble-type' className={`text-slate-50 text-[12px] min-w-[70px] py-[2px] px-2 font-bold rounded-full    text-center  absolute left-2 bottom-2 decorator-${type}`}>{type}</span>
            </div>

            <div>
                <HeadingH3 fonts="whitespace-nowrap overflow-hidden text-ellipsis  text-center  w-[160px]">{title}</HeadingH3>
            </div>

        </Link>
    )
}
