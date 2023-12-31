import React from "react";
import { useState, useEffect } from "react";
import { crud } from "../util/facade";
import Search from "./Search";

function noExerciseFoundAdmin({ setFoundexercise, blankExercise, exerciseToEdit, setExerciseToEdit }) {


  return (
    <div>
      <p>No exercise found yet</p>
      <Search />
      <button
        onClick={() => {
          setFoundexercise(true);
          crud.getExerciseById(1, (exc) => {
            setExerciseToEdit(exc);
          });
        }}
      >
        Edit armbøjning
      </button>
      <button
        onClick={() => {
          setFoundexercise(true);
          setExerciseToEdit({
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
          setExerciseToEdit(blankExercise);
        }}
      >
        Create exercise
      </button>
    </div>
  );
}

export default noExerciseFoundAdmin;
