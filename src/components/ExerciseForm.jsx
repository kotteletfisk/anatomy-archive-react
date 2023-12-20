import { useRef, useState } from "react";

function ExerciseForm({ submit }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const mediaPathRef = useRef();
  const intensityRef = useRef();
  const typeRef = useRef();
  const [selectMuscles, setSelectMuscles] = useState([]);
  const [selectEquipment, setSelectEquipment] = useState([]);

  const muscleOptions = [
    "Biceps",
    "Triceps",
    "Chest",
    "Back",
    "Shoulders",
    "Legs",
    "Abs",
  ];

  const equipmentOptions = [
    "Barbell",
    "Dumbbell",
    "Kettlebell",
    "Medicine Ball",
    "Resistance Band",
    "Bench",
    "Pull-Up Bar",
  ];

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
        <option>Cardio</option>
        <option>Strength</option>
        <option>Stretching</option>
      </select>

      {/* Muscles */}
      <div className="card">
        <label htmlFor="muscles">Muscles</label> <br />
        <select id="muscles" multiple>
          {muscleOptions.map((muscle, index) => {
            return (
              <option
                key={index}
                onClick={() => {
                  setSelectMuscles([...selectMuscles, muscle]);
                }}
              >
                {muscle}
              </option>
            );
          })}
        </select>
        <p>Options: </p>
        {selectMuscles.map((muscle, index) => {
          return (
            <div key={index}>
              {muscle}
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
          {equipmentOptions.map((equipment, index) => {
            return (
              <option
                key={index}
                onClick={() => {
                  setSelectEquipment([...selectEquipment, equipment]);
                }}
              >
                {equipment}
              </option>
            );
          })}
        </select>
        <p>Options: </p>
        {selectEquipment.map((equipment, index) => {
          return (
            <div key={index}>
              {equipment}
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
