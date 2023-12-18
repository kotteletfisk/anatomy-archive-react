import React, { useState, useEffect } from "react";
import { facade } from "../util/facade";


function FoundExerciseAdmin({ setFoundexercise, blankExercise, exerciseToEdit }) {
  const [exercise, setExercise] = useState({ blankExercise });

  useEffect(() => {
    // Check if exerciseToEdit is not empty before setting the state
    if (exerciseToEdit && Object.keys(exerciseToEdit).length > 0) {
      setExercise(exerciseToEdit);
    } else {
      // Reset the state to blankexercise if exerciseToEdit is empty
      console.log("resetting exercise");
      setExercise(blankExercise);
    }
  }, [exerciseToEdit, blankExercise]);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.id;
    setExercise({ ...exercise, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", exercise);
    facade.mutateExercise(exercise, (data) => {
      console.log("exercise updated", data);
    });
    setFoundexercise(false);
    setExercise(blankExercise);
  }

  return (
    <div>
      <form className="exerciseForm" onSubmit={handleSubmit}>
        <div className="formcontent">
          <label className="formlabel" htmlFor="id">
            Id
          </label>
          <input
            className="forminput"
            id="id"
            type="number"
            readOnly
            placeholder={exercise.id}
            value={exercise.id}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="name">
            Name
          </label>
          <input
            className="forminput"
            id="name"
            type="text"
            placeholder="name"
            value={exercise.name}
            onChange={handleChange}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="description">
            Description
          </label>
          <input
            className="forminput"
            id="description"
            type="text"
            placeholder="description"
            value={exercise.description}
            onChange={handleChange}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="mediaPath">
            MediaPath
          </label>
          <input
            className="forminput"
            id="mediaPath"
            type="text"
            placeholder="mediaPath"
            value={exercise.mediaPath}
            onChange={handleChange}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="intensity">
            Intensity
          </label>
          <input
            className="forminput"
            id="intensity"
            type="number"
            min={1}
            max={10}
            placeholder="intensity"
            value={exercise.intensity}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setFoundexercise(false);
            setExercise(blankexercise);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FoundExerciseAdmin;










  