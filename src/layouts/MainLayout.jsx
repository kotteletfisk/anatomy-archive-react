import { NavLink, Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { useContext, useEffect, useRef, useState } from "react";
import LoginModal from "../components/LoginModal";
import AuthContext from "../components/AuthContext";

function MainLayout() {
  const location = useLocation();
  const navbar = useRef(null);
  const [navOffsetTop, setNavOffsetTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  function showContent() {
    if (location.pathname === "/") {
      return <Home />;
    } else {
      return <Outlet />;
    }
  }

  function toggleModal() {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  function handleScroll() {
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
      <h1 className="title" style={{ textAlign: "center" }}>Anatomy Archive</h1>

      <div id="nav-bar" ref={navbar}>
        <div id="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          {isLoggedIn ? <NavLink to="/admin-page">Admin</NavLink> : null}

          <NavLink onClick={toggleModal}>
            <img src="/src/assets/loginLock.png" width={20} height={20} />
          </NavLink>
        </div>
      </div>

      <div id="content">{showContent()}</div>
      {showModal ? (
        <div>
          <LoginModal toggleModal={toggleModal} />
        </div>
      ) : null}
    </>
  );
}

export default MainLayout;