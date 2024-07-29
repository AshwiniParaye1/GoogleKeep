import Menu from "./MainLayout/Menu.jsx";
import Navbar from "./MainLayout/Navbar.jsx";
import Notes from "./MainLayout/Notes.jsx";

function Home() {
  return (
    <div className="home">
      <Menu />
      <div className="homeContainer">
        <Navbar />
        <Notes />
      </div>
    </div>
  );
}

export default Home;
