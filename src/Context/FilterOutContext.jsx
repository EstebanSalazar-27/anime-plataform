import { createContext, useState } from "react"


export const FilterOutContext = createContext()


export function FilterOutProvider({ children }) {
    const [filtersSelected, setFiltersSelected] = useState()

    return (
        <FilterOutContext.Provider value={{ filtersSelected, setFiltersSelected }}>
            {children}
        </FilterOutContext.Provider>
    )
}