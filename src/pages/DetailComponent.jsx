import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { crud } from "../util/facade";

function DetailComponent() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (id > 0) {
      crud.getExerciseById(id, (d) => setDetails(d));
    }
  }, []);

  return (
    <>
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
              <img src="/src/assets/default-mediapath.png" alt="default png" />
            )}
          </div>

          <div className="details-container-body">
            <p>Intensity: {details.intensity}</p>
            <p>Type: {details.type}</p>
            <p>Description: {details.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailComponent;
