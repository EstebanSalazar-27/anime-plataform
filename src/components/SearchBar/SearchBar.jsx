import React from 'react'

export const SearchBar = () => {
    return (
        <form className='sm:hidden'>
            <input className='min-w-[300px]  h-10 pl-4 pr-3 rounded-full bg-white/10 text-slate-50  placeholder-slate-50 outline-none' type="search"  placeholder='Search anime, example: naruto' />
        </form>
    )
}
