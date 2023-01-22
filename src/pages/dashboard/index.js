import React from "react";
import { Outlet } from "react-router-dom";
import Chats from "../../components/chats";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const Dashboard = () => {
  return (
    <div className="relative">
      <Sidebar />
      <div
        className="absolute left-44 overflow-x-hidden"
        style={{
          width: "calc(100% - 11rem)",
        }}
      >
        <Navbar />
        <Outlet />
      </div>
      <div className="w-36 fixed bottom-0 right-0">
        <Chats />
      </div>
    </div>
  );
};

export default Dashboard;
