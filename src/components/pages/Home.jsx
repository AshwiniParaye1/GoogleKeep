import "../../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <h1>
          <Link to="/menubar">Menu</Link>
        </h1>
        <h1>
          <Link to="/notes">Notes</Link>
        </h1>
      </div>
    </div>
  );
}

export default Home;
