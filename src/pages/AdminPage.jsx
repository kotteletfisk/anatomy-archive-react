import FoundExcerciseAdmin from "../components/FoundExcerciseAdmin";
import NoExcerciseFoundAdmin from "../components/noExcerciseFoundAdmin";
import { useState, useEffect } from "react";

function AdminPage() {
  const [foundExcercise, setFoundExcercise] = useState(false);

  const blankExcercise = {
    id: null,
    name: "",
    description: null,
    mediaPath: "",
    intensity: null,
  };
  const [excerciseToEdit, setExcerciseToEdit] = useState(blankExcercise);

  return (
    <div>
      <h1>Add/Edit Excercise</h1>
      {foundExcercise ? (
      <FoundExcerciseAdmin
          setFoundExcercise={setFoundExcercise}
          blankExcercise={blankExcercise}
          excerciseToEdit={excerciseToEdit}
          mutateExcercise={(excercise) => {
            // Implement the mutateExcercise function as needed
            console.log("Mutate Exercise:", excercise);
          }}
        />
      ) : (
        <NoExcerciseFoundAdmin
          setFoundExcercise={setFoundExcercise}
          setExcercise={(excercise) => setExcerciseToEdit(excercise)}
          blankExcercise={blankExcercise}
        />
      )}
    </div>
  );
}

export default AdminPage;
