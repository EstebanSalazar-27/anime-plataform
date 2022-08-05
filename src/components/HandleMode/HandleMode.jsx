import React, { useContext } from 'react'
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const HandleMode = ({ handleDarkMode, darkMode }) => {

    const ICON_IsModeDarkActived = darkMode ?  faMoon : faSun
    return (
        <button onClick={handleDarkMode} ><FontAwesomeIcon className='text-lg dark:text-slate-100 text-stone-800' icon={ICON_IsModeDarkActived} /></button>
    )
}
