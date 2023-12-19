import { useState } from "react";
import DetailModal from "../components/DetailModal";
import Login from "../components/Login";

function Test() {
  const [showModal, setShowModal] = useState(false);

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

      <button onClick={() => handleClicked()}>Open Modal</button>

      {showModal ? (
        <div>
          <DetailModal closeModal={handleClicked} data={obj} />
          
        </div>
      ) : null}
      <Login />
    </>
  );
}

export default Test;