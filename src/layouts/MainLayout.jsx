import { NavLink, Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { useEffect, useRef, useState } from "react";

function MainLayout() {
  const location = useLocation();
  const navbar = useRef(null);
  const [navOffsetTop, setNavOffsetTop] = useState(0);

  function showContent() {
    if (location.pathname === "/") {
      return <Home />;
    } else {
      return <Outlet />;
    }
  }

  function handleScroll() {
    console.log(navOffsetTop);

    if (window.scrollY >= navOffsetTop) {
      navbar.current.classList.add("sticky");
    } else {
      navbar.current.classList.remove("sticky");
    }
  }

  window.onscroll = () => handleScroll();

  useEffect(() => {
    if (navOffsetTop === 0) {
      setNavOffsetTop(navbar.current.offsetTop);
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Anatomy Archive</h1>

      <div id="nav-bar" ref={navbar}>
        <div id="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/test">Test</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/admin-page">
            <img src="src\assets\loginLock.png" width={20} height={20} />
          </NavLink>
        </div>
      </div>

      <div id="content">{showContent()}</div>
    </>
  );
}

export default MainLayout;
