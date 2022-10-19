import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <div key={user.KRW}></div>;
      })}
    </div>
  );
};

export default UserList;
