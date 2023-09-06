import React from 'react'
import { Route, Routes } from "react-router-dom"
import EmailSent from '../Components/EmailSent'
import Home from '../Pages/Home'

function Public(){

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/email-sent' element={<EmailSent />} />
        </Routes>
    )

}

export default Public