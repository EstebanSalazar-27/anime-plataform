import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetGenders } from '../../helpers/getAnimes'
import { CheckBoxFilter } from '../CheckboxFilter/CheckBoxFilter'
import "./genderField.scss"
export const GenderField = ({ handleCheckboxChange, genresFilteredOut }) => {
    const [genderList, setGenderList] = useState([])
    const [showGenres, setShowGenres] = useState(false)
    const { type } = useParams()
    const ref = useRef()

    const isGenresListVisible = showGenres === true ? "showModal" : ""
    const handleShowGenres = () => {
        setShowGenres(!showGenres)
    }

    // fetch for get all the gender and reset the local state of this component
    const fetchGenders = async () => {
        const res = await GetGenders({ type: type })
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
    }, [type])

    return (
        <div  ref={ref} name="genres" id='genres' onChange={handleCheckboxChange} className=' min-w-[170px] cont-genres relative flex items-center justify-center cursor-pointer bg-stone-800/90 select-none  rounded-sm h-8 px-2 '>
            <button type='button' className='absolute w-full h-full text-slate-100 font-semibold' onClick={() => setShowGenres(oldState => !oldState)}>Gender selected: {genresFilteredOut}</button>
            {/* Modal menu */}
            <div  className={`menu-genres  ${isGenresListVisible}`}>
                {genderList?.data?.map((gender) => <CheckBoxFilter key={gender.mal_id} id={gender.mal_id} value={gender.mal_id} name="genres" label={gender.name} />)}
            </div>
        </div>
    )
}
