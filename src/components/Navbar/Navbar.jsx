import React from 'react'
import { NavLink } from 'react-router-dom'
import { Brand } from '../Brand/Brand'
import { SearchBar } from '../SearchBar/SearchBar'


// In every single view you will  need to add a padding top 40 because the navbar is fixed and it is out of the  natural flow   of html
export const Navbar = () => {
  return (
    <nav className='min-h-[12]  dark:bg-white  fixed left-0 right-0  p-2 px-12 z-10 bg-stone-900 shadow-lg flex-stats justify-between '>
      <div className='flex items-center gap-6' >
        <Brand />
        <NavLink className="text-slate-50 font-medium text-md " to="/anime">Anime</NavLink>
        <NavLink className="text-slate-50 font-medium text-md " to="/manga">Manga</NavLink>
      </div>
    

      <SearchBar />

      <button className='hidden sm:block text-slate-50'>Search</button>
    </nav>
  )
}
