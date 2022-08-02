
import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'
import { Footer } from "./components/Footer/Footer"

/// Components
import { Navbar } from './components/Navbar/Navbar'
import { FilterOutProvider } from "./Context/FilterOutContext"
import { Wrapper } from './layout/Wrapper'
import { Detail } from './pages/Detail'


/// Views
import { Home } from './pages/Home/Home'
import { SearchResult } from './pages/SearchResults/SearchResult'
function useQuerys() {
  return new URLSearchParams(useLocation().search)
}

function App() {


  return (
    <FilterOutProvider>

      <div className=" min-h-screen h-full w-full bg-black/90">
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:type' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/:type/detail/:id' element={<Detail />} />
            <Route path='/search/:type' element={<SearchResult />} />

          </Routes>
        </Wrapper>

        <Footer />
      </div>
    </FilterOutProvider>

  )
}

export default App
