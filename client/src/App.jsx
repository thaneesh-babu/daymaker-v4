import FileUpload from './components/FileUpload'
import './App.css'
import { useRef } from 'react'

function App() {
  const fileRef = useRef()
  const AlertHandler = () => {
    alert(fileRef.current.files[0].type)
  }
  return (
    <div className="App">
      <FileUpload formInputRef={fileRef} formInputChangeHandler={AlertHandler} />
    </div>
  )
}

export default App
