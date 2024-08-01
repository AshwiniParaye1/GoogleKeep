import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Menubar from "./MainLayout/Menubar.jsx";
import Navbar from "./MainLayout/Navbar.jsx";
import Notes from "./MainLayout/Notes.jsx";
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
