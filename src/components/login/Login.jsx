import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("http://localhost:7999/account/signIn", {
        userId,
        userName,
        password,
      })
      .then((response) => {
        // Handle success.
        // setSignUp(response.data);
        if (response.data == true) {
          alert("로그인이 되었습니다");
        } else if (response.data == false) {
          alert("아이디 비밀번호를 확인하세요");
        }
      });
  };

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
            <div>
              <div className="Login_input">
                <input
                  className="loginId"
                  type="text"
                  placeholder="ID"
                  vlaue={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
              </div>
              <div className="Login_input1">
                <input
                  className="loginPw"
                  type="password"
                  placeholder="Password"
                  vlaue={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="loginMid"></div>
              <div className="autoLogin">아이디/비밀번호 찾기</div>
              <label
                type="submit"
                className="loginBtn"
                for="my-modal-1"
                onClick={() => {
                  register();

                  // console.log(userName, userId, password, confirmPassword);
                }}>
                로그인{" "}
              </label>
            </div>
            <div className="socialBox">
              <div className="kakao">
                <img
                  className="kakaoLogo"
                  src="https://t1.daumcdn.net/cfile/tistory/99DD44345F33780309"
                />
                <div className="kakaoText">
                  <a href="">카카오 계정으로 신규가입</a>
                </div>
              </div>
              <div className="facebook">
                <img
                  className="facebookLogo"
                  src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
                />
                <div className="facebookText">
                  <a href="">페이스북 계정으로 신규가입</a>
                </div>
              </div>
              <div className="Google">
                <img className="GoogleLogo" src="http://asq.kr/y7pd84Th" />
                <div className="GoogleText">
                  <a href="">구글 계정으로 신규가입</a>
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
