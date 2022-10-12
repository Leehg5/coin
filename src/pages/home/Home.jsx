import Chart from "../../components/chart/Chart";
import "./Home.scss";
import Widget from "../../components/widget/Widget";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { padding } from "@mui/system";
import Board from "../../components/board/Board";
import BoardEvent from "../../components/board/BoardEvent";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <div className="Home">
      <div className="chart">
        <Chart />
        <Featured />
      </div>

      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
      <div className="listContainer">
        <Board />
        <BoardEvent />
      </div>
    </div>
  );
};

export default Home;
