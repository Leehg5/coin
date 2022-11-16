import axios from "axios";
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Sidbar = () => {
  const [toggleState, setToggleState] = useState(1);
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [kospi, setKospi] = useState("");

  const [samsung, setSamsung] = useState("");
  const [kakao, setKakao] = useState("");

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setTest(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20KRW-ETH%2C%20KRW-XRP"
      );
      setTest(response.data); // 데이터는 response.data 안에 들어있습니다.
      const kospiGet = await axios.get(
        "http://localhost:7999/chart/Market/get?name=코스피"
      );
      setKospi(kospiGet.data);

      const samsungGet = await axios.get(
        "http://localhost:7999/chart/Stock/get?name=삼성전자"
      );
      setSamsung(samsungGet.data);
      const kakaoGet = await axios.get(
        "http://localhost:7999/chart/Stock/get?name=카카오뱅크"
      );
      setKakao(kakaoGet.data);
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

  if (0 < kospi.avg && kospi.avg < 1) {
    kospi.avg = "0" + kospi.avg;
  }

  if (0 < samsung.avg && samsung.avg < 1) {
    samsung.avg = "0" + samsung.avg;
  }

  if (0 < kakao.avg && kakao.avg < 1) {
    kakao.avg = "0" + kakao.avg;
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div class="Sidbar">
      <div className="Sidbarss">
        {" "}
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>
              코인
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
              증시
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }>
              <table class="cointable">
                <thead>
                  <tr>
                    <th></th>
                    <th>BTC</th>
                    <th>ETH</th>
                    <th>XRP</th>
                  </tr>
                </thead>
                <tbody className="tbodyMain">
                  <tr>
                    <td>현재가</td>
                    {test.map((Featured) => (
                      <td key={Featured}>
                        {Featured.opening_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원{" "}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>전일대비&nbsp; ( KRW )</td>
                    {test.map((Featured) => (
                      <td
                        key={Featured}
                        style={
                          Featured.signed_change_price > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }>
                        {Featured.signed_change_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원{" "}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>전일대비&nbsp; ( % )</td>
                    {test.map((Featured) => (
                      <td
                        key={Featured}
                        style={
                          Featured.signed_change_rate > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }>
                        {(Featured.signed_change_rate.toFixed(3) * 100).toFixed(
                          2
                        )}{" "}
                        %
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }>
              <table class="tbl_type">
                <thead>
                  <tr>
                    <th scope="col">코스피</th>
                    <th scope="col">코스닥</th>
                    <th scope="col">삼성증권</th>
                    <th scope="col">카카오</th>
                  </tr>
                </thead>
                <tbody className="tbodyMain">
                  <tr>
                    <td class="">전일 가격</td>

                    <td class="">전일 가격</td>
                    <td class="">{kospi.value}</td>

                    <td class="">
                      {samsung.value
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원
                    </td>
                    <td>
                      {kakao.value
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </td>
                  </tr>
                  <tr style={{ color: "red" }}>
                    <td className="highhigh" style={{ color: "black" }}>
                      고가
                    </td>
                    <td class="">{kospi.high}</td>

                    <td class="">
                      {samsung.high
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </td>
                    <td class="">
                      {kakao.high
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </td>
                  </tr>
                  <tr style={{ color: "blue" }}>
                    <td className="lowlow" style={{ color: "black" }}>
                      저가
                    </td>
                    <td class="">{kospi.low}</td>

                    <td class="">
                      {samsung.low
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </td>
                    <td class="">
                      {kakao.low
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </td>
                  </tr>
                  <tr>
                    <td class="">전일 대비</td>
                    <td
                      style={
                        kospi.avg > 0 ? { color: "red" } : { color: "blue" }
                      }>
                      {kospi.avg} %
                    </td>

                    <td
                      style={
                        samsung.avg > 0 ? { color: "red" } : { color: "blue" }
                      }>
                      {samsung.avg} %
                    </td>
                    <td
                      style={
                        kakao.avg > 0 ? { color: "red" } : { color: "blue" }
                      }>
                      {kakao.avg} %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <a href="https://kr.tradingview.com/markets/">
        {" "}
        <div className="Sidbarss1">
          {" "}
          <KeyboardDoubleArrowRightIcon className="Sidbarss1icon" /> 트레이딩뷰
          제공
          <span className="Sidbarss1span"> 파이낸셜 마켓 </span>
        </div>
      </a>
      <div className="Sidbarbanner">
        <img src="https://i.postimg.cc/52YsHxHG/banner-android.png" />
      </div>
      <div className="SidbarNotice">
        <div>공지 사항</div>
        <div>첫번째 공지 사항 입니다.</div>
        <div>두번째 공지 사항 입니다.</div>
        <div>세번째 공지 사항 입니다.</div>

        <div>패치 노트</div>
        <div>문의 / 건의</div>
      </div>
      <div className="advertisement">
        <img
          src="https://i.ibb.co/ydHv4vh/9246251720993146233.png"
          alt="9246251720993146233"
          border="0"
        />
      </div>
    </div>
  );
};

export default Sidbar;
