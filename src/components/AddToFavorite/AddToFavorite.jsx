import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHearth } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export const AddToFavorite = () => {
    const { addToFavorite } = useContext(UserContext)
    console.log(addToFavorite)
    return (
        <button onClick={addToFavorite} className='absolute w-full h-full     flex justify-center items-center'>
            <span className='rounded-full bg-rose-500  text-slate-100  w-8 h-8 py-2 flex justify-center items-center px-2'>
                <FontAwesomeIcon className='text-lg   ' icon={solidHearth} />
            </span>

        </button>

    )
}
