import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const [boardtext, setBoardText] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      `http://localhost:7999/board/coin/get/${location.state.number}`
    );
    setBoardText(response.data); // 데이터는 response.data 안에 들어있습니다.
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="DetailPage">
      <div className="DetailPageMain">
        <span className="DetailPageTitle">{boardtext.subject} </span>
      </div>
      <div className="DetailPagelist">
        <div className="DetailPagelistdiv">
          <span>작성자:{boardtext.author}</span>
          <span>날짜:{boardtext.date}</span>
          <span>조회수: 5 </span>
        </div>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage_List_cjah">{boardtext.contents}</div>
      <div className="DetailPageButton">
        <button className="DetailPageButton1">수정</button>

        <button className="DetailPageButton2">삭제</button>
      </div>

      <div className="DetailPage_Booot">
        <div className="DetailPage_BoootMaindiv">
          <div>댓글</div>
          <div>등록순</div>
          <div>최신순</div>
          <div>새로고침</div>
        </div>
        <hr className="DetailPageHr" />
        <ul className="DetailPage_BoootList">
          <span>이용민</span>
          <span>2022.02.16</span>
          <li>
            {" "}
            안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요
            <button className="DetailPageIcon">답글쓰기</button>
          </li>
        </ul>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage-div">
        <input className="DetailPage-mimee" type="text" />

        <button className="DetailPage_button1">작성 하기</button>
      </div>
    </div>
  );
};

export default DetailPage;
