import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHearth } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const AddToFavorite = () => {
    return (
        <button className='absolute w-full h-full  flex justify-center items-center'>
            <span className='rounded-full bg-rose-500  w-8 h-8 py-2 flex justify-center items-center px-2'>
                <FontAwesomeIcon className='text-lg text-white ' icon={solidHearth} />
            </span>

        </button>

    )
}
