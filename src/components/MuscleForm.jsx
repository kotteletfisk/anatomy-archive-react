import { useRef } from "react";

function MuscleForm({ submit }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const mediaPathRef = useRef();
  const muscleGroupRef = useRef();

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

      <label htmlFor="musclegroup">Muscle Group</label>
      <select id="musclegroup" ref={muscleGroupRef}>
        <option>Chest</option>
        <option>Back</option>
        <option>Shoulders</option>
        <option>Arms</option>
      </select>

      <button
        onClick={() => {
          const muscle = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            mediaPath: mediaPathRef.current.value,
            muscleGroup: muscleGroupRef.current.value,
          };
          submit(muscle);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default MuscleForm;
