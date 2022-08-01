import React from 'react'

export const CheckBoxFilter = ({ value, name, id, label }) => {
    return (
        <div className='w-max min-w-[60px] flex gap-[2px] items-center'>
            <input type="checkbox" className='' value={value} name={name} id={id} />
            <label className='text-stone-600 text-[12px] capitalize font-medium' for={id}>
                {label}

            </label>
        </div>
    )
}
