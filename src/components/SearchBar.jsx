import { useState } from "react";

function SearchBar({ active, setEntity, setActive, setSearchInput }) {
  const resetActive = {
    byExercise: "card",
    byMuscle: "card",
    byEquipment: "card",
  };
  const resetEntity = {
    exercise: "card",
    muscle: "card",
    equipment: "card",
  };

  const [activestyles, setActiveStyles] = useState({...resetActive, ["byExercise"]: "card-active"});
  const [entityStyles, setEntityStyles] = useState({...resetEntity, ["exercise"]: "card-active"});

  function manageActiveStyle(name) {
    setActiveStyles((prevStyles) => ({ ...resetActive, [name]: "card-active" }));
  }

  function manageEntityStyle(name) {
    setEntityStyles((prevStyles) => ({ ...resetEntity, [name]: "card-active" }));
  }

  function updateInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="container">
      <div className="card-container">
        <div
          className={entityStyles.exercise}
          onClick={() => {
            setEntity("exercise");
            manageEntityStyle("exercise");
          }}
        >
          <h3>Search exercises</h3>
        </div>
        <div
          className={entityStyles.muscle}
          onClick={() => {
            setEntity("muscle");
            manageEntityStyle("muscle");
          }}
        >
          <h3>Search muscle</h3>
        </div>
        <div
          className={entityStyles.equipment}
          onClick={() => {
            setEntity("equipment");
            manageEntityStyle("equipment");
          }}
        >
          <h3>Search equipment</h3>
        </div>
    
        <div
          className={activestyles.byExercise}
          onClick={() => {
            setActive("byexercise");
            manageActiveStyle("byExercise");
          }}
        >
          <h3>By exercise</h3>
        </div>
        <div
          className={activestyles.byMuscle}
          onClick={() => {
            setActive("bymuscle");
            manageActiveStyle("byMuscle");
          }}
        >
          <h3>By muscle</h3>
        </div>
        <div
          className={activestyles.byEquipment}
          onClick={() => {
            setActive("byequipment");
            manageActiveStyle("byEquipment");
          }}
        >
          <h3>By equipment</h3>
        </div>
      </div>
      <input id="search-bar" type="text" placeholder="Search" onChange={updateInput} />
    </div>
  );
}

export default SearchBar;