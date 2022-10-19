import React from "react";

import "./Privacy.scss";

const Privacy = () => {
  return (
    <div className="Privacy">
      <div className="top">
        <h1>나의 정보</h1>
        <h2></h2>
        <h3>고객님께서 가입하신 회원정보입니다.</h3>
        <h3>안전한 정보 변경을 위하여 정확인 정보 입력부탁드립니다.</h3>
      </div>

      <div className="botton">
        <div className="right">
          <div className="bottonMain">회원 정보 변경</div>
          <h2></h2>
          <form>
            <div className="formInput">
              <label htmlFor="">이름</label>
              <div className="name">데이터이름</div>
            </div>

            <div className="formInput">
              <label htmlFor="">아이디</label>
              <div>데이터 아이디</div>
            </div>
            <div className="formInput">
              <label htmlFor="">비밀번호</label>
              <input type="password" placeholder="비밀번호" />
              <h4>최소 8글자 이상</h4>
            </div>
            <div className="formInput">
              <label htmlFor="">비밀번호 </label>
              <input type="password" placeholder="비밀번호 재입력" />
              <h4>비밀번호를 확인하십시오</h4>
            </div>
            <div class="formdiv">
              <label htmlFor="">성별 </label>
              <select id="gender" name="gender" class="sel" aria-label="성별">
                <div value="" className="dkfooeo">
                  남자
                </div>
                <option value="M">남자</option>
                <option value="F">여자</option>
                <option value="U">선택 안함</option>
              </select>
            </div>
          </form>
          <div className="buttonDiv">
            <button>수정하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
