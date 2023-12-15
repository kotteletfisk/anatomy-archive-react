import { useState } from "react";

function SearchBar({ active, setActive }) {
  const reset = {
    name: "card",
    muscle: "card",
    equipment: "card",
  };

  const [styles, setStyles] = useState(reset);

  function manageStyle(name) {
    setStyles((prevStyles) => ({ ...reset, [name]: "card-active" }));
  }

  return (
    <div className="container">
      <div className="card-container">
        <div
          className={styles.name}
          onClick={() => {
            setActive("name");
            manageStyle("name");
          }}
        >
          <h3>Search by name</h3>
        </div>
        <div
          className={styles.muscle}
          onClick={() => {
            setActive("muscle");
            manageStyle("muscle");
          }}
        >
          <h3>Search by muscle</h3>
        </div>
        <div
          className={styles.equipment}
          onClick={() => {
            setActive("equipment");
            manageStyle("equipment");
          }}
        >
          <h3>Search by equipment</h3>
        </div>
      </div>
      <input id="search-bar" type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
