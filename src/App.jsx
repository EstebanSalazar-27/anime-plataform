
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
import { Wrapper } from './layout/Wrapper'


/// Views
import { Home } from './pages/Home/Home'
import { SearchResult } from './pages/SearchResults/SearchResult'
import { Detail } from './pages/Detail'
import { RouteNoMatch } from "./pages/404NoMatch/RouteNoMatch"
import { FavoritesProvider } from "./Context/FavoritesContext"
import { Login } from "./components/Login/Login"

function App() {

  const { darkMode, handleDarkMode } = useContext(ThemeContext)
  const isDarkModeActived = darkMode ? "dark" : ""
  const bgApp = darkMode ? "bg-black/95" : "bg-slate-100"



  return (
    // FilterOutProvider contain inside itself all the filters selected from the user, i created this context  to handle the reset of filters in another components when an specific event accurs like a submit of forms  from the searchBar 
    <FilterOutProvider>
      <FavoritesProvider>
        <div className={`${isDarkModeActived} ${bgApp}   min-h-screen`}>
          
          <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
          <Wrapper>
            {/* Routes  :) */}
            <Routes>
              <Route path='*' element={<RouteNoMatch />} />
              <Route path='/' element={<Home />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/:type/detail/:id' element={<Detail />} />
              <Route path='/search/' element={<SearchResult />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </Wrapper>
          <Footer />
        </div>
      </FavoritesProvider>
    </FilterOutProvider>

  )
}

export default App
