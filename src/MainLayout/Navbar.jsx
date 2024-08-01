import "../App.css";
import Search from "./NavbarItems/Search";
import Menubar from "./Menubar";
import keep from "../assets/icons/keep.svg";
import { Grip } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { RotateCw } from "lucide-react";
import { StretchHorizontal } from "lucide-react";
import { Settings } from "lucide-react";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="keepLogo">
          <div className="navMenu">
            <Menubar />
          </div>
          <a href="/">
            <img src={keep} alt="Keep Icon" />
          </a>
          <a href="/">
            <p>Keep</p>
          </a>
        </div>
        <div className="searchNavbarContainer">
          <Search />
        </div>
        <div className="refListSetContainer">
          <RotateCw />
          <StretchHorizontal />
          <Settings />
        </div>
        <div className="appsProfileContainer">
          <Grip />
          <CircleUserRound />
        </div>
      </div>
    </>
  );
}

export default Navbar;
