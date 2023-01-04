import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload'
import EditEvents from './components/EditEvents/EditEvents'
import { Box } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<FileUpload/>} />
          <Route path='/edit' element={ <EditEvents /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
