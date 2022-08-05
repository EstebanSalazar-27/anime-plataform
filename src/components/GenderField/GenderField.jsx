import React, { useEffect, useRef, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetGenders } from '../../helpers/getAnimes'
import { CheckBoxFilter } from '../CheckboxFilter/CheckBoxFilter'
import "./genderField.scss"
export const GenderField = ({ handleCheckboxChange, genresFilteredOut }) => {
    const [genderList, setGenderList] = useState([])
    const [showGenres, setShowGenres] = useState(false)
    const { type } = useParams()
    const [querys] = useSearchParams()
    const queryType = querys.get("type") ? querys.get("type") : "anime" 
    const ref = useRef()
   

    const isGenresListVisible = showGenres === true ? "showModal" : ""
  

    // fetch for get all the gender and reset the local state of this component
    const fetchGenders = async () => {
        const res = await GetGenders({ type: queryType })
        setGenderList(res)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showGenres && ref.current && !ref.current.contains(e.target)) {
                setShowGenres(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showGenres])

    useEffect(() => {
        fetchGenders()
    }, [queryType])

    return (
        <div ref={ref} name="genres" id='genres' onChange={handleCheckboxChange} className=' min-w-[170px] cont-genres relative flex items-center justify-center cursor-pointer dark:bg-stone-800 bg-slate-200 select-none  rounded-sm h-8 px-2 '>
            <button type='button' className='absolute w-full h-full dark:text-slate-100 text-stone-700 font-semibold' onClick={() => setShowGenres(oldState => !oldState)}>Gender selected: {genresFilteredOut}</button>
            {/* Modal menu */}
            <div className={`menu-genres  ${isGenresListVisible} dark:bg-stone-800 bg-slate-200 before:dark:border-y-stone-800`}>
                {genderList?.data?.map((gender) => <CheckBoxFilter key={gender.mal_id} id={gender.mal_id} value={gender.mal_id} name="genres" label={gender.name} />)}
            </div>
        </div>
    )
}
