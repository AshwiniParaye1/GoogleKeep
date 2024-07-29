import Menu from "./MainLayout/Menu";
import Navbar from "./MainLayout/Navbar";
import Notes from "./MainLayout/Notes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="appContainer">
        <Navbar />
        <Notes />
      </div>
    </div>
  );
}

export default App;
