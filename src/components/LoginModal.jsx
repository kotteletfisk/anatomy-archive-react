import { useContext, useState } from "react";
import { auth } from "../util/facade";
import AuthContext from "./AuthContext";

function LoginModal({ toggleModal }) {
  const init = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(init);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
    console.log(credentials);
  }

  function performLogin(e) {
    e.preventDefault();
    console.log("perform login");
    auth.login(
      credentials.username,
      credentials.password,
      setIsLoggedIn,
    ).then(() => {
        console.log("logged in");
        toggleModal();
    })
    .catch((err) => setError(err.message));
  }

  function performLogout(e) {
    e.preventDefault();
    console.log("perform logout");
    auth.logout(setIsLoggedIn);
  }

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <div className="modal-close">
          <button onClick={() => toggleModal()}>X</button>
        </div>
        {isLoggedIn ? (
          <div className="container">
            <h2>Logout?</h2>
            <button onClick={performLogout}>Logout</button>
          </div>
        ) : (
          <div className="container">
            <h2>Login</h2>
            <form>
              <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleInput}
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                onChange={handleInput}
              />
              <button onClick={performLogin}>Login</button>
            </form>
            <p className="error container">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
