import React, { useEffect, useState } from 'react'
import { Wrapper } from '../../layout/Wrapper'
import { auth, userExist } from '../../Firebase/firebaseConfig'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
export const Login = () => {
  const [currentUser, setCurrentUser] = useState(null)
  /*
  State
  0: Inicializando
  1: Loading
  2: Login has been completed 
  3: login but not registered
  4: no logged 
  */
  const [state, setCurrentState] = useState(0)
  const registerWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider()
    await signWithGoogle(googleProvider)


  }
  const signWithGoogle = async (googleProvider) => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      console.log(res)
    } catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    setCurrentState(1)
    onAuthStateChanged(auth, handleUserStateChanged)
  }, []);

  const handleUserStateChanged = async (user) => {
    if (user) {
      const isRegistered = await userExist(user.uid)
      if (isRegistered) {
        setCurrentState(2)
      } else { setCurrentState(3) }
      setCurrentState(3)
      console.log(user.displayName, 'hola')
    }
    else {
      setCurrentState(4)
      console.log('no user ')
    }
  }
  const loading = state === 1 && <h2 className='text-stone-800 font-bold'>Loading</h2>
  const userLoggedAndRegistered = state === 2 && <h2 className='text-stone-800 font-bold'>Registrado</h2>
  const userLoggedButNoRegister = state === 3 && <h2 className='text-stone-800 font-bold'>Estas autenticado pero no registrado</h2>
  const userNoLogged = state === 4 && <h2 className='text-stone-800 font-bold'>No estas logueado</h2>

  return (
    <Wrapper>
      <div className='pt-40 w-full h-screen flex justify-center'>
      <img src=""  alt="" />
        <div className='p-4'>
          {loading}
          {userLoggedAndRegistered}
          {userLoggedButNoRegister}
          {userNoLogged}


          <button onClick={registerWithGoogle} className='bg-sky-500 p-2 rounded-sm hover:bg-sky-600  text-lg text-slate-50 font-bold'>Register With Google</button>


        </div>

      </div>
    </Wrapper>

  )
}
