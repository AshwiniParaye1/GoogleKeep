import "../App.css";
import Search from "./ui/Search";
import Menubar from "./Menubar";
import keep from "../assets/icons/keep.svg";
import { Grip } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { RotateCw } from "lucide-react";
import { StretchHorizontal } from "lucide-react";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="keepLogo">
          <div className="navMenu">
            <Menubar />
          </div>
          <Link to="/">
            <img src={keep} alt="Keep Icon" />
          </Link>
          <Link to="/">
            <p>Keep</p>
          </Link>
        </div>
        <div className="searchNavbarContainer">
          <button style={{ border: "none", background: "none" }}>
            <Search />
          </button>
        </div>
        <div className="refListSetContainer">
          <button style={{ border: "none", background: "none" }}>
            {" "}
            <RotateCw />
          </button>
          <button style={{ border: "none", background: "none" }}>
            <StretchHorizontal />
          </button>
          <button style={{ border: "none", background: "none" }}>
            <Settings />
          </button>
        </div>
        <div className="appsProfileContainer">
          <button style={{ border: "none", background: "none" }}>
            <Grip />
          </button>
          <button style={{ border: "none", background: "none" }}>
            <CircleUserRound />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
