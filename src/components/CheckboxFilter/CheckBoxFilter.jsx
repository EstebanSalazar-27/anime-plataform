import React from 'react'

export const CheckBoxFilter = ({ value, name, id, label }) => {
    return (
        <div className='w-max min-w-[60px] flex gap-[2px] items-center'>
            <input type="checkbox" className='' value={value} name={name} id={id} />
            <label className='dark:text-stone-200 text-[12px] capitalize font-medium w-full ' htmlFor={id}>
                {label}

            </label>

        </div>
    )
}
