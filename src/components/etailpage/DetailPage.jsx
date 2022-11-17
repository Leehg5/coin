import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Coin from "../../pages/coin/Coin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailPage = ({ test, setTest }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [boardtext, setBoardText] = useState([]);
  const [comment, setComment] = useState("");
  const [comList, setComList] = useState([]);
  test.sort(function (a, b) {
    return b.id - a.id;
  });

  const fetchUsers = async () => {
    const response2 = await axios.get(
      `http://localhost:7999/board/coin/b/getid/comment?id=${location.state.number}`
    );
    setComList(response2.data);

    const response = await axios.get(
      `http://localhost:7999/board/coin/b/getid?id=${location.state.number}`
    );
    setBoardText(response.data); // 데이터는 response.data 안에 들어있습니다.
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const aaa = sessionStorage.getItem("logined") == boardtext.author;

  const bbb = (ccc) => sessionStorage.getItem("logined") == ccc;

  const deleteList = async () => {
    const response = await axios.delete(
      `http://localhost:7999/board/coin/b/delete`,
      {
        data: {
          id: `${location.state.number}`,
          author: sessionStorage.getItem("logined"),
        },
      }
    );
    const newres = await axios.get(`http://localhost:7999/board/coin/b/get`);
    setTest(newres.data);
    navigate(-1);
  };
  const compost = () => {
    if (sessionStorage.getItem("user") || false) {
      axios.post(`http://localhost:7999/board/coin/b/post/comment`, {
        contents: comment,
        author: sessionStorage.getItem("logined"),
        id: `${location.state.number}`,
      });

      console.log(
        "contents " +
          comment +
          " author " +
          sessionStorage.getItem("logined") +
          " id " +
          `${location.state.number}`
      );
    } else if (sessionStorage.getItem("user") || true) {
      alert("로그인 해주세요");
    }
    console.log(location.state.number);
    window.location.reload();
  };
  const comdelete = (x) => {
    axios.delete(`http://localhost:7999/board/coin/b/delete/comment`, {
      data: {
        id: x,
        author: sessionStorage.getItem("logined"),
      },
    });
    window.location.reload();
  };

  return (
    <div className="Delete">
      <div className="DetailPage">
        <div className="DetailPageMain">
          <span className="DetailPageTitle">{boardtext.subject} </span>
        </div>
        <div className="DetailPagelist">
          <div className="DetailPagelistdiv">
            <span>{boardtext.author}</span>

            <div className="asddgiuhi23">
              <span>{boardtext.date}</span>
              <span>조회수 : </span>
              <span>{boardtext.views}</span>

              {aaa ? (
                <>
                  <div className="Deletebuttonor">
                    <Link
                      to={"/upwrite"}
                      state={{ number: boardtext.id }}
                      className="DetailPageButton1">
                      수정
                    </Link>

                    <button
                      className="DetailPageButton2"
                      onClick={() => {
                        deleteList();
                      }}>
                      삭제
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="DetailPage_List_cjah_div">
          <div className="DetailPage_List_cjah">{boardtext.contents}</div>
        </div>
      </div>{" "}
      <div className="sdsdaw4efr34">
        <ArrowBackIcon className="icon" /> &nbsp; 목록으로
      </div>
      <div className="DetailPageList1">
        <div className="DetailPage_Booot">
          <div className="DetailPage_BoootMaindiv">
            <div>댓글</div>
          </div>
          <hr className="DetailPageHr" />
          <tbody className="DetailPage_BoootList">
            {comList.map((list) => (
              <tr className="DetailPageTd" key={list.id}>
                <div className="DetailPageTd_Span1">
                  <span>{list.author} &nbsp;</span>
                  <span>{list.date}</span>
                </div>
                <div className="DetailPageTddiv">
                  <div>{list.contents} </div>
                  <div>
                    {bbb(list.author) ? (
                      <>
                        <button
                          onClick={() => {
                            comdelete(list.id);
                          }}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </div>
        <hr className="DetailPageHr" />
        <div className="DetailPage-div">
          <input
            className="DetailPage-mimee"
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <div className="DetailPageButtonend">
          {" "}
          <button
            className="DetailPage_button1"
            onClick={() => {
              compost();
            }}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
