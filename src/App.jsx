import React from "react"
import { Herosection } from "./components/herosection.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Footer } from "./footer.jsx"


function App() { 
  return(
    <>
    <Navbar/>
    <Herosection time={"12:00"} date={"26 november"} year={"2025"}/>
    <Footer copyright={"othermanconcept"} ownerright={"Mac-Anthony"}/>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </>                                    
  )
} 

export default App