import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import "./DetailPage.scss";

const DetailPage = () => {
  return (
    <div className="DetailPage">
      <div className="DetailPageMain">
        <span className="DetailPageTitle">안녕하세요 </span>
      </div>
      <div className="DetailPagelist">
        <div className="DetailPagelistdiv">
          <div>작성자:이용민</div>
          <div>날짜:2022.02.13</div>
          <div>조회수:5</div>
        </div>
      </div>
      <hr className="DetailPageHr" />
      <div className="DetailPage_List_cjah">
        안녕하세요 여기는 상세페이지 내용입니다요요요요요요안녕하세요 여기는
        상세페이지 내용입니다요요요요요요 안녕하세요 여기는 상세페이지
        내용입니다요요요요요요안녕하세요 여기는 상세페이지
        내용입니다요요요요요요 안녕하세요 여기는 상세페이지
      </div>
      <div className="DetailPageButton">
        <button className="DetailPageButton1">수정</button>

        <button className="DetailPageButton2">삭제</button>
      </div>

      <div className="DetailPage_Booot">
        <div className="DetailPage_BoootMaindiv">전체 댓글</div>
        <hr className="DetailPageHr" />
        <ul className="DetailPage_BoootList">
          <li>
            안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요
            <ClearIcon className="DetailPageIcon" />
          </li>
          <li>
            안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요
            <ClearIcon className="DetailPageIcon" />
          </li>
          <li>
            안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요안뇽하세요
            <ClearIcon className="DetailPageIcon" />
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
