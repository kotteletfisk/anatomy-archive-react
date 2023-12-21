import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { crud } from "../util/facade";
import ExerciseEditForm from "../components/ExerciseEditForm";

function EditPage() {
  const { id } = useParams();

  const [details, setDetails] = useState(null);

  const {entity} = useParams();

  const [form, setForm] = useState(null);

  useEffect(() => {
    console.log("id", id);
    whatForm();
    if (id > 0) {
      crud.getSomethingById(entity,id, (d) => setDetails(d)).then(() => console.log("details", details));
    }
    // console.log("details", details);
  }, [id]);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.id;
    setDetails({ ...details, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", details);
    crud.mutateSomething(entity, details, (data) => {
      console.log("exercise updated", data);
    });
  }

  function whatForm() {
    if (entity === "exercise") {
      return (
        setForm(<ExerciseEditForm
          details={details}
          handleChange={() => handleChange}
          handleSubmit={handleSubmit}
        />)
      );
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit {entity}</h1>
      {form && <div>{form}</div>}
    </>
  );
}

export default EditPage;
