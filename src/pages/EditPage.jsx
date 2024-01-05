import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { crud } from "../util/facade";
import ExerciseEditForm from "../components/ExerciseEditForm";
import MuscleEditForm from "../components/MuscleEditForm";
import EquipmentEditForm from "../components/EquipmentEditForm";

function EditPage() {
  const { id, entity } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id > 0) {
      crud.getSomethingById(entity, id, (d) => setDetails(d));
    }
  }, [id, entity]); // Include id and entity as dependencies

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", details);
    crud.mutateSomething(entity, details, (data) => {
      console.log("exercise updated", data);
    });
  }

  const handleChange = (e, field) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit {entity}</h1>
      {details !== null && entity === "exercise" && (
        <ExerciseEditForm
          details={details}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {details !== null && entity === "muscle" && (
        <MuscleEditForm
          details={details}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {details !== null && entity === "equipment" && (
        <EquipmentEditForm
          details={details}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default EditPage;
