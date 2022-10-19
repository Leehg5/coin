import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Write.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Write.scss";

const Write = () => {
  return (
    <div className="select-MainDiv">
      <div class="con">
        <h1>게시글 작성</h1>
        <div class="article-write">
          <form action="doWrite" method="POST">
            <div className="write_list">
              <select className="write_select" id="" aria-label="게시판목록">
                <option value="">게시판 목록</option>
                <option value="M">--------------------</option>
                <option value="M">국내 주식 정보</option>
                <option value="F">해외 주식 정보</option>
                <option value="U">주식 게시판</option>
                <option value="M">--------------------</option>
                <option value="M">코인 정보</option>
                <option value="F">코인 게시판</option>
                <option value="M">--------------------</option>
                <option value="U">선물/마진 벙보</option>
                <option value="M">선물/마진 게시판</option>
                <option value="M">--------------------</option>
                <option value="F">자유 게시판</option>
                <option value="U">손익 게시판</option>
                <option value="M">--------------------</option>
                <option value="F">공지 사항</option>
                <option value="F">이벤트</option>
                <option value="U">문의</option>
                <option value="M">--------------------</option>
              </select>
              <div className="write_list_title">
                * 게시글 목록을 확인해 주세요
              </div>
            </div>
            <div>
              <input
                className="write-title"
                type="text"
                placeholder="제목을 입력해주세요"
              />
            </div>

            <div className="write-mimee-div">
              <textarea className="write-mimee" type="text" />
            </div>
            <div className="Write_button">
              <button className="Write_button1">작성 하기</button>
              <button
                className="Write_button2"
                type="button"
                onclick="history.back();">
                돌아기기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Write;
