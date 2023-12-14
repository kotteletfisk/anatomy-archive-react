import { NavLink, Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();

  function showContent() {
    if (location.pathname === "/") {
      return (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            voluptatibus non! Minus, expedita! Aliquam illo, odio repellat
            temporibus, voluptates nobis sunt minus dolore a delectus assumenda
            minima, corrupti earum consequatur.
          </p>
        </>
      );
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      <h1>Main Layout</h1>

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
