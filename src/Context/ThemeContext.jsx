import React, { useState } from 'react'
export const ThemeContext = React.createContext()

function ThemeProvider({children}){

    const [munichTheme, setMunichTheme] = useState(localStorage.getItem('uranus' || false))

    const handleMunichTheme = () => {
        setMunichTheme(true);
        localStorage.setItem('uranus', true)
    }

    const handleBairesTheme = () => {
        setMunichTheme(false);
        localStorage.removeItem('uranus')
    }

    return(
        <ThemeContext.Provider value={{munichTheme, handleMunichTheme, handleBairesTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}

export default ThemeProvider