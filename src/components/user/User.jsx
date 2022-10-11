import axios from "axios";

function User() {
  const getQuote = () => {
    axios
      .get("https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20BTC-ETH")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={getQuote}>가져오기</button>
    </div>
  );
}

export default User;
