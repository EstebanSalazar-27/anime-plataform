import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'


import { Brand } from '../Brand/Brand'
import { HandleMode } from '../HandleMode/HandleMode'
import { Login } from '../Login/Login'
import { SearchBar } from '../SearchBar/SearchBar'


// In every single view you will  need to add a padding top 40 because the navbar is fixed and it is out of the  natural flow   of html
export const Navbar = ({ handleDarkMode, darkMode }) => {

  return (
    <nav className='min-h-[12] bg-slate-200  fixed left-0 right-0  p-2 px-12 z-10 dark:bg-stone-900 transition-colors shadow-sm flex-stats justify-between '>
      <div className='flex items-center gap-6' >
        <Brand />
        <NavLink className="dark:text-slate-50 text-stone-800  font-medium text-md " to="/anime-plataform?type=anime">Anime</NavLink>
        <NavLink className="dark:text-slate-50 text-stone-800 font-medium text-md " to="/anime-plataform?type=manga">Manga</NavLink>
      </div>

      <div className='flex items-center gap-4'>
        <SearchBar />
        <HandleMode darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Login />
      </div>

      <button className='hidden sm:block text-slate-50'>Search</button>
    </nav>
  )
}
