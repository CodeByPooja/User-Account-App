import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getCurrentUser } from "../../utils";
import Data from "./../../data/user.json";
const UserDropdown = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [otherUsers, setOtherUsers] = useState([]);
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const [userId, setUserId, removeUserId] = useLocalStorage("userId");
  useEffect(() => {
    const user = getCurrentUser(userId);
    setUser(user);
    if (!user) return;
    context.updadeUserDetail(user);
    const otherUsers = Data.users.filter((item) => item.id !== user.id);
    setOtherUsers(otherUsers.slice(0, 2));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (!user) {
    return <></>;
  }
  const logoutHandler = () => {
    setIsOpen(false);
    removeUserId("userId");
    navigate("/");
  };
  const onChangeUser = (item) => {
    setUserId(item.id);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="w-4 h-4 rounded-full mr-2"
          src={user.profilepicture}
          alt={user.name}
        />
        <p className="text-dark-muted text-xs">{user.name}</p>
      </div>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 top-5 bg-white divide-y divide-gray-100 rounded-xl shadow-xl w-44"
        >
          <ul className="flex items-center flex-col py-6 text-sm text-gray-700">
            <li className="flex items-center flex-col mb-2">
              <img
                className="w-16 h-16 rounded-full mr-2"
                src={user.profilepicture}
                alt={user.name}
              />
              <h4 className="text-dark-muted">{user.name}</h4>
              <p className="text-light-muted text-xs">{user.email}</p>
            </li>
            {otherUsers.map((item) => (
              <li
                key={item.id}
                onClick={() => onChangeUser(item)}
                className="w-36 border-t border-gray-200 flex justify-center cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center py-1">
                  <img
                    className="w-4 h-4 rounded-full mr-2"
                    src={item.profilepicture}
                    alt={item.name}
                  />
                  <p className="text-dark-muted text-xs">{item.name}</p>
                </div>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={logoutHandler}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 mt-2 rounded-full text-xs px-4 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
