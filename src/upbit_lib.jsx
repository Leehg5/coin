const axios = require("axios").default;

const options = {
  method: "GET",
  url: "https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20KRW-ETH%2C%20KRW-XRP%2C%20KRW-ETC",
  headers: { accept: "application/json" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
