import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "./Featured.scss";

const Featured = () => {
  return (
    <div class="Featured">
      <img
        style={{ width: "100%", height: "150px", marginBottom: "20px" }}
        src="https://www.hellofunding.co.kr/theme/2018/img/new_m/new_main_banner_01.jpg"
        alt=""
      />
      <table class="tbl_type">
        <thead>
          <tr>
            <th scope="col">코인</th>
            <th scope="col">실시간 시세(KRW)</th>
            <th scope="col">실시간 시세(USD)</th>
            <th scope="col">24시간 변동률</th>
            <th scope="col">거래량</th>
          </tr>
        </thead>
        <tbody className="tbodyMain">
          <tr>
            <td class="">비트코인</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">이더리움</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">리플</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">깡깡이</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
        </tbody>
      </table>
      <h3 className="tblH31"></h3>
      <table class="tbl_type">
        <thead>
          <tr>
            <th scope="col">주식</th>
            <th scope="col">전일 가격</th>
            <th scope="col">고가</th>
            <th scope="col">저가</th>
            <th scope="col">거래량</th>
          </tr>
        </thead>
        <tbody className="tbodyMain">
          <tr>
            <td class="">코스피</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="nm">코스닥</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">삼성증권</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
          <tr>
            <td class="">카카오</td>
            <td class="">30,000,000원</td>
            <td>20,000$</td>
            <td class="">-49,000</td>
            <td class="">1500BTC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Featured;
