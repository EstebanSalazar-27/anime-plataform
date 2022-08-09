import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./button.scss"
import React from 'react'

export const PlayButton = ({ isVisible }) => {
    console.log(isVisible)
    return (
        <button id='detail-span' className={` z-[200] ${isVisible} absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  p-1 transition-all px-4 py-[1px] rounded-full  `}>
            <FontAwesomeIcon className='text-slate-100 text-3xl' icon={faPlayCircle} />
        
        </button>
    )
}
