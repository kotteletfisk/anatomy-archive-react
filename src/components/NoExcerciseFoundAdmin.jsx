import React from "react";
import Search from "./Search";

function noExcerciseFoundAdmin({
  setFoundExcercise,
  setExcercise,
  blankExcercise,
}) {
  return (
    <div>
      <p>No excercise found yet</p>
      <Search />
      <button
        onClick={() => {
          setFoundExcercise(true);
          setExcercise({
            id: 1,
            name: "Armbøjning",
            description: "bøj dine arme",
            mediaPath: "youtube.com",
            intensity: 3,
          });
        }}
      >
        Edit armbøjning
      </button>
      <button
        onClick={() => {
          setFoundExcercise(true);
          setExcercise({
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
          setFoundExcercise(true);
          setExcercise(blankExcercise);
        }}
      >
        Create Excercise
      </button>
    </div>
  );
}

export default noExcerciseFoundAdmin;
