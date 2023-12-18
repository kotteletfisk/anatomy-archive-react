import FoundExcerciseAdmin from "../components/FoundExcerciseAdmin";
import NoExcerciseFoundAdmin from "../components/NoExcerciseFoundAdmin";
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