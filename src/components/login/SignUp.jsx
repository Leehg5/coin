import React from "react";
import "./SignUp.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignUp = () => {
  return (
    <div className="SignUp">
      <label for="my-modal">회원가입</label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">회원가입</h3>
          <AccountCircleIcon sx={{ fontSize: 70, marginTop: "20px" }} />

          <p class="py-4">
            <div className="SignUp_input">
              <input
                className="loginId"
                type="text"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="SignUp_input">
              <input
                className="loginId"
                type="text"
                placeholder="아이디를 입력하세요"
              />
            </div>
            <div className="SignUp_input">
              <input
                className="loginId"
                type="password"
                placeholder="비밀번호 입력하세요"
              />
            </div>
            <div className="SignUp_input">
              <input
                className="loginId"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div class="join_row">
              <div className="Joindiv">
                <h3 class="join_title"></h3>
                <div class="ps_box gender_code">
                  <select
                    id="gender"
                    name="gender"
                    class="sel"
                    aria-label="성별">
                    <option value="" selected>
                      남자
                    </option>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                    <option value="U">선택 안함</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="SiguUpBtndiv">
              <button className="SignUpBtn" for="my-modal ">
                가입하기
              </button>
              <label className="SignUpBtn" for="my-modal">
                나가기
              </label>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
