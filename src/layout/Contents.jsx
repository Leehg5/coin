import React from "react";
import Home from "../pages/home/Home";
import Stock from "../pages/stock/Stock";
import OvStocks from "../pages/stock/OvStocks";
import BoardStock from "../pages/stock/BoardStock";
import Coin from "../pages/coin/Coin";
import Margin from "../pages/margin/Margin";
import BoardCoinMargin from "../pages/margin/BoardCoinMargin";
import Community from "../pages/community/Community";
import Revenue from "../pages/community/Revenue";
import Notice from "../pages/notice/Notice";
import Event from "../pages/notice/Event";
import Inquiry from "../pages/notice/Inquiry";
import Privacy from "../pages/set/Privacy";
import BoardCoin from "../pages/coin/BoardCoin";
import Write from "../components/write/Write";
import "./Contents.scss";
import { Routes, Route } from "react-router-dom";
import DetailPage from "../components/etailpage/DetailPage";

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/ovStocks" element={<OvStocks />} />
        <Route path="/boardStock" element={<BoardStock />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/margin" element={<Margin />} />
        <Route path="/boardCoin" element={<BoardCoin />} />
        <Route path="/boardCoinMargin" element={<BoardCoinMargin />} />
        <Route path="/community" element={<Community />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/event" element={<Event />} />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
    </div>
  );
};

export default Contents;
