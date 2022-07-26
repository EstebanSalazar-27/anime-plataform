import React from 'react'

export const SpanDecorator = ({ children, props }) => {
    return (
        <span className={`${props}`}>
            {children}
        </span>
    )
}
