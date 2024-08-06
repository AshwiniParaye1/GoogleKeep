import "../../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="homeContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "30%" }}>
        <Link to="/menubar">Menu</Link>
      </div>
      <div style={{ width: "70%" }}>
        <Link to="/notes">Notes</Link>
      </div>
    </div>
  );
}

export default Home;
