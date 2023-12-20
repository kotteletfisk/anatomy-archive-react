import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { crud } from "../util/facade";

function EditPage() {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  const {entity} = useParams();

  useEffect(() => {
    if (id > 0) {
      crud.getSomethingById(entity,id, (d) => setDetails(d));
    }
  }, []);

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

  return (
    <div>
      <h1>Edit Page</h1>
      <form className="exerciseForm" onSubmit={handleSubmit}>
        <div className="formcontent">
          <label className="formlabel" htmlFor="id">
            Id
          </label>
          <input
            className="forminput"
            id="id"
            type="number"
            readOnly
            placeholder={details.id}
            value={details.id}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="name">
            Name
          </label>
          <input
            className="forminput"
            id="name"
            type="text"
            placeholder="name"
            value={details.name}
            onChange={handleChange}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="description">
            Description
          </label>
          <input
            className="forminput"
            id="description"
            type="text"
            placeholder="description"
            value={details.description}
            onChange={handleChange}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="mediaPath">
            MediaPath
          </label>
          <input
            className="forminput"
            id="mediaPath"
            type="text"
            placeholder="mediaPath"
            value={details.mediaPath}
            onChange={handleChange}
          />
        </div>
        <div className="formcontent">
          <label className="formlabel" htmlFor="intensity">
            Intensity
          </label>
          <input
            className="forminput"
            id="intensity"
            type="number"
            min={1}
            max={10}
            placeholder="intensity"
            value={details.intensity}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EditPage;
