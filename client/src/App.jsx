import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FileUpload />
    </div>
  )
}

export default App
