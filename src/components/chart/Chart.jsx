import React from "react";
import KospiChart from "./KospiChart";
import KosdaqChart from "./KosdaqChart";
import BtiChart from "./BtiChart";
import EthChart from "./EthChart";
import "./Chart.scss";
import UsdkrwChart from "./UsdkrwChart";
import UsdkrwChart1 from "./UsdkrwChart1";

const Chart = () => {
  return (
    <div className="Chart">
      <div className="Kos">
        <KospiChart className="KospiChart" />
        <BtiChart className="BtiChart" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UsdkrwChart className="KosdaqChart" />
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="Coin">
        <KosdaqChart className="KosdaqChart" />
        <EthChart className="EthChart" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UsdkrwChart1 />
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Chart;
