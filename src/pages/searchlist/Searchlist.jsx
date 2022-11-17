import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Searchlist.scss";
import axios from "axios";
import ArticleIcon from "@mui/icons-material/Article";

const Searchlist = () => {
  const location = useLocation();

  const [lonned, setLonned] = useState(false);
  const [userId, setUserId] = useState();

  const [gggg, setGggg] = useState("");
  const [BoardText, setBoardText] = useState("");
  const [deleteListsd, setDeleteListsd] = useState();
  const navigate = useNavigate();

  const deleteList = async () => {
    const response = await axios.get(
      `http://localhost:7999/board/1/2/searchAll?value=${gggg}`
    );
    // console.log(response.data);
    setBoardText(response.data);
    console.log(BoardText);
    if (response.data != false) {
      navigate("/searchlist", {
        state: {
          test: response.data,
        },
      });
    } else if (response.data == false) {
      alert("입력하신 정보가 없습니다");
    }
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setLonned(sessionStorage.getItem("user"));
      setUserId(sessionStorage.getItem("userid"));
    }
  }, []);

  return (
    <div className="Searchlist">
      <div className="Searchlist_div">
        <input
          placeholder="검색어를 입력해주세요"
          type="value"
          onChange={(e) => {
            setGggg(e.target.value);
          }}
        />

        <button
          onClick={() => {
            deleteList();
            setDeleteListsd();
            deleteList = { deleteList };
          }}>
          버튼
        </button>
      </div>
      <div className="Searchlisttitlle">
        <div>
          <ArticleIcon />
          문서
        </div>
      </div>
      <div className="Searchlisttitllelist">
        <li>제목</li>
        <li>이름</li>
        <li>날짜</li>
        <li>조회</li>
        <li>내용</li>
      </div>
      <div className="Searchlistmide">
        <div className="Searchlistmide_Div">댓글</div>

        <div className="Searchlistmide">
          <li>제목</li>
          <li>이름</li>
          <li>날짜</li>
        </div>
      </div>
    </div>
  );
};

export default Searchlist;

// 검색 글 불러오기
// <div className="Searchlist_Div1">
//   {location.state.test.map((hhh) => (
//     <div className="earchlistMain" key={hhh}>
//       <div>
//         {" "}
//         <Link to={`../detailPage/${hhh.id}`} state={{ number: hhh.id }}>
//           {hhh.subject}
//         </Link>
//       </div>
//       <div className="Searchlist_List">
//         <div>{hhh.lcategory} 게시판</div>
//         <div> | </div>
//         <div>{hhh.author}</div>
//         <div> | </div>
//         <div>{hhh.date}</div>
//         <div> | </div>
//         <div>조회 {hhh.views}</div>
//       </div>
//       <div className="Searchlist_Link">
//         <Link to={`../detailPage/${hhh.id}`} state={{ number: hhh.id }}>
//           {hhh.contents}
//         </Link>
//       </div>
//     </div>
//   ))}
// </div>;
