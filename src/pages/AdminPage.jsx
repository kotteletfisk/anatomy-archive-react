import FoundexerciseAdmin from "../components/FoundExerciseAdmin";
import NoexerciseFoundAdmin from "../components/NoExerciseFoundAdmin";
import { useState, useEffect } from "react";

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
      <FoundexerciseAdmin
          setFoundexercise={setFoundexercise}
          blankExercise={blankExercise}
          exerciseToEdit={exerciseToEdit}
          setExerciseToEdit={setExerciseToEdit}

        />
      ) : (
        <NoexerciseFoundAdmin
          setFoundexercise={setFoundexercise}
          setExerciseToEdit={setExerciseToEdit}
          blankExercise={blankExercise}
          exerciseToEdit={exerciseToEdit}
        />
      )}
    </div>
  );
}

export default AdminPage;