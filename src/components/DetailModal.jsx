import { Link } from "react-router-dom";

function DetailModal({ closeModal, data }) {
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
          <Link to="/search" onClick={() => closeModal()}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
