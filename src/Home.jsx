import "./App.css";
import keep from "./assets/icons/keep.svg";

function Home() {
  return (
    <div className="home">
      {/* <h1>Navbar</h1> */}
      <a href="/">
        <img src={keep} alt="Keep Icon" />
      </a>
      <div className="homeContainer">
        <h1>
          <a href="/menu">Menu</a>
        </h1>
        <h1>
          <a href="/notes">Notes</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
