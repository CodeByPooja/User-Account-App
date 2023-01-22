import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const UserList = ({ users }) => {
  const context = useContext(UserContext);
  const [, setUserId] = useLocalStorage("userId", "");
  const navigate = useNavigate();
  const onClickHandler = (user) => {
    context.updadeUserDetail(user);
    setUserId(user.id);
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center absolute top-10 w-full">
      <div className="bg-gray-200 shadow-xl rounded-lg w-96">
        <div className="container">
          <div className="flex justify-center p-2 my-6 font-normal">
            <h1 className="text-sm text-muted">Select an Account</h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-b-lg w-full">
              <ul className="divide-y divide-gray-200 h-64 overflow-y-scroll">
                {users.map((user) => (
                  <li
                    key={user.id}
                    onClick={() => onClickHandler(user)}
                    className="pr-4 py-2 mx-4 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-4 h-4 rounded-full mr-2"
                        src={user.profilepicture}
                        alt={user.name}
                      />{" "}
                      <p className="text-dark-muted text-xs">{user.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
