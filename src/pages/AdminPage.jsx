import { useState, useEffect } from "react";

function AdminPage(excerciseToEdit, mutateExcercise ) {
    const [foundExcercise, setFoundExcercise] = useState(true);
  const blankExcercise = { id: null, name: "", amount: null, rarity: "", price: null };

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
          mutateExcercise(excercise)
      }
  
    return (
      <div>
        <h1>Add/Edit Excercise</h1>
        {foundExcercise ? (
            <div>
              <form className="excerciseForm" onSubmit={handleSubmit}>
          <div className="formcontent">
          <label className="formlabel" htmlFor="id">Id</label>
          <input className="forminput"
            id="id"
            type="number"
            readOnly
            placeholder="id"
            value={excercise.id}
          /></div>
          <div className="formcontent">
          <label className="formlabel" htmlFor="name">Name</label>
          <input className="forminput"
            id="name"
            type="text"
            placeholder="name"
            value={excercise.name}
            onChange={handleChange}
          /></div>
          <div className="formcontent">
          <label className="formlabel" htmlFor="description">Description</label>
          <input className="forminput"
            id="description"
            type="text"
            placeholder="description"
            value={excercise.description}
            onChange={handleChange}
          /></div>
          <div className="formcontent">
          <label className="formlabel" htmlFor="mediaPath">MediaPath</label>
          <input className="forminput"
            id="mediaPath"
            type="text"
            placeholder="mediaPath"
            value={excercise.mediaPath}
            onChange={handleChange}
          /></div>
          <div className="formcontent">
          <label className="formlabel" htmlFor="intensity">Intensity</label>
          <input className="forminput"
            id="intensity"
            type="number"
            min={1}
            max={10}
            placeholder="intensity"
            value={excercise.intensity}
            onChange={handleChange}
          /></div>
          <button className="btn btn-primary">Submit</button>
          <button
            className="btn btn-danger"
            onClick={() => {setFoundExcercise(false); setExcercise(blankExcercise)}}
          >Cancel
          </button>
        </form>
            </div>
          ) : (
            <div>
            <p>No excercise found yet</p>
            <p>Insert search function here</p>
            <button onClick={() =>{setFoundExcercise(true); setExcercise.id(1)}}>true</button>
            </div>
          )}
        
      </div>
    );
  }
  
  export default AdminPage;