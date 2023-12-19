import { Link } from "react-router-dom";

function DetailModal({ closeModal, data }) {
  const url = `/exercises/` + data.id;

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <div className="modal-close">
          <button onClick={() => closeModal()}>X</button>
        </div>

        <div className="modal-head">
          <h1>{data.name}</h1>
        </div>

        <div className="modal-body">
          <p>Intensity: {data.intensity}</p>
          <p>Type: {data.type}</p>
        </div>

        <div className="modal-footer">
          <Link to={url} onClick={closeModal}>
            See More ?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
