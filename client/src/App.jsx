import "./App.css";
import FileUpload from "./components/FileUpload";
import EditEvents from "./components/EditEvents/EditEvents";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FileUpload />} />
            <Route path="/edit" element={<EditEvents />} />
        </Routes>
    );
}

export default App;
