import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { OptionFilteredout, SelectedFilterField } from '../SelectedFilterField/SelectedFilterField'
import { CheckBoxFilter } from '../CheckboxFilter/CheckBoxFilter'
import { GenderField } from '../GenderField/GenderField'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export const FilterBar = ({ SetfilterOut, currentPage, setCurrentPage }) => {
  // Form Data 
  const [formData, setFormData] = useState({
    typeOf: "",
    genres: [],
    status: "",
    order: ""
  })
  const navigate = useNavigate()
  const location = useLocation()
  const [querys] = useSearchParams()
  const queryType = querys.get("type") ? querys.get("type") : "anime"

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  const handleCheckboxChange = (e) => {
    let newArray = [...formData.genres, e.target.value]
    if (formData.genres.includes(e.target.value)) {
      newArray = newArray.filter(genre => genre !== e.target.value);
    }
    setFormData({
      ...formData,
      [e.target.name]: newArray
    });
  }
  // Submit Form And reset context state
  const handleSubmit = (e) => {
    e.preventDefault()
    SetfilterOut({
      // typeOf "tv" , "movie" , " ova", "ona", "special"
      typeOf: formData.typeOf,
      // genders  '1 - 100'
      gender: formData.genres,
      // status "upcoming" , "complete", "airing"
      status: formData.status,
      // order_by popularity , favorites, id , name, type etc
      order: formData.order,

    })
    if (currentPage > 1) {
      setCurrentPage(1)
    }
    navigate(`?type=${queryType}&typeOf=${formData.typeOf}&genres=${formData.genres}&status=${formData.status}&order_by=${formData.order}`)



  }


  return (
    <form className='w-full h-12 flex-stats gap-2 flex-wrap pb-20' onSubmit={handleSubmit}>

      <SelectedFilterField  name="typeOf"  handleChange={handleChange}>
        <OptionFilteredout name="All" selected value="ALL">All</OptionFilteredout>
        <OptionFilteredout name="typeOf" value="TV">TV</OptionFilteredout>
        <OptionFilteredout name="typeOf" value="Movie">Movie</OptionFilteredout>
        <OptionFilteredout name="typeOf" value="Special">Special</OptionFilteredout>
        <OptionFilteredout name="typeOf" value="Ova">Ova</OptionFilteredout>
        <OptionFilteredout name="typeOf" value="ONA">Ona</OptionFilteredout>
      </SelectedFilterField>
      <GenderField genresFilteredOut={formData.genres.length} handleCheckboxChange={handleCheckboxChange} />

      <SelectedFilterField name="status" handleChange={handleChange}>
        <OptionFilteredout name="all" selected value="all" >Estado: All</OptionFilteredout>
        <OptionFilteredout name="airing" value="airing">Estado: Airing</OptionFilteredout>
        <OptionFilteredout name="complete" value="complete">Estado: Complete</OptionFilteredout>
        <OptionFilteredout name="upcoming" value="upcoming">Estado: Upcoming</OptionFilteredout>
      </SelectedFilterField>

      <SelectedFilterField name="order" handleChange={handleChange}>
        <OptionFilteredout name="default" selected value="default" >Order by: Default</OptionFilteredout>
        <OptionFilteredout name="popularity" value="popularity" >Order by: Popularity</OptionFilteredout>
        <OptionFilteredout name="title" value="title" >Order by: Title</OptionFilteredout>
        <OptionFilteredout name="type" value="type">Order by: Type </OptionFilteredout>
        <OptionFilteredout name="rating" value="rating">Order by: Rating</OptionFilteredout>
        <OptionFilteredout name="start_date" value="start_date">Order by: Start-date</OptionFilteredout>
        <OptionFilteredout name="end_date" value="end_date">Order by: End-date</OptionFilteredout>
        <OptionFilteredout name="favorites" value="favorites">Order by: Favorites</OptionFilteredout>
      </SelectedFilterField>

      <button type='submit' className=' select-none  h-8 max-h-8 px-2 text-slate-50 font-bold bg-blue-500 text-md rounded-sm flex justify-center items-center gap-2'><FontAwesomeIcon color='white' icon={faFilter} />Filtrar</button>
    </form>
  )
}
