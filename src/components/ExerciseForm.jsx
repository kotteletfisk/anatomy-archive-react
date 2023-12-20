import { useEffect, useRef, useState } from "react";
import { crud } from "../util/facade";

function ExerciseForm({ submit }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const mediaPathRef = useRef();
  const intensityRef = useRef();
  const typeRef = useRef();

  const [selectMuscles, setSelectMuscles] = useState([]);
  const [selectEquipment, setSelectEquipment] = useState([]);
  const [muscleOptions, setMuscleOptions] = useState([]);
  const [equipmentOptions, setEquipmentOptions] = useState([]);
  const [typsOptions, setTypsOptions] = useState([]);

  useEffect(() => {
    crud.getAllMuscles(setMuscleOptions);
    crud.getAllEquipment(setEquipmentOptions);
    crud.getAllExerciseTypes(setTypsOptions);
  }, []);

  return (
    <>
      <h2>ExerciseForm</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter name" ref={nameRef} />

      <label htmlFor="Description">Description</label>
      <input
        type="text"
        id="Description"
        placeholder="Enter description"
        ref={descriptionRef}
      />

      <label htmlFor="mediaPath">MediaPath</label>
      <input
        type="text"
        id="mediaPath"
        placeholder="Enter mediaPath"
        ref={mediaPathRef}
      />

      <label htmlFor="intensity">Intensity</label>
      <input
        type="number"
        id="intensity"
        placeholder="Enter intensity"
        ref={intensityRef}
      />

      <label htmlFor="type">Type</label>
      <select id="type" ref={typeRef}>
        {typsOptions.map((type) => {
          return (
            <option key={type.id} value={type.id}>
              {type.typeName}
            </option>
          );
        })}
      </select>

      {/* Muscles */}
      <div className="card">
        <label htmlFor="muscles">Muscles</label> <br />
        <select id="muscles" multiple>
          {muscleOptions.map((muscle) => {
            return (
              <option
                key={muscle.id}
                onClick={() => {
                  setSelectMuscles([...selectMuscles, muscle]);
                }}
              >
                {muscle.name}
              </option>
            );
          })}
        </select>
        <p>Options: </p>
        {selectMuscles.map((muscle, index) => {
          return (
            <div key={index}>
              {muscle.name}
              <button
                onClick={() => {
                  setSelectMuscles(
                    selectMuscles.filter((muscleName) => muscleName !== muscle)
                  );
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>

      {/* Equipment */}
      <div className="card">
        <label htmlFor="equipment">Equipment</label>
        <select id="equipment" multiple>
          {equipmentOptions.map((equipment) => {
            return (
              <option
                key={equipment.id}
                onClick={() => {
                  setSelectEquipment([...selectEquipment, equipment]);
                }}
              >
                {equipment.name}
              </option>
            );
          })}
        </select>
        <p>Options: </p>
        {selectEquipment.map((equipment, index) => {
          return (
            <div key={index}>
              {equipment.name}
              <button
                onClick={() => {
                  setSelectEquipment(
                    selectEquipment.filter(
                      (equipmentName) => equipmentName !== equipment
                    )
                  );
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>

      {/* submit */}
      <button
        onClick={() => {
          const exercise = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            mediaPath: mediaPathRef.current.value,
            intensity: intensityRef.current.value,
            type: typeRef.current.value,
            muscles: { selectMuscles },
            equipment: { selectEquipment },
          };
          submit(exercise);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default ExerciseForm;
