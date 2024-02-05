import { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import MuscleForm from "./MuscleForm";
import EquipmentForm from "./EquipmentForm";
import { crud } from "../util/facade";

function CreateEntities() {
  const [form, setForm] = useState(null);
  const [message, setMessage] = useState("no message");

  function handleSubmission(option, data) {
    crud.mutateSomething(option, data) && setMessage("Succesfully created") || setMessage("Creation failed");
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create Entities</h1>
     
      <div className="card-container">
        <div
          className="card"
          onClick={() => setForm(<ExerciseForm submit={handleSubmission} />)}
        >
          <p>Exercise</p>
        </div>
        <div
          className="card"
          onClick={() => setForm(<MuscleForm submit={handleSubmission} />)}
        >
          <p>Muscle</p>
        </div>
        <div
          className="card"
          onClick={() => setForm(<EquipmentForm submit={handleSubmission} />)}
        >
          <p>Equipment</p>
        </div>
      </div>

      <p>{message}</p>
      {form && <div className="container-form card">{form}</div>}
    </>
  );
}

export default CreateEntities;
