import React from "react";
import { useState } from "react";
import { facade } from "../util/facade";
import Search from "./Search";

function noExerciseFoundAdmin({ setFoundexercise, blankexercise }) {
  const [exercise, setexercise] = useState(blankexercise);
  return (
    <div>
      <p>No exercise found yet</p>
      <Search />
      <button
        onClick={() => {
          setFoundexercise(true);
          facade.getExerciseById(1, (exc) => {
            console.log(exc);
            setexercise(exc);
          });
        }}
      >
        Edit armbøjning
      </button>
      <button
        onClick={() => {
          setFoundexercise(true);
          setexercise({
            id: 2,
            name: "Squat",
            description: "bøj dine ben",
            mediaPath: "youtube.com",
            intensity: 5,
          });
        }}
      >
        Edit squat
      </button>
      <button
        onClick={() => {
          setFoundexercise(true);
          setexercise(blankexercise);
        }}
      >
        Create exercise
      </button>
    </div>
  );
}

export default noExerciseFoundAdmin;
