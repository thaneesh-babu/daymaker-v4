import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload'
import { Box } from "@chakra-ui/react"

function App() {

  return (
    <div className="App">
      <Box fontSize={"lg"} color={"red"}>Chakra test</Box>
      <FileUpload />
    </div>
  )
}

export default App
