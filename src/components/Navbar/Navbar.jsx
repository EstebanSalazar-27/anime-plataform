import React from 'react'
import { Brand } from '../Brand/Brand'
import { SearchBar } from '../SearchBar/SearchBar'

export const Navbar = () => {
  return (
    <nav className='min-h-[12] p-2 px-12 bg-stone-900 shadow-lg flex-stats justify-between mb-20'>
      <div>
        <Brand />
      </div>

      <SearchBar />
    </nav>
  )
}
