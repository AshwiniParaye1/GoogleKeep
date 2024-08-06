import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Menubar from "./components/Menubar.jsx";
import Navbar from "./components/Navbar.jsx";
import Notes from "./components/Notes.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menubar" element={<Menubar />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
