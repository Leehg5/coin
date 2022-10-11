import React from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="Featured">
      {" "}
      <div className="Home_div1">
        <div className="featured">
          <div className="top">
            <h1 className="title">시장 위험 지표</h1>
          </div>
          <div className="bottom">
            <div className="featuredChart">
              <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
            </div>
            <p className="tite"></p>
            <p className="tite1">안전</p>
            <p className="tite"></p>
            <p className="tite2">중간</p>
            <p className="tite"></p>
            <p className="tite3">위험</p>
            <p className="tite"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
