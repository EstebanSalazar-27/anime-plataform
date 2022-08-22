
import { useContext } from "react"
// React Router  v6
import { Routes, Route } from "react-router-dom"
import './App.css'


/// Components
import { Navbar } from './components/Navbar/Navbar'
import { FilterOutProvider } from "./Context/FilterOutContext"
import { ThemeContext } from "./Context/ThemeContext"
import { Footer } from "./components/Footer/Footer"

// Layout Wrapper



/// Views
import { Home } from './pages/Home/Home'
import { SearchResult } from './pages/SearchResults/SearchResult'
import { Detail } from './pages/Detail'
import { RouteNoMatch } from "./pages/404NoMatch/RouteNoMatch"
import { FavoritesProvider } from "./Context/FavoritesContext"
import { Login } from "./pages/Login/Login"
import { env } from "process"

function App() {

  const { darkMode, handleDarkMode } = useContext(ThemeContext)
  const isDarkModeActived = darkMode ? "dark" : ""
  const bgApp = darkMode ? "bg-black/95 " : "bg-slate-100"

  console.log(import.meta.env)

  return (
    // FilterOutProvider contain inside itself all the filters selected from the user, i created this context  to handle the reset of filters in another components when an specific event accurs like a submit of forms  from the searchBar 
    <FilterOutProvider>
      <FavoritesProvider>
        <div className={`${isDarkModeActived} ${bgApp}   min-h-screen`}>

          <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
    
            {/* Routes  :) */}
            <Routes>
              <Route path='/anime-plataform/detail' element={<Detail />} />
              <Route path='*' element={<RouteNoMatch />} />
              <Route path='/anime-plataform/' element={<Home />} />

              <Route path='/anime-plataform/:type/detail/:id' element={<Detail />} />
              <Route path='/anime-plataform/search/' element={<SearchResult />} />
              <Route path="/anime-plataform/login" element={<Login />} />

            </Routes>
       
          <Footer />
        </div>
      </FavoritesProvider>
    </FilterOutProvider>

  )
}

export default App
