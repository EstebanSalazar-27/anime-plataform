import { useEffect } from "react";
import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
export const UserContext = createContext({})




export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    console.log(user)
    const addToFavorite = (id) => {
        console.log("favorite")
        navigate('anime-plataform/login', { state: 's' })
    }

    useEffect(() => {

    
      
    }, [])
    return (
        <UserContext.Provider value={{ addToFavorite, setUser }}>
            {children}
        </UserContext.Provider>
    )
} 