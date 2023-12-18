import { useState } from "react";

function SearchBar({ active, setActive, setSearchInput }) {
  const reset = {
    name: "card",
    muscle: "card",
    equipment: "card",
  };

  const [styles, setStyles] = useState({...reset, ["name"]: "card-active"});

  function manageStyle(name) {
    setStyles((prevStyles) => ({ ...reset, [name]: "card-active" }));
  }

  function updateInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="container">
      <div className="card-container">
        <div
          className={styles.name}
          onClick={() => {
            setActive("byName");
            manageStyle("name");
          }}
        >
          <h3>Search by name</h3>
        </div>
        <div
          className={styles.muscle}
          onClick={() => {
            setActive("byMuscle");
            manageStyle("muscle");
          }}
        >
          <h3>Search by muscle</h3>
        </div>
        <div
          className={styles.equipment}
          onClick={() => {
            setActive("byEquipment");
            manageStyle("equipment");
          }}
        >
          <h3>Search by equipment</h3>
        </div>
      </div>
      <input id="search-bar" type="text" placeholder="Search" onChange={updateInput} />
    </div>
  );
}

export default SearchBar;
