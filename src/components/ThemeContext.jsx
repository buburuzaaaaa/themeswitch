import { createContext,useState } from 'react'
import React from 'react'
import Header1 from './Header1'
import Footer from './Footer'
import Main from './Main'




const Them = createContext();
const ThemeContext = () => {
  const [themo,setThemo] = useState("light");
  const handleThemo = () => {
    if(themo==="light"){
        setThemo("dark")
    }else{
        setThemo("light")
    }
}
  return (
    <Them.Provider value={{handleThemo, themo}}>
        <Header1></Header1>
        <Main></Main>
        <Footer></Footer>
    </Them.Provider>
  )
}

export {ThemeContext, Them}