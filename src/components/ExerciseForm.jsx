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
  const [typeOptions, setTypeOptions] = useState([]);

  useEffect(() => {
    crud.getAllMuscles(setMuscleOptions);
    crud.getAllEquipment(setEquipmentOptions);
    crud.getAllExerciseTypes(setTypeOptions);
  }, []);

  function validateForm(data) {}

  return (
    <>
      <h2>ExerciseForm</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter name" ref={nameRef} />

      <label htmlFor="Description">Description</label>
      <input
        type="text"
        id="Description"
        minLength={1}
        maxLength={255}
        placeholder="Enter description"
        ref={descriptionRef}
      />
      <label htmlFor="mediaPath">MediaPath</label>
      <input
        type="text"
        id="mediaPath"
        minLength={1}
        maxLength={255}
        placeholder="Enter mediaPath"
        ref={mediaPathRef}
      />
      <label htmlFor="intensity">Intensity</label>
      <input
        type="number"
        id="intensity"
        placeholder="Enter intensity"
        min={0}
        max={10}
        ref={intensityRef}
      />
      <label htmlFor="select-type">Type</label>
      <select id="select-type" ref={typeRef}>
        {typeOptions.map((type) => {
          return (
            <option key={type.id} value={type.id}>
              {type.typeName}
            </option>
          );
        })}
      </select>

      <div id="exercise-form-cards-grid">
        {/* Muscles */}
        <div className="card">
          <label htmlFor="muscles">Muscles</label>
          <select id="muscles" multiple>
            {muscleOptions.map((muscle) => {
              return (
                <option
                  key={muscle.id}
                  onClick={() => {
                    if (!selectMuscles.includes(muscle)) {
                      setSelectMuscles([...selectMuscles, muscle]);
                    }
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
                      selectMuscles.filter(
                        (muscleName) => muscleName !== muscle
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

        {/* Equipment */}
        <div className="card">
          <label htmlFor="equipment">Equipment</label>
          <select id="equipment" multiple>
            {equipmentOptions.map((equipment) => {
              return (
                <option
                  key={equipment.id}
                  onClick={() => {
                    if (!selectEquipment.includes(equipment)) {
                      setSelectEquipment([...selectEquipment, equipment]);
                    }
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
          submit(exercise, "exercise");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default ExerciseForm;
