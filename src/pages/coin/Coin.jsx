import "./Coin.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Coin = () => {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setTest(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get("http://localhost:7999/board/coin/get");
      setTest(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!test) return null;
  return (
    <div class="Coin">
      <div className="CoinTitel">
        <div className="CoinDiv">
          <h1>코인 정보 게시판</h1>
        </div>
      </div>
      <div className="meailinputton">
        <input placeholder="찾을내용을 입력하세요" type="text" />
        <button>
          <ZoomInIcon />
        </button>
        <button className="CoinListbutton">글쓰기</button>
      </div>
      <table class="tbl_type">
        <caption>게시판 리스트</caption>

        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">제목</th>
            <th scope="col">글쓴이</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody className="CoinTbody">
          {test.map((Coin) => (
            <tr key={Coin.id}>
              <td> {Coin.id}</td>
              <td>
                <a href=""> {Coin.subject}</a>
              </td>
              <td> {Coin.author}</td>
              <td> {Coin.date}</td>
              <td> {Coin.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="CoinEndDiv1">
        <a href="">◀</a>

        <a href="">1</a>

        <a href="">2</a>

        <a href="">3</a>

        <a href="">4</a>
        <a href="">5</a>
        <a href="">▶</a>
      </div>
    </div>
  );
};

export default Coin;
