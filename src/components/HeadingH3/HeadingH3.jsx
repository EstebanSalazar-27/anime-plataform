import React from 'react'

export const HeadingH3 = ({ children, ...props }) => {

    return (
        <h3 className={`${props.fonts} dark:text-slate-100 text-stone-800`}>{children}</h3>
    )
}
