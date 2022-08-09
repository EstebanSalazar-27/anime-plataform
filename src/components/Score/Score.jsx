import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./score.scss"

export const Score = ({ score, scoreBy }) => {
    let starsArray = []

    for (let i = 0; i < score / 2; i++) {
        starsArray.push(<FontAwesomeIcon key={i} className="score-bg  " icon={faStar} />)
    }
    return (
        <div className='dark:text-slate-100 text-stone-700 pt-1 text-[12px] flex flex-col justify-center items-center'>
            <span>
                {starsArray}
            </span>
            <span>
                {scoreBy} Votes
            </span>

        </div>
    )
}
