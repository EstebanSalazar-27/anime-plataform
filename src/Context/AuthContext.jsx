import { createContext, useEffect, useState } from "react";
import App from "../App";


export const AuthContext = createContext({})

export function AuthProvider ({children}){
    const [user, setUser] = useState(null)

    useEffect(() => {
    App.au
    }, []);
    return(
        {children}
    )
}