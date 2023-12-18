import FoundexerciseAdmin from "../components/FoundExerciseAdmin";
import NoexerciseFoundAdmin from "../components/NoExerciseFoundAdmin";
import { useState, useEffect } from "react";

function AdminPage() {
  const [foundexercise, setFoundexercise] = useState(false);

  const blankexercise = {
    id: null,
    name: "",
    description: null,
    mediaPath: "",
    intensity: null,
  };
  const [exerciseToEdit, setexerciseToEdit] = useState(blankexercise);

  return (
    <div>
      <h1>Add/Edit exercise</h1>
      {foundexercise ? (
      <FoundexerciseAdmin
          setFoundexercise={setFoundexercise}
          blankexercise={blankexercise}
          exerciseToEdit={exerciseToEdit}
        />
      ) : (
        <NoexerciseFoundAdmin
          setFoundexercise={setFoundexercise}
          setexercise={(exercise) => setexerciseToEdit(exercise)}
          blankexercise={blankexercise}
        />
      )}
    </div>
  );
}

export default AdminPage;