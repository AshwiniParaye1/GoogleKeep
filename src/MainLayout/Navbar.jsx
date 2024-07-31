import "../App.css";
import keep from "../assets/icons/keep.svg";
import Refresh from "./NavbarItems/Refresh";
import Search from "./NavbarItems/Search";
import ListView from "./NavbarItems/ListView";
import Settings from "./NavbarItems/Settings";
import GoogleApps from "./NavbarItems/GoogleApps";
import Profile from "./NavbarItems/Profile";
import Menu from "./Menu";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="keepLogo">
          <div className="navMenu">
            <Menu />
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
          <Refresh />
          <ListView />
          <Settings />
        </div>
        <div className="appsProfileContainer">
          <GoogleApps />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Navbar;
