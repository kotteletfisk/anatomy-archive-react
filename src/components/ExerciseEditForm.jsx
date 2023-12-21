function ExerciseEditForm(details, handleChange, handleSubmit) {
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
     );
}

export default ExerciseEditForm;