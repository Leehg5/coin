import React, { useState } from "react";
import "./Navbar.scss";
import LanguageIcon from "@mui/icons-material/Language";
import axios from "axios";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Login from "../login/Login";
import SignUp from "../login/SignUp";

const Navbar = () => {
  const [lonned, setLonned] = useState(true);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search1"></div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            Korea
          </div>
          <div className="Hader_Login1">
            {lonned ? (
              <div
                onClick={() => {
                  setLonned(false);
                }}>
                이용민 로그아웃
              </div>
            ) : (
              <div className="Hader_Login1">
                <Login />
                <SignUp />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
