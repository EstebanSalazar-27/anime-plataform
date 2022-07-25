import React from 'react'

export const HeadingH3 = ({ children, ...props }) => {

    return (
        <h3 className={`${props.fonts}`}>{children}</h3>
    )
}
