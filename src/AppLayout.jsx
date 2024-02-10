import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
