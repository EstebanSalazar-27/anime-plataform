import { createContext, useState } from "react";
import { Navigate } from "react-router-dom"
export const FavoritesContext = createContext({})




export function FavoritesProvider({ children }) {
    const [favoritesList, setFavoritesList] = useState([])
    const [isFavorite, setIsFavorite] = useState()

    const addToFavorite = (id) => {
        console.log("favorite")
        return <Navigate to="/login" />
      
    }
    return (
        <FavoritesContext.Provider value={{ favoritesList, addToFavorite, setFavoritesList, isFavorite, setIsFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
} 