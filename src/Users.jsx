import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [usecoin, setUsecoin] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20KRW-ETH%2C%20KRW-XRP%2C%20KRW-ETC"
      )
      .then((res) => {
        setUsecoin(res.data);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {usecoin.map((user) => {
        return <td key={user.market}>{user.market}</td>;
      })}
    </>
  );
};

export default Users;
