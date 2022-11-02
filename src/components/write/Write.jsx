import React, { useState, useEffect } from "react";
import "./Write.jsx";
import "./Write.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [lonned, setLonned] = useState(false);
  const [contents, setContents] = useState("");
  const [selectBoard, setSelectBoard] = useState("");

  const post = () => {
    axios
      .post(`http://localhost:7999/board/${selectBoard}/post`, {
        subject,
        contents,
        author,
      })
      .then((response) => {
        if (response.data == true) {
          alert("작성완료");
        } else if (response.data == false) {
          alert("실패");
        }
      });
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setLonned(sessionStorage.getItem("user"));
    }
    console.log(check);
    setAuthor(check);
  }, []);
  const showValue = () => {};
  return (
    <div className="select-MainDiv">
      <div class="con">
        <h1>게시글 작성</h1>
        <div class="article-write">
          <form>
            <div className="write_list">
              <select
                className="write_select"
                id=""
                aria-label="게시판목록"
                onChange={(e) => {
                  setSelectBoard(e.target.value);
                }}>
                <option value="">게시판 목록</option>
                <option value="M">--------------------</option>
                <option value="stockMarket">국내 주식 정보</option>
                <option value="stockMarket">해외 주식 정보</option>
                <option value="stockMarket">주식 게시판</option>
                <option value="M">--------------------</option>
                <option value="coin">코인 정보</option>
                <option value="coin">코인 게시판</option>
                <option value="M">--------------------</option>
                <option value="news">선물/마진 벙보</option>
                <option value="news">선물/마진 게시판</option>
                <option value="M">--------------------</option>
                <option value="테스트8">자유 게시판</option>
                <option value="테스트9">손익 게시판</option>
                <option value="M">--------------------</option>
                <option value="테스트10">공지 사항</option>
                <option value="테스트11">이벤트</option>
                <option value="테스트12">문의</option>
                <option value="M">--------------------</option>
              </select>
              <div className="write_list_title">
                * 게시글 목록을 확인해 주세요
              </div>
            </div>
            <div></div>
            <div>
              <input
                className="write-title"
                type="text"
                placeholder="제목을 입력해주세요"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>

            <div className="write-mimee-div">
              <textarea
                className="write-mimee"
                type="text"
                value={contents}
                onChange={(e) => {
                  setContents(e.target.value);
                }}
              />
            </div>
            <div className="Write_button">
              <button
                className="Write_button1"
                onClick={() => {
                  post();
                  console.log(subject, contents, author);
                }}>
                작성 하기
              </button>
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
