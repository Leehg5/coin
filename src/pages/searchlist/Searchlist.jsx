import React, { useState, useEffect } from "react";

import "./Searchlist.scss";
import axios from "axios";

const Searchlist = () => {
  return (
    <div className="Searchlist">
      <div className="Searchlist_div1">
        <div>깍꿍</div>
      </div>
      <div className="Searchlist_div">
        <div> 게시판&nbsp; ㅣ </div>
        <div>이용민&nbsp;&nbsp;&nbsp; ㅣ</div>
        <div>2022.01.17&nbsp;&nbsp;&nbsp; ㅣ </div>
      </div>

      <div className="Searchlist_div2">
        <div>
          내용 임니돠내용 임니돠내용 임니돠내용 임니돠내용 임니돠내용 임니돠
          내용 임니돠내용 임니돠 내용 임니돠
        </div>
      </div>
      <hr className="Searchlist_Hr" />
    </div>
  );
};

export default Searchlist;
