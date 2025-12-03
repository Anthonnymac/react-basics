import React from "react"
import { Herosection } from "./components/herosection.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Footer } from "./footer.jsx"
import {Form} from "./components/Form.jsx"


function App() { 
  return(
    <>
    <Navbar/>
    <Herosection time={"12:00"} date={"26 november"} year={"2025"}/>
    <Form/>
    <Footer copyright={"othermanconcept"} ownerright={"Mac-Anthony"}/>
    </>                                    
  )
} 

export default App