import { NavLink, Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";

function MainLayout() {
  const location = useLocation();

  function showContent() {
    if (location.pathname === "/") {
      return <Home />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Main Layout</h1>

      <div id="nav-bar">
        <div id="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/test">Test</NavLink>
        </div>
      </div>

      <div id="content">{showContent()}</div>
    </>
  );
}

export default MainLayout;
