import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialValue = {
    keyword: "",
    filterdOutType: "anime",
}
export const SearchBar = () => {
    const [formData, setFormData] = useState(initialValue)
    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${formData.keyword}/${formData.filterdOutType}`)
        document.title = `Search ${formData.keyword}`

    }
    console.log(formData.filterdOutType)
    return (
        <form className='sm:hidden flex gap-2' onSubmit={handleSubmit}>
            <select className='bg-transparent text-slate-50' name="filterdOutType" id="filterdOutType " onChange={handleChange}>
                <option className="text-stone-900" selected value="anime">Anime</option>
                <option className="text-stone-900" value="manga">Manga</option>
            </select>
            <input name='keyword' value={formData.keyword}  required className='min-w-[300px]  h-10 pl-4 pr-3 rounded-full bg-white/10 text-slate-50  placeholder-slate-50 outline-none' onChange={handleChange} type="search"  placeholder='Search anime , example: naruto' />
        </form>
    )
}
