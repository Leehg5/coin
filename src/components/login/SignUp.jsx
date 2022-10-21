import React, { useState } from "react";
import "./SignUp.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignUp = () => {
  const [UserName, setUserName] = useState("");
  const [UserId, setUserId] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmit = () => {};
  return (
    <div className="SignUp">
      <label for="my-modal">회원가입</label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">회원가입</h3>
          <AccountCircleIcon sx={{ fontSize: 70, marginTop: "20px" }} />
          <form action="http://localhost:7999/account/signUp" method="post">
            <p class="py-4">
              <div className="SignUp_input">
                <input
                  className="loginId"
                  type="text"
                  vlaue={UserName}
                  placeholder="이름을 입력하세요"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="SignUp_input">
                <input
                  className="loginId"
                  type="text"
                  vlaue={UserId}
                  placeholder="아이디를 입력하세요"
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
              </div>
              <div className="SignUp_input">
                <input
                  className="loginId"
                  type="password"
                  vlaue={Password}
                  placeholder="비밀번호 입력하세요"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="SignUp_input">
                <input
                  className="loginId"
                  type="password"
                  placeholder="비밀번호"
                  vlaue={ConfirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
              <div class="join_row">
                <div className="Joindiv">
                  <h3 class="join_title"></h3>
                  <div class="ps_box gender_code"></div>
                </div>
              </div>
              <div className="SiguUpBtndiv">
                <button
                  className="SignUpBtn"
                  for="my-modal "
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(UserName, UserId, Password, ConfirmPassword);
                    alert("가입 완료");
                  }}>
                  가입하기
                </button>

                <label className="SignUpBtn" for="my-modal">
                  나가기
                </label>
              </div>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
