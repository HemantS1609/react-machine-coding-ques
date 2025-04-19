import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation();

  const hideHeaderRoutes = ["/"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      {showHeader && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
