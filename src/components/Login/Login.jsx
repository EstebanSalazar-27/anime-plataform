import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faColonSign, faLitecoinSign, faSign, faSignIn, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../Firebase/firebaseConfig"



export const Login = () => {
    const [authenticated, setAuthenticated] = useState(false)

 
    const authenticatedRender = authenticated
        ?
        <FontAwesomeIcon className='text-lg dark:text-slate-100 text-stone-800' color='white' icon={faSignIn} />
        :
        <FontAwesomeIcon className='text-lg dark:text-slate-100 text-stone-800' color='white' icon={faUserAlt} />
    return (
        <Link to='/anime-plataform/login' >
            {authenticatedRender}
        </Link>
    )
}
