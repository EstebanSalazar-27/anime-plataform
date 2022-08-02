import React, { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilterOutContext } from '../../Context/FilterOutContext'
import { useDebounce } from '../../hooks/useDebouce'
import { OptionFilteredout, SelectedFilterField } from '../SelectedFilterField/SelectedFilterField'

const initialValue = {
    keyword: "",
    filterdOutType: "anime",
}
export const SearchBar = () => {
    const [formData, setFormData] = useState(initialValue)
    const { filtersSelected, setFiltersSelected } = useContext(FilterOutContext)
    const navigate = useNavigate()


    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
   

    // Function for navigate to detail view with items correponding  to the written keyword  
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${formData.filterdOutType}?q=${formData.keyword}`)
        // Here we reset the filtered list of results to have be able to render only the items that make match with our search 
        if (filtersSelected) {
            setFiltersSelected()
        }

    }


    return (
        <form className=' flex gap-2' onSubmit={handleSubmit}>

            <select className='bg-transparent text-slate-50' name="filterdOutType" id="filterdOutType " onChange={handleChange}>
                <option className="text-stone-900" selected value="anime">Anime</option>
                <option className="text-stone-900" value="manga">Manga</option>
            </select>
            <input
                name='keyword'
                value={formData.keyword}
                required
                className='min-w-[300px]  h-10 pl-4 pr-3 rounded-full bg-white/10 text-slate-50  placeholder-slate-50 outline-none'
                onChange={handleChange}
                type="search"
                placeholder='Search anime , example: naruto' />
        </form>
    )
}
