import "./App.css";
import Navbar from "./MainLayout/Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <h1>
          <a href="/menubar">Menu</a>
        </h1>
        <h1>
          <a href="/notes">Notes</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
