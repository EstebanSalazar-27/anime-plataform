import React from 'react'

export const Wrapper = ({ children }) => {
    return (
        <div className=' w-4/5 mx-auto min-h-[30vh]'>
            {children}
        </div>
    )
}
