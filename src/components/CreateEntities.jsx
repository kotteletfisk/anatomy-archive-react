import { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import MuscleForm from "./MuscleForm";
import EquipmentForm from "./EquipmentForm";

function CreateEntities() {
  const [form, setForm] = useState(null);

  function handleSubmission(data) {
    console.log("Submitted");
    console.table(data);
  }

  return (
    <div className="container">
      <h1>CreateEntities</h1>

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

      <div className="container-form">{form}</div>
    </div>
  );
}

export default CreateEntities;
