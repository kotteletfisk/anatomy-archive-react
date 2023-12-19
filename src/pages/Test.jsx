import { useState } from "react";
import DetailModal from "../components/DetailModal";
import { useContext } from "react";
import AuthContext from "../components/AuthContext";

function Test() {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  function handleClicked() {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  const obj = {
    id: 1,
    name: "Armbøjning",
    description: "bøj dine arme",
    mediaPath: "youtube.com",
    intensity: 3,
    type: "styrke",
  };

  return (
    <>
      <h1>test</h1>
      <h2>{isLoggedIn ? "Logged in" : "Not logged in"}</h2>

      <button onClick={() => handleClicked()}>Open Modal</button>

      {showModal ? (
        <div>
          <DetailModal closeModal={handleClicked} data={obj} />
          
        </div>
      ) : null}
    </>
  );
}

export default Test;