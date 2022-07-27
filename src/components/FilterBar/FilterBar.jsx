import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { OptionFilteredout, SelectedFilterField } from '../SelectedFilterField/SelectedFilterField'
import { CheckBoxFilter } from '../CheckboxFilter/CheckBoxFilter'
import { GenderField } from '../GenderField/GenderField'

export const FilterBar = ({ SetfilterOut }) => {

  const [formData, setFormData] = useState({
    type: "",
    genres: [],
  })

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  const handleCheckboxChange = (e) => {
    let newArray = [...formData.genres, e.target.value];
    if (formData.genres.includes(e.target.value)) {
      newArray = newArray.filter(genre => genre !== e.target.value);
    }
    setFormData({
      ...formData,
      [e.target.name]: newArray
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    SetfilterOut({
      type: formData.type,
      gender: formData.genres
    })
  }


  return (
    <form className='w-full h-12 flex-stats gap-2' onSubmit={handleSubmit}>

      <SelectedFilterField handleChange={handleChange}>
        <OptionFilteredout value="all">Type</OptionFilteredout>
        <OptionFilteredout value="TV">TV</OptionFilteredout>
        <OptionFilteredout value="Movie">Movie</OptionFilteredout>
        <OptionFilteredout value="Special">Special</OptionFilteredout>
        <OptionFilteredout value="Ova">Ova</OptionFilteredout>
        <OptionFilteredout value="ONA">Ona</OptionFilteredout>
      </SelectedFilterField>
      <GenderField genresFilteredOut={formData.genres.length} handleCheckboxChange={handleCheckboxChange} />


      <button type='submit' className='  h-8 max-h-8 px-2 text-slate-50 font-bold bg-blue-500 text-sm rounded-sm flex justify-center items-center gap-2'><FontAwesomeIcon className='' color='white' icon={faFilter} />Filtrar</button>
    </form>
  )
}
