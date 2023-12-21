import { Link } from "react-router-dom";
import FoundExerciseAdmin from "../components/FoundExerciseAdmin";
import NoExerciseFoundAdmin from "../components/NoExerciseFoundAdmin";
import { useState, useEffect } from "react";
import CreateEntities from "../components/CreateEntities";

function AdminPage() {
  const blankExercise = {
    id: null,
    name: "",
    description: null,
    mediaPath: "",
    intensity: null,
  };

  const [foundExercise, setFoundexercise] = useState(false);
  const [exerciseToEdit, setExerciseToEdit] = useState(blankExercise);

  useEffect(() => {
    // Log the updated value when exerciseToEdit changes
    console.log(`Updated exerciseToEdit: ${exerciseToEdit.name}`);
  }, [exerciseToEdit]);

  return (
    <div>
      <h1>Add/Edit exercise</h1>
      {foundExercise ? (
        <FoundExerciseAdmin
          setFoundexercise={setFoundexercise}
          blankExercise={blankExercise}
          exerciseToEdit={exerciseToEdit}
          setExerciseToEdit={setExerciseToEdit}
        />
      ) : (
        <NoExerciseFoundAdmin
          setFoundexercise={setFoundexercise}
          setExerciseToEdit={setExerciseToEdit}
          blankExercise={blankExercise}
          exerciseToEdit={exerciseToEdit}
        />
      )}

      <CreateEntities />
    </div>
  );
}

export default AdminPage;
