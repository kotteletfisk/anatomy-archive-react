import React from "react";

function ExerciseEditForm({ details, handleChange, handleSubmit }) {
  console.log("ExerciseEditForm", details);

  return (
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
          onChange={(e) => handleChange(e, "name")}
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
          onChange={(e) => handleChange(e, "description")}
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
          onChange={(e) => handleChange(e, "mediaPath")}
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
          onChange={(e) => handleChange(e, "intensity")}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ExerciseEditForm;
