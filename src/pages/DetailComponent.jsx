import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { crud } from "../util/facade";
import defaultImg from "../assets/default-mediapath.png";

function DetailComponent() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (id > 0) {
      crud.getExerciseById(id, setDetails);
    }
  }, [id]);

  return (
    <div>
      {!details.name ? (
        <div className="details-container">
          <p>No results for id = {id}</p>
        </div>
      ) : (
        <div className="details-container">
          <div className="details-container-head">
            <h1>{details.name}</h1>
            {details.mediaPath ? (
              <img src={details.mediaPath} />
            ) : (
              <img src={defaultImg} alt="default png" />
            )}
          </div>

          <div className="details-container-body">
            <p>Intensity: {details.intensity}</p>
            <p>Type: {details.type}</p>
            <p>Description: {details.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailComponent;
