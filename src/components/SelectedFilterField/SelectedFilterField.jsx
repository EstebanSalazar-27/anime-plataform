import React from 'react'

export const OptionFilteredout = ({ isSelected, name, value, children }) => {

  return (
    <option className='text-stone-700 select-none' selected={isSelected} name={name} value={value}>{children}</option>

  )
}
export const SelectedFilterField = ({ name, id, children, handleChange }) => {
  return (
    <select className=' bg-stone-800/90 rounded-sm h-8 px-2  max-h-8 flex-stats text-slate-50  font-sans font-medium select-none focus:bg-slate-100 focus:text-stone-700' onChange={handleChange} name={name} id={id}>
      {children}
    </select>
  )
}
