import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import logo from "./images/linkedin.png";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { BusinessCenter, BusinessCenterOutlined } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="/" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messagin" />
        <HeaderOption Icon={NotificationIcon} title="Notification" />
        <HeaderOption avatar={"https://avatars.githubusercontent.com/u/74310120?s=400&v=4"} title="Me" />
      </div>
    </div>
  );
}

export default Header;
