import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>
        <a href="/menu">Menu</a>
      </h1>
      <div className="homeContainer">
        <h1>
          <a href="/navbar">Navbar</a>
        </h1>
        <h1>
          <a href="/notes">Notes</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
