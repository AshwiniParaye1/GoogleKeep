import "../App.css";
import keep from "../assets/icons/keep.svg";
import Search from "./NavbarItems/Search";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="keepLogo">
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
      </div>
    </>
  );
}

export default Navbar;
