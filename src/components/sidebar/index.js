import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getPageName } from "../../utils";
const listItems = [
  {
    id: 1,
    name: "Profile",
    route: "profile",
  },
  {
    id: 2,
    name: "Posts",
    route: "posts",
  },
  {
    id: 3,
    name: "Gallery",
    route: "gallery",
  },
  {
    id: 4,
    name: "Todo",
    route: "todo",
  },
];
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-54 h-5/7 shadow-md px-1 ml-2 fixed top-10 bottom-10 rounded-xl bg-gradient-to-b from-sky-600 to-indigo-700">
      <ul className="h-full flex flex-col justify-center">
        {listItems.map((item) => (
          <li key={item.name} className="w-40">
            <Link
              className={`flex items-center text-xs py-4 mx-4 h-8 border-b border-light-muted overflow-hidden text-ellipsis whitespace-nowrap hover:text-gray-200 transition duration-300 ease-in-out ${item.route ===  getPageName(location) ? 'text-gray-100' : 'text-light-muted'}`}
              to={item.route}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
