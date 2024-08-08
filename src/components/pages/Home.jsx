import "../../App.css";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Archive, Trash2 } from "lucide-react";

function Home() {
  const menu = [
    {
      icon: Archive,
      name: "Archive",
    },
    {
      icon: Trash2,
      name: "Trash",
    },
  ];
  return (
    <div
      className="homeContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh",
        cursor: "pointer",
      }}
    >
      <div style={{ width: "30%", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          {menu.map((item) => (
            <MenuItem key={item.name} Icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
      <div style={{ width: "70%" }}>
        <Link to="/notes"></Link>
      </div>
    </div>
  );
}

export default Home;
