import React from "react";
import AccountWraper from "../../components/account-wraper";
import UserList from "../../components/user-list";
import Data from "../../data/user.json";

const SelectUser = () => {
  return (
    <AccountWraper>
      <UserList users={Data.users} />
    </AccountWraper>
  );
}

export default SelectUser;
