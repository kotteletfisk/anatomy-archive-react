import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h1>Main Layout</h1>

      <div id="nav-bar">
        <div id="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/test">Test</NavLink>
        </div>
      </div>

      <div id="content">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
