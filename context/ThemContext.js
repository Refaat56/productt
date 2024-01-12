"use client"

const { createContext, Children, useState } = require("react")

export const ThemeContext =createContext()
export const ThemeProvider =({Children})=>{
    const [mode,setMode]=useState('dark')
    const toggle=()=>{
        setMode(prev =>(prev==="dark"?"light":"dark"))
    }
    return (<ThemeContext.Provider value={{toggle,mode}}>
        <div className={`them ${mode}`}>
            {Children}
        </div>
    </ThemeContext.Provider>)
}
