import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext({ darkMode: true })
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", darkMode)
  }

  useEffect(() => {
    const themePreferencesUser = JSON.parse(localStorage.getItem("theme"))
    if (themePreferencesUser) {
      setDarkMode(themePreferencesUser === "true" ? true : false)
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}