import React from 'react'

export const OptionFilteredout = ({ value, children }) => {

  return (
    <option className='text-stone-800' value={value}>{children}</option>

  )
}
export const SelectedFilterField = ({ children, handleChange }) => {
  return (
    <select className='bg-black/20 rounded-sm h-8 px-2  max-h-8 flex-stats text-slate-50  font-sans font-medium' onChange={handleChange} name="type" id="type">
      {children}
    </select>
  )
}
