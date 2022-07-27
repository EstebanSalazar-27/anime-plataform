import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetGenders } from '../../helpers/getAnimes'
import { CheckBoxFilter } from '../CheckboxFilter/CheckBoxFilter'
import "./genderField.scss"
export const GenderField = ({ handleCheckboxChange, genresFilteredOut }) => {
    const [genderList, setGenderList] = useState([])
    const [showGenres, setShowGenres] = useState(false)
    const { type } = useParams()


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
        fetchGenders()
    }, [type])

    return (
        <div name="genres" id='genres' onChange={handleCheckboxChange} className='cont-genres relative flex items-center justify-center cursor-pointer bg-black/20 rounded-sm h-8 px-2 '>
            <button className='w-full h-full text-slate-50' onClick={handleShowGenres}>Gender Selected {genresFilteredOut}</button>

            {/* Modal menu */}
            <div className={`menu-genres  ${isGenresListVisible}  `}>
                {
                    genderList
                        ?
                        genderList?.data?.map((gender) => <CheckBoxFilter key={gender.mal_id} id={gender.mal_id} value={gender.mal_id} name="genres" label={gender.name} />)
                        :
                        <h2>Filtring</h2>
                }



            </div>
        </div>
    )
}
