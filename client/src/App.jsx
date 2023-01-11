import "./App.css";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import EditEventsPage from "./pages/EditEventsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/edit" element={<EditEventsPage />} />
        </Routes>
    );
}

export default App;
