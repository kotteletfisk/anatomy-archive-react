import { useEffect, useRef, useState } from "react";
import { crud } from "../util/facade";

function MuscleForm({ submit }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const mediaPathRef = useRef();
  const muscleGroupRef = useRef();

  const [muscleGroupOptions, setMuscleGroupOptions] = useState([]);

  useEffect(() => {
    crud.getAllMusclegroups(setMuscleGroupOptions);
  }, []);

  return (
    <>
      <h2>MuscleForm</h2>
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
      <label htmlFor="select-type">Muscle Group</label>
      <select id="select-type" ref={muscleGroupRef}>
        {muscleGroupOptions.map((muscle) => {
          return (
            <option key={muscle.id} value={muscle.id}>
              {muscle.name}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          const muscle = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            mediaPath: mediaPathRef.current.value,
            muscleGroup: muscleGroupRef.current.value,
          };
          submit("muscle", muscle);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default MuscleForm;
