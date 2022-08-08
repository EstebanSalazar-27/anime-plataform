import { faFaceAngry, faFaceFlushed, faFaceMeh, faFaceSadCry, faFaceTired } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SpanDecorator } from '../../components/SpanDecorator/SpanDecorator'

export const RouteNoMatch = () => {
  return (
    <div className='text-center flex-col pt-60'>
      <FontAwesomeIcon className='dark:text-slate-200 text-stone-800 text-6xl font-bold' icon={faFaceMeh} />
      <h2 className="  text-6xl dark:text-slate-200 text-stone-800 font-bold "> <SpanDecorator props="text-orange-400" >Error 404</SpanDecorator> <br /> There isn't match found </h2>

    </div>
  )
}
