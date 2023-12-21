import React from "react";

function MuscleEditForm({ details, handleChange, handleSubmit }) {
  console.log("MuscleEditForm", details);

  
  return (
    <form className="muscleform" onSubmit={handleSubmit}>
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
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default MuscleEditForm;
