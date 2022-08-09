import React from 'react'

export const Wrapper = ({ children, width = "w-4/5" }) => {
    return (
        <div className={`  ${width} mx-auto min-h-[30vh]`}>
            {children}
        </div>
    )
}
