import React, { useState, useEffect } from "react";
function FoundExcerciseAdmin({setFoundExcercise, blankExcercise, excerciseToEdit}) {
    
    const [excercise, setExcercise] = useState({ ...excerciseToEdit });
  
    useEffect(() => {
      setExcercise(excerciseToEdit);
    }, [excerciseToEdit]);
  
    function handleChange(event) {
      const value = event.target.value;
      const name = event.target.id;
      setExcercise({ ...excercise, [name]: value });
    }
  
      function handleSubmit(event) {
          event.preventDefault();
          console.log("submit", excercise)
      }
  return (
    <div>
      <form className="excerciseForm" onSubmit={handleSubmit}>
        <div className="formcontent">
          <label className="formlabel" htmlFor="id">
            Id
          </label>
          <input
            className="forminput"
            id="id"
            type="number"
            readOnly
            placeholder={excercise.id}
            value={excercise.id}
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
            value={excercise.name}
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
            value={excercise.description}
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
            value={excercise.mediaPath}
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
            value={excercise.intensity}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setFoundExcercise(false);
            setExcercise(blankExcercise);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FoundExcerciseAdmin;
