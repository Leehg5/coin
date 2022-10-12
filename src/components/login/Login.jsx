import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <label for="my-modal-1">로그인</label>

      <input type="checkbox" id="my-modal-1" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-1" class="btn-sm absolute right-6 top-9">
            ✕
          </label>

          <h1 class="text-lg font-bold">로그인 페이지</h1>
          <p class="py-4">
            <div className="Login_input">
              <input
                className="loginId"
                type="text"
                placeholder="아이디를 입력하세요"
              />
            </div>
            <div className="Login_input1">
              <input
                className="loginPw"
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div className="loginMid"></div>
            <div className="autoLogin">아이디/비밀번호 찾기</div>
            <button className="loginBtn"> 로그인 </button>
            <div className="socialBox">
              <div className="kakao">
                <img className="kakaoLogo" src="/Images/SignIn/kakao.png" />
                <div className="kakaoText">
                  <a href="">카카오 계정으로 신규가입</a>
                </div>
              </div>
              <div className="facebook">
                <img
                  className="facebookLogo"
                  src="/Images/SignIn/facebook.png"
                />
                <div className="facebookText">
                  <a href="">페이스북 계정으로 신규가입</a>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
