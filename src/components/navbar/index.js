import React from "react";
import { useLocation } from "react-router-dom";
import { getPageName } from "../../utils";
import UserDropdown from "../user-dropdown";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="relative w-full mt-6">
        <div className=" flex items-center justify-between pt-6 pb-2 mx-6">
          <div className="text-dark-muted font-semibold text-sm capitalize">
            {getPageName(location)}
          </div>
          <UserDropdown />
        </div>
      </nav>
      <hr className="m-2 mx-6 border-b-1 border-gray-300" />
    </>
  );
};

export default Navbar;
