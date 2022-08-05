
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

function App() {

  const { darkMode, handleDarkMode } = useContext(ThemeContext)
  const isDarkModeActived = darkMode ? "dark" : ""
  const bgApp = darkMode ? "bg-black/95" : "bg-slate-100"



  return (
    // FilterOutProvider contain inside itself all the filters selected from the user, i created this context  to handle the reset of filters in another components when an specific event accurs like a submit of forms  from the searchBar 
    <FilterOutProvider>
      <div className={`${isDarkModeActived} ${bgApp}   min-h-screen`}>

        <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
        <Wrapper>
          {/* Routes  :) */}
          <Routes>
            <Route path='*' element={<h2 className="text-3xl">Error 404</h2>} />
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/:type/detail/:id' element={<Detail />} />
            <Route path='/search/' element={<SearchResult />} />

          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </FilterOutProvider>

  )
}

export default App
