import { useState } from "react";
import DetailModal from "./DetailModal";

function DisplayResultsSearch({ data, entity }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  function handleClicked() {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  return (
    <div>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button
            onClick={() => {
              setModalData(item);
              handleClicked();
            }}
          >
            view
          </button>
        </div>
      ))}

      {showModal ? (
        <div>
          <DetailModal closeModal={handleClicked} data={modalData} entity={entity} />
        </div>
      ) : null}
    </div>
  );
}

export default DisplayResultsSearch;
