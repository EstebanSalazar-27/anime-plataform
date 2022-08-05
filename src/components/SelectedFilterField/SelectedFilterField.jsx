import React from 'react'

export const OptionFilteredout = ({ isSelected, name, value, children }) => {

  return (
    <option className='dark:text-slate-200 text-stone-800 select-none' selected={isSelected} name={name} value={value}>{children}</option>

  )
}
export const SelectedFilterField = ({ name, id, children, handleChange }) => {
  return (
    <select className=' dark:bg-stone-800/90 bg-slate-200 shadow-sm rounded-sm h-8 px-2  max-h-8 flex-stats dark:text-slate-100 text-stone-700  font-sans font-medium select-none focus:bg-slate-100 ' onChange={handleChange} name={name} id={id}>
      {children}
    </select>
  )
}
