import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/Netflix_Logo_PMS (1).png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
 
const Header = () => {

return (
  <header>
    <div className="header-content">
      <div className="logo-nav">
        <div className="logo">
          <a href="/">
            <img src={NetflixLogo} alt="Netflix" />
          </a>
        </div>
        <nav className="nav_black">
          <ul>
            <li>
              <a href="#">Netflix</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">MyList</a>
            </li>
            <li>
              <a href="#">Browse by Languages</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="user-actions">
        <li>
          <SearchIcon />
        </li>
        <li>
          <NotificationsNoneIcon />
        </li>
        <li>
          <AccountBoxIcon />
        </li>
        <li>
          <ArrowDropDownIcon />
        </li>
      </div>
    </div>

  </header>
);
};

export default Header;





